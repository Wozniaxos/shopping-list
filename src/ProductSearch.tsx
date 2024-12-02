import React, { useState } from "react";
import { PRODUCTS } from "./products"; // Załóżmy, że masz listę produktów
import { categoryColors } from "./ProductList";

type Product = { name: string; category: string; quantity: number };

type ProductSearchProps = {
  onAddProduct: (product: { name: string; category: string }) => void;
  onRemoveProduct: (productName: string) => void;
  productsInList: { [name: string]: Product };
  onGoBack: () => void;
};

const ProductSearch: React.FC<ProductSearchProps> = ({ onAddProduct, onRemoveProduct, productsInList, onGoBack }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleFocus = () => {
    if (searchQuery) {
      setSearchQuery(""); // Czyszczenie pola wyszukiwania po focusie, jeśli nie jest puste
    }
  };

  const filteredProducts = PRODUCTS.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    return (
      a.category.localeCompare(b.category)
    );
  });

  const withQueryProducts = searchQuery ? [...sortedProducts, {
    name: searchQuery,
    category: "",
  }] : sortedProducts;

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      minHeight: '100vh'
    }}>
      <div style={{
        display: "flex",
        gap: "10px",
        width: "100%",
      }}>
        <button
          onClick={onGoBack}
          style={{
            padding: "10px 20px",
            backgroundColor: "#9E9E9E",
            color: "white",
            border: "none",
            borderRadius: "5px",
            marginBottom: "20px",
          }}
        >
          Back
        </button>
        <input
          type="text"
          placeholder="Search for products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={handleFocus} // Czyszczenie pola przy focusie
          style={{
            maxWidth: "100%",
            minWidth: "200px",
            padding: "10px",
            borderRadius: "5px",
            marginBottom: "20px",
            border: "1px solid #ccc",
            fontSize: "16px",
          }}
        />
      </div>
      <div>
        {withQueryProducts.map((product) => {
          const quantityInList = productsInList[product.name]?.quantity || 0;
          return (
            <div key={product.name} style={{ marginBottom: "10px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ 
                flex: 1, 
                fontWeight: quantityInList > 0 ? 'bold' : 'normal',
                display: 'flex',
                gap: '5px',
                alignItems: 'center',
                color: quantityInList > 0 ? 'white' : ''
                }}>
                  <div
                    style={{
                      width: "15px",
                      height: "15px",
                      backgroundColor: categoryColors[product.category] || "gray",
                      borderRadius: "50%", // Zaokrąglony kwadrat
                    }}
                  ></div>
                <span>{product.name}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: '5px' }}>
                {/* Ilość produktów */}
                <span style={{ color: "#888" }}>
                  {quantityInList > 0 && `x${quantityInList}`}
                </span>

                {/* Przycisk + */}
                <button
                  onClick={() => onAddProduct(product)}
                  style={{
                    backgroundColor: "#4CAF50",
                    color: "white",
                    padding: "5px 10px",
                    border: "none",
                    width: "48px",
                    height: "48px",
                    borderRadius: "5px",
                  }}
                >
                  +
                </button>

                {/* Przycisk - (widoczny tylko gdy ilość > 0) */}
                <button
                  onClick={() => onRemoveProduct(product.name)}
                  style={{
                    backgroundColor: "#f44336",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    width: "48px",
                    height: "48px",
                    opacity: quantityInList > 0 ? "1" : "0.1",  // Ustawiamy opacity, aby przycisk był niewidoczny
                    transition: "visibility 0.2s, opacity 0.2s",  // Płynna zmiana widoczności
                  }}
                >
                  -
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductSearch;
