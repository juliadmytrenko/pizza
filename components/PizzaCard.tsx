import React from "react";
import styles from "../styles/PizzaCard.module.scss";
import Image from "next/image";

const PizzaCard = () => {
  return (
    <div className={styles.card}>
      <div className={styles.pizzaImage}>
        <Image
          src="/img/pizza.jpg"
          width="500"
          height="500"
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div className={styles.description}>
        <h3>Pizza peperoni</h3>
        <p>salami, onion, tomato sauce</p>
      </div>
    </div>
  );
};

export default PizzaCard;
