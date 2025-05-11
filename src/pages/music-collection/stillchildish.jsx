import React from 'react'
import '../../style.css'
import Footer from '../../components/Footer'
import Logo from '../../components/Logo'


function StillChildishMusic() {
  return (
    <div className="music-detail-page">
      {/* 頁面頭部 */}
      <div className="header-banner">
        <img src="/header-bg.jpg" alt="Header Background" />
        
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
        <img src="/stillchildish-cover.jpg" alt="Still Childish Cover" className="music-cover" />
        <h1>SEVEN DOLLARS - Still Childish</h1>
        <p>
          這裡是《Still Childish》的介紹區塊，你可以寫一段關於這張專輯的靈感、製作背景或歌詞概念。
        </p>

        <div className="embed-section">
          <iframe width="560" height="315"
            src="https://www.youtube.com/embed/fNsSH1XptZQ?si=wGWa-6MpgEUJL9SN"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <div className="embed-section">
          <iframe style={{ borderRadius: '12px' }}
            src="https://open.spotify.com/embed/album/7InqKpgPbw98wwnixJp4Tj?utm_source=generator"
            width="100%" height="352" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
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

export default StillChildishMusic
