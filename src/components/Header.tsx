import { FunctionComponent } from "react";
import Logo from "./Logo";
import styles from "./Header.module.css";

import ThemeToggle from "./ThemeToggle";

export type HeaderType = {
  className?: string;
};

const Header: FunctionComponent<HeaderType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.homepageInner, className].join(" ")}>
      <header className={styles.logoParent}>
        <Logo
          propHeight="unset"
          propWidth="unset"
          b="LH"
          propMargin="unset"
          propMinWidth="28px"
          propTextDecoration="none"
          brooklyn="Lasith Haputhanthri"
          propColor="#132238"
        />
        <div className={styles.navigation}>
          <a href="#HeroSection" className={styles.navLinks}>Home</a>
          <a href="#Achievements" className={styles.navLinks}>Awards</a>
          <a href="#Portfolio" className={styles.navLinks}>Projects</a>
          <a href="#WorkProcessCard" className={styles.navLinks}>Tools</a>
          <a href="#Services" className={styles.navLinks}>My Interests</a>
          <ThemeToggle />
          <a href="#ContactSection" className={styles.contactButton}>Contact</a>
        </div>
      </header>
    </div>
  );
};

export default Header;
