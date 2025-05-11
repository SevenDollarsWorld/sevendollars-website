import React from 'react'
import '../style.css'
import Footer from '../components/Footer'
import Logo from '../components/Logo'

function About() {
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

      <div className="basic-content">
        <h1>About SEVEN DOLLARS</h1>
        <p>這裡可以寫你的個人介紹、音樂歷程、人生故事等。</p>
      </div>
<Logo />
      <Footer />
    </div>
  )
}

export default About
