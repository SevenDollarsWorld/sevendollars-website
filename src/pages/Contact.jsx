import React from "react";
import "../style.css";
import Footer from "../components/Footer";
import Logo from "../components/Logo";
import { useContext } from "react";
import { ThemeContext } from "../App"; // 注意路徑

function Contact() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="basic-page" style={{ background: theme.gradient }}>
      <div
        className="header-banner"
        style={{
          background: theme.gradient,
          backgroundImage: `url(${theme.headerBg})`,
        }}
      >
        <nav className="nav-bar">
          <a href="/">Home</a>
          <a href="/music-collection">Music Collection</a>
          <a href="/video-collection">Video Collection</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </nav>
      </div>

      <div className="basic-content">
        <h1>Contact</h1>
        <p>你可以在這裡放 Instagram、Email、合作方式等資訊。</p>
      </div>
      <Logo />
      <Footer />
    </div>
  );
}

export default Contact;
