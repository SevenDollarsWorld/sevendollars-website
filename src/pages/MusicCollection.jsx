import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import '../style.css'

function MusicCollection() {
  const albums = [
    {
      title: "SEVEN DOLLARS - Still Childish",
      cover: "/stillchildish-cover-800x800.jpg",
      path: "/music-collection/stillchildish"
    },
    // 之後可在這邊新增更多作品
  ]

  return (
    <div className="basic-page">
      
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
      <section className="album-section">
  <div className="album-container">
    <div className="album-grid">
      {albums.map((album, index) => (
        <Link to={album.path} className="album-box" key={index}>
          <div
            className="album-thumb"
            style={{ backgroundImage: `url(${album.cover})` }}
          >
            <div className="album-title">{album.title}</div>
          </div>
        </Link>
      ))}
    </div>
  </div>
</section>
<div className="music-page"></div>
    <Footer />

    </div>
  )
}

export default MusicCollection
