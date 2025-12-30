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
import styles from "./Footer.module.css";

export type FooterType = {
  className?: string;
};

const Footer: FunctionComponent<FooterType> = ({ className = "" }) => {
  return (
    <div className={[styles.footer, className].join(" ")}>
      <div className={styles.footerChild} />
      <div className={styles.footerContent}>
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
        <div className={styles.siteLinks}>
          <a href="#HeroSection" className={styles.linkItems}>
            <RiHomeLine className={styles.footerIcon} />
            <span className={styles.footerText}>Home</span>
          </a>
          <a href="#Achievements" className={styles.linkItems}>
            <RiTrophyLine className={styles.footerIcon} />
            <span className={styles.footerText}>Awards</span>
          </a>
          <a href="#Portfolio" className={styles.linkItems}>
            <RiBriefcaseLine className={styles.footerIcon} />
            <span className={styles.footerText}>Projects</span>
          </a>
          <a href="#WorkProcessCard" className={styles.linkItems}>
            <RiToolsLine className={styles.footerIcon} />
            <span className={styles.footerText}>Tools</span>
          </a>
          <a href="#Services" className={styles.linkItems}>
            <RiLightbulbLine className={styles.footerIcon} />
            <span className={styles.footerText}>My Interests</span>
          </a>
          <a href="#ContactSection" className={styles.linkItems}>
            <RiMailSendLine className={styles.footerIcon} />
            <span className={styles.footerText}>Contact</span>
          </a>
        </div>
      </div>
    </div>

  );
};

export default Footer;
