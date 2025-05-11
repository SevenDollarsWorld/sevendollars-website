import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import Logo from '../components/Logo'
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
    title: "Seven Dollars - Raporatory Album",
    cover: "/raporatory.jpg",
    path: "/music-collection/raporatory"
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
    {
    title: "Seven Dollars - 彌留Dying",
    cover: "/dead.jpg",
    path: "/music-collection/deadsingle"
    },
    {
    title: "Seven Dollars - Tell Me ft. Drordie",
    cover: "/tellme.jpeg",
    path: "/music-collection/tellme"
  },
  {
    title: "Seven Dollars - Fake Love",
    cover: "/fakelove.jpg",
    path: "/music-collection/fakelove"
  },
  {
    title: "Seven Dollars - Real Sound",
    cover: "/realsound.jpg",
    path: "/music-collection/realsound"
  },
  {
    title: "Seven Dollars - 夢魘後的魔鬼The Demon After The Nightmare",
    cover: "/tdatn.jpg",
    path: "/music-collection/tdatn"
  },
  {
    title: "Seven Dollars - Hold My Smoke",
    cover: "/hms.jpg",
    path: "/music-collection/holdmysmoke"
  },
  {
    title: "Seven Dollars - 宿舍Dorm",
    cover: "/dorm.jpg",
    path: "/music-collection/dorm"
  },
  
    // 之後可在這邊新增更多作品
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

    <Logo />
    <Footer />

    </div>
  )
}

export default MusicCollection
