const price = {
  basic: [16, 24, 32],
  extra: [24, 32, 40]
}

export const pizzas = [
  {
    id: 1,
    name: "Peperoni",
    prices: price.basic,
    ingredients: ["salami", "onion", "tomato sauce"],
    image_url: "/img/peperoni.jpg",
  },
  {
    id: 2,
    name: "Hawaii",
    prices: price.extra,
    ingredients: ["sos", "cheese", "ham", "ananas"],
    image_url: "/img/hawaii.jpg",
  },
  {
    id: 3,
    name: "Capricciosa",
    prices: price.basic,
    ingredients: ["sos", "cheese", "ham", "champignons"],
    image_url: "/img/capricciosa.jpg",
  },
];

