import React from "react";
import styles from "../styles/Card.module.scss";
import Modal, { IModalProps } from "./Modal";

interface ICart extends IModalProps {}

const Card = ({ title, show, onClose, onSubmit }: ICart) => {
  return (
    <Modal
      title={title}
      show={show}
      onClose={onClose}
      onSubmit={onSubmit}
      closeButtonText="Keep shopping"
    >
      <div className={styles.container}>Card</div>
    </Modal>
  );
};

export default Card;
