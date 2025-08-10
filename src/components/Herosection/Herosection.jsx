import React from "react";
import styles from "./HeroSection.module.css";

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h1>PANELPICKER COMMUNITY VOTING IS NOW OPEN</h1>
        <button className={styles.cta}>VOTE ON YOUR FAVORITE SESSIONS</button>
      </div>
    </section>
  );
}
