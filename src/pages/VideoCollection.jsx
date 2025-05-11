import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import Logo from '../components/Logo'
import '../style.css'

function VideoCollection() {
  const videos = [
  {
    title: "Seven To Smoke Dance Challenge",
    cover: "/seventosmoke.jpg",
    path: "/video-collection/seventosmoke"
  },
{
      title: "SEVEN DOLLARS - Still Childish",
      cover: "/stillchildish-cover.jpg",
      path: "/video-collection/stillchildish"
    },
    {
    title: "Vogue Viral Video",
    cover: "/vogue.jpg",
    path: "/video-collection/vogueviralvideo"
    },
]
  return (
    <div className="basic-page">
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

      <section className="video-section">
  <div className="video-container">
    <div className="video-grid">
      {videos.map((video, index) => (
        <Link to={video.path} className="video-box" key={index}>
          <div
            className="video-thumb"
            style={{ backgroundImage: `url(${video.cover})` }}
          >
            <div className="video-title">{video.title}</div>
          </div>
        </Link>
      ))}
    </div>
  </div>
</section>

      <div className="music-page"></div>
      <Logo />
    <Footer />
    </div>
    
  )
}

export default VideoCollection
