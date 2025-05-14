
import React, { useEffect } from 'react'
import '../../style.css'
import Footer from '../../components/Footer'
import Logo from '../../components/Logo'
import { useContext } from "react";
import { ThemeContext } from "../../App"; // 注意路徑

function FreestylemacVideo() {
  const { theme } = useContext(ThemeContext);
  useEffect(() => {
        // 檢查 ig embed.js 是否已載入過，避免重複載
        if (!window.instgrm) {
          const script = document.createElement('script')
          script.setAttribute('src', '//www.instagram.com/embed.js')
          script.setAttribute('async', '')
          document.body.appendChild(script)
        } else {
          window.instgrm.Embeds.process()
        }
      }, [])

  return (
    <div className="video-detail-page" style={{ background: theme.gradient }}>
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

      <div className="video-detail-content">
        <h1>Mac Miller 5 Dollar Pony Ride Freestyle Dance</h1>
        <p>這是 的 IG Reel 影像頁面。</p>

        <blockquote className="instagram-media"
          data-instgrm-permalink="https://www.instagram.com/reel/DE7eCHVTuaV/?utm_source=ig_embed&amp;utm_campaign=loading"
          data-instgrm-version="14"
          style={{ margin: '0 auto', maxWidth: '540px' }}
        ></blockquote>
        <script async src="//www.instagram.com/embed.js"></script>
      </div>
      <Logo />
      <Footer />
    </div>
  )
} 

export default FreestylemacVideo
