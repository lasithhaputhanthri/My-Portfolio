import { FunctionComponent } from "react";
import styles from "./Modal.module.css";

type ModalProps = {
  imageUrl: string;
  onClose: () => void;
};

const Modal: FunctionComponent<ModalProps> = ({ imageUrl, onClose }) => {
  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <img src={imageUrl} alt="Full Screen" className={styles.modalImage} />
        <button className={styles.closeButton} onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
