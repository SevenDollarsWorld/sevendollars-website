
const fs = require("fs");
const path = require("path");
const args = require("minimist")(process.argv.slice(2));

const { slug, title, cover, youtube, spotify } = args;

if (!slug || !title) {
  console.error("❌ 請輸入 --slug、--title、--cover、--youtube和--spotify");
  process.exit(1);
}
const mcPath = path.join(__dirname, "../src/pages/MusicCollection.jsx");

const componentName = slug.replace(/(^\w|[-_]\w)/g, s => s.replace(/[-_]/, "").toUpperCase());
const pagePath = `./pages/music-collection/${slug}`;
const outPath = path.join(__dirname, `../src/pages/music-collection/${slug}.jsx`);
const appPath = path.join(__dirname, "../src/App.jsx");

const template = `
import React from 'react'
import '../../style.css'
import Footer from '../../components/Footer'
import Logo from '../../components/Logo'

function ${componentName}Music() {
  return (
  <div className="music-detail-page">
      {/* 頁面頭部 */}
      <div className="header-banner">
        <img src="/header-bg.jpg" alt="Header Background" />
        <div className="logo-area">
          <img src="/logo.png" alt="Logo" className="logo" />
        </div>
        <nav className="nav-bar">
          <a href="/">Home</a>
          <a href="/music-collection">Music Collection</a>
          <a href="/video-collection">Video Collection</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </nav>
      </div>
      {/* 專輯內容 */}
    <div className="music-detail-page">
      <div className="music-detail-content">
        <img src="/${cover}" alt="${title} Cover" className="music-cover" />
        <h1>${title}</h1>
        <p>這裡是介紹內容...</p>
        <iframe width="560" height="315" src="${youtube}" frameBorder="0" allowFullScreen></iframe>
        <iframe style={{ borderRadius: '12px' }} src="${spotify}" width="100%" height="352" frameBorder="0" loading="lazy"></iframe>
      </div>
      <div className="music-page"></div>
      <Logo />
      <Footer />
    </div>
    </div>
  )
}

export default ${componentName}Music
`;

// 寫入頁面檔案
fs.writeFileSync(outPath, template);
console.log(`✅ Music 子頁已建立: ${outPath}`);

// 修改 App.jsx，自動插入 Route
let appContent = fs.readFileSync(appPath, "utf8");

// 加 import
const importStatement = `import ${componentName}Music from '${pagePath}';\n`;

if (!appContent.includes(importStatement)) {
  const lines = appContent.split('\n');
const lastImportIndex = [...lines].reverse().findIndex(line => line.startsWith('import'));
const insertIndex = lines.length - lastImportIndex;
lines.splice(insertIndex, 0, importStatement);
appContent = lines.join('\n');

}



// 加 Route
const routeEntry = `<Route path="/music-collection/${slug}" element={<${componentName}Music />} />`;
if (!appContent.includes(routeEntry)) {
  appContent = appContent.replace(/<Routes>([\s\S]*?)<\/Routes>/, (match, inner) => {
    return `<Routes>${inner}\n  ${routeEntry}\n</Routes>`;
  });
}

fs.writeFileSync(appPath, appContent, "utf8");
console.log(`✅ Route 已插入 App.jsx: ${routeEntry}`);

// 插入 MusicCollection.jsx 的 albums 陣列
let mcContent = fs.readFileSync(mcPath, "utf8");
const albumEntry = `  {
    title: "Seven Dollars - ${title}",
    cover: "/${cover}",
    path: "/music-collection/${slug}"
  },`;
if (!mcContent.includes(`path: "/music-collection/${slug}"`)) {
  mcContent = mcContent.replace(/const albums = \[([\s\S]*?)\]/, (match, inner) => {
    return `const albums = [\n${albumEntry}\n${inner.trim()}`;
  });
  fs.writeFileSync(mcPath, mcContent, "utf8");
  console.log("✅ Album 項目已插入 MusicCollection.jsx");
} else {
  console.log("⚠️ Album 項目已存在，未重複插入");
}

