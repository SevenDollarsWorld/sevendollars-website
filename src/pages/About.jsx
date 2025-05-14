import React from "react";
import "../style.css";
import Footer from "../components/Footer";
import Logo from "../components/Logo";
import { useContext } from "react";
import { ThemeContext } from "../App"; // 注意路徑

function About() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="basic-page" style={{ background: theme.gradient }}>
      <div className="header-banner">
        <img
          src={theme.headerBg}
          alt="Header Background"
          className="header-image"
        />

        <nav className="nav-bar">
          <a href="/">Home</a>
          <a href="/music-collection">Music Collection</a>
          <a href="/video-collection">Video Collection</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </nav>
      </div>

      <div className="basic-content">
        <h1>About SEVEN DOLLARS</h1>
        <p>這裡可以寫你的個人介紹、音樂歷程、人生故事等。</p>
      </div>
      <Logo />
      <Footer />
    </div>
  );
}

export default About;
