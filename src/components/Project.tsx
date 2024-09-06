import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Project.module.css";

export type ProjectType = {
  className?: string;
  unsplashSavQfLRm4Do?: string;
  uIUXDESIGN?: string;
  uIUXDESIGN1?: boolean;
  productAdminDashboard?: string;
  vivamusEleifendConvallisAnte?: string;
  letsWorkTogether?: string;
  propBorder?: string;
  propBackgroundColor?: string;
  propDisplay2?: string;
  propMinWidth3?: string;
  propColor?: string;
  linkaddress?: string;
  target?: string;

  /** Style props */
  propMinWidth?: CSSProperties["minWidth"];
  propHeight?: CSSProperties["height"];
  propBoxShadow?: CSSProperties["boxShadow"];
  propFlex?: CSSProperties["flex"];
  propWidth?: CSSProperties["width"];
  propPadding?: CSSProperties["padding"];
  propWidth1?: CSSProperties["width"];
  propMaxHeight?: CSSProperties["maxHeight"];
  propAlignSelf?: CSSProperties["alignSelf"];
  propHeight1?: CSSProperties["height"];
  propOverflow?: CSSProperties["overflow"];
  propAlignSelf1?: CSSProperties["alignSelf"];
  propWidth2?: CSSProperties["width"];
  propPadding1?: CSSProperties["padding"];
  propAlignSelf2?: CSSProperties["alignSelf"];
  propWidth3?: CSSProperties["width"];
  propHeight2?: CSSProperties["height"];
  propMinWidth1?: CSSProperties["minWidth"];
  propDisplay?: CSSProperties["display"];
  propMinWidth2?: CSSProperties["minWidth"];
  propWidth4?: CSSProperties["width"];
  propDisplay1?: CSSProperties["display"];
  propAlignSelf3?: CSSProperties["alignSelf"];
  onClick?: () => void; // Add onClick property
};

const Project: FunctionComponent<ProjectType> = ({
  className = "",
  propMinWidth,
  propHeight,
  propBoxShadow,
  propFlex,
  propWidth,
  propPadding,
  unsplashSavQfLRm4Do,
  propWidth1,
  propMaxHeight,
  propAlignSelf,
  propHeight1,
  propOverflow,
  propAlignSelf1,
  propWidth2,
  propPadding1,
  propAlignSelf2,
  uIUXDESIGN,
  uIUXDESIGN1,
  propWidth3,
  propHeight2,
  propMinWidth1,
  productAdminDashboard,
  propDisplay,
  propMinWidth2,
  vivamusEleifendConvallisAnte,
  propWidth4,
  propDisplay1,
  propAlignSelf3,
  letsWorkTogether,
  propBorder,
  propBackgroundColor,
  propDisplay2,
  propMinWidth3,
  propColor,
  linkaddress,
  target = "_blank",
  onClick // Destructure onClick
}) => {
  const projectStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
      height: propHeight,
      boxShadow: propBoxShadow,
      flex: propFlex,
      width: propWidth,
      padding: propPadding,
    };
  }, [propMinWidth, propHeight, propBoxShadow, propFlex, propWidth, propPadding]);

  const whatsAppImage20240401At0Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth1,
      maxHeight: propMaxHeight,
      alignSelf: propAlignSelf,
      height: propHeight1,
      overflow: propOverflow,
    };
  }, [propWidth1, propMaxHeight, propAlignSelf, propHeight1, propOverflow]);

  const featuredProjectDetailsStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf1,
      width: propWidth2,
      padding: propPadding1,
    };
  }, [propAlignSelf1, propWidth2, propPadding1]);

  const featuredProjectNameContaineStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf2,
    };
  }, [propAlignSelf2]);

  const uIUXDESIGNStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth3,
      height: propHeight2,
      minWidth: propMinWidth1,
    };
  }, [propWidth3, propHeight2, propMinWidth1]);

  const productAdminDashboardStyle: CSSProperties = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth2,
    };
  }, [propDisplay, propMinWidth2]);

  const vivamusEleifendConvallisStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth4,
      display: propDisplay1,
      alignSelf: propAlignSelf3,
    };
  }, [propWidth4, propDisplay1, propAlignSelf3]);

  return (
    <div className={[styles.project, className].join(" ")} style={projectStyle} onClick={onClick}>
      <img
        className={styles.whatsappImage20240401At0}
        loading="lazy"
        alt=""
        src={unsplashSavQfLRm4Do}
        style={whatsAppImage20240401At0Style}
      />
      <div
        className={styles.featuredProjectDetails}
        style={featuredProjectDetailsStyle}
      >
        <div className={styles.featuredProjectContent}>
          <div
            className={styles.featuredProjectNameContaine}
            style={featuredProjectNameContaineStyle}
          >
            {!uIUXDESIGN1 && (
              <div className={styles.uiUxDesign} style={uIUXDESIGNStyle}>
                {uIUXDESIGN}
              </div>
            )}
            <div
              className={styles.productAdminDashboard}
              style={productAdminDashboardStyle}
            >
              {productAdminDashboard}
            </div>
          </div>
          <div
            className={styles.vivamusEleifendConvallis}
            style={vivamusEleifendConvallisStyle}
          >
            {vivamusEleifendConvallisAnte}
          </div>
        </div>
        <a 
          href={linkaddress} 
          className={styles.button2}
          target={target}
          rel={target === "_blank" ? "noopener noreferrer" : undefined}
        >
          <div className={styles.button2}>See more</div>
        </a>
      </div>
    </div>
  );
};

export default Project;
