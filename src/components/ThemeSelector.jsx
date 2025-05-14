import React from "react";
import { themes } from "../themes";
import "../style.css";

function ThemeSelector({ onThemeChange }) {
  return (
    <div className="theme-selector">
      {Object.entries(themes).map(([key, themeObj]) => (
        <button
          key={key}
          onClick={() => {
            onThemeChange(key); // 正確通知父層改主題
            localStorage.setItem("theme", key); // 儲存選擇
          }}
          className="theme-button"
          style={{ background: themeObj.gradient }}
          title={themeObj.name}
        />
      ))}
    </div>
  );
}

export default ThemeSelector;
