import { Product, PRODUCTS_BY_NAME } from "./products";

const getProductWithQuantity = (product: Product, quantity: number) => ({
  ...product,
  quantity,
})

export const SETS = [
  {
    name: "Tortille",
    products: [
      getProductWithQuantity(PRODUCTS_BY_NAME.Tortille, 1),
      getProductWithQuantity(PRODUCTS_BY_NAME.Kukurydza, 1),
      getProductWithQuantity(PRODUCTS_BY_NAME.Fasolka_czerwona, 1),
      getProductWithQuantity(PRODUCTS_BY_NAME.Pomidory_koktailowe, 1),
      getProductWithQuantity(PRODUCTS_BY_NAME.Pomidory_w_puszce, 1),
      getProductWithQuantity(PRODUCTS_BY_NAME.Mozzarella_tarta, 1),
      getProductWithQuantity(PRODUCTS_BY_NAME.Cebula, 1),
      getProductWithQuantity(PRODUCTS_BY_NAME.Jogurt_grecki, 1),
      getProductWithQuantity(PRODUCTS_BY_NAME.Oliwa, 1),
      getProductWithQuantity(PRODUCTS_BY_NAME.Kolendra, 1),
      getProductWithQuantity(PRODUCTS_BY_NAME.Oregano, 1),
      getProductWithQuantity(PRODUCTS_BY_NAME.Kmin_rzymski, 1),
      getProductWithQuantity(PRODUCTS_BY_NAME.Cynamon, 1),
    ],
  },
  {
    name: "Putanesca",
    products: [
      getProductWithQuantity(PRODUCTS_BY_NAME.Makaron_włoski, 1),
      getProductWithQuantity(PRODUCTS_BY_NAME.Kapary, 1),
      getProductWithQuantity(PRODUCTS_BY_NAME.Oliwki, 1),
      getProductWithQuantity(PRODUCTS_BY_NAME.Oliwa, 1),
      getProductWithQuantity(PRODUCTS_BY_NAME.Pietruszka, 1),
      getProductWithQuantity(PRODUCTS_BY_NAME.Pomidory_koktailowe, 1),
      getProductWithQuantity(PRODUCTS_BY_NAME.Papryczki, 1),
      getProductWithQuantity(PRODUCTS_BY_NAME.Czosnek, 1),
      getProductWithQuantity(PRODUCTS_BY_NAME.Sos_sojowy, 1),
    ],
  },
  {
    name: "Penne",
    products: [
      getProductWithQuantity(PRODUCTS_BY_NAME.Makaron_włoski, 1),
      getProductWithQuantity(PRODUCTS_BY_NAME.Oliwa, 1),
      getProductWithQuantity(PRODUCTS_BY_NAME.Papryczki, 1),
      getProductWithQuantity(PRODUCTS_BY_NAME.Grana_Padano, 1),
      getProductWithQuantity(PRODUCTS_BY_NAME.Pomidory_koktailowe, 1),
      getProductWithQuantity(PRODUCTS_BY_NAME.Czosnek, 1),
      getProductWithQuantity(PRODUCTS_BY_NAME.Sos_sojowy, 1),
      getProductWithQuantity(PRODUCTS_BY_NAME.Bazylia, 1),
      getProductWithQuantity(PRODUCTS_BY_NAME.Pomidory_w_puszce, 1),
    ],
  },
  {
    name: "Risotto",
    products: [
      getProductWithQuantity(PRODUCTS_BY_NAME.Ryz_arborio, 1),
      getProductWithQuantity(PRODUCTS_BY_NAME.Dynia, 1),
      getProductWithQuantity(PRODUCTS_BY_NAME.Pietruszka, 1),
      getProductWithQuantity(PRODUCTS_BY_NAME.Grana_Padano, 1),
      getProductWithQuantity(PRODUCTS_BY_NAME.Boczek, 1),
      getProductWithQuantity(PRODUCTS_BY_NAME.Groszek_mrozony, 1),
      getProductWithQuantity(PRODUCTS_BY_NAME.Kostka_rosołowa, 1),
      getProductWithQuantity(PRODUCTS_BY_NAME.Wino_białe, 1),
      getProductWithQuantity(PRODUCTS_BY_NAME.Oliwa, 1),
    ],
  },
];


  