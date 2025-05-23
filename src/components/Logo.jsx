import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from "react";
import { ThemeContext } from "../App";

function Logo() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="absolute top-2 left-2 sm:top-4 sm:left-4 z-50">
      <Link to="/">
        <img
          src={theme.themeLogo}
          alt="logo"
          className="w-16 sm:w-24 h-auto hover:drop-shadow-[0_0_8px_white] transition-all"
        />
      </Link>
    </div>
  );
}

export default Logo;
