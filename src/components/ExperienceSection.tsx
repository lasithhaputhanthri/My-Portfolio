import { FunctionComponent } from "react";
import styles from "./ExperienceSection.module.css";

export type ExperienceSectionType = {
  className?: string;
};

const ExperienceSection: FunctionComponent<ExperienceSectionType> = ({
  className = "",
}) => {
  const experiences = [
    {
      role: "Embedded Hardware Engineer",
      company: "Thakshana Technologies (Pvt) Ltd",
      project: "Project PNF: Secure Communication System",
      dates: "Jul 2026 – Present",
      highlights: [
        "Review and validate multi-sheet schematics and high-density multilayer PCB layouts using Siemens Xpedition and Altium Designer.",
        "Perform LTspice transient, power-rail, and mixed-signal simulations to investigate design issues before fabrication.",
        "Perform hardware debugging, board bring-up, signal verification, and engineering test documentation.",
      ],
    },
    {
      role: "Electronic Engineer",
      company: "Aura Digital Labs",
      project: "IoT Hardware and Commercial PCB Prototypes",
      dates: "Dec 2024 – Jul 2026",
      highlights: [
        "Designed custom IoT hardware, smart power-monitoring nodes, and commercial PCB prototypes from concept through enclosure integration.",
      ],
    },
    {
      role: "Embedded Systems Intern",
      company: "Magicbits (Pvt) Ltd",
      project: "Employee Progress Tracking System",
      dates: "Jun 2024 – Dec 2024",
      highlights: [
        "Developed firmware for ESP32-based HMI devices with RFID integration, deployed in a 20-device pilot.",
        "Built ThingsBoard IoT dashboards for real-time employee progress tracking and department analytics.",
      ],
    },
    {
      role: "Electronics Instructor",
      company: "Magicbits (Pvt) Ltd",
      project: "STEM Education & Curriculum",
      dates: "Jun 2024 – Dec 2024",
      highlights: [
        "Designed and delivered hands-on electronics and embedded systems curriculum for students aged 10–18.",
      ],
    },
  ];

  return (
    <div className={[styles.experienceSection, className].join(" ")}>
      <div className={styles.experienceInner}>
        <div className={styles.sectionHeader}>
          <h1 className={styles.sectionTitle}>Experience</h1>
          <div className={styles.sectionDescWrapper}>
            <div className={styles.sectionDesc}>
              Professional career timeline — from embedded firmware and IoT prototyping to multilayer PCB design and hardware validation for secure communication systems.
            </div>
          </div>
        </div>
        <div className={styles.timelineCards}>
          {experiences.map((exp, index) => (
            <div className={styles.card} key={index}>
              <div className={styles.cardAccent} />
              <div className={styles.cardHeader}>
                <h3 className={styles.cardRole}>{exp.role}</h3>
                <span className={styles.cardDates}>{exp.dates}</span>
              </div>
              <div className={styles.cardCompany}>{exp.company}</div>
              <div className={styles.cardProject}>{exp.project}</div>
              <ul className={styles.cardHighlights}>
                {exp.highlights.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
