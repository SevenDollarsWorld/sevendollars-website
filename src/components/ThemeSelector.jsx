import React, { useState } from "react";
import { themes } from "../themes";

function ThemeSelector({ onThemeChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(localStorage.getItem("theme") || "stillchildish");

  const handleSelect = (key) => {
    setSelected(key);
    onThemeChange(key);
    localStorage.setItem("theme", key);
    setIsOpen(false);
  };

  return (
    <div className="fixed top-4 right-4 z-50">
      {/* 主按鈕（目前主題顏色） */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-8 h-8 rounded-full border-2 border-white"
        style={{ background: themes[selected].gradient }}
        title="選擇主題"
      />

      {/* 下拉選單 */}
      {isOpen && (
        <div className="mt-2 p-2 bg-white/80 dark:bg-black/70 backdrop-blur-md rounded-xl shadow-lg flex flex-col gap-2">
          {Object.entries(themes).map(([key, theme]) => (
            <button
              key={key}
              onClick={() => handleSelect(key)}
              className="w-8 h-8 rounded-full border-2 border-white hover:scale-110 transition"
              style={{ background: theme.gradient }}
              title={theme.name}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default ThemeSelector;
