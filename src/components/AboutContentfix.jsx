import { motion } from "framer-motion";
import React, { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { ThemeContext } from "../App";

const sections = [
  {
    bg: "/about/dance.JPEG",
    profile: "/about/profilephoto.JPG",
    textkey: "aboutContent.intro",
  },
  {
    bg: "/about/school.JPG",
    text: "這是七元的旅程片段：舞台、教室、挫敗、重生與交流。每一個場景，都是他選擇持續創作與發聲的理由。",
  },
  {
    bg: "/about/bounceback3.jpeg",
    text: "每次表演後的低潮，讓他更懂得珍惜舞台的重量與責任。",
  },
  {
    bg: "/about/bounceback.jpeg",
    text: "他曾迷失、曾懷疑，但聲音與筆仍是他的出口。",
  },
  {
    bg: "/about/bounceback2.jpeg",
    text: "他不是站在高處歌唱的人，而是與觀眾一起在低處活著的人。",
  },
  {
    bg: "/about/smallconcert.jpg",
    text: "在人群中尋找共鳴，在耳機裡找回自己。",
  },
  {
    bg: "/about/smallconcertending.jpg",
    text: "故事還沒結束，這只是七元的其中一頁。",
  },
];

export default function AboutContent() {
  const { t } = useTranslation();
  const themeCtx = useContext(ThemeContext);
  const fallbackGradient = "linear-gradient(to bottom, #b0e0e6, #004b97)";
  const [gradient, setGradient] = useState(fallbackGradient);

  useEffect(() => {
    if (themeCtx?.theme?.gradient) {
      setGradient(themeCtx.theme.gradient);
    }
  }, [themeCtx]);

  return (
    <div className="flex flex-col w-full">
      {sections.map((section, index) => {
        // 第一段：白底不帶背景圖
        if (index === 0) {
          return (
            <div key={index} className="w-full min-h-screen bg-white dark:bg-black flex items-center justify-center px-4 py-32">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="w-[90%] sm:w-[80%] md:w-[60%] backdrop-blur-sm bg-white/60 dark:bg-black/60 p-6 sm:p-8 rounded-xl shadow-xl text-zinc-900 dark:text-zinc-100"
              >
                <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
                  <img
                    src={section.profile}
                    alt="Profile"
                    className="w-36 h-36 sm:w-40 sm:h-40 rounded-full object-cover shadow-md border-2 border-white"
                  />
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-bold mb-2">
                      SEVEN DOLLARS 七元
                    </h2>
                    <p className="leading-relaxed whitespace-pre-line text-base sm:text-lg">
                      {section.textkey ? t(section.textkey) : section.text}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          );
        }

        // 其餘段：交界背景圖＋浮出卡片
        const prevBg = sections[index - 1]?.bg || "";
        const currBg = section.bg;

        return (
          <div key={index} className="relative w-full h-[140vh]">
            {/* 上半部：前一張背景圖 */}
            <div
              className="absolute top-0 h-[70vh] w-full bg-cover bg-center"
              style={{
                backgroundImage: `url(${prevBg})`,
              }}
            />
            {/* 下半部：當前背景圖 */}
            <div
              className="absolute top-[70vh] h-[70vh] w-full bg-cover bg-center"
              style={{
                backgroundImage: `url(${currBg})`,
              }}
            />

            {/* 浮出文字卡片：置中在交界 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="absolute top-[94%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-[90%] sm:w-[80%] md:w-[60%] backdrop-blur-sm bg-white/60 dark:bg-black/60 p-6 sm:p-8 rounded-xl shadow-xl text-zinc-900 dark:text-zinc-100"
              style={{ background: gradient, backgroundBlendMode: "overlay" }}
            >
              <p className="text-base sm:text-lg leading-relaxed whitespace-pre-line text-center md:text-left">
                {section.textkey ? t(section.textkey) : section.text}
              </p>
            </motion.div>
          </div>
        );
      })}
    </div>
  );
}
