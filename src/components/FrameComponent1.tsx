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
                <p className={styles.helloIm}>Hello, I’m</p>
                <p className={styles.helloIm}>Lasith Haputhanthri</p>
              </h1>
            </div>
          </div>
          <div className={styles.passionateEngineeringStudent}>
            Passionate engineering student with a strong foundation in
            electronics and hands-on experience in designing and developing
            innovative solutions. Eager to apply my skills and contribute to
            impactful projects in a dynamic environment.
          </div>
        </div>
        <div className={styles.heroActions}>
          <button className={styles.button}>
            <div className={styles.button1}>My Projects</div>
          </button>
          <button className={styles.button2}>
            <img
              className={styles.arrowsDownload}
              alt=""
              src="/arrows--download.svg"
            />
            <div className={styles.button3}>Download CV</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
