import { FunctionComponent } from "react";
import styles from "./ToolsSection.module.css";
import {
  SiAltiumdesigner,
  SiSiemens,
  SiAnsys,
  SiPython,
  SiCplusplus,
  SiC,
  SiLinux,
  SiGit,
  SiGnubash,
  SiIntel,
  SiAmd,
  SiArm,
  SiEspressif,
  SiRaspberrypi,
  SiArduino,
  SiMqtt,
  SiLabview,
} from "react-icons/si";
import { RiBroadcastLine } from "react-icons/ri";

export type ToolsSectionType = {
  className?: string;
};

// --- Custom Actual Brand SVGs for Tools Without Si Entries ---

const MatlabIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 32 32" fill="none">
    <path
      d="M4 22L11 8L18 20L23 15L28 22H4Z"
      stroke="#E16A28"
      strokeWidth="2.5"
      strokeLinejoin="round"
      strokeLinecap="round"
    />
    <path
      d="M11 8L15 22M18 20L21 22M7 16H25"
      stroke="#E16A28"
      strokeWidth="1.5"
      strokeOpacity="0.75"
    />
  </svg>
);

const SolidWorksIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 32 32" fill="none">
    <path d="M16 3L28 10L16 17L4 10L16 3Z" fill="#FF4D4D" />
    <path d="M16 17L28 10V22L16 29V17Z" fill="#C41224" />
    <path d="M4 10L16 17V29L4 22V10Z" fill="#E62434" />
    <text x="16" y="21" fill="#FFFFFF" fontSize="8.5" fontWeight="900" fontFamily="system-ui, sans-serif" textAnchor="middle">
      SW
    </text>
  </svg>
);

const LTspiceIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 32 32" fill="none">
    <rect width="32" height="32" rx="6" fill="#003865" />
    <path d="M7 10V22H13M15 10H23M19 10V22" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" />
    <path d="M5 26C9 22 12 28 16 26C20 24 23 28 27 24" stroke="#E62434" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const VerilogIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 32 32" fill="none">
    <rect width="32" height="32" rx="6" fill="#1B2A4A" />
    <path d="M9 10L16 22L23 10" stroke="#00D2FF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <text x="16" y="27" fill="#00D2FF" fontSize="6.5" fontWeight="800" fontFamily="monospace" textAnchor="middle">
      HDL
    </text>
  </svg>
);

const ModbusIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 32 32" fill="none">
    <rect width="32" height="32" rx="6" fill="#005B94" />
    <path d="M8 21V11L12 17L16 11V21M18 16H24M21 11V21" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

interface ToolItem {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  color?: string;
  floatClass: string;
}

// Row 1: EDA, Simulation, Hardware Platforms (Left to Right)
const row1Tools: ToolItem[] = [
  { name: "Altium Designer", icon: SiAltiumdesigner, color: "#A5915F", floatClass: "floatA" },
  { name: "Siemens Xpedition", icon: SiSiemens, color: "#00646E", floatClass: "floatB" },
  { name: "Ansys HFSS", icon: SiAnsys, color: "#FFB71B", floatClass: "floatC" },
  { name: "LTspice", icon: LTspiceIcon, floatClass: "floatA" },
  { name: "MATLAB", icon: MatlabIcon, floatClass: "floatB" },
  { name: "Simulink", icon: MatlabIcon, floatClass: "floatC" },
  { name: "SolidWorks", icon: SolidWorksIcon, floatClass: "floatA" },
  { name: "NI Multisim", icon: SiLabview, color: "#FFD200", floatClass: "floatB" },
  { name: "Quartus Prime", icon: SiIntel, color: "#0068B5", floatClass: "floatC" },
  { name: "Xilinx Vivado", icon: SiAmd, color: "#ED1C24", floatClass: "floatA" },
  { name: "ARM Cortex", icon: SiArm, color: "#0091BD", floatClass: "floatB" },
  { name: "ESP32", icon: SiEspressif, color: "#E7352C", floatClass: "floatC" },
];

// Row 2: Programming, Protocols, Lab & System Tools (Right to Left)
const row2Tools: ToolItem[] = [
  { name: "C", icon: SiC, color: "#A8B9CC", floatClass: "floatB" },
  { name: "Embedded C++", icon: SiCplusplus, color: "#00599C", floatClass: "floatA" },
  { name: "Python", icon: SiPython, color: "#3776AB", floatClass: "floatC" },
  { name: "Verilog / SystemVerilog", icon: VerilogIcon, floatClass: "floatB" },
  { name: "Linux", icon: SiLinux, color: "#FCC624", floatClass: "floatA" },
  { name: "Bash", icon: SiGnubash, color: "#4EAA25", floatClass: "floatC" },
  { name: "Git", icon: SiGit, color: "#F05032", floatClass: "floatB" },
  { name: "Modbus RTU", icon: ModbusIcon, floatClass: "floatA" },
  { name: "MQTT", icon: SiMqtt, color: "#660066", floatClass: "floatC" },
  { name: "Raspberry Pi", icon: SiRaspberrypi, color: "#C51A4A", floatClass: "floatB" },
  { name: "Arduino", icon: SiArduino, color: "#00979D", floatClass: "floatA" },
  { name: "RF Antennas & IFA", icon: RiBroadcastLine, color: "#10B981", floatClass: "floatC" },
];

const ToolsSection: FunctionComponent<ToolsSectionType> = ({ className = "" }) => {
  return (
    <div className={[styles.toolsSection, className].join(" ")}>
      <div className={styles.toolsInner}>
        <div className={styles.sectionHeader}>
          <h1 className={styles.sectionTitle}>Tools &amp; Technologies</h1>
        </div>

        {/* Floating Marquee Rows */}
        <div className={styles.marqueeWrapper}>
          {/* Row 1: Left-to-Right */}
          <div className={styles.marqueeRow}>
            <div className={styles.trackToRight}>
              {[...row1Tools, ...row1Tools].map((tool, index) => (
                <div key={index} className={`${styles.toolCard} ${styles[tool.floatClass]}`}>
                  <div className={styles.iconWrapper} style={{ color: tool.color }}>
                    <tool.icon className={styles.toolIcon} />
                  </div>
                  <span className={styles.toolName}>{tool.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2: Right-to-Left */}
          <div className={styles.marqueeRow}>
            <div className={styles.trackToLeft}>
              {[...row2Tools, ...row2Tools].map((tool, index) => (
                <div key={index} className={`${styles.toolCard} ${styles[tool.floatClass]}`}>
                  <div className={styles.iconWrapper} style={{ color: tool.color }}>
                    <tool.icon className={styles.toolIcon} />
                  </div>
                  <span className={styles.toolName}>{tool.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolsSection;
