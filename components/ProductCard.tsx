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
  const dispatch = useDispatch();

  return (
    <div className={styles.wrapper}>
      <Card imageUrl={props.imageUrl} ImageClassName={styles.image}>
        <div className={styles.description}>
          <div>
            <h3 className={styles.title}>Pizza {props.name}</h3>
            <span>size: {props.size}</span>
          </div>
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
        </div>
      </Card>
    </div>
  );
};

export default ProductCard;
