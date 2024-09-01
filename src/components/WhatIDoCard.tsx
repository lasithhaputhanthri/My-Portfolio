import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./WhatIDoCard.module.css";

export type WhatIDoCardType = {
  className?: string;
  userExperienceUX?: string;
  loremIpsumDolorSitAmetConsect?: string;

  /** Style props */
  whatIDoCardHeight?: CSSProperties["height"];
  userExperienceUXHeight?: CSSProperties["height"];
};

const WhatIDoCard: FunctionComponent<WhatIDoCardType> = ({
  className = "",
  userExperienceUX,
  loremIpsumDolorSitAmetConsect,
  whatIDoCardHeight,
  userExperienceUXHeight,
}) => {
  const whatIDoCardStyle: CSSProperties = useMemo(() => {
    return {
      height: whatIDoCardHeight,
    };
  }, [whatIDoCardHeight]);

  const userExperienceUXStyle: CSSProperties = useMemo(() => {
    return {
      height: userExperienceUXHeight,
    };
  }, [userExperienceUXHeight]);

  return (
    <div
      className={[styles.whatIDoCard, className].join(" ")}
      style={whatIDoCardStyle}
    >
      <h3 className={styles.userExperienceUx} style={userExperienceUXStyle}>
        {userExperienceUX}
      </h3>
      <div className={styles.loremIpsumDolor}>
        {loremIpsumDolorSitAmetConsect}
      </div>
    </div>
  );
};

export default WhatIDoCard;
