import { FunctionComponent } from "react";
import WhatIDoCard from "./WhatIDoCard";
import styles from "./Services.module.css";

export type ServicesType = {
  className?: string;
};

const Services: FunctionComponent<ServicesType> = ({ className = "" }) => {
  return (
    <div className={[styles.whatIDo, className].join(" ")}>
      <div className={styles.servicesDescription}>
        <div className={styles.servicesDescriptionContainer}>
          <div className={styles.workProcess}>
            <h1 className={styles.whatIDo1}>What I do?</h1>
            <div className={styles.myWorkSpansAcrossPcbDesigWrapper}>
              <div className={styles.myWorkSpans}>
                My work spans RF electronics, multilayer PCB design, embedded
                firmware, and hardware validation — taking products from
                schematic capture and simulation through board bring-up,
                compliance testing, and field deployment.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.whatIDoCards}>
        <div className={styles.whatIDoCard}>
          <h3 className={styles.userExperienceUx}>PCB Design &amp; Layout</h3>
          <div className={styles.loremIpsumDolor}>
            Design and review 1–6 layer high-density PCBs for mixed-signal and
            RF applications using Altium Designer and Siemens Xpedition.
            Impedance-controlled routing, power integrity analysis, and
            DFM-ready outputs for production.
          </div>
          <div className={styles.serviceImage} />
        </div>
        <div className={styles.whatIDoCard}>
          <h3 className={styles.userExperienceUx}>Embedded Systems &amp; Firmware</h3>
          <div className={styles.loremIpsumDolor}>
            Develop embedded firmware on STM32, ESP32, and ARM Cortex platforms
            in C/C++. Sensor integration, communication protocols (SPI, I2C, UART, Modbus),
            RTOS scheduling, and OTA update pipelines for IoT field devices.
          </div>
          <div className={styles.serviceImage} />
        </div>
        <div className={styles.whatIDoCard}>
          <h3 className={styles.userExperienceUx}>RF &amp; Antenna Engineering</h3>
          <div className={styles.loremIpsumDolor}>
            RF front-end design, antenna development (IFA, patch), and EM
            simulation in Ansys HFSS. Experience with CW/FMCW radar systems
            for drone detection in 6 GHz and mmWave bands.
          </div>
          <div className={styles.serviceImage} />
        </div>
        <div className={styles.whatIDoCard}>
          <h3 className={styles.userExperienceUx}>Hardware Validation &amp; Debug</h3>
          <div className={styles.loremIpsumDolor}>
            Board bring-up, signal integrity verification with oscilloscopes
            and logic analyzers, power-rail characterization, SMD rework, and
            systematic engineering test documentation.
          </div>
          <div className={styles.serviceImage} />
        </div>

      </div>
    </div>
  );
};

export default Services;
