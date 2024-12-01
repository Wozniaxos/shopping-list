import React, { useState, useEffect } from "react";
import { PRODUCTS } from "./products";
import { SETS } from "./sets";
import ProductSearch from "./ProductSearch";
import ProductList from "./ProductList";
import SetSearch from "./SetSearch";

type Product = { name: string; category: string; quantity: number; status: "default" | "bought" | "missing" };

const App: React.FC = () => {
  const [shoppingList, setShoppingList] = useState<{ [name: string]: Product }>({});
  const [showSetSearch, setShowSetSearch] = useState(false);
  const [showProductSearch, setShowProductSearch] = useState(false);

  useEffect(() => {
    // Ładowanie danych z localStorage
    const savedList = localStorage.getItem("shoppingList");
    if (savedList) {
      setShoppingList(JSON.parse(savedList));
    }
  }, []);

  useEffect(() => {
    // Zapisywanie danych do localStorage
    localStorage.setItem("shoppingList", JSON.stringify(shoppingList));
  }, [shoppingList]);

  const addProductToShoppingList = (product: { name: string; category: string }) => {
    const updatedList = { ...shoppingList };
    if (updatedList[product.name]) {
      updatedList[product.name].quantity += 1; // Zwiększ ilość, jeśli produkt już jest na liście
    } else {
      updatedList[product.name] = { ...product, quantity: 1, status: "default" }; // Dodaj nowy produkt
    }
    setShoppingList(updatedList);
  };

  const removeProductFromShoppingList = (productName: string) => {
    const updatedList = { ...shoppingList };
    if (updatedList[productName].quantity > 1) {
      updatedList[productName].quantity -= 1; // Zmniejsz ilość, jeśli więcej niż 1
    } else {
      delete updatedList[productName]; // Usuń produkt, jeśli ilość to 1
    }
    setShoppingList(updatedList);
  };

  const onStatusChange = (productName: string, status: "bought" | "missing") => {
    const updatedList = { ...shoppingList };
    if (updatedList[productName]) {
      updatedList[productName].status = status; // Zmień status na bought lub missing
    }
    setShoppingList(updatedList);
  };

  const onClearBought = () => {
    const updatedList = { ...shoppingList };
    // Usuń tylko produkty, które są zaznaczone jako bought
    for (const key in updatedList) {
      if (updatedList[key].status === "bought") {
        delete updatedList[key]; // Usuwanie z listy, jeśli produkt jest kupiony
      } else if (updatedList[key].status === "missing") {
        updatedList[key].status = "default"; // Przywróć do stanu default, jeśli produkt jest missing
      }
    }
    setShoppingList(updatedList);
  };

  const addSetToShoppingList = (set: { name: string; products: { name: string; category: string; quantity: number }[] }) => {
    const updatedList = { ...shoppingList };
    set.products.forEach((product) => {
      if (updatedList[product.name]) {
        updatedList[product.name].quantity += product.quantity; // Dodaj ilość, jeśli produkt istnieje
      } else {
        updatedList[product.name] = { ...product, status: "default" }; // Dodaj nowy produkt
      }
    });
    setShoppingList(updatedList);
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Shopping List</h1>
      
      {/* Przycisk Clear Bought Items */}
      <button
        onClick={onClearBought}
        style={{
          padding: "10px 20px",
          backgroundColor: "#FF9800",
          color: "white",
          border: "none",
          borderRadius: "5px",
          marginBottom: "20px",
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        Clear Bought Items
      </button>

      {/* Wyszukiwanie zestawów */}
      {showSetSearch && (
        <div>
          <button
            onClick={() => setShowSetSearch(false)}
            style={{
              padding: "10px 20px",
              backgroundColor: "#9E9E9E",
              color: "white",
              border: "none",
              borderRadius: "5px",
              marginBottom: "20px",
            }}
          >
            Back to List
          </button>
          <SetSearch
            onAddSet={(set) => {
              addSetToShoppingList(set);
              setShowSetSearch(false); // Zamknij wyszukiwarkę zestawów po dodaniu
            }}
          />
        </div>
      )}

      {/* Wyszukiwanie produktów */}
      {showProductSearch && (
        <div>
          <button
            onClick={() => setShowProductSearch(false)}
            style={{
              padding: "10px 20px",
              backgroundColor: "#9E9E9E",
              color: "white",
              border: "none",
              borderRadius: "5px",
              marginBottom: "20px",
            }}
          >
            Back to List
          </button>
          <ProductSearch
            onAddProduct={addProductToShoppingList}
            onRemoveProduct={removeProductFromShoppingList}
            productsInList={shoppingList}
          />
        </div>
      )}

      {/* Główna lista zakupów */}
      {!showProductSearch && !showSetSearch && (
        <ProductList
          products={Object.keys(shoppingList).map((key) => shoppingList[key])}
          onStatusChange={onStatusChange}
          onClear={onClearBought}
        />
      )}
      
      {/* Przycisk Add from set i Add to list na dole */}
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: "20px" }}>
        <button
          onClick={() => setShowSetSearch(true)}
          style={{
            padding: "10px 20px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "5px",
            width: "48%",
          }}
        >
          Add from set
        </button>

        <button
          onClick={() => setShowProductSearch(true)}
          style={{
            padding: "10px 20px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "5px",
            width: "48%",
          }}
        >
          Add to list
        </button>
      </div>
    </div>
  );
};

export default App;
