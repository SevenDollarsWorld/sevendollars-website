import React, { useState, createContext, useEffect } from "react";


import {
  useLocation,
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { themes } from "./themes";
import ThemeSelector from "./components/ThemeSelector";
import LanguageSelector from "./components/LanguageSelector";
import i18n from "./i18n";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import MusicCollection from "./pages/MusicCollection";
import VideoCollection from "./pages/VideoCollection";
import StillChildishMusic from "./pages/music-collection/stillchildish";
import SPUMusic from "./pages/music-collection/starsplanetuniverse";
import StillChildishVideo from "./pages/video-collection/stillchildish";
import OceanMusic from "./pages/music-collection/ocean";

export const ThemeContext = createContext();

function App() {
  const defaultTheme = localStorage.getItem("theme") || "stillchildish";
  const [themeName, setThemeName] = useState(() => {
    return localStorage.getItem("theme") || "stillchildish"; // 預設或 localStorage
  });
  const theme = themes[themeName];

  const savedLang = localStorage.getItem("language");
  useEffect(() => {
  const savedLang = localStorage.getItem("language");
  if (savedLang) {
    i18n.changeLanguage(savedLang);
  }
}, []);


  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    
    <ThemeContext.Provider value={{ theme, setThemeName }}>

      <div
        style={{
          background: isHome ? "none" : theme.gradient,
          minHeight: "100vh",
        }}
      >
        
        <ThemeSelector onThemeChange={setThemeName} />

        <LanguageSelector />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/music-collection" element={<MusicCollection />} />
          <Route path="/video-collection" element={<VideoCollection />} />
          <Route
            path="/music-collection/stillchildish"
            element={<StillChildishMusic />}
          />
          <Route
            path="/music-collection/starsplanetuniverse"
            element={<SPUMusic />}
          />
          <Route
            path="/video-collection/stillchildish"
            element={<StillChildishVideo />}
          />

          <Route path="/music-collection/ocean" element={<OceanMusic />} />

          <Route path="/music-collection/makeit" element={<MakeitMusic />} />

          <Route
            path="/music-collection/allmyfault"
            element={<AllmyfaultMusic />}
          />

          <Route path="/music-collection/imdone" element={<ImdoneMusic />} />

          <Route
            path="/video-collection/vogueviralvideo"
            element={<VogueviralvideoVideo />}
          />

          <Route
            path="/video-collection/seventosmoke"
            element={<SeventosmokeVideo />}
          />

          <Route
            path="/music-collection/deadsingle"
            element={<DeadsingleMusic />}
          />

          <Route path="/music-collection/tellme" element={<TellmeMusic />} />

          <Route
            path="/music-collection/fakelove"
            element={<FakeloveMusic />}
          />

          <Route
            path="/music-collection/realsound"
            element={<RealsoundMusic />}
          />

          <Route path="/music-collection/tdatn" element={<TdatnMusic />} />

          <Route
            path="/music-collection/holdmysmoke"
            element={<HoldmysmokeMusic />}
          />

          <Route path="/music-collection/dorm" element={<DormMusic />} />

          <Route
            path="/music-collection/raporatory"
            element={<RaporatoryMusic />}
          />

          <Route
            path="/music-collection/spuintro"
            element={<SpuintroMusic />}
          />

          <Route
            path="/music-collection/neverregret"
            element={<NeverregretMusic />}
          />

          <Route path="/music-collection/2am" element={<twoamMusic />} />

          <Route
            path="/music-collection/wegonbealright"
            element={<WegonbealrightMusic />}
          />

          <Route path="/music-collection/meteor" element={<MeteorMusic />} />

          <Route path="/video-collection/ximen" element={<XimenVideo />} />

          <Route path="/video-collection/food4" element={<Food4Video />} />

          <Route path="/video-collection/food5" element={<Food5Video />} />

          <Route path="/video-collection/food1" element={<Food1Video />} />

          <Route path="/video-collection/food2" element={<Food2Video />} />

          <Route path="/video-collection/food3" element={<Food3Video />} />

          <Route
            path="/video-collection/freestylemac"
            element={<FreestylemacVideo />}
          />

          <Route
            path="/video-collection/freestylewithbrostwo"
            element={<FreestylewithbrostwoVideo />}
          />

          <Route
            path="/video-collection/freestylewithbrosone"
            element={<FreestylewithbrosoneVideo />}
          />

          <Route
            path="/video-collection/herewithme"
            element={<HerewithmeVideo />}
          />

          <Route
            path="/video-collection/secretofindustry"
            element={<SecretofindustryVideo />}
          />
        </Routes>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;

import MakeitMusic from "./pages/music-collection/makeit";
import AllmyfaultMusic from "./pages/music-collection/allmyfault";
import ImdoneMusic from "./pages/music-collection/imdone";
import VogueviralvideoVideo from "./pages/video-collection/vogueviralvideo";
import SeventosmokeVideo from "./pages/video-collection/seventosmoke";
import DeadsingleMusic from "./pages/music-collection/deadsingle";
import TellmeMusic from "./pages/music-collection/tellme";
import FakeloveMusic from "./pages/music-collection/fakelove";
import RealsoundMusic from "./pages/music-collection/realsound";
import TdatnMusic from "./pages/music-collection/tdatn";
import HoldmysmokeMusic from "./pages/music-collection/holdmysmoke";
import DormMusic from "./pages/music-collection/dorm";
import RaporatoryMusic from "./pages/music-collection/raporatory";
import SpuintroMusic from "./pages/music-collection/spuintro";
import NeverregretMusic from "./pages/music-collection/neverregret";
import twoamMusic from "./pages/music-collection/2am";
import WegonbealrightMusic from "./pages/music-collection/wegonbealright";
import MeteorMusic from "./pages/music-collection/meteor";
import XimenVideo from "./pages/video-collection/ximen";
import Food4Video from "./pages/video-collection/food4";
import Food5Video from "./pages/video-collection/food5";
import Food1Video from "./pages/video-collection/food1";
import Food2Video from "./pages/video-collection/food2";
import Food3Video from "./pages/video-collection/food3";
import FreestylemacVideo from "./pages/video-collection/freestylemac";
import FreestylewithbrostwoVideo from "./pages/video-collection/freestylewithbrostwo";
import FreestylewithbrosoneVideo from "./pages/video-collection/freestylewithbrosone";
import HerewithmeVideo from "./pages/video-collection/herewithme";
import SecretofindustryVideo from "./pages/video-collection/secretofindustry";
