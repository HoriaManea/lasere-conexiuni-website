import React from "react";
import styles from "./HeroSection.module.css";

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h1>Rezervă Spectacolul Tău Laser 2025</h1>
        <button className={styles.cta}>
          DESCOPERĂ MAGIA LASERELOR CONEXIUNI
        </button>
      </div>
    </section>
  );
}
