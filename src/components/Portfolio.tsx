import { FunctionComponent, useState } from "react";
import Project from "./Project";
import styles from "./Portfolio.module.css";

export type PortfolioType = {
  className?: string;
};

const Portfolio: FunctionComponent<PortfolioType> = ({ className = "" }) => {
  const [visibleProjects, setVisibleProjects] = useState(6); // Initially show 3 projects

  const projects = [
    {
      unsplashSavQfLRm4Do: `${import.meta.env.BASE_URL}WhatsApp Image 2025-12-20 at 14.19.41.jpeg`,
      productAdminDashboard: "uUAS Detection in 6G band & mmWaves(Ongoing FYP)",
      vivamusEleifendConvallisAnte:
        "Designing a CW radar system from scratch for drone detection, including RF front-end and signal processing. Integrated an FMCW radar evaluation board for range and velocity estimation, focusing on practical radar detection techniques and real-world interference handling",
      linkaddress: "https://github.com/Drone-Detection-FYP",
    },
    {
      unsplashSavQfLRm4Do: `${import.meta.env.BASE_URL}unnamed.jpg`,
      productAdminDashboard: "Employee Progress Tracking System (Internship Project at Magicbits)",
      vivamusEleifendConvallisAnte:
        "A System can track each employee work and the progress of each department.It used HMI devices with RFID sensors to collect employee data and visualize it in the ThingsBoard dashboard. Implemented the firmware for the HMI and tested in a Pilot Project with 20 devices in the field",
      linkaddress: "",
    },
    {
      unsplashSavQfLRm4Do: `${import.meta.env.BASE_URL}Gemini_Generated_Image_4vn08q4vn08q4vn0.png`,
      productAdminDashboard: "Echo-watt: Inverter Power Monitoring Device",
      vivamusEleifendConvallisAnte:
        "Implemented a microcontroller-based embedded system that polls inverter parameters, buffers and compresses data, and uploads securely to the cloud on a constrained schedule. The system supports remote configuration, fault handling, and firmware-over-the-air (FOTA) updates",
      linkaddress: "https://github.com/Team-Saturated/Eco-watt/tree/M5_Yasiru_new",
    },

    {
      unsplashSavQfLRm4Do: `${import.meta.env.BASE_URL}Screenshot 2025-12-31 004958.png`,
      productAdminDashboard: "StearSafe",
      vivamusEleifendConvallisAnte:
        "Smart Spectacle frame and smartwatch that collect EOG data to predict driver’s sleepiness using Machine Learning and alert the driver before an accident occurs. The spectacles and smartwatch communicate with the Raspberry Pi using NRF. The design includes Hi-density 6-layer and 4-layer PCBs with Inverted F antenna.",
      linkaddress: "https://github.com/PulseX-Solutions/Stear_Safe",
    },

    {
      unsplashSavQfLRm4Do: `${import.meta.env.BASE_URL}image-3@2x.png`,
      productAdminDashboard: "REPLACE: A Smart and Intelligent Wall Socket",
      vivamusEleifendConvallisAnte:
        "A smart wall socket that can detect anomalies in the domestic power grid. With a mobile app, the user can monitor power consumption and cost, and control the socket.",
      linkaddress: "https://github.com/AuraLabs-main/AuraLabs-Replace-working",
    },
    {
      unsplashSavQfLRm4Do: `${import.meta.env.BASE_URL}whatsapp-image-20240401-at-080219-21257bad@2x.png`,
      productAdminDashboard: "LUNA: Vision-based Automated Restaurant Robot",
      vivamusEleifendConvallisAnte:
        "Developed a restaurant robot using ROS and Kinect2, equipped with a Kalman-filter-based food stabilization tray to avoid beverage spillage. The robot enhances efficiency in restaurant environments with advanced sensor technologies and robotic functionalities, including a custom restaurant environment planner front-end.",
      linkaddress: "https://github.com/LUNA-Vision-based-Restaurant-Robot",
    },
    {
      unsplashSavQfLRm4Do: `${import.meta.env.BASE_URL}image-2@2x.png`,
      productAdminDashboard: "HydroLink 2.0",
      vivamusEleifendConvallisAnte:
        "An IoT device plugged into any domestic water tank checks the water level and sends it to Firebase. The water level can be monitored with a custom-made app, and the user can control the water level from the app.",
      linkaddress: "https://hydrolink.auradigitallabs.com/",
    },
    {
      unsplashSavQfLRm4Do: `${import.meta.env.BASE_URL}whatsapp-image-20231206-at-094016-8856d3bf@2x.png`,
      productAdminDashboard: "Analog Function Generator",
      vivamusEleifendConvallisAnte:
        "An analog function generator that generates sinusoidal, triangular, sawtooth, and PWM signals up to 20kHz with variable parameters. We designed it using analog components, which feature versatile waveform options, and easy signal output.",
      linkaddress: "https://github.com/OhmFusion/Analog-Function-Generator",
    },
    {
      unsplashSavQfLRm4Do: `${import.meta.env.BASE_URL}unsplashm-hrflhgabo@2x.png`,
      productAdminDashboard: "IoT Medicine Storage Box",
      vivamusEleifendConvallisAnte:
        "A medicine storage box that provides medicine time alerts, keeps the medicine in proper sunlight and monitors the temperature and humidity.",
      linkaddress: "https://github.com/lasithhaputhanthri/Medi-Box",
    },
  ];

  const handleSeeMore = () => {
    setVisibleProjects((prevCount) => prevCount + 3); // Show 3 more projects each time
  };

  return (
    <div className={[styles.portfolio, className].join(" ")}>
      <div className={styles.portfolio1}>
        <div className={styles.projectsIntro}>
          <h1 className={styles.projects}>Projects</h1>
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
                //uIUXDESIGN="UI-UX DESIGN"
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

export default Portfolio;
