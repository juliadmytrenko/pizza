import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import Cart from "../components/Cart";
import PizzaCard from "../components/PizzaCard";
import styles from "../styles/Home.module.scss";
import { pizzas } from "./../utils/pizzas";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Card from "../components/Card";

const Home: NextPage = () => {
  const [showCart, setShowCart] = useState(false);
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
        {/* <Card /> */}
        <h1 className={styles.title}>Pizza</h1>

        <h2 className={styles.menu}>Menu</h2>

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
