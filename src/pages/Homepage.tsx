import { FunctionComponent } from "react";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent1 from "../components/FrameComponent1";
import Archevements from "../components/Archevements";
import Portfolio from "../components/Portfolio";
import WorkProcessCard from "../components/WorkProcessCard";
import Button from "../components/Button";
import WhatIDo from "../components/WhatIDo";
import FrameComponent3 from "../components/FrameComponent3";
import Footer from "../components/Footer";
import styles from "./Homepage.module.css";

const Homepage: FunctionComponent = () => {
  return (
    <div className={styles.homepage}>
      <div className={styles.icon}>
        <img className={styles.houseIcon} alt="" src="/house.svg" />
      </div>
      <div className={styles.icon1}>
        <img className={styles.houseIcon} alt="" src="/phonecall.svg" />
      </div>
      <FrameComponent2 />
      <div className={styles.subheader}>{` `}</div>
      <FrameComponent1 />
      <Archevements />
      <Portfolio />
      <div className={styles.workProcess}>
        <h1 className={styles.tools}>Tools</h1>
        <div className={styles.processContent}>
          <div className={styles.processSteps}>
            <div className={styles.workProcessCardParent}>
              <WorkProcessCard
                propHeight="unset"
                propFlex="1"
                propFlexDirection="column"
                propBoxShadow="32px 32px 124px rgba(43, 56, 76, 0.1)"
                propBackgroundColor="#a53dff"
                showFrameDiv={false}
                propWidth="248px"
                propFlexDirection1="column"
                propFlex1="unset"
                research="1. Research"
                propDisplay="inline-block"
                propMinWidth="unset"
                propHeight1="24px"
                showLoremIpsumDolor={false}
                propAlignSelf="stretch"
                propWidth1="unset"
              />
              <img
                className={styles.image2Icon}
                loading="lazy"
                alt=""
                src="/image-21@2x.png"
              />
              <div className={styles.edaTools}>EDA Tools</div>
              <img
                className={styles.image1Icon}
                loading="lazy"
                alt=""
                src="/image-11@2x.png"
              />
            </div>
            <div className={styles.workProcessCardGroup}>
              <WorkProcessCard
                propHeight="195px"
                propFlex="unset"
                propFlexDirection="row"
                propBoxShadow="unset"
                propBackgroundColor="rgba(237, 216, 255, 0.5)"
                showFrameDiv
                propWidth="unset"
                propFlexDirection1="column"
                propFlex1="1"
                research="3D Modeling and 3D printing"
                propDisplay="unset"
                propMinWidth="unset"
                propHeight1="unset"
                showLoremIpsumDolor
                propAlignSelf="unset"
                propWidth1="248px"
              />
              <img
                className={styles.image4Icon}
                loading="lazy"
                alt=""
                src="/image-4@2x.png"
              />
              <img
                className={styles.image3Icon}
                alt=""
                src="/image-31@2x.png"
              />
            </div>
          </div>
          <div className={styles.frameParent}>
            <div className={styles.workProcessCardContainer}>
              <WorkProcessCard
                propHeight="unset"
                propFlex="1"
                propFlexDirection="row"
                propBoxShadow="unset"
                propBackgroundColor="rgba(237, 216, 255, 0.5)"
                showFrameDiv
                propWidth="unset"
                propFlexDirection1="row"
                propFlex1="unset"
                research="Electronics"
                propDisplay="inline-block"
                propMinWidth="111px"
                propHeight1="unset"
                showLoremIpsumDolor={false}
                propAlignSelf="unset"
                propWidth1="248px"
              />
              <img
                className={styles.image14Icon}
                loading="lazy"
                alt=""
                src="/image-14@2x.png"
              />
              <img
                className={styles.image9Icon}
                loading="lazy"
                alt=""
                src="/image-9@2x.png"
              />
              <img
                className={styles.image8Icon}
                loading="lazy"
                alt=""
                src="/image-8@2x.png"
              />
              <img
                className={styles.image7Icon}
                loading="lazy"
                alt=""
                src="/image-7@2x.png"
              />
              <img
                className={styles.image6Icon}
                loading="lazy"
                alt=""
                src="/image-6@2x.png"
              />
              <img
                className={styles.image5Icon}
                loading="lazy"
                alt=""
                src="/image-5@2x.png"
              />
            </div>
            <div className={styles.workProcessCardGroup}>
              <WorkProcessCard
                showFrameDiv
                research="Programming"
                showLoremIpsumDolor
              />
              <img
                className={styles.image16Icon}
                loading="lazy"
                alt=""
                src="/image-16@2x.png"
              />
              <img
                className={styles.image13Icon}
                loading="lazy"
                alt=""
                src="/image-13@2x.png"
              />
              <div className={styles.image12Parent}>
                <img
                  className={styles.image12Icon}
                  loading="lazy"
                  alt=""
                  src="/image-12@2x.png"
                />
                <img
                  className={styles.image11Icon}
                  alt=""
                  src="/image-111@2x.png"
                />
              </div>
              <img
                className={styles.image10Icon}
                loading="lazy"
                alt=""
                src="/image-10@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.callToAction}>
        <h1 className={styles.doYouHaveContainer}>
          <p className={styles.doYouHave}>Do you have Project Idea?</p>
          <p className={styles.doYouHave}>Let's discuss your project!</p>
        </h1>
        <div className={styles.workTogether}>
          <Button
            propBorder="none"
            propBackgroundColor="#a53dff"
            letsWorkTogether="Let’s work Together"
            propDisplay="unset"
            propMinWidth="unset"
            propColor="#fff"
          />
        </div>
      </div>
      <div className={styles.heroContent}>
        <WhatIDo />
        <FrameComponent3 />
      </div>
      <Footer />
      <div className={styles.ellipseParent}>
        <div className={styles.frameChild} />
        <div className={styles.frameItem} />
        <img className={styles.bgIcon} alt="" src="/bg.svg" />
        <div className={styles.frameInner} />
        <div className={styles.rectangleDiv} />
        <img
          className={styles.unsplashwkokidnt14wIcon}
          loading="lazy"
          alt=""
          src="/unsplashwkokidnt14w@2x.png"
        />
      </div>
    </div>
  );
};

export default Homepage;
