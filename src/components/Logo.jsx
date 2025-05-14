import React from 'react';
import { Link } from 'react-router-dom';
import '../style.css'; // 如果你用 CSS 檔案
import { useContext } from "react";
import { ThemeContext } from "../App"; // 注意路徑

function Logo () {
  const { theme } = useContext(ThemeContext);
  return (
    <Link to="/" className="logo-area">
      <img
        src={theme.themeLogo}
        alt="logo"
        className="logo"
      />
    </Link>
  );
}

export default Logo;
