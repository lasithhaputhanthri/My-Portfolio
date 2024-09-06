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
      productAdminDashboard: "StearSafe Spectacles PCB",
      vivamusEleifendConvallisAnte:
        "SteerSafe PCB is a 6-layer, mixed-signal design featuring an onboard inverted-F antenna optimized for 2.4GHz with impedance matching, ensuring efficient signal transmission and power efficiency in wireless communication.",
      linkaddress: "https://github.com/OhmFusion/Analog-Function-Generator",
    },
    {
      unsplashSavQfLRm4Do: "/photo_6244475496393982859_y.jpg",
      productAdminDashboard: "StearSafe Wristband PCB",
      vivamusEleifendConvallisAnte:
        "SteerSafe Wristband PCB is a compact 4-layer design with impedance matching and an onboard inverted-F antenna optimized for 2.4GHz, ensuring efficient wireless communication in wearable applications.",
      linkaddress: "https://hydrolink.lk/",
    },
    {
      unsplashSavQfLRm4Do: "/photo_6244475496393982859_y.jpg",
      productAdminDashboard: "LUNA Resturent Robot PCB",
      vivamusEleifendConvallisAnte:
        "LUNA PCB is a compact 2-layer board for restaurant robot control, utilizing the ATmega2560 microcontroller. It supports both UART and I2C communication, ensuring efficient and versatile data handling for seamless automation.",
      linkaddress: "https://github.com/lasithhaputhanthri/Medi-Box",
    },
    {
      unsplashSavQfLRm4Do: "/photo_6244475496393982860_x.jpg",
      productAdminDashboard: "REPLACE: A Smart and Intelligent Wall Socket PCB",
      vivamusEleifendConvallisAnte:
        "REPLACE PCB is a 2-layer design for a smart wall socket, handling high voltage and current. It incorporates analog circuits for accurate voltage and current sensing, ensuring safe and efficient energy management.",
      linkaddress: "https://github.com/AuraLabs-main/AuraLabs-Replace-working",
    },
    {
      unsplashSavQfLRm4Do: "/photo_6244475496393982863_x.jpg",
      productAdminDashboard: "Ratatouille Maze solving Robot",
      vivamusEleifendConvallisAnte:
        "Ratatouille Maze Solving Robot PCB is a compact 2-layer design optimized for controlling a maze-solving robot, providing efficient performance and streamlined routing for robotic automation tasks.",
      linkaddress: "",
    },
    {
      unsplashSavQfLRm4Do: "/photo_6244475496393982861_x.jpg",
      productAdminDashboard: "HydroLink 1.0 PCB",
      vivamusEleifendConvallisAnte:
        "HydroLink 1.0 PCB is a 2-layer design featuring the ESP8266 module. As your first PCB project, it provides efficient wireless communication for IoT applications, enabling remote water level monitoring.",
      linkaddress: "https://github.com/PulseX-Solutions/Stear_Safe",
    },
    {
      unsplashSavQfLRm4Do: "/photo_6244475496393982862_x.jpg",
      productAdminDashboard: "Hydrolink 2.0",
      vivamusEleifendConvallisAnte:
        "HydroLink 2.0 PCB is a compact 2-layer design with enhanced power management and thermal dissipation. It focuses on low power consumption, ensuring efficient and reliable performance for IoT water monitoring systems.",
      linkaddress: "",
    },

      {
        unsplashSavQfLRm4Do: "/photo_6244475496393982864_x.jpg",
        productAdminDashboard: "Function Generator PCB",
        vivamusEleifendConvallisAnte:
          "Analog Function Generator PCB is a compact 2-layer design for generating analog signals, including sine, square, and triangle waves. Its efficient layout is ideal for precise and space-saving electronic testing.",
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
