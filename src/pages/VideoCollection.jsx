import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Logo from "../components/Logo";
import "../style.css";
import { useContext } from "react";
import { ThemeContext } from "../App"; // 注意路徑
import { useTranslation } from "react-i18next";

function VideoCollection() {
  const { theme } = useContext(ThemeContext);
  const { t } = useTranslation();
  const musicvideos = [

    {
      title: "西門發送專輯企劃 Edit By YB",
      cover: "/ximen.jpg",
      path: "/video-collection/ximen",
    },
    {
      title: "SEVEN DOLLARS - Still Childish",
      cover: "/stillchildish-cover.jpg",
      path: "/video-collection/stillchildish",
    },
    {
      title: "Seven To Smoke Dance Challenge",
      cover: "/seventosmoke.jpg",
      path: "/video-collection/seventosmoke",
    },
    {
      title: "Seven To Smoke Feat.YCDC",
      cover: "/stsdc2.jpg",
      path: "/video-collection/stsdctwo"
    },
    {
      title: "SPU Series EP.1",
      cover: "/staywithyoureel.jpg",
      path: "/video-collection/spuseriespartone"
    },
    {
      title: "夢魘後的魔鬼 前導片 Shot by YB",
      cover: "/tdatnreels.jpg",
      path: "/video-collection/tdatnreels"
    },
    {
      title: "慣老闆Remix Challenge",
      cover: "/badhabitremix.jpg",
      path: "/video-collection/bhremix"
    },

  ];
  const dancevideos = [

    {
      title: "Seven To Smoke Dance Challenge",
      cover: "/seventosmoke.jpg",
      path: "/video-collection/seventosmoke",
    },
    {
      title: "Seven To Smoke Feat.YCDC",
      cover: "/stsdc2.jpg",
      path: "/video-collection/stsdctwo"
    },
    {
      title: "三基團聚跳Freestyle Dance",
      cover: "/dancewithbros1.jpg",
      path: "/video-collection/freestylewithbrosone",
    },
    {
      title: "三基團聚跳Freestyle Dance",
      cover: "/dancewithbros.jpg",
      path: "/video-collection/freestylewithbrostwo",
    },
    {
      title: "Kendrick Lamar - Euphoria Freestyle Dance",
      cover: "/dancewithkdot.jpg",
      path: "/video-collection/euphoriadance"
    },
    {
      title: "Mac Miller 5 Dollar Pony Ride Freestyle Dance",
      cover: "/dancewithmac.jpg",
      path: "/video-collection/freestylemac",
    },
  ];
  const foodvideos = [
    {
      title: "七元食堂 Day 5",
      cover: "/food5.jpg",
      path: "/video-collection/food5",
    },
    {
      title: "七元食堂 Day 4",
      cover: "/food4.jpg",
      path: "/video-collection/food4",
    },
    {
      title: "七元食堂 Day 3",
      cover: "/food3.jpg",
      path: "/video-collection/food3",
    },
    {
      title: "七元食堂 Day 2",
      cover: "/food2.jpg",
      path: "/video-collection/food2",
    },
    {
      title: "七元食堂 Day 1",
      cover: "/food1.jpg",
      path: "/video-collection/food1",
    },
  ];
  const funnyvideos = [

    {
      title: "POV:業界機密 我們都知道我們要的是什麼客戶",
      cover: "/secretofindustry.jpg",
      path: "/video-collection/secretofindustry",
    },
    {
      title: "當我第一次聽到頑童-OGS",
      cover: "/ogstroll.jpg",
      path: "/video-collection/ogstroll"
    },
    {
      title: "POV:各種舞者的起床方式Part2",
      cover: "/everystyleofwakingupp2.jpg",
      path: "/video-collection/wakeupstyletwo"
    },
    {
      title: "POV:各種舞者的起床方式Part1",
      cover: "/everystyleofwakingupp1.jpg",
      path: "/video-collection/wakeupstyleone"
    },
    {
      title: "Vogue Viral Video",
      cover: "/vogue.jpg",
      path: "/video-collection/vogueviralvideo",
    },

    {
      title: "Team Tomodachi Remix",
      cover: "/tomodachitroll.jpg",
      path: "/video-collection/tomodachi"
    },
    {
      title: "怎麼追女生",
      cover: "/bees.jpg",
      path: "/video-collection/bees"
    },
    {
      title: "POV:當你表哥的婚禮快遲到",
      cover: "/broswedding.jpg",
      path: "/video-collection/broswedding"
    },
  ];
  const othervideos = [
    {
      title: "Here With Me Selfmade Video",
      cover: "/herewithmedrama.jpg",
      path: "/video-collection/herewithme",
    },
    {
      title: "Vogue Viral Video",
      cover: "/vogue.jpg",
      path: "/video-collection/vogueviralvideo",
    },
  ];

  return (
    <div className="basic-page" style={{ background: theme.background }}>
      <div className="header-banner">
        <img
          src={theme.headerBg}
          alt="Header Background"
          className="header-image"
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

      <section className="video-section">
        <div className="video-container">
          <h2 className="section-title">{t('videoCollection.funny')}</h2>
          <div className="video-grid">
            {funnyvideos.map((funnyvideo, index) => (
              <Link to={funnyvideo.path} className="video-box" key={index}>
                <div
                  className="video-thumb"
                  style={{ backgroundImage: `url(${funnyvideo.cover})` }}
                >
                  <div className="video-title">{funnyvideo.title}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="video-section">
        <div className="video-container">
          <h2 className="section-title">{t('videoCollection.music')}</h2>
          <div className="video-grid">
            {musicvideos.map((musicvideo, index) => (
              <Link to={musicvideo.path} className="video-box" key={index}>
                <div
                  className="video-thumb"
                  style={{ backgroundImage: `url(${musicvideo.cover})` }}
                >
                  <div className="video-title">{musicvideo.title}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="video-section">
        <div className="video-container">
          <h2 className="section-title">{t('videoCollection.food')}</h2>
          <div className="video-grid">
            {foodvideos.map((foodvideo, index) => (
              <Link to={foodvideo.path} className="video-box" key={index}>
                <div
                  className="video-thumb"
                  style={{ backgroundImage: `url(${foodvideo.cover})` }}
                >
                  <div className="video-title">{foodvideo.title}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="video-section">
        <div className="video-container">
          <h2 className="section-title">{t('videoCollection.dance')}</h2>
          <div className="video-grid">
            {dancevideos.map((dancevideo, index) => (
              <Link to={dancevideo.path} className="video-box" key={index}>
                <div
                  className="video-thumb"
                  style={{ backgroundImage: `url(${dancevideo.cover})` }}
                >
                  <div className="video-title">{dancevideo.title}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="video-section">
        <div className="video-container">
          <h2 className="section-title">{t('videoCollection.other')}</h2>
          <div className="video-grid">
            {othervideos.map((othervideo, index) => (
              <Link to={othervideo.path} className="video-box" key={index}>
                <div
                  className="video-thumb"
                  style={{ backgroundImage: `url(${othervideo.cover})` }}
                >
                  <div className="video-title">{othervideo.title}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Logo />
      <Footer />
    </div>
  );
}

export default VideoCollection;
