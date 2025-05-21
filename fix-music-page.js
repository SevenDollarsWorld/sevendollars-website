const fs = require("fs");
const path = require("path");

const dir = path.join(__dirname, "src/pages/music-collection");

const translatedNav = `
<nav className="absolute top-8 left-1/2 -translate-x-1/2 z-10 flex flex-wrap justify-center gap-3 text-xs sm:text-sm md:text-base bg-black/40 backdrop-blur-sm px-6 py-2 rounded-xl text-white">
  <a href="/" className="transition-all px-3 py-1 rounded hover:bg-white hover:text-black hover:font-bold">{t("home")}</a>
  <a href="/music-collection" className="transition-all px-3 py-1 rounded hover:bg-white hover:text-black hover:font-bold">{t("music")}</a>
  <a href="/video-collection" className="transition-all px-3 py-1 rounded hover:bg-white hover:text-black hover:font-bold">{t("video")}</a>
  <a href="/about" className="transition-all px-3 py-1 rounded hover:bg-white hover:text-black hover:font-bold">{t("about")}</a>
  <a href="/contact" className="transition-all px-3 py-1 rounded hover:bg-white hover:text-black hover:font-bold">{t("contact")}</a>
</nav>
`.trim();

fs.readdirSync(dir).forEach((file) => {
  const filePath = path.join(dir, file);
  if (file.endsWith(".jsx")) {
    let content = fs.readFileSync(filePath, "utf8");
    let original = content;

    // 1. 插入 import 語句
    if (!content.includes("useTranslation")) {
      const importIndex = content.indexOf("import");
      const lastImportEnd = content.lastIndexOf(";", content.indexOf("function"));
      content =
        content.slice(0, lastImportEnd + 1) +
        `\nimport { useTranslation } from 'react-i18next';` +
        content.slice(lastImportEnd + 1);
    }

    // 2. 插入 hook 語句
    if (!content.includes("const { t } = useTranslation()")) {
      const themeHookIndex = content.indexOf("const { theme } = useContext");
      if (themeHookIndex !== -1) {
        const insertIndex = content.indexOf("\n", themeHookIndex) + 1;
        content =
          content.slice(0, insertIndex) +
          `  const { t } = useTranslation();\n` +
          content.slice(insertIndex);
      }
    }

    // 3. 替換 <nav> 區塊
    if (content.includes("<nav") && !content.includes('{t("home")}')) {
      const start = content.indexOf("<nav");
      const end = content.indexOf("</nav>", start);
      if (start !== -1 && end !== -1) {
        content = content.slice(0, start) + translatedNav + content.slice(end + 6);
      }
    }

    if (content !== original) {
      fs.writeFileSync(filePath, content, "utf8");
      console.log(`✅ Updated: ${file}`);
    }
  }
});
