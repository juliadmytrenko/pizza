import React from "react";
import { Product, ProductSize } from "../redux/features/cart/cartSlice";
import Card from "./Card";
import styles from "../styles/ProductCard.module.scss";

interface IProductCard {
  imageUrl?: string;
  size?: ProductSize;
  quantity: number;
  name: string;
  prices: number[];
}

const ProductCard = (props: IProductCard) => {
  return (
    <div className={styles.wrapper}>
      <Card imageUrl={props.imageUrl} ImageClassName={styles.image}>
        <div className={styles.description}>
          <div>
            <h3 className={styles.title}>Pizza {props.name}</h3>
            <span>size: {props.size}</span>
          </div>
          <div className={styles.quantity}>
            <span>quantity: {props.quantity}</span>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ProductCard;
