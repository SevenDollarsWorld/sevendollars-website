
import React from 'react'
import '../../style.css'
import Footer from '../../components/Footer'
import Logo from '../../components/Logo'
import { useContext } from "react";
import { ThemeContext } from "../../App";
import { useTranslation } from 'react-i18next'; // 注意路徑

function TdatnMusic() {
  const { theme } = useContext(ThemeContext);
  const { t } = useTranslation();
  return (
  <div className="music-detail-page" style={{ background: theme.gradient }}>
      {/* 頁面頭部 */}
      <div className="relative w-full">
        <img
          src={theme.headerBg}
          alt="Header Background"
          className="w-full h-[40vh] object-cover"
        />
        <nav className="absolute top-8 left-1/2 -translate-x-1/2 z-10 flex flex-wrap justify-center gap-3 text-xs sm:text-sm md:text-base bg-black/40 backdrop-blur-sm px-6 py-2 rounded-xl text-white">
  <a href="/" className="transition-all px-3 py-1 rounded hover:bg-white hover:text-black hover:font-bold">{t("home")}</a>
  <a href="/music-collection" className="transition-all px-3 py-1 rounded hover:bg-white hover:text-black hover:font-bold">{t("music")}</a>
  <a href="/video-collection" className="transition-all px-3 py-1 rounded hover:bg-white hover:text-black hover:font-bold">{t("video")}</a>
  <a href="/about" className="transition-all px-3 py-1 rounded hover:bg-white hover:text-black hover:font-bold">{t("about")}</a>
  <a href="/contact" className="transition-all px-3 py-1 rounded hover:bg-white hover:text-black hover:font-bold">{t("contact")}</a>
</nav>

          
      </div>
      {/* 專輯內容 */}
    <div className="music-detail-page">
      <div className="music-detail-content">
        <img src="/tdatn.jpg" alt="夢魘後的魔鬼The Demon After The Nightmare Cover" className="music-cover" />
        <h1>夢魘後的魔鬼The Demon After The Nightmare</h1>
        <p>這裡是介紹內容...</p>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/wtf7qku63aY?si=EnGoxV_DuZC5gqxD" frameBorder="0" allowFullScreen></iframe>
        <iframe style={{ borderRadius: '12px' }} src="https://open.spotify.com/embed/album/3cvKdvqgppiaMat1Dw1sgU?utm_source=generator" width="100%" height="352" frameBorder="0" loading="lazy"></iframe>
      </div>
      <div className="music-page"></div>
      <Logo />
      <Footer />
    </div>
    </div>
  )
}

export default TdatnMusic
