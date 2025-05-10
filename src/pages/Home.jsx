import React from 'react'
import '../style.css'

function Home() {
  return (
    <div className="home-container">
    <div className="home">
      <video
  autoPlay
  muted
  loop
  playsInline
  className="home-video"
>
  <source src="/Still_Childish_BG_3M.webm" type="video/webm" />
  Your browser does not support the video tag.
</video>




      {/* 背景圖 */}
      <img
        src="/JOJO_cropped.jpg"
        alt="Home Visual"
        style={{
          width: '100vw',
          height: '100vh',
          objectFit: 'cover',
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: -2
        }}
      />

      {/* 右下角按鈕 */}
      <div className="home-buttons">
        <a href="/about" className="home-button">About 7$</a>
        <a href="/music-collection" className="home-button">Music Collection</a>
        <a href="/video-collection" className="home-button">Video Collection</a>
      </div>

      {/* 底部 footer 圖示 */}
      <footer className="home-footer">
        <a href="https://www.instagram.com/sevendollars_7yuan/" target="_blank" rel="noopener noreferrer">
          <img src="/instagram.png" alt="Instagram" />
        </a>
        <a href="https://www.youtube.com/@SevenDollars7yuan" target="_blank" rel="noopener noreferrer">
          <img src="/youtube.png" alt="YouTube" />
        </a>
        <a href="https://open.spotify.com/artist/1O0t24ZmuxmnWvXlY802K7?si=NdLE65zoToSKIys8Ocir4g" target="_blank" rel="noopener noreferrer">
          <img src="/spotify.png" alt="Spotify" />
        </a>
        <a href="https://music.apple.com/us/artist/seven-dollars/1521991760" target="_blank" rel="noopener noreferrer">
          <img src="/applemusic.png" alt="Apple Music" />
        </a>
        <a href="https://streetvoice.com/HOPENG/" target="_blank" rel="noopener noreferrer">
          <img src="/streetvoice.png" alt="StreetVoice" />
        </a>
        <a href="mailto:heyricky81@gmail.com" target="_blank" rel="noopener noreferrer">
          <img src="/email.png" alt="Email" />
        </a>
      </footer>
    </div>
    </div>
  )
}


export default Home
