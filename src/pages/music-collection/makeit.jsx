
import React from 'react'
import '../../style.css'
import Footer from '../../components/Footer'
import Logo from '../../components/Logo'
import { useContext } from "react";
import { ThemeContext } from "../../App"; // 注意路徑

function MakeitMusic() {
  const { theme } = useContext(ThemeContext);
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
    <div className="music-detail-page">
      <div className="music-detail-content">
        <img src="/makeit.png" alt="Make It Cover" className="music-cover" />
        <h1>Make It</h1>
        <p>這裡是介紹內容...</p>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/9QK0mCZoTRY?si=oB1ZLAt88kiwaIbA" frameBorder="0" allowFullScreen></iframe>
        <iframe style={{ borderRadius: '12px' }} src="https://open.spotify.com/embed/album/3VygKlGhMH2vxWtq7aroUh" width="100%" height="352" frameBorder="0" loading="lazy"></iframe>
      </div>
      <div className="music-page"></div>
      <Logo />
      <Footer />
    </div>
    </div>
  )
}

export default MakeitMusic
