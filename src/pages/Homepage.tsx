import { FunctionComponent } from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import ExperienceSection from "../components/ExperienceSection";
import ToolsSection from "../components/ToolsSection";
import Portfolio from "../components/Portfolio";
import PCBGallery from "../components/PCBGallery";
import Achievements from "../components/Achievements";
import Services from "../components/Services";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import styles from "./Homepage.module.css";
import CustomCursor from "../components/CustomCursor";
import InteractiveDotGrid from "../components/InteractiveDotGrid";

const Homepage: FunctionComponent = () => {
  return (
    <div className={styles.homepage}>
      <CustomCursor />
      <InteractiveDotGrid />
      <Header />
      <div id="HeroSection" style={{ width: '100%' }}>
        <HeroSection />
      </div>
      <div id="Experience" style={{ width: '100%' }}>
        <ExperienceSection />
      </div>
      <div id="Tools" style={{ width: '100%' }}>
        <ToolsSection />
      </div>
      <div id="Portfolio" style={{ width: '100%' }}>
        <Portfolio />
      </div>
      <div id="PCBGallery" style={{ width: '100%' }}>
        <PCBGallery />
      </div>
      <div id="Achievements" style={{ width: '100%' }}>
        <Achievements />
      </div>
      <div id="Services" style={{ width: '100%' }}>
        <div className={styles.callToAction}>
          <h1 className={styles.doYouHaveContainer}>
            <p className={styles.doYouHave}>Do you have Project Idea?</p>
            <p className={styles.doYouHave}>Let's discuss your project!</p>
          </h1>
          <div className={styles.workTogether}>
            <div className={styles.heroActions}>
              <a href="#ContactSection" className={styles.button}>
                <div className={styles.button2}>Contact Me</div>
              </a>
            </div>
          </div>
        </div>

        <Services />
      </div>

      <div id="ContactSection" style={{ width: '100%' }}>
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
};

export default Homepage;
