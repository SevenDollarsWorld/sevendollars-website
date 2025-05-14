import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Logo from "../components/Logo";
import "../style.css";
import { useContext } from "react";
import { ThemeContext } from "../App"; // 注意路徑

function MusicCollection() {
  const { theme } = useContext(ThemeContext);
  const albums = [
    {
      title: "SEVEN DOLLARS - Still Childish Album",
      cover: "/stillchildish-cover-800x800.jpg",
      path: "/music-collection/stillchildish",
    },
    {
      title: "SEVEN DOLLARS - Stars, Planet, Universe Album",
      cover: "/spu-cover.jpg",
      path: "/music-collection/starsplanetuniverse",
    },
    {
      title: "SEVEN DOLLARS - Stars, Planet, Universe Album",
      cover: "/oceancover.jpg",
      path: "/music-collection/ocean",
    },
    {
      title: "Seven Dollars - Raporatory Album",
      cover: "/raporatory.jpg",
      path: "/music-collection/raporatory",
    },
    // 之後可在這邊新增更多作品
  ];

  const singlesList = [
    {
      title: "Seven Dollars - 星宇夢 Intro Music Video",
      cover: "/intro.jpeg",
      path: "/music-collection/spuintro",
    },
    {
      title: "SEVEN DOLLARS - Make It",
      cover: "/makeit.png",
      path: "/music-collection/makeit",
    },
    {
      title: "SEVEN DOLLARS - All My Fault",
      cover: "/allmyfault.jpg",
      path: "/music-collection/allmyfault",
    },
    {
      title: "SEVEN DOLLARS - I'm Done",
      cover: "/imdonecover.jpg",
      path: "/music-collection/imdone",
    },
    {
      title: "Seven Dollars - 彌留 Dying Music Video",
      cover: "/dead.jpg",
      path: "/music-collection/deadsingle",
    },
    {
      title: "Seven Dollars - Never Regret ft. Drordie",
      cover: "/neverregret.jpg",
      path: "/music-collection/neverregret",
    },
    {
      title: "Seven Dollars - Tell Me ft. Drordie",
      cover: "/tellme.jpeg",
      path: "/music-collection/tellme",
    },
    {
      title: "Seven Dollars - Fake Love",
      cover: "/fakelove.jpg",
      path: "/music-collection/fakelove",
    },
    {
      title: "Seven Dollars - Real Sound",
      cover: "/realsound.jpg",
      path: "/music-collection/realsound",
    },
    {
      title:
        "Seven Dollars - 夢魘後的魔鬼The Demon After The Nightmare Music Video",
      cover: "/tdatn.jpg",
      path: "/music-collection/tdatn",
    },
    {
      title: "Seven Dollars - We Gon Be Alright",
      cover: "/wegonbealright.jpg",
      path: "/music-collection/wegonbealright",
    },
    {
      title: "Seven Dollars - Meteor Music Video",
      cover: "/meteor.jpg",
      path: "/music-collection/meteor",
    },
    {
      title: "Seven Dollars - 2 AM Music Video",
      cover: "/2am.jpg",
      path: "/music-collection/2am",
    },
    {
      title: "Seven Dollars - Hold My Smoke",
      cover: "/hms.jpg",
      path: "/music-collection/holdmysmoke",
    },
    {
      title: "Seven Dollars - 宿舍 Dorm Music Video",
      cover: "/dorm.jpg",
      path: "/music-collection/dorm",
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
      <section className="album-section">
        <div className="album-wrapper">
          <div className="album-container">
            <h2 className="section-title">Albums</h2>
            <div className="album-grid">
              {albums.map((album, index) => (
                <Link to={album.path} className="album-box" key={index}>
                  <div
                    className="album-thumb"
                    style={{ backgroundImage: `url(${album.cover})` }}
                  >
                    <div className="album-title">{album.title}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="album-section">
        <div className="album-wrapper">
          <div className="album-container">
            <h2 className="section-title">Singles</h2>
            <div className="album-grid">
              {singlesList.map((single, index) => (
                <Link to={single.path} className="album-box" key={index}>
                  <div
                    className="album-thumb"
                    style={{ backgroundImage: `url(${single.cover})` }}
                  >
                    <div className="album-title">{single.title}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="music-page"></div>

      <Logo />
      <Footer />
    </div>
  );
}

export default MusicCollection;
