import { FunctionComponent } from "react";
import Logo from "./Logo";
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
          <div className={styles.linkItems}>
            <a href="#FrameComponent1" className={styles.linkText}>
              <div className={styles.home}>Home</div>
            </a>
          </div>
          <div className={styles.linkItems}>
            <a href="#Archevements" className={styles.linkText}>
              <div className={styles.awards}>Awards</div>
            </a>
          </div>
          <div className={styles.linkItems}>
            <a href="#Portfolio" className={styles.linkText}>
              <div className={styles.projects}>Projects</div>
            </a>
          </div>
          <div className={styles.linkItems}>
            <a href="#WorkProcessCard" className={styles.linkText}>
              <div className={styles.tools}>Tools</div>
            </a>
          </div>
          <div className={styles.linkItems}>
            <a href="#WhatIDo" className={styles.linkText}>
              <div className={styles.myInterests}>My Interests</div>
            </a>
          </div>
          <div className={styles.linkItems}>
            <a href="#FrameComponent3" className={styles.linkText}>
              <div className={styles.contact}>Contact</div>
            </a>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Footer;
