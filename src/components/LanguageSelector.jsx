import React from "react";
import { useTranslation } from "react-i18next";
import "../style.css";

function LanguageSelector() {
  const { i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("language", lang);
  };

  return (
    <div className="language-dropdown">
      <img src="/language.png" alt="Language" className="language-icon" />
      <div className="language-menu">
        <div onClick={() => changeLanguage("zh")} className="language-item">
          繁中
        </div>
        <div onClick={() => changeLanguage("en")} className="language-item">
          English
        </div>
      </div>
    </div>
  );
}

export default LanguageSelector;
