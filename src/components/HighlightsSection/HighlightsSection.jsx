import React from "react";
import styles from "./HighlightsSection.module.css";
import innovationImg from "../../assets/Gaming-Awards-2019-Photo-by-Shannon-Johnston.jpeg"; // înlocuiește cu imaginea reală
import performanceImg from "../../assets/Gaming-Awards-2019-Photo-by-Shannon-Johnston.jpeg"; // înlocuiește cu imaginea reală

export default function HighlightsSection() {
  return (
    <section className={styles.highlights}>
      <h2 className={styles.title}>HIGHLIGHTS FROM 2025</h2>
      <div className={styles.cards}>
        {/* Card 1 */}
        <div className={`${styles.card} ${styles.yellowCard}`}>
          <div className={styles.textArea}>
            <h3>LASERE CONEXIUNI 2025</h3>
            <button>SPECTACOLE ȘI PROIECȚII LASER INOVATOARE</button>
          </div>
          <div className={styles.imageWrapper}>
            <img src={innovationImg} alt="SXSW Innovation Awards" />
          </div>
        </div>

        {/* Card 2 */}
        <div className={`${styles.card} ${styles.purpleCard}`}>
          <div className={styles.textArea}>
            <h3>LASERE CONEXIUNI 2025</h3>
            <button>SPECTACOLE ȘI PROIECȚII LASER INOVATOARE</button>
          </div>
          <div className={styles.imageWrapper}>
            <img src={performanceImg} alt="SXSW 2025 Performances" />
          </div>
        </div>
      </div>

      {/* Butonul din dreapta sus */}
      <button className={styles.youtubeBtn}>
        WATCH 2025 SESSIONS ON YOUTUBE
      </button>
    </section>
  );
}
