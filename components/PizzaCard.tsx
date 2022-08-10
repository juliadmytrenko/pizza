import React, { useState } from "react";
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
  const [selectedPizza, setSelectedPizza] = useState("");

  const onSelectPizzaChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedPizza(event.currentTarget.value);
  };

  const handleAddPizzaFormSubmit = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    alert(`selected pizza: ${name} - ${selectedPizza}`);
    // dodanie do store Redux
  };

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
        <form
          className={styles.pizzaSelect}
          onSubmit={handleAddPizzaFormSubmit}
        >
          <label htmlFor="pizza-select">Choose size:</label>

          <select
            name="pizza"
            id="pizza-select"
            value={selectedPizza}
            onChange={onSelectPizzaChange}
          >
            <option value="">--Please choose an option--</option>
            <option value="small">small - 30cm</option>
            <option value="medium">medium - 40cm</option>
            <option value="big">big - 50cm</option>
          </select>

          <input type="submit" value="Add to card" />
        </form>
      </div>
    </div>
  );
};

export default PizzaCard;
