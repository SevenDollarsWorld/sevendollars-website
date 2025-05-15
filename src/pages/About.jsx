import React from "react";
import "../style.css";
import Footer from "../components/Footer";
import Logo from "../components/Logo";
import { useContext } from "react";
import { ThemeContext } from "../App"; // 注意路徑
import { useTranslation } from "react-i18next";
import AboutContent from "../components/AboutContent";



function About() {
  const { theme } = useContext(ThemeContext);
  const { t } = useTranslation();
  return (
    
    <div className="basic-page">
      
      <div className="header-banner">
        
        <img
          src={theme.headerBg}
          alt="Header Background"
          className="header-image"
        />

        <nav className="nav-bar">
          <a href="/">{t("home")}</a>
          <a href="/music-collection">{t("music")}</a>
          <a href="/video-collection">{t("video")}</a>
          <a href="/about">{t("about")}</a>
          <a href="/contact">{t("contact")}</a>
        </nav>
      </div>

      <AboutContent />
      <Logo />
      
      <Footer />
    </div>
  );
}

export default About;
