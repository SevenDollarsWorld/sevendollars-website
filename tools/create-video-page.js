const fs = require("fs");
const path = require("path");
const args = require("minimist")(process.argv.slice(2));

const { slug, title, cover, instagram } = args;

if (!slug || !title || !instagram) {
  console.error("❌ 請輸入 --slug、--title、--cover和 --instagram");
  process.exit(1);
}

const componentName = slug.replace(/(^\w|[-_]\w)/g, s => s.replace(/[-_]/, "").toUpperCase());
const pagePath = `./pages/video-collection/${slug}`;
const outPath = path.join(__dirname, `../src/pages/video-collection/${slug}.jsx`);
const appPath = path.join(__dirname, "../src/App.jsx");
const vcPath = path.join(__dirname, "../src/pages/VideoCollection.jsx");

const template = `
import React, { useEffect } from 'react'
import '../../style.css'
import Footer from '../../components/Footer'
import Logo from '../components/Logo'

function ${componentName}Video() {
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
    <div className="video-detail-page">
    <div className="header-banner">
        <img src="/header-bg.jpg" alt="Header Background" />
        
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
  const lines = appContent.split('\n');
  const lastImportIndex = [...lines].reverse().findIndex(line => line.startsWith("import"));
  const insertIndex = lines.length - lastImportIndex;
  lines.splice(insertIndex, 0, importStatement);
  appContent = lines.join('\n');
}

const routeEntry = `<Route path="/video-collection/${slug}" element={<${componentName}Video />} />`;
if (!appContent.includes(routeEntry)) {
  appContent = appContent.replace(/<Routes>([\s\S]*?)<\/Routes>/, (match, inner) => {
    return `<Routes>${inner}\n  ${routeEntry}\n</Routes>`;
  });
}
fs.writeFileSync(appPath, appContent, "utf8");
console.log(`✅ Route 插入 App.jsx 完成: ${routeEntry}`);

// 插入 VideoCollection.jsx 卡片
let vcContent = fs.readFileSync(vcPath, "utf8");
const cardEntry = `  {
    title: "${title}",
    cover: "/${cover}.jpg",
    path: "/video-collection/${slug}"
  },`;

if (!vcContent.includes(`path: "/video-collection/${slug}"`)) {
  vcContent = vcContent.replace(/const videos = \[([\s\S]*?)\]/, (match, inner) => {
  return `const videos = [\n${cardEntry}\n${inner.trim()}\n]`;
});

  fs.writeFileSync(vcPath, vcContent, "utf8");
  console.log("✅ 卡片成功新增至 VideoCollection.jsx");
} else {
  console.log("⚠️ Video 卡片已存在，未重複插入");
}
