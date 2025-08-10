import React from "react";
import styles from "./Footer.module.css";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaSpotify,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";
import { GiButterfly } from "react-icons/gi";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.logo}>L CONEX</div>

          <div className={styles.linksSection}>
            <div>
              <h4 className={styles.sectionTitle}>COMPANY</h4>
              <ul>
                <li>
                  <a href="#">Despre Noi</a>
                </li>
                <li>
                  <a href="#">Evenimente</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Echipa</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className={styles.sectionTitle}>PROPERTIES</h4>
              <ul>
                <li>
                  <a href="#">EXEMPLU</a>
                </li>
                <li>
                  <a href="#">EXEMPLU</a>
                </li>
                <li>
                  <a href="#">EXEMPLU</a>
                </li>
                <li>
                  <a href="#">EXEMPLU</a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className={styles.sectionTitle}>RESOURCES</h4>
              <ul>
                <li>
                  <a href="#">Press Center</a>
                </li>
                <li>
                  <a href="#">Press Center</a>
                </li>
                <li>
                  <a href="#">Press Center</a>
                </li>
                <li>
                  <a href="#">Press Center</a>
                </li>
              </ul>
            </div>
          </div>

          <div className={styles.newsletter}>
            <p>Sign up for event updates*</p>
            <div className={styles.inputWrapper}>
              <input type="text" />
              <button>SUBMIT →</button>
            </div>
            <a href="#">See all newsletters.</a>
          </div>
        </div>

        <div className={styles.socials}>
          <GiButterfly />
          <FaFacebookF />
          <FaInstagram />
          <FaLinkedinIn />
          <FaSpotify />
          <FaTiktok />
          <FaYoutube />
        </div>

        <p className={styles.copyright}>
          © 2018 - 2025 SXSW, LLC. SXSW®, SXSW EDU®, and South by Southwest® are
          trademarks owned by SXSW, LLC. Any unauthorized use of these names, or
          variations of these names, is a violation of state, federal, and
          international trademark laws.
        </p>

        <div className={styles.bottomLinks}>
          <a href="#">Trademark Guidelines</a>
          <a href="#">Copyright Notice</a>
          <a href="#">Terms of Use</a>
          <a href="#">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}
