import React, { useState } from "react";
import {
  decrement,
  increament,
  Product,
  ProductSize,
  removeFromCart,
} from "../redux/features/cart/cartSlice";
import Card from "./Card";
import styles from "../styles/ProductCard.module.scss";
import IconButton from "@mui/material/IconButton";
import { IoMdAddCircle, IoMdRemoveCircle } from "react-icons/io";
import { BsFillTrashFill } from "react-icons/bs";
import { useDispatch } from "react-redux";

interface IProductCard {
  id: number;
  imageUrl?: string;
  size?: ProductSize;
  quantity: number;
  name: string;
  prices: number[];
}

const ProductCard = (props: IProductCard) => {
  const price = () => {
    if (props.size === "small") return props.prices[0];
    if (props.size === "medium") return props.prices[1];
    if (props.size === "big") return props.prices[2];
    else return props.prices[0];
  };
  const dispatch = useDispatch();

  return (
    <div className={styles.wrapper}>
      <Card imageUrl={props.imageUrl} ImageClassName={styles.image}>
        <div className={styles.description}>
          <div>
            <h3 className={styles.title}>Pizza {props.name}</h3>
            <span>size: {props.size}</span>
          </div>
          <div>
            <div className={styles.quantity}>
              <IconButton
                onClick={() => {
                  dispatch(decrement({ id: props.id, size: props.size }));
                }}
                disabled={props.quantity === 1}
              >
                <IoMdRemoveCircle />
              </IconButton>
              <span>{props.quantity}</span>
              <IconButton
                onClick={() => {
                  dispatch(increament({ id: props.id, size: props.size }));
                }}
                disabled={props.quantity > 30}
              >
                <IoMdAddCircle />
              </IconButton>
            </div>

            <IconButton
              className={styles.deleteButton}
              onClick={() => {
                dispatch(removeFromCart({ id: props.id, size: props.size }));
              }}
            >
              <BsFillTrashFill className={styles.trash} />
            </IconButton>
            <span className={styles.price}>{`${price()}zł`}</span>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ProductCard;
