import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import styles from "../styles/Modal.module.scss";
import { CSSTransition } from "react-transition-group";

interface IProps {
  show: boolean;
  onClose: () => void;
  onSubmit: () => void;
  title: string;
  children: React.ReactNode;
}

const Modal = ({ show, onClose, onSubmit, title, children }: IProps) => {
  const nodeRef = useRef(null); // to omit the deprecation warning https://stackoverflow.com/a/65918908/11889232
  const [domReady, setDomReady] = useState(false);

  const closeOnEscapeKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      onClose();
    }
  };

  useEffect(() => {
    setDomReady(true);
    document.body.addEventListener("keydown", closeOnEscapeKeyDown);

    return () => {
      // cleanup
      document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
    };
  }, []);

  return domReady
    ? ReactDOM.createPortal(
        <CSSTransition
          in={show}
          unmountOnExit
          timeout={{ enter: 0, exit: 300 }}
          classNames={{
            enterDone: styles.enterDone,
            exit: styles.exit,
          }}
          nodeRef={nodeRef}
        >
          <div className={`${styles.modal}`} onClick={onClose} ref={nodeRef}>
            <div
              className={styles.content}
              onClick={(e) => e.stopPropagation()}
            >
              <div className={styles.header}>
                <h4 className={styles.title}>{title}</h4>
              </div>
              <div className={styles.body}>{children}</div>
              <div className={styles.footer}>
                <button className={styles.button} onClick={onClose}>
                  Close
                </button>
                <button className={styles.button} onClick={onSubmit}>
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </CSSTransition>,
        document.getElementById("root") as HTMLElement
      )
    : null;
};

export default Modal;
