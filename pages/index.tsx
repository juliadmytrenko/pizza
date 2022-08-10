import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import PizzaCard from "../components/PizzaCard";
import styles from "../styles/Home.module.scss";
import { pizzas } from "./../utils/pizzas";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Pizza</h1>

        <h2 className={styles.menu}>Menu</h2>

        <div className={styles.pizzaList}>
          {pizzas.map((pizza) => (
            <PizzaCard
              name={pizza.name}
              prices={pizza.prices}
              ingredients={pizza.ingredients}
              imageUrl={pizza.image_url}
              key={pizza.name}
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
                rel="author"
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
