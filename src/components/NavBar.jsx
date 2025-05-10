import React, { useState } from "react";
import Styles from "./NavBar.module.css";
import Avatar from "@mui/material/Avatar";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={Styles.NavBarContainer}>
      <div className={Styles.User}>
        <Avatar src="/broken-image.jpg" />
        <p>Marketing Association NZ</p>
      </div>

      <div className={Styles.Links}>
        <a href="">HOME</a>
        <a href="">ABOUT</a>
        <a href="">TEAM</a>
        <button>LOGIN</button>
      </div>

      <div className={Styles.Hamburger} onClick={() => setMenuOpen(!menuOpen)}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      {menuOpen && (
        <div className={Styles.MobileMenu}>
          <a href="">HOME</a>
          <a href="">ABOUT</a>
          <a href="">TEAM</a>
          <button>LOGIN</button>
        </div>
      )}
    </div>
  );
}
