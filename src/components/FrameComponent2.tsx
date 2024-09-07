import { useEffect, useState } from "react";
import { FunctionComponent } from "react";
import Logo from "./Logo";
import styles from "./FrameComponent2.module.css";

export type FrameComponent2Type = {
  className?: string;
};

const FrameComponent2: FunctionComponent<FrameComponent2Type> = ({
  className = "",
}) => {
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (currentScrollTop > lastScrollTop) {
        // Scrolling down
        setIsScrollingUp(false);
      } else {
        // Scrolling up
        setIsScrollingUp(true);
      }
      setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop); // For Mobile or negative scrolling
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  return (
    <div className={[styles.homepageInner, className].join(" ")}>
      <header className={`${styles.logoParent} ${!isScrollingUp ? styles.hidden : ''}`}>
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
          <a href="#frameComponent1" className={styles.navLinks}>Home</a>
          <a href="#Archevements" className={styles.navLinks}>Awards</a>
          <a href="#Portfolio" className={styles.navLinks}>Projects</a>
          <a href="#WorkProcessCard" className={styles.navLinks}>Tools</a>       
          <a href="#WhatIDo" className={styles.navLinks}>My Interests</a> 
          <button className={styles.button}>
            <a href="#FrameComponent3" className={styles.button1}>Contact</a>
          </button>
        </div>
      </header>
    </div>
  );
};

export default FrameComponent2;
