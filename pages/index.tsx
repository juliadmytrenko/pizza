import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import Cart from "../components/Cart";
import PizzaCard from "../components/PizzaCard";
import styles from "../styles/Home.module.scss";
import { pizzas } from "./../utils/pizzas";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Card from "../components/Card";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import * as React from "react";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Home: NextPage = () => {
  const [showCart, setShowCart] = useState(false);
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Pizza app</title>
        <meta name="description" content="An app created by Julia Dmytrenko" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Cart
        title="Shopping card"
        show={showCart}
        onClose={() => setShowCart(false)}
        onSubmit={() => console.log("checkout...")}
      />
      <button
        className={styles.cartButton}
        onClick={() => setShowCart((prevState) => !prevState)}
      >
        <AiOutlineShoppingCart />
      </button>
      <main className={styles.main}>
        <h1 className={styles.title}>Pizza</h1>

        <h2 className={styles.menu}>Menu</h2>

        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Pizzas" {...a11yProps(0)} />
            <Tab label="Extras" {...a11yProps(1)} />
            <Tab label="Drinks" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <div className={styles.grid}>
            <div className={styles.blank}></div>
            <div className={styles.pizzaPrices}>
              <span>small</span>
              <span>medium</span>
              <span>big</span>
            </div>
            <div className={styles.pizzaList}>
              {pizzas.map((pizza) => (
                <PizzaCard
                  id={pizza.id}
                  name={pizza.name}
                  prices={pizza.prices}
                  ingredients={pizza.ingredients}
                  imageUrl={pizza.imageUrl}
                  key={pizza.name}
                  setShowCart={setShowCart}
                />
              ))}
            </div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
      </main>

      <footer className={styles.footer}>
        <div>
          <span>
            Pizza app{" "}
            <address className={styles.author}>
              by{" "}
              <a
                rel="author noreferrer"
                href="https://www.linkedin.com/in/juliadmytrenko/"
                target="_blank"
              >
                Julia Dmytrenko
              </a>
            </address>{" "}
            2022
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Home;
