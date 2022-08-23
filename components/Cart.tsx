import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import Dialog from "./Dialog";
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
    <Dialog
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
            key={`${product.id}-${product.size}`}
            id={product.id}
            imageUrl={product.imageUrl}
            size={product.size}
            quantity={product.quantity}
            name={product.name}
            prices={product.prices}
          />
        ))}
      </div>
      <div>
        <p>Total price: </p>
      </div>
    </Dialog>
  );
};

export default Cart;
