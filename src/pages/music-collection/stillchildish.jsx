import React from "react";
import "../../style.css";
import Footer from "../../components/Footer";
import Logo from "../../components/Logo";
import { useContext } from "react";
import { ThemeContext } from "../../App"; // 注意路徑
import { useTranslation } from "react-i18next";

function StillChildishMusic() {
  const { theme } = useContext(ThemeContext);
  const { t } = useTranslation();
  return (
    <div className="music-detail-page" style={{ background: theme.gradient }}>
      {/* 頁面頭部 */}
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

      {/* 專輯內容 */}
      <div className="music-detail-content">
        <img
          src="/stillchildish-cover.jpg"
          alt="Still Childish Cover"
          className="music-cover"
        />
        <h1>SEVEN DOLLARS - Still Childish</h1>
        <p className="album-description">
          {t("musicCollectionAlbum.stillChildishContent")}
        </p>

        <div className="embed-section">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/videoseries?si=yvLi-QzWhPiCWItb&amp;list=PLjOsCn_vlGCvM3GBhI6jzKOnhxR8y93DJ"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>

        <div className="embed-section">
          <iframe
            style={{ borderRadius: "12px" }}
            src="https://open.spotify.com/embed/album/7InqKpgPbw98wwnixJp4Tj?utm_source=generator"
            width="100%"
            height="700"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <div className="music-page"></div>
      <Logo />
      <Footer />
    </div>
  );
}

export default StillChildishMusic;
