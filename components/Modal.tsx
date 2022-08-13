import React, { useEffect } from "react";
import styles from "../styles/Modal.module.scss";
import { CSSTransition } from "react-transition-group";
import fadeStyles from "../styles/fade.module.scss";

interface IProps {
  show: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const Modal = ({ show, onClose, title, children }: IProps) => {
  const closeOnEscapeKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      onClose();
    }
  };

  useEffect(() => {
    document.body.addEventListener("keydown", closeOnEscapeKeyDown);

    return () => {
      // cleanup
      document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
    };
  }, []);

  return (
    <CSSTransition
      in={show}
      unmountOnExit
      timeout={{ enter: 0, exit: 300 }}
      classNames={fadeStyles}
    >
      <div className={`${styles.modal}`} onClick={onClose}>
        <div className={styles.content} onClick={(e) => e.stopPropagation()}>
          <div className={styles.header}>
            <h4 className={styles.title}>{title}</h4>
          </div>
          <div className={styles.body}>{children}</div>
          <div className={styles.footer}>
            <button className={styles.button} onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    </CSSTransition>
  );
};

export default Modal;
