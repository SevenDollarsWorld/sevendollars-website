const fs = require("fs");
const path = require("path");
const args = require("minimist")(process.argv.slice(2));

const { slug, title, cover, youtube, spotify, type } = args;
// node create-music-page.js --slug=allmyfault --title="" --type="album"or "single" --cover=.png --youtube="" --spotify=""

if (!slug || !title) {
  console.error("❌ 請輸入 --slug、--title、--cover、--youtube和--spotify");
  process.exit(1);
}
const mcPath = path.join(__dirname, "../src/pages/MusicCollection.jsx");

const componentName = slug.replace(/(^\w|[-_]\w)/g, (s) =>
  s.replace(/[-_]/, "").toUpperCase()
);
const pagePath = `./pages/music-collection/${slug}`;
const outPath = path.join(
  __dirname,
  `../src/pages/music-collection/${slug}.jsx`
);
const appPath = path.join(__dirname, "../src/App.jsx");

const template = `
import React from 'react'
import '../../style.css'
import Footer from '../../components/Footer'
import Logo from '../../components/Logo'
import { useContext } from "react";
import { ThemeContext } from "../../App";
import { useTranslation } from "react-i18next";

function ${componentName}Music() {
  const { theme } = useContext(ThemeContext);
  const { t } = useTranslation();

  return (
    <div className="music-detail-page" style={{ background: theme.gradient }}>
      {/* 頁面頭部 */}
      <div className="header-banner">
        <img
          src={theme.headerBg}
          alt="Header Background"
          className="header-image"
        />

        <nav className="absolute top-8 left-1/2 -translate-x-1/2 z-10 flex flex-wrap justify-center gap-3 text-xs sm:text-sm md:text-base bg-black/40 backdrop-blur-sm px-6 py-2 rounded-xl text-white">
          <a href="/" className="transition-all px-3 py-1 rounded hover:bg-white hover:text-black hover:font-bold">{t("home")}</a>
          <a href="/music-collection" className="transition-all px-3 py-1 rounded hover:bg-white hover:text-black hover:font-bold">{t("music")}</a>
          <a href="/video-collection" className="transition-all px-3 py-1 rounded hover:bg-white hover:text-black hover:font-bold">{t("video")}</a>
          <a href="/about" className="transition-all px-3 py-1 rounded hover:bg-white hover:text-black hover:font-bold">{t("about")}</a>
          <a href="/contact" className="transition-all px-3 py-1 rounded hover:bg-white hover:text-black hover:font-bold">{t("contact")}</a>
        </nav>
      </div>

      {/* 專輯內容 */}
      <div className="music-detail-content text-center px-4">
        <img src="/${cover}" alt="${title} Cover" className="music-cover mx-auto" />
        <h1>${title}</h1>
        <p className="album-description">這裡是介紹內容...</p>

        <div className="embed-section">
          <iframe
            width="100%"
            height="315"
            src="${youtube}"
            title="YouTube video player"
            className="max-w-[560px] mx-auto"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>

        <div className="embed-section">
          <iframe
            style={{ borderRadius: '12px' }}
            src="${spotify}"
            width="100%"
            height="700"
            className="mx-auto"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
      </div>

      <div className="music-page"></div>
      <Logo />
      <Footer />
    </div>
  );
}

export default ${componentName}Music;
`;


// 寫入頁面檔案
fs.writeFileSync(outPath, template);
console.log(`✅ Music 子頁已建立: ${outPath}`);

// 修改 App.jsx，自動插入 Route
let appContent = fs.readFileSync(appPath, "utf8");

// 加 import
const importStatement = `import ${componentName}Music from '${pagePath}';\n`;

if (!appContent.includes(importStatement)) {
  const lines = appContent.split("\n");
  const lastImportIndex = [...lines]
    .reverse()
    .findIndex((line) => line.startsWith("import"));
  const insertIndex = lines.length - lastImportIndex;
  lines.splice(insertIndex, 0, importStatement);
  appContent = lines.join("\n");
}

// 加 Route
const routeEntry = `<Route path="/music-collection/${slug}" element={<${componentName}Music />} />`;
if (!appContent.includes(routeEntry)) {
  appContent = appContent.replace(
    /<Routes>([\s\S]*?)<\/Routes>/,
    (match, inner) => {
      return `<Routes>${inner}\n  ${routeEntry}\n</Routes>`;
    }
  );
}

fs.writeFileSync(appPath, appContent, "utf8");
console.log(`✅ Route 已插入 App.jsx: ${routeEntry}`);

// 插入到 MusicCollection.jsx 的 albums 或 singles 陣列
let mcContent = fs.readFileSync(mcPath, "utf8");
const entry = `  {
    title: "Seven Dollars - ${title}",
    cover: "/${cover}",
    path: "/music-collection/${slug}"
  },`;

const listTarget = type === "album" ? "albums" : "singlesList";

if (!mcContent.includes(`path: "/music-collection/${slug}"`)) {
  const regex = new RegExp(`const ${listTarget} = \\[([\\s\\S]*?)\\]`);
  mcContent = mcContent.replace(regex, (match, inner) => {
    return `const ${listTarget} = [\n${entry}\n${inner.trim()}\n]`;
  });

  fs.writeFileSync(mcPath, mcContent, "utf8");
  console.log(`✅ ${type === "album" ? "Album" : "Single"} 項目已插入 MusicCollection.jsx`);
} else {
  console.log(`⚠️ 此項目已存在於 ${listTarget}，未重複插入`);
}
