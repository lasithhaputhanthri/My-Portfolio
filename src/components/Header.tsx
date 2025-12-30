import { FunctionComponent } from "react";
import Logo from "./Logo";
import {
  RiHomeLine,
  RiTrophyLine,
  RiBriefcaseLine,
  RiToolsLine,
  RiLightbulbLine,
  RiMailSendLine
} from "react-icons/ri";
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
          propColor="var(--gray-900)"
        />
        <div className={styles.navigation}>
          <a href="#HeroSection" className={styles.navLinks}>
            <RiHomeLine className={styles.navIcon} />
            <span className={styles.navText}>Home</span>
          </a>
          <a href="#Achievements" className={styles.navLinks}>
            <RiTrophyLine className={styles.navIcon} />
            <span className={styles.navText}>Awards</span>
          </a>
          <a href="#Portfolio" className={styles.navLinks}>
            <RiBriefcaseLine className={styles.navIcon} />
            <span className={styles.navText}>Projects</span>
          </a>
          <a href="#WorkProcessCard" className={styles.navLinks}>
            <RiToolsLine className={styles.navIcon} />
            <span className={styles.navText}>Tools</span>
          </a>
          <a href="#Services" className={styles.navLinks}>
            <RiLightbulbLine className={styles.navIcon} />
            <span className={styles.navText}>My Interests</span>
          </a>
          <ThemeToggle />
          <a href="#ContactSection" className={styles.contactButton}>
            <span className={styles.navText}>Contact</span>
            <RiMailSendLine className={styles.navIcon} />
          </a>
        </div>
      </header>
    </div>
  );
};

export default Header;
