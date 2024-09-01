import { FunctionComponent } from "react";
import Logo from "./Logo";
import styles from "./FrameComponent2.module.css";

export type FrameComponent2Type = {
  className?: string;
};

const FrameComponent2: FunctionComponent<FrameComponent2Type> = ({
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
          <div className={styles.navLinks}>
            <a className={styles.home}>Home</a>
          </div>
          <div className={styles.navLinks1}>
            <a className={styles.awards}>Awards</a>
          </div>
          <div className={styles.achievementsLink}>
            <div className={styles.projectsWrapper}>
              <a className={styles.projects}>Projects</a>
            </div>
          </div>
          <div className={styles.navbarItems}>
            <a className={styles.tools}>Tools</a>
          </div>
          <div className={styles.navLinks2}>
            <a className={styles.myInterests}>My Interests</a>
          </div>
          <button className={styles.button}>
            <a className={styles.button1}>Contact</a>
          </button>
        </div>
      </header>
    </div>
  );
};

export default FrameComponent2;
