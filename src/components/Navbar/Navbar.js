import { useState } from "react";
import Link from "next/link";
import Image from 'next/image';
import styles from "./Navbar.module.css";
import favicon from "../../../public/favicon.ico"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <Link className={styles.link} href="/">
          <Image
            src={favicon}
            alt="logo"
          />
        </Link>
      </div>
      <button
        className={styles.menuBtn}
        onClick={toggle}
        aria-label="Menu"
        aria-expanded={isOpen ? "true" : "false"}
      >
        <svg viewBox="0 0 24 24" width="24" height="24">
          <path
            fill="currentColor"
            d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
          />
        </svg>
      </button>

      <div className={`${styles.menu} ${isOpen ? styles.open : ""}`}>
        <Link className={styles.link} href="/">
          Home
        </Link>
        <Link className={styles.link} href="/categories">
          Categories
        </Link>
        <Link className={styles.link} href="/search">
          Search
        </Link>
        <Link className={styles.link} href="/profile">
            Profile
          </Link>
      </div>

      <div className={styles.links}>
          <Link className={styles.link} href="/">
              Home
            </Link>
            <Link className={styles.link} href="/categories">
              Categories
            </Link>
            <Link className={styles.link} href="/search">
              Search
            </Link>
            <Link className={styles.profileLink} href="/profile">
              Profile
            </Link>
      </div>
    </nav>
  );
};

export default Navbar;
