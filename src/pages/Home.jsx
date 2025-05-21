import React, { useContext } from "react";
import "../style.css";
import { ThemeContext } from "../App";
import { useTranslation } from "react-i18next";

function Home() {
  const { theme, themeName } = useContext(ThemeContext);
  const { t } = useTranslation();

  // 主題對應的 YouTube 連結
  const themeYouTubeLinks = {
    stillchildish: "https://distrokid.com/hyperfollow/sevendollars/still-childish",
    starsplanetuniverse: "https://distrokid.com/hyperfollow/sevendollars/-planet-universe-dream",
    ocean: "https://distrokid.com/hyperfollow/sevendollars/ocean",
  };

  const youtubeLink = themeYouTubeLinks[themeName] || "https://www.youtube.com/@SevenDollars7yuan";

  return (
    <div className="home-container relative w-full h-screen overflow-hidden">
      {/* 點擊背景導向 YouTube */}
      <a href={youtubeLink} target="_blank" rel="noopener noreferrer">
        <video
          key={theme.homeVideo}
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0 cursor-pointer"
        >
          <source src={theme.homeVideo} type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </a>

      {/* 按鈕與 icon 整合區塊 */}
      <div className="absolute bottom-20 right-4 sm:right-8 md:right-45 z-10 flex flex-col items-end gap-3 bg-white/40 backdrop-blur-md rounded-xl p-4">

        {/* 按鈕們 */}
        <div className="flex flex-col items-end gap-2">
          <a href="/about" className="text-white text-sm sm:text-base hover:font-bold hover:bg-white hover:text-black px-3 py-1 rounded transition">
            {t("about")}
          </a>
          <a href="/music-collection" className="text-white text-sm sm:text-base hover:font-bold hover:bg-white hover:text-black px-3 py-1 rounded transition">
            {t("music")}
          </a>
          <a href="/video-collection" className="text-white text-sm sm:text-base hover:font-bold hover:bg-white hover:text-black px-3 py-1 rounded transition">
            {t("video")}
          </a>
        </div>

        {/* 社群 icon */}
        <div className="flex gap-3 mt-3">
          <a href="https://www.instagram.com/sevendollars_7yuan/" target="_blank" rel="noopener noreferrer">
            <img src="/instagram.png" alt="Instagram" className="w-6 h-6 sm:w-7 sm:h-7 hover:scale-110 transition" />
          </a>
          <a href="https://www.youtube.com/@SevenDollars7yuan" target="_blank" rel="noopener noreferrer">
            <img src="/youtube.png" alt="YouTube" className="w-6 h-6 sm:w-7 sm:h-7 hover:scale-110 transition" />
          </a>
          <a href="https://open.spotify.com/artist/1O0t24ZmuxmnWvXlY802K7?si=NdLE65zoToSKIys8Ocir4g" target="_blank" rel="noopener noreferrer">
            <img src="/spotify.png" alt="Spotify" className="w-6 h-6 sm:w-7 sm:h-7 hover:scale-110 transition" />
          </a>
          <a href="https://music.apple.com/us/artist/seven-dollars/1521991760" target="_blank" rel="noopener noreferrer">
            <img src="/applemusic.png" alt="Apple Music" className="w-6 h-6 sm:w-7 sm:h-7 hover:scale-110 transition" />
          </a>
          <a href="https://streetvoice.com/HOPENG/" target="_blank" rel="noopener noreferrer">
            <img src="/streetvoice.png" alt="StreetVoice" className="w-6 h-6 sm:w-7 sm:h-7 hover:scale-110 transition" />
          </a>
          <a href="mailto:heyricky81@gmail.com" target="_blank" rel="noopener noreferrer">
            <img src="/email.png" alt="Email" className="w-6 h-6 sm:w-7 sm:h-7 hover:scale-110 transition" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
