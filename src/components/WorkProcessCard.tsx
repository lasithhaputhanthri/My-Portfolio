import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./WorkProcessCard.module.css";

export type WorkProcessCardType = {
  className?: string;
  showFrameDiv?: boolean;
  research?: string;
  description?: string; // New prop for content
  showLoremIpsumDolor?: boolean;

  /** Style props */
  propHeight?: CSSProperties["height"];
  propFlex?: CSSProperties["flex"];
  propFlexDirection?: CSSProperties["flexDirection"];
  propBoxShadow?: CSSProperties["boxShadow"];
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propWidth?: CSSProperties["width"];
  propFlexDirection1?: CSSProperties["flexDirection"];
  propFlex1?: CSSProperties["flex"];
  propDisplay?: CSSProperties["display"];
  propMinWidth?: CSSProperties["minWidth"];
  propHeight1?: CSSProperties["height"];
  propAlignSelf?: CSSProperties["alignSelf"];
  propWidth1?: CSSProperties["width"];
};

const WorkProcessCard: FunctionComponent<WorkProcessCardType> = ({
  className = "",
  propHeight,
  propFlex,
  propFlexDirection,
  propBoxShadow,
  propBackgroundColor,
  showFrameDiv = true,
  propWidth,
  propFlexDirection1,
  propFlex1,
  research,
  description, // Destructure new prop
  propDisplay,
  propMinWidth,
  propHeight1,
  showLoremIpsumDolor,
  propAlignSelf,
  propWidth1,
}) => {
  const workProcessCardStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
      flex: propFlex,
      flexDirection: propFlexDirection,
      boxShadow: propBoxShadow,
    };
  }, [propHeight, propFlex, propFlexDirection, propBoxShadow]);

  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const frameDiv1Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      flexDirection: propFlexDirection1,
      flex: propFlex1,
    };
  }, [propWidth, propFlexDirection1, propFlex1]);

  const researchStyle: CSSProperties = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth,
      height: propHeight1,
    };
  }, [propDisplay, propMinWidth, propHeight1]);

  const loremIpsumDolorStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      width: propWidth1,
    };
  }, [propAlignSelf, propWidth1]);

  return (
    <div
      className={[styles.workProcessCard, className].join(" ")}
      style={workProcessCardStyle}
    >
      <div className={styles.deviceComputerWrapper} style={frameDivStyle}>
        <img
          className={styles.deviceComputer}
          alt=""
          src={`${import.meta.env.BASE_URL}device--computer.svg`}
        />
      </div>
      {showFrameDiv && (
        <div className={styles.researchParent} style={frameDiv1Style}>
          <div className={styles.research} style={researchStyle}>
            {research}
          </div>
          {showLoremIpsumDolor && (
            <div
              className={styles.loremIpsumDolor}
              style={loremIpsumDolorStyle}
            >
              {description || "Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default WorkProcessCard;
