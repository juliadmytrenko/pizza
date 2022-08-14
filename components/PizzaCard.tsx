import React, { useState } from "react";
import styles from "../styles/PizzaCard.module.scss";
import commonStyles from "../styles/Common.module.scss";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { addToCart, ProductSize } from "../redux/features/cart/cartSlice";
import { AiOutlineShoppingCart } from "react-icons/ai";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Box from "@mui/material/Box";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Card from "./Card";

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
  const onSelectPizzaSizeChange = (event: SelectChangeEvent) => {
    const selectedSize = event.target.value as string;
    setSelectedPizzaSize("");
    handleAddToCart(selectedSize);
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
    <Card imageUrl={props.imageUrl} ImageClassName={styles.pizzaImage}>
      <h3 className={styles.title}>Pizza {props.name}</h3>
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

      <FormControl
        sx={{
          width: 300,
          marginTop: 1,
        }}
      >
        <InputLabel id="pizza-size-select-label">Pick size</InputLabel>
        <Select
          labelId="pizza-size-select-label"
          value={selectedPizzaSize}
          label="Pick size"
          onChange={onSelectPizzaSizeChange}
        >
          <MenuItem value={"small"}>
            <AiOutlineShoppingCart className={styles.shoppingCartIcon} />
            small
          </MenuItem>
          <MenuItem value={"medium"}>
            <AiOutlineShoppingCart className={styles.shoppingCartIcon} />
            medium
          </MenuItem>
          <MenuItem value={"big"}>
            <AiOutlineShoppingCart className={styles.shoppingCartIcon} />
            big
          </MenuItem>
        </Select>
      </FormControl>
    </Card>
  );
};

export default PizzaCard;
