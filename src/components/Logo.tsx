import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Logo.module.css";

export type LogoType = {
  className?: string;
  b?: string;
  brooklyn?: string;

  /** Style props */
  propHeight?: CSSProperties["height"];
  propWidth?: CSSProperties["width"];
  propMargin?: CSSProperties["margin"];
  propMinWidth?: CSSProperties["minWidth"];
  propTextDecoration?: CSSProperties["textDecoration"];
  propColor?: CSSProperties["color"];
};

const Logo: FunctionComponent<LogoType> = ({
  className = "",
  propHeight,
  propWidth,
  b,
  propMargin,
  propMinWidth,
  propTextDecoration,
  brooklyn,
  propColor,
}) => {
  const logoNameStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
      width: propWidth,
    };
  }, [propHeight, propWidth]);

  const bStyle: CSSProperties = useMemo(() => {
    return {
      margin: propMargin,
      minWidth: propMinWidth,
      textDecoration: propTextDecoration,
    };
  }, [propMargin, propMinWidth, propTextDecoration]);

  const brooklynStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  return (
    <div className={[styles.logo, className].join(" ")}>
      <div className={styles.logoName} style={logoNameStyle}>
        <h3 className={styles.b} style={bStyle}>
          {b}
        </h3>
      </div>
      <h1 className={styles.brooklyn} style={brooklynStyle}>
        {brooklyn}
      </h1>
    </div>
  );
};

export default Logo;
