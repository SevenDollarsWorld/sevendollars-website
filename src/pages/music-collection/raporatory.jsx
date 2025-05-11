
import React from 'react'
import '../../style.css'
import Footer from '../../components/Footer'
import Logo from '../../components/Logo'

function RaporatoryMusic() {
  return (
  <div className="music-detail-page">
      {/* 頁面頭部 */}
      <div className="header-banner">
        <img src="/header-bg.jpg" alt="Header Background" />
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
        <img src="/raporatory.jpg" alt="Raporatory Album Cover" className="music-cover" />
        <h1>Raporatory Album</h1>
        <p>這裡是介紹內容...</p>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?si=0NEKSA5jPnrbhP1Y&amp;list=PLjOsCn_vlGCvCwNUef-Xt-ppMi4U6oDOj" frameBorder="0" allowFullScreen></iframe>
        <iframe style={{ borderRadius: '12px' }} src="https://open.spotify.com/embed/album/4595oLhpSOGB9pzoo8E2oG?utm_source=generator" width="100%" height="352" frameBorder="0" loading="lazy"></iframe>
      </div>
      <div className="music-page"></div>
      <Logo />
      <Footer />
    </div>
    </div>
  )
}

export default RaporatoryMusic
