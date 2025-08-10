import React from "react";
import styles from "./VideoMask.module.css";
import videoSrc from "./video.mp4"; // schimbă cu calea reală a fișierului video

const VideoMask = () => {
  return (
    <div className={styles.heroSection}>
      {/* Video-ul */}
      <video autoPlay muted loop playsInline className={styles.video}>
        <source src={videoSrc} type="video/mp4" />
      </video>

      {/* Masca fluorescentă */}
      <svg
        className={styles.mask}
        viewBox="0 0 1920 1080"
        preserveAspectRatio="none"
      >
        <defs>
          <mask id="waveMask" maskUnits="userSpaceOnUse">
            {/* Fundal negru (totul ascuns) */}
            <rect width="100%" height="100%" fill="black" />

            {/* Valul de sus: zona neagră care taie (invers, dar păstrăm cum era) */}
            <path fill="white">
              <animate
                attributeName="d"
                dur="6s"
                repeatCount="indefinite"
                values="
        M0,200 Q240,100 480,200 T960,200 T1440,200 T1920,200 L1920,0 L0,0 Z;
        M0,220 Q240,140 480,220 T960,180 T1440,220 T1920,180 L1920,0 L0,0 Z;
        M0,200 Q240,100 480,200 T960,200 T1440,200 T1920,200 L1920,0 L0,0 Z
      "
              />
            </path>

            {/* Valul de jos: zona albă vizibilă */}
            <path fill="white">
              <animate
                attributeName="d"
                dur="6s"
                repeatCount="indefinite"
                values="
        M0,880 Q240,980 480,880 T960,880 T1440,880 T1920,880 L1920,1080 L0,1080 Z;
        M0,900 Q240,940 480,900 T960,920 T1440,900 T1920,920 L1920,1080 L0,1080 Z;
        M0,880 Q240,980 480,880 T960,880 T1440,880 T1920,880 L1920,1080 L0,1080 Z
      "
              />
            </path>
          </mask>
        </defs>

        {/* Culoarea fluorescentă vizibilă prin mască */}
        <rect width="100%" height="100%" fill="#e0ff66" mask="url(#waveMask)" />
      </svg>
    </div>
  );
};

export default VideoMask;
