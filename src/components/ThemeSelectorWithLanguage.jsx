import React, { useState } from "react";
import { themes } from "../themes";
import { useTranslation } from "react-i18next";

function ThemeSelectorWithLanguage({ onThemeChange }) {
  const [isThemeOpen, setIsThemeOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const { i18n } = useTranslation();
  const [selected, setSelected] = useState(localStorage.getItem("theme") || "stillchildish");

  const handleThemeSelect = (key) => {
    setSelected(key);
    onThemeChange(key);
    localStorage.setItem("theme", key);
    setIsThemeOpen(false);
  };

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("language", lang);
    setIsLangOpen(false);
  };

  return (
    <div className="fixed top-4 right-4 z-50 flex items-start gap-4">
      {/* 主題下拉選擇 */}
      <div className="relative">
        <button
          onClick={() => setIsThemeOpen(!isThemeOpen)}
          className="w-8 h-8 rounded-full border-2 border-white hover:drop-shadow-[0_0_6px_white]"
          style={{ background: themes[selected].gradient }}
          title="選擇主題"
        />
        {isThemeOpen && (
          <div className="mt-2 p-2 bg-white/80 dark:bg-black/70 backdrop-blur-md rounded-xl shadow-lg flex flex-col gap-2 absolute right-0">
            {Object.entries(themes).map(([key, theme]) => (
              <button
                key={key}
                onClick={() => handleThemeSelect(key)}
                className="w-8 h-8 rounded-full border-2 border-white hover:scale-110 transition hover:drop-shadow-[0_0_6px_white]"
                style={{ background: theme.gradient }}
                title={theme.name}
              />
            ))}
          </div>
        )}
      </div>

      {/* 語言下拉選擇（點擊展開） */}
      <div className="relative">
        <button onClick={() => setIsLangOpen(!isLangOpen)}>
          <img
            src="/language.png"
            alt="Language"
            className="w-8 h-8 cursor-pointer hover:scale-105 transition hover:drop-shadow-[0_0_6px_white]"
          />
        </button>
        {isLangOpen && (
          <div className="absolute top-10 right-0 bg-white/80 dark:bg-black/70 backdrop-blur-md shadow-lg rounded-md overflow-hidden z-50 flex flex-col hover:drop-shadow-[0_0_6px_white]">
            <div
              onClick={() => changeLanguage("zh")}
              className="px-4 py-2 text-sm hover:bg-black/10 dark:hover:bg-white/10 cursor-pointer"
            >
              繁中
            </div>
            <div
              onClick={() => changeLanguage("en")}
              className="px-4 py-2 text-sm hover:bg-black/10 dark:hover:bg-white/10 cursor-pointer"
            >
              English
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ThemeSelectorWithLanguage;
