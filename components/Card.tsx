import React from "react";
import styles from "../styles/Card.module.scss";
import Image from "next/image";

interface ICard {
  children?: React.ReactNode;
  imageUrl?: string;
  ImageClassName?: string;
}

const Card = (props: ICard) => {
  return (
    <div className={styles.card}>
      {props.imageUrl && (
        <div className={`${styles.image} ${props.ImageClassName}`}>
          <Image src={props.imageUrl} layout="fill" objectFit="cover" />
        </div>
      )}

      <div className={styles.body}>{props.children}</div>
    </div>
  );
};

export default Card;
