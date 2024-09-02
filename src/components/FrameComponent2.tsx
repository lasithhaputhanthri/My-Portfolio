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
          <button className={styles.navLinks}>
            <a className={styles.home}>Home</a>
          </button>
          <button className={styles.navLinks1}>
            <a className={styles.awards}>Awards</a>
          </button>
          <button className={styles.achievementsLink}>
            <div className={styles.projectsWrapper}>
              <a className={styles.projects}>Projects</a>
            </div>
          </button>
          <button className={styles.navbarItems}>
            <a className={styles.tools}>Tools</a>
          </button>          
          <button className={styles.navLinks2}>
            <a className={styles.myInterests}>My Interests</a>
          </button>          
          <button className={styles.button}>
            <a className={styles.button1}>Contact</a>
          </button>
        </div>
      </header>
    </div>
  );
};

export default FrameComponent2;
