import React from 'react'
import '../../style.css'
import Footer from '../../components/Footer'
import Logo from '../../components/Logo'
import { useContext } from "react";
import { ThemeContext } from "../../App"; // 注意路徑

function OceanMusic() {
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

      <div className="music-detail-content">
        <img src="/oceancover.jpg" alt="Ocean Cover" className="music-cover" />
        <h1>Ocean</h1>
        <p>這裡是介紹內容...</p>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?si=IiopSE0Rjo-PkMrg&amp;list=PLjOsCn_vlGCvZUKaMQQPi4siuH7BjZ7Wm" frameBorder="0" allowFullScreen></iframe>
        <iframe style={{ borderRadius: '12px' }} src="https://open.spotify.com/embed/album/6fpPj1AKZfuSDxbDjFo53B" width="100%" height="700" frameBorder="0" loading="lazy"></iframe>
      </div>
      <div className="music-page"></div>
      <Logo />
      <Footer />
    </div>
  )
}

export default OceanMusic
