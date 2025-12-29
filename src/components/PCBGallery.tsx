import { FunctionComponent, useState } from "react";
import Project from "./Project";
import Modal from "./Modal";
import styles from "./PCBGallery.module.css";

export type PCBGalleryType = {
  className?: string;
};

const PCBGallery: FunctionComponent<PCBGalleryType> = ({ className = "" }) => {
  const [visibleProjects, setVisibleProjects] = useState(3);
  const [modalImage, setModalImage] = useState<string | null>(null);

  const projects = [
    {
      unsplashSavQfLRm4Do: `${import.meta.env.BASE_URL}ST_specs.png`,
      productAdminDashboard: "SteerSafe Spectacles PCB",
      vivamusEleifendConvallisAnte:
        "SteerSafe PCB is a 6-layer, mixed-signal design featuring an onboard inverted-F antenna optimized for 2.4GHz with impedance matching, ensuring efficient signal transmission and power efficiency in wireless communication.",

    },
    {
      unsplashSavQfLRm4Do: `${import.meta.env.BASE_URL}wb_full.png`,
      productAdminDashboard: "SteerSafe Wristband PCB",
      vivamusEleifendConvallisAnte:
        "SteerSafe Wristband PCB is a compact 4-layer design with impedance matching and an onboard inverted-F antenna optimized for 2.4GHz, ensuring efficient wireless communication in wearable applications.",

    },
    {
      unsplashSavQfLRm4Do: `${import.meta.env.BASE_URL}Luna.png`,
      productAdminDashboard: "LUNA Restaurant Robot PCB",
      vivamusEleifendConvallisAnte:
        "LUNA PCB is a compact 2-layer board for restaurant robot control, utilizing the ATmega2560 microcontroller. It supports both UART and I2C communication, ensuring efficient and versatile data handling for seamless automation.",

    },
    {
      unsplashSavQfLRm4Do: `${import.meta.env.BASE_URL}Annotation 2024-09-06 170740.png`,
      productAdminDashboard: "REPLACE: A Smart and Intelligent Wall Socket PCB",
      vivamusEleifendConvallisAnte:
        "REPLACE PCB is a 2-layer design for a smart wall socket, handling high voltage and current. It incorporates analog circuits for accurate voltage and current sensing, ensuring safe and efficient energy management.",

    },
    {
      unsplashSavQfLRm4Do: `${import.meta.env.BASE_URL}rat_full.png`,
      productAdminDashboard: "Ratatouille Maze Solving Robot PCB",
      vivamusEleifendConvallisAnte:
        "Ratatouille Maze Solving Robot PCB is a compact 2-layer design optimized for controlling a maze-solving robot, providing efficient performance and streamlined routing for robotic automation tasks.",

    },

    {
      unsplashSavQfLRm4Do: `${import.meta.env.BASE_URL}photo_6244475496393982859_y.jpg`,
      productAdminDashboard: "HydroLink 2.0 PCB",
      vivamusEleifendConvallisAnte:
        "HydroLink 2.0 PCB is a compact 2-layer design with enhanced power management and thermal dissipation. It focuses on low power consumption, ensuring efficient and reliable performance for IoT water monitoring systems.",

    },
    {
      unsplashSavQfLRm4Do: `${import.meta.env.BASE_URL}FG.png`,
      productAdminDashboard: "Function Generator PCB",
      vivamusEleifendConvallisAnte:
        "Analog Function Generator PCB is a compact 2-layer design for generating analog signals, including sine, square, and triangle waves. Its efficient layout is ideal for precise and space-saving electronic testing.",

    },
    {
      unsplashSavQfLRm4Do: `${import.meta.env.BASE_URL}photo_6244475496393982860_x.jpg`,
      productAdminDashboard: "MeasureUp PCB",
      vivamusEleifendConvallisAnte:
        "MeasureUp PCB is a 2-layer design for high-precision height sensing. It features a compact layout tailored for accurate measurement in various applications, ensuring reliable and consistent performance.",

    },
    {
      unsplashSavQfLRm4Do: `${import.meta.env.BASE_URL}HL_Full.png`,
      productAdminDashboard: "HydroLink 1.0 PCB",
      vivamusEleifendConvallisAnte:
        "HydroLink 1.0 PCB is a 2-layer design featuring the ESP8266 module. As your first PCB project, it provides efficient wireless communication for IoT applications, enabling remote water level monitoring.",

    },
  ];

  const handleSeeMore = () => {
    setVisibleProjects((prevCount) => prevCount + 3);
  };

  const openModal = (imageUrl: string) => {
    setModalImage(imageUrl);
  };

  const closeModal = () => {
    setModalImage(null);
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
                letsWorkTogether="Full View"
                propBorder="1px solid #a53dff"
                propBackgroundColor="#fff"
                propDisplay2="inline-block"
                propMinWidth3="74px"
                propColor="#a53dff"
                onClick={() => openModal(project.unsplashSavQfLRm4Do)}

              />
            ))}
          </div>
        </div>
      </div>
      {visibleProjects < projects.length && (
        <a className={styles.button} onClick={handleSeeMore}>
          <div className={styles.button1}>More PCB</div>
        </a>
      )}
      {modalImage && (
        <Modal
          imageUrl={modalImage}
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default PCBGallery;
