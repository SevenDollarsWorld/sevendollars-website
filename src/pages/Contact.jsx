import React from "react";
import "../style.css";
import Footer from "../components/Footer";
import Logo from "../components/Logo";
import { useContext } from "react";
import { ThemeContext } from "../App"; // 注意路徑
import { useTranslation } from "react-i18next";

function Contact() {
  const { theme } = useContext(ThemeContext);
  const { t } = useTranslation();
  return (
    <div className="basic-page" style={{ background: theme.gradient }}>
      <div className="header-banner">
        <img
          src={theme.headerBg}
          alt="Header Background"
          className="header-image"
        />
        <nav className="nav-bar">
          <a href="/">{t('home')}</a>
          <a href="/music-collection">{t('music')}</a>
          <a href="/video-collection">{t('video')}</a>
          <a href="/about">{t('about')}</a>
          <a href="/contact">{t('contact')}</a>
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
