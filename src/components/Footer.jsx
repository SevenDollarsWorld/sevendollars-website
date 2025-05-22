import React, { useContext } from 'react'
import '../style.css'
import { ThemeContext } from '../App'

function Footer() {
  const { theme } = useContext(ThemeContext);
  const isWhite = theme.iconColor === "white";

  return (
    <footer
      className="common-footer"
      style={{ backgroundColor: theme?.background || ' #1A2238' }}
    >
      <a href="https://www.instagram.com/sevendollars_7yuan/" target="_blank">
        <img
          src={isWhite ? "/instagram_white.png" : "/instagram.png"}
          alt="Instagram"
        />
      </a>
      <a href="https://www.youtube.com/@SevenDollars7yuan" target="_blank">
        <img src={isWhite ? "/youtube_white.png" : "/youtube.png"} alt="YouTube" />
      </a>
      <a href="https://open.spotify.com/artist/1O0t24ZmuxmnWvXlY802K7?si=NdLE65zoToSKIys8Ocir4g" target="_blank">
        <img src={isWhite ? "/spotify_white.png" : "/spotify.png"} alt="Spotify" />
      </a>
      <a href="https://music.apple.com/us/artist/seven-dollars/1521991760" target="_blank">
        <img src={isWhite ? "/music_white.png" : "/applemusic.png"} alt="Apple Music" />
      </a>
      <a href="https://streetvoice.com/HOPENG/" target="_blank">
        <img src="/streetvoice.png" alt="StreetVoice" />
      </a>
      <a href="mailto:heyricky81@gmail.com">
        <img src={isWhite ? "/mail_white.png" : "/email.png"} alt="Email" />
      </a>
    </footer>
  )
}

export default Footer
