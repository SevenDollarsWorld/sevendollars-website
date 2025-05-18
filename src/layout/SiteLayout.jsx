import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Logo from "../components/Logo";
import { useContext } from "react";
import { ThemeContext } from "../App";
import ThemeSelector from "../components/ThemeSelector";
import LanguageSelector from "../components/LanguageSelector";
import { useTranslation } from "react-i18next";

export default function SiteLayout() {
  const { theme, setThemeName } = useContext(ThemeContext);
  const { t } = useTranslation();

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ background: theme.gradient }}
    >
      {/* Logo + Nav Header */}
      <header className="relative w-full bg-transparent">
        <div className="max-w-screen-xl mx-auto flex flex-wrap items-center justify-between p-4 sm:p-6">
          <Logo />
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
        <div className="absolute top-4 right-4 flex gap-2">
          <ThemeSelector onThemeChange={setThemeName} />
          <LanguageSelector />
        </div>
      </header>

      {/* Page Content */}
      <main className="flex-grow">
        
          <Outlet />
        
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
