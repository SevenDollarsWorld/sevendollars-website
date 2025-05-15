import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from "react";
import { ThemeContext } from "../App";

function Logo() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="absolute top-4 left-4 z-50">
      <Link to="/">
        <img
          src={theme.themeLogo}
          alt="logo"
          className="w-24 h-auto hover:drop-shadow-[0_0_8px_white] transition-all"
        />
      </Link>
    </div>
  );
}

export default Logo;
