import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import '../style.css'

function MusicCollection() {
  const albums = [
  
    {
      title: "SEVEN DOLLARS - Still Childish Album",
      cover: "/stillchildish-cover-800x800.jpg",
      path: "/music-collection/stillchildish"
    },
    {
      title: "SEVEN DOLLARS - Stars, Planet, Universe Album",
      cover: "/spu-cover.jpg",
      path: "/music-collection/starsplanetuniverse"
    },
    {
      title: "SEVEN DOLLARS - Stars, Planet, Universe Album",
      cover: "/oceancover.jpg",
      path: "/music-collection/ocean"
    },
    {
      title: "SEVEN DOLLARS - Make It",
      cover: "/makeit.png",
      path: "/music-collection/makeit"
    },
    {
      title: "SEVEN DOLLARS - All My Fault",
      cover: "/allmyfault.jpg",
      path: "/music-collection/allmyfault"
    },
    {
    title: "SEVEN DOLLARS - I'm Done",
    cover: "/imdonecover.jpg",
    path: "/music-collection/imdone"
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
