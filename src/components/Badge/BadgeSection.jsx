import React from "react";
import styles from "./BadgeSection.module.css";

export default function BadgeSection() {
  return (
    <section className={styles.badgeSection}>
      <div className={styles.header}>
        <h2>BADGES GO ON SALE OCTOBER 1, 2025</h2>
        <button className={styles.notifyBtn}>
          SIGN UP TO BE NOTIFIED BY EMAIL
        </button>
      </div>

      <div className={styles.cards}>
        <div className={`${styles.card} ${styles.innovation}`}>
          <div className={styles.overlay}></div>
          <div className={styles.cardText}>
            <span className={styles.small}>EXPERIENTA</span>
            <h3>EVENIMENTE</h3>
          </div>
        </div>

        <div className={`${styles.card} ${styles.music}`}>
          <div className={styles.overlay}></div>
          <div className={styles.cardText}>
            <span className={styles.small}>ECHIPA</span>
            <h3>ECHIPA NOASTRA</h3>
          </div>
        </div>

        <div className={`${styles.card} ${styles.film}`}>
          <div className={styles.overlay}></div>
          <div className={styles.cardText}>
            <span className={styles.small}>LASERE CONEXIUNI</span>
            <h3>DESPRE NOI</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
