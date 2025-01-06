import { Product, PRODUCTS_BY_NAME } from "./products";

const getProductWithQuantity = (product: Product, quantity: number = 1) => ({
  ...product,
  quantity,
})

export const SETS = [
  {
    name: "Tortille",
    products: [
      getProductWithQuantity(PRODUCTS_BY_NAME.Tortille),
      getProductWithQuantity(PRODUCTS_BY_NAME.Kukurydza),
      getProductWithQuantity(PRODUCTS_BY_NAME.Fasolka_czerwona),
      getProductWithQuantity(PRODUCTS_BY_NAME.Pomidory_koktailowe),
      getProductWithQuantity(PRODUCTS_BY_NAME.Pomidory_w_puszce),
      getProductWithQuantity(PRODUCTS_BY_NAME.Mozzarella_tarta),
      getProductWithQuantity(PRODUCTS_BY_NAME.Cebula),
      getProductWithQuantity(PRODUCTS_BY_NAME.Jogurt_grecki),
      getProductWithQuantity(PRODUCTS_BY_NAME.Oliwa),
      getProductWithQuantity(PRODUCTS_BY_NAME.Kolendra),
      getProductWithQuantity(PRODUCTS_BY_NAME.Oregano),
      getProductWithQuantity(PRODUCTS_BY_NAME.Kmin_rzymski),
      getProductWithQuantity(PRODUCTS_BY_NAME.Cynamon),
    ],
  },
  {
    name: "Putanesca",
    products: [
      getProductWithQuantity(PRODUCTS_BY_NAME.Makaron_włoski),
      getProductWithQuantity(PRODUCTS_BY_NAME.Kapary),
      getProductWithQuantity(PRODUCTS_BY_NAME.Oliwki),
      getProductWithQuantity(PRODUCTS_BY_NAME.Oliwa),
      getProductWithQuantity(PRODUCTS_BY_NAME.Pietruszka),
      getProductWithQuantity(PRODUCTS_BY_NAME.Pomidory_koktailowe),
      getProductWithQuantity(PRODUCTS_BY_NAME.Papryczki),
      getProductWithQuantity(PRODUCTS_BY_NAME.Czosnek),
      getProductWithQuantity(PRODUCTS_BY_NAME.Sos_sojowy),
    ],
  },
  {
    name: "Penne",
    products: [
      getProductWithQuantity(PRODUCTS_BY_NAME.Makaron_włoski),
      getProductWithQuantity(PRODUCTS_BY_NAME.Oliwa),
      getProductWithQuantity(PRODUCTS_BY_NAME.Papryczki),
      getProductWithQuantity(PRODUCTS_BY_NAME.Grana_Padano),
      getProductWithQuantity(PRODUCTS_BY_NAME.Pomidory_koktailowe),
      getProductWithQuantity(PRODUCTS_BY_NAME.Czosnek),
      getProductWithQuantity(PRODUCTS_BY_NAME.Sos_sojowy),
      getProductWithQuantity(PRODUCTS_BY_NAME.Bazylia),
      getProductWithQuantity(PRODUCTS_BY_NAME.Pomidory_w_puszce),
    ],
  },
  {
    name: "Krewetki",
    products: [
      getProductWithQuantity(PRODUCTS_BY_NAME.Krewetki),
      getProductWithQuantity(PRODUCTS_BY_NAME.Pomidory_koktailowe),
      getProductWithQuantity(PRODUCTS_BY_NAME.Oliwa),
      getProductWithQuantity(PRODUCTS_BY_NAME.Papryczki),
      getProductWithQuantity(PRODUCTS_BY_NAME.Pietruszka),
      getProductWithQuantity(PRODUCTS_BY_NAME.Czosnek),
      getProductWithQuantity(PRODUCTS_BY_NAME.Wino_białe),
    ],
  },
  {
    name: "Risotto",
    products: [
      getProductWithQuantity(PRODUCTS_BY_NAME.Ryz_arborio),
      getProductWithQuantity(PRODUCTS_BY_NAME.Dynia),
      getProductWithQuantity(PRODUCTS_BY_NAME.Pietruszka),
      getProductWithQuantity(PRODUCTS_BY_NAME.Grana_Padano),
      getProductWithQuantity(PRODUCTS_BY_NAME.Boczek),
      getProductWithQuantity(PRODUCTS_BY_NAME.Groszek_mrozony),
      getProductWithQuantity(PRODUCTS_BY_NAME.Kostka_rosołowa),
      getProductWithQuantity(PRODUCTS_BY_NAME.Wino_białe),
      getProductWithQuantity(PRODUCTS_BY_NAME.Oliwa),
      getProductWithQuantity(PRODUCTS_BY_NAME.Rukola),
      getProductWithQuantity(PRODUCTS_BY_NAME.Cebula),
    ],
  },
  {
    name: "Kalafior",
    products: [
      getProductWithQuantity(PRODUCTS_BY_NAME.Kalafior),
      getProductWithQuantity(PRODUCTS_BY_NAME.Ziemniaki),
      getProductWithQuantity(PRODUCTS_BY_NAME.Koperek),
      getProductWithQuantity(PRODUCTS_BY_NAME.Ziola_prowansalskie),
      getProductWithQuantity(PRODUCTS_BY_NAME.Oliwa),
    ],
  },
  {
    name: "Curry z Kurczakiem",
    products: [
      getProductWithQuantity(PRODUCTS_BY_NAME.Kurczak),
      getProductWithQuantity(PRODUCTS_BY_NAME.Cukinia),
      getProductWithQuantity(PRODUCTS_BY_NAME.Kasza_jaglana),
      getProductWithQuantity(PRODUCTS_BY_NAME.Jogurt_grecki),
      getProductWithQuantity(PRODUCTS_BY_NAME.Kolendra),
      getProductWithQuantity(PRODUCTS_BY_NAME.Przecier_pomidorowy),
      getProductWithQuantity(PRODUCTS_BY_NAME.Imbir),
      getProductWithQuantity(PRODUCTS_BY_NAME.Czosnek),
      getProductWithQuantity(PRODUCTS_BY_NAME.Cebula),
      getProductWithQuantity(PRODUCTS_BY_NAME.Curry),
      getProductWithQuantity(PRODUCTS_BY_NAME.Kolendra_mielona),
      getProductWithQuantity(PRODUCTS_BY_NAME.Kmin_rzymski),
      getProductWithQuantity(PRODUCTS_BY_NAME.Papryczki),
      getProductWithQuantity(PRODUCTS_BY_NAME.Oliwa),
    ],
  },
  {
    name: "Kurczak z gruszka",
    products: [
      getProductWithQuantity(PRODUCTS_BY_NAME.Kurczak),
      getProductWithQuantity(PRODUCTS_BY_NAME.Gruszka),
      getProductWithQuantity(PRODUCTS_BY_NAME.Pietruszka),
      getProductWithQuantity(PRODUCTS_BY_NAME.Mascarpone),
      getProductWithQuantity(PRODUCTS_BY_NAME.Cebula),
      getProductWithQuantity(PRODUCTS_BY_NAME.Pomidory_suszone),
      getProductWithQuantity(PRODUCTS_BY_NAME.Czosnek),
      getProductWithQuantity(PRODUCTS_BY_NAME.Oliwa),
      getProductWithQuantity(PRODUCTS_BY_NAME.Ziola_prowansalskie),
    ],
  },
  {
    name: "Standard",
    products: [
      getProductWithQuantity(PRODUCTS_BY_NAME.Banan),
      getProductWithQuantity(PRODUCTS_BY_NAME.Jabłko),
      getProductWithQuantity(PRODUCTS_BY_NAME.Kiwi),
      getProductWithQuantity(PRODUCTS_BY_NAME.Twaróg),
      getProductWithQuantity(PRODUCTS_BY_NAME.Skyr),
      getProductWithQuantity(PRODUCTS_BY_NAME.Skyr_owocowy),
      getProductWithQuantity(PRODUCTS_BY_NAME.Jogurt_naturalny),
    ],
  },
  {
    name: "Łosoś z purre z batatów",
    products: [
      getProductWithQuantity(PRODUCTS_BY_NAME.Łosoś),
      getProductWithQuantity(PRODUCTS_BY_NAME.Bataty),
      getProductWithQuantity(PRODUCTS_BY_NAME.Grana_Padano),
      getProductWithQuantity(PRODUCTS_BY_NAME.Migdały),
      getProductWithQuantity(PRODUCTS_BY_NAME.Groszek_mrozony),
      getProductWithQuantity(PRODUCTS_BY_NAME.Oliwa),
      getProductWithQuantity(PRODUCTS_BY_NAME.Pomidory_suszone),
      getProductWithQuantity(PRODUCTS_BY_NAME.Ziola_prowansalskie),
    ],
  },
  {
    name: "Wieprzowina po azjatycku",
    products: [
      getProductWithQuantity(PRODUCTS_BY_NAME.Pak_choi),
      getProductWithQuantity(PRODUCTS_BY_NAME.Papryka),
      getProductWithQuantity(PRODUCTS_BY_NAME.Makaron_ryżowy),
      getProductWithQuantity(PRODUCTS_BY_NAME.Cebula_czerwona),
      getProductWithQuantity(PRODUCTS_BY_NAME.Wieprzowina),
      getProductWithQuantity(PRODUCTS_BY_NAME.Sos_ostrygowy),
      getProductWithQuantity(PRODUCTS_BY_NAME.Sos_sojowy),
      getProductWithQuantity(PRODUCTS_BY_NAME.Marchewka),
      getProductWithQuantity(PRODUCTS_BY_NAME.Fasolka_szparagowa),
      getProductWithQuantity(PRODUCTS_BY_NAME.Orzechy_arachidowe),
      getProductWithQuantity(PRODUCTS_BY_NAME.Czosnek),
      getProductWithQuantity(PRODUCTS_BY_NAME.Imbir),
      getProductWithQuantity(PRODUCTS_BY_NAME.Przyprawa_5_smakow),
      getProductWithQuantity(PRODUCTS_BY_NAME.Szczypiorek),
      getProductWithQuantity(PRODUCTS_BY_NAME.Papryczki),
    ],
  },
  {
    name: "Rusvioli",
    products: [
      getProductWithQuantity(PRODUCTS_BY_NAME.Pierogi_ruskie),
      getProductWithQuantity(PRODUCTS_BY_NAME.Bazylia),
      getProductWithQuantity(PRODUCTS_BY_NAME.Grana_Padano),
      getProductWithQuantity(PRODUCTS_BY_NAME.Oliwa),
    ],
  },
  {
    name: "Pesto",
    products: [
      getProductWithQuantity(PRODUCTS_BY_NAME.Makaron_włoski),
      getProductWithQuantity(PRODUCTS_BY_NAME.Bazylia),
      getProductWithQuantity(PRODUCTS_BY_NAME.Grana_Padano),
      getProductWithQuantity(PRODUCTS_BY_NAME.Oliwa),
      getProductWithQuantity(PRODUCTS_BY_NAME.Pesto),
    ],
  },
  {
    name: "Kurczak z kasza gryczana",
    products: [
      getProductWithQuantity(PRODUCTS_BY_NAME.Kurczak),
      getProductWithQuantity(PRODUCTS_BY_NAME.Kasza_gryczana),
      getProductWithQuantity(PRODUCTS_BY_NAME.Kolendra),
      getProductWithQuantity(PRODUCTS_BY_NAME.Ketchup),
      getProductWithQuantity(PRODUCTS_BY_NAME.Oliwa),
    ],
  },
  {
    name: "Chleb bananowy",
    products: [
      getProductWithQuantity(PRODUCTS_BY_NAME.Maka_orkiszowa),
      getProductWithQuantity(PRODUCTS_BY_NAME.Proszek_do_pieczenia),
      getProductWithQuantity(PRODUCTS_BY_NAME.Cukier),
      getProductWithQuantity(PRODUCTS_BY_NAME.Cukier_waniliowy),
      getProductWithQuantity(PRODUCTS_BY_NAME.Soda_oczyszczona),
      getProductWithQuantity(PRODUCTS_BY_NAME.Olej_rzepakowy),
      getProductWithQuantity(PRODUCTS_BY_NAME.Banan, 6),
    ],
  },
  {
    name: "Chleb",
    products: [
      getProductWithQuantity(PRODUCTS_BY_NAME.Maka_orkiszowa),
      getProductWithQuantity(PRODUCTS_BY_NAME.Drozdze),
      getProductWithQuantity(PRODUCTS_BY_NAME.Cukier),
      getProductWithQuantity(PRODUCTS_BY_NAME.Platki_owsiane),
      getProductWithQuantity(PRODUCTS_BY_NAME.Otreby_owsiane),
    ],
  },
  {
    name: "Hummus",
    products: [
      getProductWithQuantity(PRODUCTS_BY_NAME.Pietruszka),
      getProductWithQuantity(PRODUCTS_BY_NAME.Tahini),
      getProductWithQuantity(PRODUCTS_BY_NAME.Cytryna),
      getProductWithQuantity(PRODUCTS_BY_NAME.Oliwa),
      getProductWithQuantity(PRODUCTS_BY_NAME.Ciecierzyca),
      getProductWithQuantity(PRODUCTS_BY_NAME.Czosnek),
      getProductWithQuantity(PRODUCTS_BY_NAME.Kmin_rzymski),
    ],
  },
];


  