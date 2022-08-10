import React from "react";
import styles from "../styles/PizzaCard.module.scss";
import commonStyles from "../styles/Common.module.scss";
import Image from "next/image";

interface IProps {
  name: string;
  prices: number[];
  ingredients: string[];
  imageUrl: string;
}

const PizzaCard = ({ name, ingredients, imageUrl, prices }: IProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.pizzaImage}>
        <Image
          src={imageUrl}
          width="500"
          height="500"
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div className={styles.description}>
        <h3>Pizza {name}</h3>
        <ul className={`${commonStyles.list} ${styles.pizzaList}`}>
          {ingredients.map((ingredient, index) => (
            <li key={ingredient}>
              {ingredient}
              {index == ingredients.length - 1 ? "" : ","}{" "}
            </li>
          ))}
        </ul>
        <table className={styles.prices}>
          <tr>
            <th>small - 30cm</th>
            <th>medium - 40cm</th>
            <th>big - 50cm</th>
          </tr>
          <tr>
            {prices.map((price) => (
              <td>
                <span className={styles.pizzaPrice}>{price}zł</span>
              </td>
            ))}
          </tr>
        </table>
      </div>
    </div>
  );
};

export default PizzaCard;
