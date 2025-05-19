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
    
    <div className="basic-page" style={{ background: theme.gradient }}>
      
      <div className="header-banner">
        
        <img
          src={theme.headerBg}
          alt="Header Background"
          className="header-image"
        />

        <nav className="absolute top-8 left-1/2 -translate-x-1/2 z-10 flex flex-wrap justify-center gap-3 text-xs sm:text-sm md:text-base bg-black/40 backdrop-blur-sm px-6 py-2 rounded-xl text-white">
          <a
            href="/"
            className="transition-all px-3 py-1 rounded hover:bg-white hover:text-black hover:font-bold"
          >
            {t("home")}
          </a>
          <a
            href="/music-collection"
            className="transition-all px-3 py-1 rounded hover:bg-white hover:text-black hover:font-bold"
          >
            {t("music")}
          </a>
          <a
            href="/video-collection"
            className="transition-all px-3 py-1 rounded hover:bg-white hover:text-black hover:font-bold"
          >
            {t("video")}
          </a>
          <a
            href="/about"
            className="transition-all px-3 py-1 rounded hover:bg-white hover:text-black hover:font-bold"
          >
            {t("about")}
          </a>
          <a
            href="/contact"
            className="transition-all px-3 py-1 rounded hover:bg-white hover:text-black hover:font-bold"
          >
            {t("contact")}
          </a>
        </nav>
      </div>

      <AboutContent />
      <Logo />
      
      <Footer />
    </div>
  );
}

export default About;
