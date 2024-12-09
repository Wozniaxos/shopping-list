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
  {
    name: "Kalafior",
    products: [
      getProductWithQuantity(PRODUCTS_BY_NAME.Kalafior, 1),
      getProductWithQuantity(PRODUCTS_BY_NAME.Ziemniaki, 1),
      getProductWithQuantity(PRODUCTS_BY_NAME.Koperek, 1),
      getProductWithQuantity(PRODUCTS_BY_NAME.Ziola_prowansalskie, 1),
      getProductWithQuantity(PRODUCTS_BY_NAME.Oliwa, 1),
    ],
  },
  {
    name: "Curry z Kurczakiem",
    products: [
      getProductWithQuantity(PRODUCTS_BY_NAME.Kurczak, 1),
      getProductWithQuantity(PRODUCTS_BY_NAME.Cukinia, 1),
      getProductWithQuantity(PRODUCTS_BY_NAME.Kasza_jaglana, 1),
      getProductWithQuantity(PRODUCTS_BY_NAME.Jogurt_grecki, 1),
      getProductWithQuantity(PRODUCTS_BY_NAME.Kolendra, 1),
      getProductWithQuantity(PRODUCTS_BY_NAME.Przecier_pomidorowy, 1),
      getProductWithQuantity(PRODUCTS_BY_NAME.Imbir, 1),
      getProductWithQuantity(PRODUCTS_BY_NAME.Czosnek, 1),
      getProductWithQuantity(PRODUCTS_BY_NAME.Cebula, 1),
      getProductWithQuantity(PRODUCTS_BY_NAME.Curry, 1),
      getProductWithQuantity(PRODUCTS_BY_NAME.Kolendra_mielona, 1),
      getProductWithQuantity(PRODUCTS_BY_NAME.Kmin_rzymski, 1),
      getProductWithQuantity(PRODUCTS_BY_NAME.Papryczki, 1),
      getProductWithQuantity(PRODUCTS_BY_NAME.Oliwa, 1),
    ],
  },
  {
    name: "Łosoś z purre z batatów",
    products: [
      getProductWithQuantity(PRODUCTS_BY_NAME.Łosoś, 1),
      getProductWithQuantity(PRODUCTS_BY_NAME.Bataty, 1),
      getProductWithQuantity(PRODUCTS_BY_NAME.Grana_Padano, 1),
      getProductWithQuantity(PRODUCTS_BY_NAME.Migdały, 1),
      getProductWithQuantity(PRODUCTS_BY_NAME.Groszek_mrozony, 1),
      getProductWithQuantity(PRODUCTS_BY_NAME.Oliwa, 1),
      getProductWithQuantity(PRODUCTS_BY_NAME.Pomidory_suszone, 1),
      getProductWithQuantity(PRODUCTS_BY_NAME.Ziola_prowansalskie, 1),
    ],
  },
  {
    name: "Wieprzowina po azjatycku",
    products: [
      getProductWithQuantity(PRODUCTS_BY_NAME.Pak_choi, 1),
      getProductWithQuantity(PRODUCTS_BY_NAME.Papryka, 1),
      getProductWithQuantity(PRODUCTS_BY_NAME.Makaron_ryżowy, 1),
      getProductWithQuantity(PRODUCTS_BY_NAME.Cebula_czerwona, 1),
      getProductWithQuantity(PRODUCTS_BY_NAME.Wieprzowina, 1),
      getProductWithQuantity(PRODUCTS_BY_NAME.Sos_ostrygowy, 1),
      getProductWithQuantity(PRODUCTS_BY_NAME.Sos_sojowy, 1),
      getProductWithQuantity(PRODUCTS_BY_NAME.Marchewka, 1),
      getProductWithQuantity(PRODUCTS_BY_NAME.Fasolka_szparagowa, 1),
      getProductWithQuantity(PRODUCTS_BY_NAME.Orzechy_arachidowe, 1),
      getProductWithQuantity(PRODUCTS_BY_NAME.Czosnek, 1),
      getProductWithQuantity(PRODUCTS_BY_NAME.Imbir, 1),
      getProductWithQuantity(PRODUCTS_BY_NAME.Przyprawa_5_smakow, 1),
      getProductWithQuantity(PRODUCTS_BY_NAME.Szczypiorek, 1),
      getProductWithQuantity(PRODUCTS_BY_NAME.Papryczki, 1),
    ],
  },
  {
    name: "Rusvioli",
    products: [
      getProductWithQuantity(PRODUCTS_BY_NAME.Pierogi_ruskie, 1),
      getProductWithQuantity(PRODUCTS_BY_NAME.Bazylia, 1),
      getProductWithQuantity(PRODUCTS_BY_NAME.Grana_Padano, 1),
      getProductWithQuantity(PRODUCTS_BY_NAME.Oliwa, 1),
    ],
  },
];


  