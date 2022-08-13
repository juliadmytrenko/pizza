import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import styles from "../styles/Card.module.scss";
import Modal, { IModalProps } from "./Modal";
import PizzaCard from "./PizzaCard";

interface ICart extends IModalProps {}

const Card = ({ title, show, onClose, onSubmit }: ICart) => {
  const productsList = useSelector(
    (state: RootState) => state.cart.productsList
  );
  return (
    <Modal
      title={title}
      show={show}
      onClose={onClose}
      onSubmit={onSubmit}
      closeButtonText="Keep shopping"
    >
      <div className={styles.container}>
        {productsList.map((product) => (
          <>
            <span>{product.id}</span>
            <span>{product.name}</span>
            <span>{product.ingredients}</span>
            <span>{product.imageUrl}</span>
            <span>{product.name}</span>
          </>
        ))}
      </div>
    </Modal>
  );
};

export default Card;
