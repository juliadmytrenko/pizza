import React, { useState } from "react";
import styles from "../styles/PizzaCard.module.scss";
import commonStyles from "../styles/Common.module.scss";
import { useDispatch } from "react-redux";
import { addToCart, ProductSize } from "../redux/features/cart/cartSlice";
import { AiOutlineShoppingCart } from "react-icons/ai";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Card from "./Card";
import Image from "next/image";

export type Pizza = {
  id: number;
  name: string;
  prices: number[];
  ingredients: string[];
  imageUrl: string;
};

export interface IPizzaCard extends Pizza {
  setShowCart?: (value: boolean) => void;
}

const PizzaCard = (props: IPizzaCard) => {
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
      dispatch(
        addToCart({
          size: size,
          id: props.id,
          name: props.name,
          prices: props.prices,
          ingredients: props.ingredients,
          imageUrl: props.imageUrl,
        })
      );
      if (!!props.setShowCart) props.setShowCart(true);
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.image}>
        <Image src={props.imageUrl} layout="fill" objectFit="cover" alt="" />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>Pizza {props.name}</h3>
        <ul className={`${commonStyles.list} ${styles.pizzaList}`}>
          {props.ingredients.map((ingredient, index) => (
            <li key={ingredient}>
              {ingredient}
              {index == props.ingredients.length - 1 ? "" : ","}{" "}
            </li>
          ))}
        </ul>
        <FormControl
          sx={{
            width: 200,
            marginTop: 1,
            marginLeft: 1,
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
      </div>
      <div className={styles.prices}>
        <span className={styles.small}>{props.prices[0]}zł</span>
        <span className={styles.medium}>{props.prices[1]}zł</span>
        <span className={styles.big}>{props.prices[2]}zł</span>
      </div>
    </div>
  );
};

export default PizzaCard;
