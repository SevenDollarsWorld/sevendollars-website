import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import MusicCollection from './pages/MusicCollection'
import VideoCollection from './pages/VideoCollection'
import StillChildishMusic from './pages/music-collection/stillchildish'
import SPUMusic from './pages/music-collection/starsplanetuniverse'
import StillChildishVideo from './pages/video-collection/stillchildish'
import OceanMusic from './pages/music-collection/ocean';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/music-collection" element={<MusicCollection />} />
      <Route path="/video-collection" element={<VideoCollection />} />
      <Route path="/music-collection/stillchildish" element={<StillChildishMusic />} />
      <Route path="/music-collection/starsplanetuniverse" element={<SPUMusic />} />
      <Route path="/video-collection/stillchildish" element={<StillChildishVideo />} />

  <Route path="/music-collection/ocean" element={<OceanMusic />} />

  <Route path="/music-collection/makeit" element={<MakeitMusic />} />

  <Route path="/music-collection/allmyfault" element={<AllmyfaultMusic />} />

  <Route path="/music-collection/imdone" element={<ImdoneMusic />} />

  <Route path="/video-collection/vogueviralvideo" element={<VogueviralvideoVideo />} />

  <Route path="/video-collection/seventosmoke" element={<SeventosmokeVideo />} />

  <Route path="/music-collection/deadsingle" element={<DeadsingleMusic />} />

  <Route path="/music-collection/tellme" element={<TellmeMusic />} />

  <Route path="/music-collection/fakelove" element={<FakeloveMusic />} />

  <Route path="/music-collection/realsound" element={<RealsoundMusic />} />

  <Route path="/music-collection/tdatn" element={<TdatnMusic />} />

  <Route path="/music-collection/holdmysmoke" element={<HoldmysmokeMusic />} />

  <Route path="/music-collection/dorm" element={<DormMusic />} />

  <Route path="/music-collection/raporatory" element={<RaporatoryMusic />} />
</Routes>
  )
}

export default App

import MakeitMusic from './pages/music-collection/makeit';
import AllmyfaultMusic from './pages/music-collection/allmyfault';
import ImdoneMusic from './pages/music-collection/imdone';
import VogueviralvideoVideo from './pages/video-collection/vogueviralvideo';
import SeventosmokeVideo from './pages/video-collection/seventosmoke';
import DeadsingleMusic from './pages/music-collection/deadsingle';
import TellmeMusic from './pages/music-collection/tellme';
import FakeloveMusic from './pages/music-collection/fakelove';
import RealsoundMusic from './pages/music-collection/realsound';
import TdatnMusic from './pages/music-collection/tdatn';
import HoldmysmokeMusic from './pages/music-collection/holdmysmoke';
import DormMusic from './pages/music-collection/dorm';
import RaporatoryMusic from './pages/music-collection/raporatory';








