import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Button.module.css";

export type ButtonType = {
  className?: string;
  letsWorkTogether?: string;

  /** Style props */
  propBorder?: CSSProperties["border"];
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propDisplay?: CSSProperties["display"];
  propMinWidth?: CSSProperties["minWidth"];
  propColor?: CSSProperties["color"];
};

const Button: FunctionComponent<ButtonType> = ({
  className = "",
  propBorder,
  propBackgroundColor,
  letsWorkTogether,
  propDisplay,
  propMinWidth,
  propColor,
}) => {
  const buttonStyle: CSSProperties = useMemo(() => {
    return {
      border: propBorder,
      backgroundColor: propBackgroundColor,
    };
  }, [propBorder, propBackgroundColor]);

  const letsWorkTogetherStyle: CSSProperties = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth,
      color: propColor,
    };
  }, [propDisplay, propMinWidth, propColor]);

  return (
    <button
      className={[styles.button, className].join(" ")}
      style={buttonStyle}
    >
      <div className={styles.letsWorkTogether} style={letsWorkTogetherStyle}>
        {letsWorkTogether}
      </div>
      <img
        className={styles.userInterfacePaperPlane}
        alt=""
        src={`${import.meta.env.BASE_URL}user-interface--paper-plane.svg`}
      />
    </button>
  );
};

export default Button;
