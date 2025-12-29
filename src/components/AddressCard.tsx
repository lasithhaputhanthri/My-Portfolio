import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./AddressCard.module.css";

export type AddressCardType = {
  className?: string;
  address?: string;
  newMexico31134?: string;

  /** Style props */
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propMinWidth?: CSSProperties["minWidth"];
  propDisplay?: CSSProperties["display"];
  propMinWidth1?: CSSProperties["minWidth"];
};

const AddressCard: FunctionComponent<AddressCardType> = ({
  className = "",
  propBackgroundColor,
  address,
  propMinWidth,
  newMexico31134,
  propDisplay,
  propMinWidth1,
}) => {
  const addressCardStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const addressStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const newMexico31134Style: CSSProperties = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth1,
    };
  }, [propDisplay, propMinWidth1]);

  return (
    <div
      className={[styles.addressCard, className].join(" ")}
      style={addressCardStyle}
    >
      <div className={styles.locationAndMapLocationPiWrapper}>
        <img
          className={styles.locationAndMapLocationPi}
          alt=""
          src={`${import.meta.env.BASE_URL}location-and-map--location-pin.svg`}
        />
      </div>
      <div className={styles.addressParent}>
        <div className={styles.address} style={addressStyle}>
          {address}
        </div>
        <div className={styles.newMexico31134} style={newMexico31134Style}>
          {newMexico31134}
        </div>
      </div>
    </div>
  );
};

export default AddressCard;
