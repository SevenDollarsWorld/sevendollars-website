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
    textkey: "aboutContent.partTwo"
  },
  {
    bg: "/about/bounceback3.jpeg",
    textkey: "aboutContent.partThree"
  },
  {
    bg: "/about/bounceback.jpeg",
    textkey: "aboutContent.partFour"
  },
  {
    bg: "/about/bounceback2.jpeg",
    textkey: "aboutContent.partFive"
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
  const fallbackBg = "#b0e0e6";
  const fallbackGradient = "linear-gradient(to bottom, #ffffffcc, #ddddddcc)";

  const [backgroundColor, setBackgroundColor] = useState(fallbackBg);
  const [cardGradient, setCardGradient] = useState(fallbackGradient);

  useEffect(() => {
    if (themeCtx?.theme?.background) {
      setBackgroundColor(themeCtx.theme.background);
    }
    if (themeCtx?.theme?.gradient) {
      setCardGradient(themeCtx.theme.gradient);
    }
  }, [themeCtx]);

  return (
    <div className="flex flex-col w-full">
      {sections.map((section, index) => (
        <div
          key={index}
          className="relative w-full h-screen transition-all duration-1000"
          style={{
            backgroundColor,
            backgroundImage: `url(${section.bg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center px-4 pt-20 pb-10 z-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="w-[90%] sm:w-[80%] md:w-[60%] rounded-2xl p-6 sm:p-8 shadow-xl backdrop-blur-xl text-white transition-all"
              style={{
                background: cardGradient,
                backgroundBlendMode: "overlay",
                border: "1px solid rgba(255,255,255,0.2)",
                boxshadow: "0 0 8px rgba(157, 78, 221, 0.4)",
                textShadow: "0 1px 4px rgba(0,0,0,0.6)"
              }}
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
