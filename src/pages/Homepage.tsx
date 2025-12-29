import { FunctionComponent } from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import Achievements from "../components/Achievements";
import Portfolio from "../components/Portfolio";
import WorkProcessCard from "../components/WorkProcessCard";
import Button from "../components/Button";
import Services from "../components/Services";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import styles from "./Homepage.module.css";
import PCBGallery from "../components/PCBGallery";
import CustomCursor from "../components/CustomCursor";

const Homepage: FunctionComponent = () => {
  return (
    <div className={styles.homepage}>
      <CustomCursor />
      <Header />
      <div id="HeroSection" style={{ width: '100%' }}>
        <HeroSection />
      </div>
      <div id="Achievements" style={{ width: '100%' }}>
        <Achievements />
      </div>
      <div id="Portfolio" style={{ width: '100%' }}>
        <Portfolio />
      </div>
      <div id="PCBGallery" style={{ width: '100%' }}>
        <PCBGallery />
      </div>
      {/* <div id="WorkProcessCard" style={{ width: '100%' }}>
        <div className={styles.workProcess}>
          <h1 className={styles.tools}>Tools & Workflow</h1>
          <div className={styles.processContent}>
            <div className={styles.processSteps}> */}
      {/* Card 1: EDA Tools */}
      {/* <div className={styles.workProcessCardParent}>
                <WorkProcessCard
                  research="1. Research"
                  showLoremIpsumDolor={true}
                  description="Identifying requirements and selecting the best components for the project."
                />
                <div className={styles.edaTools}>EDA Tools</div>
                <div className={styles.toolIcons}>
                  <img className={styles.toolIcon} alt="" src={`${import.meta.env.BASE_URL}image-4@2x.png`} />
                  <img className={styles.toolIcon} alt="" src={`${import.meta.env.BASE_URL}image-5@2x.png`} />
                  <img className={styles.toolIcon} alt="" src={`${import.meta.env.BASE_URL}image-6@2x.png`} />
                </div>
              </div> */}

      {/* Card 2: 3D Modeling */}
      {/* <div className={styles.workProcessCardGroup}>
                <WorkProcessCard
                  research="3D Modeling and 3D printing"
                  showLoremIpsumDolor={true}
                  description="Designing custom enclosures and mechanical parts for seamless integration."
                />
                <div className={styles.toolIcons}>
                  <img className={styles.toolIcon} alt="" src={`${import.meta.env.BASE_URL}image-7@2x.png`} />
                  <img className={styles.toolIcon} alt="" src={`${import.meta.env.BASE_URL}image-8@2x.png`} />
                  <img className={styles.toolIcon} alt="" src={`${import.meta.env.BASE_URL}image-9@2x.png`} />
                </div>
              </div> */}

      {/* Card 3: Electronics */}
      {/* <div className={styles.workProcessCardContainer}>
                <WorkProcessCard
                  research="Electronics"
                  showLoremIpsumDolor={true}
                  description="Circuit design, PCB layout, and hardware assembly."
                />
                <div className={styles.toolIcons}>
                  <img className={styles.toolIcon} alt="" src={`${import.meta.env.BASE_URL}image-10@2x.png`} />
                  <img className={styles.toolIcon} alt="" src={`${import.meta.env.BASE_URL}image-11@2x.png`} />
                  <img className={styles.toolIcon} alt="" src={`${import.meta.env.BASE_URL}image-12@2x.png`} />
                </div>
              </div> */}

      {/* Card 4: Programming */}
      {/* <div className={styles.workProcessCardGroup}>
                <WorkProcessCard
                  research="Programming"
                  showLoremIpsumDolor={true}
                  description="Developing firmware and software to bring the hardware to life."
                />
                <div className={styles.toolIcons}>
                  <img className={styles.toolIcon} alt="" src={`${import.meta.env.BASE_URL}image-13@2x.png`} />
                  <img className={styles.toolIcon} alt="" src={`${import.meta.env.BASE_URL}image-14@2x.png`} />
                  <img className={styles.toolIcon} alt="" src={`${import.meta.env.BASE_URL}image-15@2x.png`} />
                </div>
              </div> */}
      {/* </div>
          </div>
        </div>
      </div> */}
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