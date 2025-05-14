
import React from 'react'
import '../../style.css'
import Footer from '../../components/Footer'
import Logo from '../../components/Logo'
import { useContext } from "react";
import { ThemeContext } from "../../App"; // 注意路徑

function DeadsingleMusic() {
  const { theme } = useContext(ThemeContext);
  return (
  <div className="music-detail-page" style={{ background: theme.gradient }}>
      {/* 頁面頭部 */}
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
      {/* 專輯內容 */}
    <div className="music-detail-page">
      <div className="music-detail-content">
        <img src="/dead.jpg" alt="彌留 Cover" className="music-cover" />
        <h1>彌留</h1>
        <p>這裡是介紹內容...</p>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/QXIm9EK_PCQ?si=bKzN0nkejUlWIsNf" frameBorder="0" allowFullScreen></iframe>
        <iframe style={{ borderRadius: '12px' }} src="https://open.spotify.com/embed/album/1ShtVvbwz0q0qH6Pkjj95I?utm_source=generator" width="100%" height="352" frameBorder="0" loading="lazy"></iframe>
      </div>
      <div className="music-page"></div>
      <Logo />
      <Footer />
    </div>
    </div>
  )
}

export default DeadsingleMusic
