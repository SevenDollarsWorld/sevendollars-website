import React from 'react';
import { Link } from 'react-router-dom';
import '../style.css'; // 如果你用 CSS 檔案

function Logo () {
  return (
    <Link to="/" className="logo-area">
      <img
        src="/logo.png"
        alt="logo"
        className="logo"
      />
    </Link>
  );
}

export default Logo;
