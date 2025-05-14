import React from 'react'
import '../../style.css'
import Footer from '../../components/Footer'
import Logo from '../../components/Logo'
import { useContext } from "react";
import { ThemeContext } from "../../App"; // 注意路徑
import { useTranslation } from "react-i18next";


function SPUMusic() {
  const { theme } = useContext(ThemeContext);
  const { t } = useTranslation();
  return (
  <div className="music-detail-page" style={{ background: theme.gradient }}>
      {/* 頁面頭部 */}
      <div className="header-banner">
      <img src={theme.headerBg} alt="Header Background" className="header-image" />
        
        <nav className="nav-bar">
          <a href="/">Home</a>
          <a href="/music-collection">Music Collection</a>
          <a href="/video-collection">Video Collection</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </nav>
      </div>

      {/* 專輯內容 */}
      <div className="music-detail-content">
        <img src="/spu-cover.jpg" alt="SPU Cover" className="music-cover" />
        <h1>{t('musicCollectionAlbum.spuTitle')}</h1>
        <p className="album-description">
          {t('musicCollectionAlbum.spuContent')}
        </p>

        <div className="embed-section">
          <iframe width="560" height="315"
            src="https://www.youtube.com/embed/videoseries?si=XAOYKX6GDMl78QzG&amp;list=PLjOsCn_vlGCsIWjcPJPvS4EQjf4Gi4CdB"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerpolicy="strict-origin-when-cross-origin"            
            allowFullScreen
          ></iframe>
        </div>

        <div className="embed-section">
          <iframe style={{ borderRadius: '12px' }}
            src="https://open.spotify.com/embed/album/5E3a8dUrhvTeQljmB7kHNy?utm_source=generator"
            width="100%" height="700" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <div className="music-page"></div>
      <Logo />
    <Footer />
    </div>
  )
}

export default SPUMusic
