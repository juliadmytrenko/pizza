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
    imageUrl: "/img/peperoni.jpg",
  },
  {
    id: 2,
    name: "Hawaii",
    prices: price.extra,
    ingredients: ["sos", "cheese", "ham", "ananas"],
    imageUrl: "/img/hawaii.jpg",
  },
  {
    id: 3,
    name: "Capricciosa",
    prices: price.basic,
    ingredients: ["sos", "cheese", "ham", "champignons"],
    imageUrl: "/img/capricciosa.jpg",
  },
];

export const extras = [
  {
    id: 4,
    name: "Garlic sauce",
    prices: 3,
    imageUrl: "/img/capricciosa.jpg",
  },
  {
    id: 5,
    name: "fries",
    description: "200g",
    prices: 5,
    imageUrl: "/img/capricciosa.jpg",
  },
  {
    id: 6,
    name: "nachos",
    description: "200g",
    prices: 10,
    imageUrl: "/img/capricciosa.jpg",
  },
]
