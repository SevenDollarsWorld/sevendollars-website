import React, { useContext } from "react";
import { ThemeContext } from "../App";
import Logo from "./Logo";
import Footer from "./Footer";
import "../style.css";

function PageLayout({ children }) {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="basic-page" style={{ background: theme.gradient, minHeight: "100vh" }}>
      {/* Header 區塊 */}
      <div className="header-banner">
        <img src={theme.headerBg} alt="Header Background" className="header-image" />

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

      {/* 子頁面內容插入 */}
      <div className="page-content">{children}</div>

      {/* 共用底部 Logo + Footer */}
      <Logo />
      <Footer />
    </div>
  );
}

export default PageLayout;
