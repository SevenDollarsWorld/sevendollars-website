import React from "react";
import "../../style.css";
import Footer from "../../components/Footer";
import Logo from "../../components/Logo";
import { useContext } from "react";
import { ThemeContext } from "../../App";
import { useTranslation } from "react-i18next"; // 注意路徑

function AllmyfaultMusic() {
  const { theme } = useContext(ThemeContext);
  const { t } = useTranslation();
  return (
    <div className="music-detail-page" style={{ background: theme.background }}>
      {/* 頁面頭部 */}
      <div className="relative w-full">
        <img
          src={theme.headerBg}
          alt="Header Background"
          className="w-full h-[40vh] object-cover"
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
      {/* 專輯內容 */}
      <div className="music-detail-content text-center px-4">
        
          <img
            src="/allmyfault.jpg"
            alt="All My Fault Cover"
            className="music-cover mx-auto"
          />
          <h1>All My Fault</h1>
          <p className="album-description">這裡是介紹內容...</p>
          <iframe
            className="mx-auto"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/lA6HFzQuIR0?si=xXbPXYZIKs0oaRw"
            frameBorder="0"
            allowFullScreen
          ></iframe>
          <iframe
            style={{ borderRadius: "12px" }}
            src="https://open.spotify.com/embed/album/72TppeuIzivA2UXIxyeYhf?utm_source=generator"
            width="100%"
            height="352"
            frameBorder="0"
            loading="lazy"
          ></iframe>
        </div>
        
        <Logo />
        <Footer />
      
    </div>
  );
}

export default AllmyfaultMusic;
