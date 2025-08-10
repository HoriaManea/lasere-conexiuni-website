import React, { useState } from "react";
import styles from "./Navbar.module.css";
import {
  FaBars,
  FaTimes,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link className={styles.logo} to="/">
          L Conex
        </Link>

        <button
          className={styles.menuToggle}
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <ul className={`${styles.navLinks} ${menuOpen ? styles.active : ""}`}>
          <li>
            <Link to="/desprenoi">Despre Noi </Link>
          </li>
          <li>
            <Link to="/evenimente">Evenimente</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/echipa">Echipa</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        <div className={styles.socials}>
          <a
            href="https://www.facebook.com/profile.php?id=61553925385272"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.instagram.com/lasereconexiuni/"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/company/lasere-conexinui/posts/?feedView=all"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </nav>
  );
}
