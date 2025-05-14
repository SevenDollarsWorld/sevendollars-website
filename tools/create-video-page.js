const fs = require("fs");
const path = require("path");
const args = require("minimist")(process.argv.slice(2));

const { slug, title, cover, instagram, type } = args;
// 範例：node create-video-page.js --slug=seventosmoke --title="..." --cover=xxx.jpg --instagram="..." --type=music

if (!slug || !title || !cover || !instagram || !type) {
  console.error(
    "❌ 請輸入 --slug、--title、--cover、--instagram 和 --type=(music|dance|food|funny|other)"
  );
  process.exit(1);
}

const validTypes = ["music", "dance", "food", "funny", "other"];
if (!validTypes.includes(type)) {
  console.error("❌ --type 必須是 music, dance, food, funny 或 other");
  process.exit(1);
}

const typeMap = {
  music: "musicvideos",
  dance: "dancevideos",
  food: "foodvideos",
  funny: "funnyvideos",
  other: "othervideos",
};

const componentName = slug.replace(/(^\w|[-_]\w)/g, (s) =>
  s.replace(/[-_]/, "").toUpperCase()
);
const pagePath = `./pages/video-collection/${slug}`;
const outPath = path.join(
  __dirname,
  `../src/pages/video-collection/${slug}.jsx`
);
const appPath = path.join(__dirname, "../src/App.jsx");
const vcPath = path.join(__dirname, "../src/pages/VideoCollection.jsx");

const template = `
import React, { useEffect } from 'react'
import '../../style.css'
import Footer from '../../components/Footer'
import Logo from '../../components/Logo'
import { useContext } from "react";
import { ThemeContext } from "../../App"; // 注意路徑

function ${componentName}Video() {
const { theme } = useContext(ThemeContext);
  useEffect(() => {
        // 檢查 ig embed.js 是否已載入過，避免重複載
        if (!window.instgrm) {
          const script = document.createElement('script')
          script.setAttribute('src', '//www.instagram.com/embed.js')
          script.setAttribute('async', '')
          document.body.appendChild(script)
        } else {
          window.instgrm.Embeds.process()
        }
      }, [])

  return (
    <div className="video-detail-page" style={{ background: theme.gradient }}>
    <div className="header-banner">
        <img
          src={theme.headerBg}
          alt="Header Background"
          className="header-image"
        />
        
        <nav className="nav-bar">
          <a href="/">Home</a>
          <a href="/music-collection">Music Collection</a>
          <a href="/video-collection">Video Collection</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </nav>
      </div>

      <div className="video-detail-content">
        <h1>${title}</h1>
        <p>這是 的 IG Reel 影像頁面。</p>

        <blockquote className="instagram-media"
          data-instgrm-permalink="${instagram}"
          data-instgrm-version="14"
          style={{ margin: '0 auto', maxWidth: '540px' }}
        ></blockquote>
        <script async src="//www.instagram.com/embed.js"></script>
      </div>
      <Logo />
      <Footer />
    </div>
  )
} 

export default ${componentName}Video
`;

// 寫入子頁面
fs.writeFileSync(outPath, template);
console.log(`✅ 子頁建立成功: ${outPath}`);

// 插入 App.jsx 的 import + route
let appContent = fs.readFileSync(appPath, "utf8");
const importStatement = `import ${componentName}Video from '${pagePath}';`;

if (!appContent.includes(importStatement)) {
  const lines = appContent.split("\n");
  const lastImportIndex = [...lines]
    .reverse()
    .findIndex((line) => line.startsWith("import"));
  const insertIndex = lines.length - lastImportIndex;
  lines.splice(insertIndex, 0, importStatement);
  appContent = lines.join("\n");
}

const routeEntry = `<Route path="/video-collection/${slug}" element={<${componentName}Video />} />`;
if (!appContent.includes(routeEntry)) {
  appContent = appContent.replace(
    /<Routes>([\s\S]*?)<\/Routes>/,
    (match, inner) => {
      return `<Routes>${inner}\n  ${routeEntry}\n</Routes>`;
    }
  );
}
fs.writeFileSync(appPath, appContent, "utf8");
console.log(`✅ Route 插入 App.jsx 完成: ${routeEntry}`);

// 插入對應分類
const vcCategory = typeMap[type];
let vcContent = fs.readFileSync(vcPath, "utf8");
const cardEntry = `  {
    title: "${title}",
    cover: "/${cover}",
    path: "/video-collection/${slug}"
  },`;

if (!vcContent.includes(`path: "/video-collection/${slug}"`)) {
  const regex = new RegExp(`const ${vcCategory} = \\[([\\s\\S]*?)\\]`);
  vcContent = vcContent.replace(regex, (match, inner) => {
    return `const ${vcCategory} = [\n${cardEntry}\n${inner.trim()}\n]`;
  });
  fs.writeFileSync(vcPath, vcContent, "utf8");
  console.log(`✅ 卡片成功新增至 ${vcCategory}`);
} else {
  console.log(`⚠️ 該影片已存在於 ${vcCategory}，未重複插入`);
}
