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
      {sections.map((section, index) => (
        <div
          key={index}
          className="relative w-full h-screen transition-all duration-1000"
          style={{
            backgroundImage: `${gradient}, url(${section.bg})`,
            backgroundBlendMode: "overlay",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute inset-0 flex items-end justify-center pb-24">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="w-[90%] sm:w-[80%] md:w-[60%] rounded-xl backdrop-blur-sm bg-white/60 dark:bg-black/40 p-6 sm:p-8 shadow-xl text-zinc-900 dark:text-zinc-100 hover:shadow-2xl transition-all"
              style={{ background: gradient }}
            >
              {index === 0 ? (
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
              ) : (
                <p className="text-base sm:text-lg leading-relaxed whitespace-pre-line text-center md:text-left">
                  {section.textkey ? t(section.textkey) : section.text}
                </p>
              )}
            </motion.div>
          </div>
        </div>
      ))}
    </div>
  );
}
