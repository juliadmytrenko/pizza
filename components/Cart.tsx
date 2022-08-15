import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import Modal from "./Modal";
import ProductCard from "./ProductCard";

interface ICart {
  title: string;
  show: boolean;
  onClose: () => void;
  onSubmit: () => void;
}

const Cart = ({ title, show, onClose, onSubmit }: ICart) => {
  const productsList = useSelector(
    (state: RootState) => state.cart.productsList
  );
  return (
    <Modal
      title={title}
      show={show}
      onClose={onClose}
      onSubmit={onSubmit}
      closeButtonText="Continue shopping"
      submitButtonText="Purchase"
    >
      <div>
        {productsList.map((product) => (
          <ProductCard
            imageUrl={product.imageUrl}
            size={product.size}
            quantity={product.quantity}
            name={product.name}
            prices={product.prices}
          />
        ))}
      </div>
    </Modal>
  );
};

export default Cart;
