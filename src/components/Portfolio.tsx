import { FunctionComponent } from "react";
import Project from "./Project";
import styles from "./Portfolio.module.css";

export type PortfolioType = {
  className?: string;
};

const Portfolio: FunctionComponent<PortfolioType> = ({ className = "" }) => {
  return (
    <div className={[styles.portfolio, className].join(" ")}>
      <div className={styles.portfolio1}>
        <div className={styles.projectsIntro}>
          <h1 className={styles.projects}>Projects</h1>
        </div>
        <div className={styles.projectCard}>
          <div className={styles.projectCard1}>
            <Project
              propMinWidth="318px"
              propHeight="476px"
              propBoxShadow="0px 12px 64px rgba(28, 25, 25, 0.12)"
              propFlex="1"
              propWidth="unset"
              propPadding="0px 0px 12px"
              unsplashSavQfLRm4Do="/whatsapp-image-20231206-at-094016-8856d3bf@2x.png"
              propWidth1="unset"
              propMaxHeight="unset"
              propAlignSelf="stretch"
              propHeight1="248px"
              propOverflow="hidden"
              propAlignSelf1="unset"
              propWidth2="400px"
              propPadding1="0px 20px"
              propAlignSelf2="unset"
              uIUXDESIGN="UI-UX DESIGN"
              uIUXDESIGN1={false}
              propWidth3="84px"
              propHeight2="unset"
              propMinWidth1="unset"
              productAdminDashboard="Analog Function Generator"
              propDisplay="unset"
              propMinWidth2="unset"
              vivamusEleifendConvallisAnte=" An analog function generator that generates sinusoidal, triangular, sawtooth, and PWM signals up  to 20kHz with variable parameters. We designed it using analog components, which feature versatile  waveform options, and easy signal output."
              propWidth4="unset"
              propDisplay1="unset"
              propAlignSelf3="stretch"
              letsWorkTogether="See More"
              propBorder="1px solid #a53dff"
              propBackgroundColor="#fff"
              propDisplay2="inline-block"
              propMinWidth3="74px"
              propColor="#a53dff"
            />
            <Project
              propMinWidth="318px"
              propHeight="476px"
              propBoxShadow="unset"
              propFlex="1"
              propWidth="unset"
              propPadding="0px 0px 2px"
              unsplashSavQfLRm4Do="/image-2@2x.png"
              propWidth1="unset"
              propMaxHeight="unset"
              propAlignSelf="stretch"
              propHeight1="248px"
              propOverflow="hidden"
              propAlignSelf1="unset"
              propWidth2="400px"
              propPadding1="0px 20px"
              propAlignSelf2="unset"
              uIUXDESIGN1
              propWidth3="0px"
              propHeight2="16px"
              propMinWidth1="unset"
              productAdminDashboard=" HydroLink 2.0"
              propDisplay="inline-block"
              propMinWidth2="128px"
              vivamusEleifendConvallisAnte="An IoT device plugged into any domestic water tank checks the water level and sends it to Firebase.  The water level can be monitored with a custom-made app, and the user can control the water level  from the app."
              propWidth4="unset"
              propDisplay1="unset"
              propAlignSelf3="stretch"
              letsWorkTogether="See More"
              propBorder="1px solid #a53dff"
              propBackgroundColor="#fff"
              propDisplay2="inline-block"
              propMinWidth3="74px"
              propColor="#a53dff"
            />
            <Project
              propMinWidth="318px"
              propHeight="441px"
              propBoxShadow="unset"
              propFlex="1"
              propWidth="unset"
              propPadding="0px 0px 4.5px"
              unsplashSavQfLRm4Do="/unsplashm-hrflhgabo@2x.png"
              propWidth1="unset"
              propMaxHeight="unset"
              propAlignSelf="stretch"
              propHeight1="248px"
              propOverflow="hidden"
              propAlignSelf1="unset"
              propWidth2="400px"
              propPadding1="0px 20px"
              propAlignSelf2="unset"
              uIUXDESIGN1
              propWidth3="0px"
              propHeight2="16px"
              propMinWidth1="unset"
              productAdminDashboard="IoT Medicine Storage Box"
              propDisplay="unset"
              propMinWidth2="unset"
              vivamusEleifendConvallisAnte="A medicine storage box that provides medicine time alerts, keeps the medicine in proper sunlight and  monitors the temperature and humidity."
              propWidth4="unset"
              propDisplay1="unset"
              propAlignSelf3="stretch"
              letsWorkTogether="See More"
              propBorder="1px solid #a53dff"
              propBackgroundColor="#fff"
              propDisplay2="inline-block"
              propMinWidth3="74px"
              propColor="#a53dff"
            />
          </div>
          <div className={styles.projectCard2}>
            <Project
              propMinWidth="unset"
              propHeight="unset"
              propBoxShadow="unset"
              propFlex="unset"
              propWidth="424px"
              propPadding="0px 0px 30px"
              unsplashSavQfLRm4Do="/image-3@2x.png"
              propWidth1="unset"
              propMaxHeight="unset"
              propAlignSelf="stretch"
              propHeight1="248px"
              propOverflow="hidden"
              propAlignSelf1="stretch"
              propWidth2="unset"
              propPadding1="0px 7px"
              propAlignSelf2="stretch"
              uIUXDESIGN1
              propWidth3="0px"
              propHeight2="16px"
              propMinWidth1="unset"
              productAdminDashboard="REPLACE: A Smart and Intelligent Wall Socket"
              propDisplay="unset"
              propMinWidth2="unset"
              vivamusEleifendConvallisAnte="A smart wall socket that can detect anomalies in the domestic power grid. With a mobile app, the  user can monitor power consumption and cost, and control the socket."
              propWidth4="360px"
              propDisplay1="inline-block"
              propAlignSelf3="unset"
              letsWorkTogether="See More"
              propBorder="1px solid #a53dff"
              propBackgroundColor="#fff"
              propDisplay2="inline-block"
              propMinWidth3="74px"
              propColor="#a53dff"
            />
            <Project
              propMinWidth="unset"
              propHeight="unset"
              propBoxShadow="unset"
              propFlex="unset"
              propWidth="424px"
              propPadding="0px 0px 30px"
              unsplashSavQfLRm4Do="/whatsapp-image-20240415-at-133421-bb3fc5ec@2x.png"
              propWidth1="unset"
              propMaxHeight="unset"
              propAlignSelf="stretch"
              propHeight1="248px"
              propOverflow="hidden"
              propAlignSelf1="unset"
              propWidth2="400px"
              propPadding1="0px 20px"
              propAlignSelf2="unset"
              uIUXDESIGN1
              propWidth3="0px"
              propHeight2="16px"
              propMinWidth1="unset"
              productAdminDashboard=" StearSafe"
              propDisplay="inline-block"
              propMinWidth2="93px"
              vivamusEleifendConvallisAnte="A spectacle frame and smartwatch that collect EOG data, measure the drowsiness of the user, and  give alerts."
              propWidth4="unset"
              propDisplay1="unset"
              propAlignSelf3="stretch"
              letsWorkTogether="See More"
              propBorder="1px solid #a53dff"
              propBackgroundColor="#fff"
              propDisplay2="inline-block"
              propMinWidth3="74px"
              propColor="#a53dff"
            />
            <Project
              unsplashSavQfLRm4Do="/whatsapp-image-20240401-at-080219-21257bad@2x.png"
              uIUXDESIGN="UI-UX DESIGN"
              uIUXDESIGN1
              productAdminDashboard="LUNA: Vision-based Automated Restaurant Robot"
              vivamusEleifendConvallisAnte="Developing a restaurant robot using ROS and Kinect2, equipped with a Kalman-filter-based food  stabilization tray to avoid beverage spillage. The robot enhances efficiency in restaurant environ ments with advanced sensor technologies and robotic functionalities, including a custom restaurant  environment planner front-end."
              letsWorkTogether="See More"
              propBorder="1px solid #a53dff"
              propBackgroundColor="#fff"
              propDisplay2="inline-block"
              propMinWidth3="74px"
              propColor="#a53dff"
            />
          </div>
        </div>
      </div>
      <button className={styles.button}>
        <div className={styles.button1}>More Project</div>
      </button>
    </div>
  );
};

export default Portfolio;
