import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Logo from "../components/Logo";
import "../style.css";
import { useContext } from "react";
import { ThemeContext } from "../App"; // 注意路徑

function VideoCollection() {
  const { theme } = useContext(ThemeContext);
  const musicvideos = [
    {
      title: "西門發送專輯企劃 Edit By YB",
      cover: "/ximen.jpg",
      path: "/video-collection/ximen",
    },
    {
      title: "Seven To Smoke Dance Challenge",
      cover: "/seventosmoke.jpg",
      path: "/video-collection/seventosmoke",
    },
    {
      title: "SEVEN DOLLARS - Still Childish",
      cover: "/stillchildish-cover.jpg",
      path: "/video-collection/stillchildish",
    },
  ];
  const dancevideos = [
    {
      title: "Seven To Smoke Dance Challenge",
      cover: "/seventosmoke.jpg",
      path: "/video-collection/seventosmoke",
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
      title: "Vogue Viral Video",
      cover: "/vogue.jpg",
      path: "/video-collection/vogueviralvideo",
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
    <div className="basic-page" style={{ background: theme.gradient }}>
      <div className="header-banner">
        <img
          src={theme.headerBg}
          alt="Header Background"
          className="header-image"
        />
        <nav className="nav-bar">
          <a href="/">Home</a>
          <a href="/music-collection">Music Collection</a>
          <a href="/video-collection">Video Collection</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </nav>
      </div>

      <section className="video-section">
        <div className="video-container">
          <h2 className="section-title">搞笑影片</h2>
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
          <h2 className="section-title">音樂相關影片</h2>
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
          <h2 className="section-title">七元食堂</h2>
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
          <h2 className="section-title">跳舞相關影片</h2>
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
          <h2 className="section-title">其他影片</h2>
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

      <div className="music-page"></div>
      <Logo />
      <Footer />
    </div>
  );
}

export default VideoCollection;
