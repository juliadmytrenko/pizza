import React, { useState } from "react";
import styles from "../styles/PizzaCard.module.scss";
import commonStyles from "../styles/Common.module.scss";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { addToCart, ProductSize } from "../redux/features/cart/cartSlice";
import { AiOutlineShoppingCart } from "react-icons/ai";

export type Pizza = {
  id: number;
  name: string;
  prices: number[];
  ingredients: string[];
  imageUrl: string;
  setShowCart?: (value: boolean) => void;
};

const PizzaCard = (props: Pizza) => {
  const dispatch = useDispatch();
  const [selectedPizzaSize, setSelectedPizzaSize] = useState("");

  const onSelectPizzaSizeChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedSize = event.currentTarget.value;
    setSelectedPizzaSize("");
    handleAddToCart(selectedSize);
  };

  const handleAddPizzaFormSubmit = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    // alert(`selected pizza: ${props.name} - ${selectedPizzaSize}`);
    // dodanie do store Redux
  };

  const handleAddToCart = (selectedPizzaSize: string) => {
    if (!selectedPizzaSize) {
      alert("Choose size");
    } else {
      const size = selectedPizzaSize as ProductSize;
      dispatch(addToCart({ size: size, ...props }));
      if (!!props.setShowCart) props.setShowCart(true);
    }
  };

  return (
    <div className={styles.card}>
      <div className={styles.pizzaImage}>
        <Image src={props.imageUrl} layout="fill" objectFit="cover" />
      </div>

      <div className={styles.description}>
        <h3>Pizza {props.name}</h3>
        <ul className={`${commonStyles.list} ${styles.pizzaList}`}>
          {props.ingredients.map((ingredient, index) => (
            <li key={ingredient}>
              {ingredient}
              {index == props.ingredients.length - 1 ? "" : ","}{" "}
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
              {props.prices.map((price, index) => (
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
            value={selectedPizzaSize}
            onChange={onSelectPizzaSizeChange}
          >
            <option value="">--Please choose an option--</option>
            <option value="small">small - 30cm</option>
            <option value="medium">medium - 40cm</option>
            <option value="big">big - 50cm</option>
          </select>
        </form>
      </div>
    </div>
  );
};

export default PizzaCard;
