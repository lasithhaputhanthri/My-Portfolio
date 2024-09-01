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
        <Logo b="B" brooklyn="Created By Lasith" />
        <div className={styles.siteLinks}>
          <div className={styles.linkItems}>
            <div className={styles.home}>Home</div>
          </div>
          <div className={styles.linkItems}>
            <div className={styles.awards}>Awards</div>
          </div>
          <div className={styles.linkItems}>
            <div className={styles.projects}>Projects</div>
          </div>
          <div className={styles.linkItems}>
            <div className={styles.tools}>Tools</div>
          </div>
          <div className={styles.linkItems}>
            <div className={styles.myInterests}>My Interests</div>
          </div>
          <div className={styles.linkItems}>
            <div className={styles.contact}>Contact</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
