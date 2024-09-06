import { FunctionComponent } from "react";
import styles from "./FrameComponent1.module.css";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.heroContentWrapper, className].join(" ")}>
      <div className={styles.heroContent}>
        <div className={styles.heroInfo}>
          <div className={styles.introduction}>
          <div className={styles.introduction}>
            <h1 className={styles.helloImLasithContainer}>
              <span className={styles.typewriterOne}>Hello, I’m </span>
              <span className={styles.typewriterTwo}>Lasith Haputhanthri</span>
            </h1>
          </div>

          </div>
          <div className={styles.passionateEngineeringStudent}>
            Passionate engineering student with a strong foundation in
            electronics and hands-on experience in designing and developing
            innovative solutions. Eager to apply my skills and contribute to
            impactful projects in a dynamic environment.
          </div>
          <img
          className={styles.unsplashwkokidnt14wIcon}
          loading="lazy"
          alt=""
          src="/WhatsApp Image 2024-09-05 at 18.41.25_0da31fd8.jpg"
        />
        </div>
        <div className={styles.heroActions}>
          <a href="#Portfolio" className={styles.button}>
            <div className={styles.button1}>My Projects</div>
          </a>
          <a 
              href="/My_CV.pdf" // Update with the path to your document
              download="My_CV.pdf">
          <button className={styles.button2}>
            <img
              className={styles.button2}
              alt=""
              src="/arrows--download.svg"
            />
            <div className={styles.button2}>Download CV</div>
          </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
