import { useEffect, useRef, useState } from "react";
import videoSrc from "./video.mp4"; // schimbă cu calea reală a fișierului video
import styles from "./VideoMask.module.css";

export default function LazyVideo() {
  const ref = useRef(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setLoaded(true);
        observer.disconnect();
      }
    });
    observer.observe(ref.current);
  }, []);

  return (
    <div ref={ref}>
      {loaded && (
        <video autoPlay muted loop playsInline className={styles.video}>
          <source src={videoSrc} type="video/mp4" />
        </video>
      )}
    </div>
  );
}
