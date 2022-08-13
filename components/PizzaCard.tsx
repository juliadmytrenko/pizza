import React, { useState } from "react";
import styles from "../styles/PizzaCard.module.scss";
import commonStyles from "../styles/Common.module.scss";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { addToCart } from "../redux/features/cart/cartSlice";

export type Pizza = {
  id: number;
  name: string;
  prices: number[];
  ingredients: string[];
  imageUrl: string;
};

const PizzaCard = ({ id, name, ingredients, imageUrl, prices }: Pizza) => {
  const cart = useSelector((state: RootState) => state.cart.productsList);
  const dispatch = useDispatch();
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
        <Image src={imageUrl} layout="fill" objectFit="cover" />
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
          <thead>
            <tr>
              <th>small - 30cm</th>
              <th>medium - 40cm</th>
              <th>big - 50cm</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              {prices.map((price, index) => (
                <td key={index}>
                  <span className={styles.pizzaPrice}>{price}zł</span>
                </td>
              ))}
            </tr>
          </tbody>
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

          <input
            type="submit"
            value="Add to card"
            aria-label="Add to cart"
            onClick={() => dispatch(addToCart(id))}
          />
        </form>
      </div>
    </div>
  );
};

export default PizzaCard;
