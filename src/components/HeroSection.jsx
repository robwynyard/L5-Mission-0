import React from "react";
import Styles from "./HeroSection.module.css";

export default function HeroSection() {
  return (
    <div className={Styles.HeroSectionContainer}>
      <div className={Styles.HeroText}>
        <h3>HELPING MARKETERS BE</h3>
        <h1>BRILLIANT</h1>
      </div>
      <div className={Styles.searchContainer}>
      <input type="text" className={Styles.searchInput} />
      <button className={Styles.searchButton}>Search</button>
    </div>
    </div>
  );
}
