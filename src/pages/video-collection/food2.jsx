
import React, { useEffect } from 'react'
import '../../style.css'
import Footer from '../../components/Footer'
import Logo from '../../components/Logo'
import { useContext } from "react";
import { ThemeContext } from "../../App"; // 注意路徑
import { useTranslation } from "react-i18next";

function Food2Video() {
  const { theme } = useContext(ThemeContext);
  const { t } = useTranslation();
  useEffect(() => {
        // 檢查 ig embed.js 是否已載入過，避免重複載
        if (!window.instgrm) {
          const script = document.createElement('script')
          script.setAttribute('src', '//www.instagram.com/embed.js')
          script.setAttribute('async', '')
          document.body.appendChild(script)
        } else {
          window.instgrm.Embeds.process()
        }
      }, [])

  return (
    <div className="video-detail-page" style={{ background: theme.gradient }}>
    <div className="relative w-full">
        <img
          src={theme.headerBg}
          alt="Header Background"
          className="w-full h-[40vh] object-cover"
        />

        <nav className="absolute top-8 left-1/2 -translate-x-1/2 z-10 flex flex-wrap justify-center gap-3 text-xs sm:text-sm md:text-base bg-black/40 backdrop-blur-sm px-6 py-2 rounded-xl text-white">
          <a
            href="/"
            className="transition-all px-3 py-1 rounded hover:bg-white hover:text-black hover:font-bold"
          >
            {t("home")}
          </a>
          <a
            href="/music-collection"
            className="transition-all px-3 py-1 rounded hover:bg-white hover:text-black hover:font-bold"
          >
            {t("music")}
          </a>
          <a
            href="/video-collection"
            className="transition-all px-3 py-1 rounded hover:bg-white hover:text-black hover:font-bold"
          >
            {t("video")}
          </a>
          <a
            href="/about"
            className="transition-all px-3 py-1 rounded hover:bg-white hover:text-black hover:font-bold"
          >
            {t("about")}
          </a>
          <a
            href="/contact"
            className="transition-all px-3 py-1 rounded hover:bg-white hover:text-black hover:font-bold"
          >
            {t("contact")}
          </a>
        </nav>
      </div>

      <div className="video-detail-content">
        <h1>七元食堂 Day 2</h1>
        <p>這是 的 IG Reel 影像頁面。</p>

        <blockquote className="instagram-media"
          data-instgrm-permalink="https://www.instagram.com/reel/DJRkb8Uz7iz/?utm_source=ig_embed&amp;utm_campaign=loading"
          data-instgrm-version="14"
          style={{ margin: '0 auto', maxWidth: '540px' }}
        ></blockquote>
        <script async src="//www.instagram.com/embed.js"></script>
      </div>
      <Logo />
      <Footer />
    </div>
  )
} 

export default Food2Video
