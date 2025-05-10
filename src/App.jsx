
import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import MusicCollection from './pages/MusicCollection'
import VideoCollection from './pages/VideoCollection'
import StillChildishMusic from './pages/music-collection/stillchildish'
import StillChildishVideo from './pages/video-collection/stillchildish'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/music-collection" element={<MusicCollection />} />
      <Route path="/video-collection" element={<VideoCollection />} />
      <Route path="/music-collection/stillchildish" element={<StillChildishMusic />} />
      <Route path="/video-collection/stillchildish" element={<StillChildishVideo />} />
    </Routes>
  )
}

export default App
