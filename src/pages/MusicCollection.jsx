import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Logo from "../components/Logo";
import { useContext } from "react";
import { ThemeContext } from "../App";
import { useTranslation } from "react-i18next";

function MusicCollection() {
  const { theme } = useContext(ThemeContext);
  const { t } = useTranslation();
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
      title: "SEVEN DOLLARS - Ocean Album",
      cover: "/oceancover.jpg",
      path: "/music-collection/ocean",
    },
    {
      title: "Seven Dollars - Raporatory Album",
      cover: "/raporatory.jpg",
      path: "/music-collection/raporatory",
    },
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
    <>
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

      <div
        style={{ background: theme.background }}
        className="min-h-screen px-4 sm:px-6 md:px-12 py-10 text-zinc-100"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10">
          {t("musicCollection.albums")}
        </h2>

        <div className="flex flex-wrap justify-center gap-6 mb-15">
          {albums.map((album, index) => (
            <Link
              key={index}
              to={album.path}
              className="w-[45%] sm:w-[30%] md:w-[22%] lg:w-[23%]"

            >
              <div
                className="rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all text-white"
                style={{
                  background: theme.gradient,
                  textShadow: "0 1px 4px rgba(0,0,0,0.6)"
                }}
              >
                <img
                  src={album.cover}
                  alt={album.title}
                  className="w-full h-auto object-cover"
                />
                <div className="p-2 text-xs sm:text-sm md:text-base text-center">
                  {album.title}
                </div>
              </div>
            </Link>
          ))}
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10">
          {t("musicCollection.singles")}
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          {singlesList.map((single, index) => (
            <Link
              key={index}
              to={single.path}
              className="w-[45%] sm:w-[30%] md:w-[22%] lg:w-[23%]"
            >
              <div
                className="rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all text-white"
                style={{
                  background: theme.gradient,
                  textShadow: "0 1px 4px rgba(0,0,0,0.6)"
                }}
              >

                <img
                  src={single.cover}
                  alt={single.title}
                  className="w-full h-auto object-cover"
                />
                <div className="p-2 text-xs sm:text-sm md:text-base text-center">
                  {single.title}
                </div>
              </div>
            </Link>
          ))}
        </div>
        <Logo />
        <Footer />

      </div>
    </>
  );
}

export default MusicCollection;
