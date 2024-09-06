import { FunctionComponent, useState } from "react";
import Project from "./Project";
import styles from "./pcbgall.module.css";

export type PortfolioType = {
  className?: string;
};

const Pcbgall: FunctionComponent<PortfolioType> = ({ className = "" }) => {
  const [visibleProjects, setVisibleProjects] = useState(3); // Initially show 3 projects

  const projects = [
    {
      unsplashSavQfLRm4Do: "/photo_6244475496393982855_y.jpg",
      productAdminDashboard: "Analog Function Generator",
      vivamusEleifendConvallisAnte:
        "An analog function generator that generates sinusoidal, triangular, sawtooth, and PWM signals up to 20kHz with variable parameters. We designed it using analog components, which feature versatile waveform options, and easy signal output.",
      linkaddress: "https://github.com/OhmFusion/Analog-Function-Generator",
    },
    {
      unsplashSavQfLRm4Do: "/photo_6244475496393982856_y.jpg",
      productAdminDashboard: "HydroLink 2.0",
      vivamusEleifendConvallisAnte:
        "An IoT device plugged into any domestic water tank checks the water level and sends it to Firebase. The water level can be monitored with a custom-made app, and the user can control the water level from the app.",
      linkaddress: "https://hydrolink.lk/",
    },
    {
      unsplashSavQfLRm4Do: "/photo_6244475496393982859_y.jpg",
      productAdminDashboard: "IoT Medicine Storage Box",
      vivamusEleifendConvallisAnte:
        "A medicine storage box that provides medicine time alerts, keeps the medicine in proper sunlight and monitors the temperature and humidity.",
      linkaddress: "https://github.com/lasithhaputhanthri/Medi-Box",
    },
    {
      unsplashSavQfLRm4Do: "/photo_6244475496393982860_x.jpg",
      productAdminDashboard: "REPLACE: A Smart and Intelligent Wall Socket",
      vivamusEleifendConvallisAnte:
        "A smart wall socket that can detect anomalies in the domestic power grid. With a mobile app, the user can monitor power consumption and cost, and control the socket.",
      linkaddress: "https://github.com/AuraLabs-main/AuraLabs-Replace-working",
    },
    {
      unsplashSavQfLRm4Do: "/photo_6244475496393982861_x.jpg",
      productAdminDashboard: "StearSafe",
      vivamusEleifendConvallisAnte:
        "A spectacle frame and smartwatch that collect EOG data, measure the drowsiness of the user, and give alerts.",
      linkaddress: "https://github.com/PulseX-Solutions/Stear_Safe",
    },
    {
      unsplashSavQfLRm4Do: "/photo_6244475496393982862_x.jpg",
      productAdminDashboard: "LUNA: Vision-based Automated Restaurant Robot",
      vivamusEleifendConvallisAnte:
        "Developing a restaurant robot using ROS and Kinect2, equipped with a Kalman-filter-based food stabilization tray to avoid beverage spillage. The robot enhances efficiency in restaurant environments with advanced sensor technologies and robotic functionalities, including a custom restaurant environment planner front-end.",
      linkaddress: "",
    },
    {
        unsplashSavQfLRm4Do: "/photo_6244475496393982863_x.jpg",
        productAdminDashboard: "LUNA: Vision-based Automated Restaurant Robot",
        vivamusEleifendConvallisAnte:
          "Developing a restaurant robot using ROS and Kinect2, equipped with a Kalman-filter-based food stabilization tray to avoid beverage spillage. The robot enhances efficiency in restaurant environments with advanced sensor technologies and robotic functionalities, including a custom restaurant environment planner front-end.",
        linkaddress: "",
      },
      {
        unsplashSavQfLRm4Do: "/photo_6244475496393982864_x.jpg",
        productAdminDashboard: "LUNA: Vision-based Automated Restaurant Robot",
        vivamusEleifendConvallisAnte:
          "Developing a restaurant robot using ROS and Kinect2, equipped with a Kalman-filter-based food stabilization tray to avoid beverage spillage. The robot enhances efficiency in restaurant environments with advanced sensor technologies and robotic functionalities, including a custom restaurant environment planner front-end.",
        linkaddress: "",
      },
      {
        unsplashSavQfLRm4Do: "/photo_6244475496393982869_y.jpg",
        productAdminDashboard: "LUNA: Vision-based Automated Restaurant Robot",
        vivamusEleifendConvallisAnte:
          "Developing a restaurant robot using ROS and Kinect2, equipped with a Kalman-filter-based food stabilization tray to avoid beverage spillage. The robot enhances efficiency in restaurant environments with advanced sensor technologies and robotic functionalities, including a custom restaurant environment planner front-end.",
        linkaddress: "",
      },
  ];

  const handleSeeMore = () => {
    setVisibleProjects((prevCount) => prevCount + 3); // Show 3 more projects each time
  };

  return (
    <div className={[styles.portfolio, className].join(" ")}>
      <div className={styles.portfolio1}>
        <div className={styles.projectsIntro}>
          <h1 className={styles.projects}>My PCB Gallery</h1>
        </div>
        <div className={styles.projectCard}>
          <div className={styles.projectCard1}>
            {projects.slice(0, visibleProjects).map((project, index) => (
              <Project
                key={index}
                propMinWidth="318px"
                propHeight="476px"
                propBoxShadow="0px 12px 64px rgba(28, 25, 25, 0.12)"
                propFlex="1"
                propWidth="unset"
                propPadding="0px 0px 12px"
                unsplashSavQfLRm4Do={project.unsplashSavQfLRm4Do}
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
                productAdminDashboard={project.productAdminDashboard}
                propDisplay="unset"
                propMinWidth2="unset"
                vivamusEleifendConvallisAnte={project.vivamusEleifendConvallisAnte}
                propWidth4="unset"
                propDisplay1="unset"
                propAlignSelf3="stretch"
                letsWorkTogether="See More"
                propBorder="1px solid #a53dff"
                propBackgroundColor="#fff"
                propDisplay2="inline-block"
                propMinWidth3="74px"
                propColor="#a53dff"
                linkaddress={project.linkaddress}
              />
            ))}
          </div>
        </div>
      </div>
      {visibleProjects < projects.length && (
        <a className={styles.button} onClick={handleSeeMore}>
          <div className={styles.button1}>More Projects</div>
        </a>
      )}
    </div>
  );
};

export default Pcbgall;
