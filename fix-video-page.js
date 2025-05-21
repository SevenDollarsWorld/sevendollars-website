const fs = require("fs");
const path = require("path");

const dir = path.join(__dirname, "src/pages/video-collection");


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
    

    if (content !== original) {
      fs.writeFileSync(filePath, content, "utf8");
      console.log(`✅ Updated: ${file}`);
    }
  }
});
