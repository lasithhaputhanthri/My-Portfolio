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
                My work spans across PCB design, embedded systems, analog
                circuit development, and robotics, where I focus on creating
                practical, efficient, and user-friendly devices. My passion lies
                in developing projects that solve real-world problems,
                particularly in the areas of smart devices, IoT applications,
                and assistive technologies.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.whatIDoCards}>
        <div className={styles.whatIDoCard}>
          <h3 className={styles.userExperienceUx}>PCB Designing</h3>
          <div className={styles.loremIpsumDolor}>
            Experienced in designing 1-6 layer PCBs for mixed signals and RF
            applications. I use Altium Designer to create efficient,
            high-performance circuit boards tailored to various electronic
            needs.
          </div>
          <div className={styles.serviceImage} />
        </div>
        <div className={styles.whatIDoCard}>
          <h3 className={styles.userExperienceUx}>Embedded Systems</h3>
          <div className={styles.loremIpsumDolor}>
            Experienced in developing embedded systems, including programming microcontrollers and integrating sensors. I focus on creating efficient and reliable solutions that interact effectively with hardware for practical and innovative applications.
          </div>
          <div className={styles.serviceImage} />
        </div>
        <div className={styles.whatIDoCard}>
          <h3 className={styles.userExperienceUx}>Robotics</h3>
          <div className={styles.loremIpsumDolor}>
            Experienced in designing robotic systems, including hardware integration and control. I focus on creating lightweight, functional robots that enhance accessibility and deliver practical, user-friendly solutions.
          </div>
          <div className={styles.serviceImage} />
        </div>
        <div className={styles.whatIDoCard}>
          <h3 className={styles.userExperienceUx}>Digital System Design</h3>
          <div className={styles.loremIpsumDolor}>
            Familiar with FPGA digital system design, focusing on developing basic logic circuits and learning to optimize performance for various digital applications. I am gaining experience in using FPGA technology to create effective solutions.
          </div>
          <div className={styles.serviceImage} />
        </div>

      </div>
    </div>
  );
};

export default Services;
