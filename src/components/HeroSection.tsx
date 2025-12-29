import { FunctionComponent, useState, useEffect } from "react";
import styles from "./HeroSection.module.css";

export type HeroSectionType = {
  className?: string;
};

const HeroSection: FunctionComponent<HeroSectionType> = ({
  className = "",
}) => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const fullText = "I'm Lasith Haputhanthri";
  const typingSpeed = 150;
  const deletingSpeed = 100;
  const pauseTime = 2000;

  useEffect(() => {
    const handleTyping = () => {
      setText(current => {
        if (isDeleting) {
          return fullText.substring(0, current.length - 1);
        } else {
          return fullText.substring(0, current.length + 1);
        }
      });
    };

    let ticker = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);

    if (!isDeleting && text === fullText) {
      clearTimeout(ticker);
      ticker = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
    }

    return () => clearTimeout(ticker);
  }, [text, isDeleting]);

  return (
    <div className={[styles.heroContentWrapper, className].join(" ")}>
      <div className={styles.heroContent}>
        <div className={styles.heroLeft}>
          <div className={styles.heroInfo}>
            <div className={styles.introduction}>
              <div className={styles.introduction}>
                <h1 className={styles.helloImLasithContainer}>
                  <span>Hello, </span>
                  <span className={styles.typewriter}>{text}</span>
                  <span className={styles.cursor}>|</span>
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
            <a href="#Portfolio" className={styles.button}>
              <div className={styles.button1}>My Projects</div>
            </a>
            <a
              href={`${import.meta.env.BASE_URL}My_CV.pdf`} // Update with the path to your document
              download="My_CV.pdf">
              <button className={styles.button2}>
                <img
                  className={styles.button2}
                  src={`${import.meta.env.BASE_URL}arrows--download.svg`}
                />
                <div className={styles.button2}>Download CV</div>
              </button>
            </a>
          </div>
        </div>

        <div className={styles.heroRight}>
          <img
            className={styles.unsplashwkokidnt14wIcon}
            loading="lazy"
            alt="Lasith Haputhanthri"
            src={`${import.meta.env.BASE_URL}me.jpg`}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;