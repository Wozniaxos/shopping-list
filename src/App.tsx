import React, { useState, useEffect } from "react";
import ProductSearch from "./ProductSearch";
import ProductList from "./ProductList";
import SetSearch from "./SetSearch";
import './App.css'

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
      if (updatedList[productName].status === status) {
        updatedList[productName].status = "default"; // Przywróć do stanu default, jeśli status jest taki sam
      } else  {
        updatedList[productName].status = status; // Zmień status na bought lub missing
      }
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

  const onReset = () => {
    setShoppingList({});
  }

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
    <div className="container">
      
      {/* Przycisk Clear Bought Items */}
      {!showProductSearch && !showSetSearch && (
        <div className="header-actions">
          <button
            onClick={onClearBought}
            className="action-btn"
            style={{ backgroundColor: "#FF9800", color: "#fff" }} // Overriding just color for specific logic
          >
            Clear Bought
          </button>
          <button
            onClick={onReset}
            className="action-btn"
            style={{ backgroundColor: "#ff4d4d", color: "#fff" }}
          >
            Reset
          </button>
        </div>
      )}

      {!showProductSearch && !showSetSearch && (
        <div className="header-actions">
          <button
            onClick={() => setShowSetSearch(true)}
            className="action-btn secondary"
          >
            Add Set
          </button>

          <button
            onClick={() => setShowProductSearch(true)}
            className="action-btn primary"
          >
            Add Item
          </button>
        </div>
      )}

      {/* Główna lista zakupów */}
      {!showProductSearch && !showSetSearch && (
        <ProductList
          products={Object.keys(shoppingList).map((key) => shoppingList[key])}
          onStatusChange={onStatusChange}
          onAddProduct={addProductToShoppingList}
          onRemoveProduct={removeProductFromShoppingList}
          onClear={onClearBought}
        />
      )}

      {/* Wyszukiwanie zestawów */}
      {showSetSearch && (
        <SetSearch
          onGoBack={() => setShowSetSearch(false)}
          onAddSet={(set) => {
            addSetToShoppingList(set);
            setShowSetSearch(false); // Zamknij wyszukiwarkę zestawów po dodaniu
          }}
        />
      )}

      {/* Wyszukiwanie produktów */}
      {showProductSearch && (
        <ProductSearch
          onAddProduct={addProductToShoppingList}
          onGoBack={() => setShowProductSearch(false)}
          onRemoveProduct={removeProductFromShoppingList}
          productsInList={shoppingList}
        />
      )}
      {/* Przycisk Add from set i Add to list na dole */}
    </div>
  );
};

export default App;
