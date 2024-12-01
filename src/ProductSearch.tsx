import React, { useState } from "react";
import { PRODUCTS } from "./products"; // Załóżmy, że masz listę produktów

type Product = { name: string; category: string; quantity: number };

type ProductSearchProps = {
  onAddProduct: (product: { name: string; category: string }) => void;
  onRemoveProduct: (productName: string) => void;
  productsInList: { [name: string]: Product };
};

const ProductSearch: React.FC<ProductSearchProps> = ({ onAddProduct, onRemoveProduct, productsInList }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleFocus = () => {
    if (searchQuery) {
      setSearchQuery(""); // Czyszczenie pola wyszukiwania po focusie, jeśli nie jest puste
    }
  };

  const filteredProducts = PRODUCTS.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const withQueryProducts = searchQuery ? [...filteredProducts, {
    name: searchQuery,
    category: "",
  }] : filteredProducts;

  return (
    <div>
      <input
        type="text"
        placeholder="Search for products..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onFocus={handleFocus} // Czyszczenie pola przy focusie
        style={{
          width: "100%",
          padding: "10px",
          borderRadius: "5px",
          marginBottom: "20px",
          border: "1px solid #ccc",
        }}
      />
      <div>
        {withQueryProducts.map((product) => {
          const quantityInList = productsInList[product.name]?.quantity || 0;
          return (
            <div key={product.name} style={{ marginBottom: "10px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ 
                flex: 1, 
                fontWeight: quantityInList > 0 ? 'bold' : 'normal',
                color: quantityInList > 0 ? 'white' : ''
                }}>
                <span>{product.name}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                {/* Ilość produktów */}
                <span style={{ marginRight: "10px", color: "#888" }}>
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
                    marginRight: "5px",
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
                    padding: "5px 10px",
                    border: "none",
                    borderRadius: "5px",
                    visibility: quantityInList > 0 ? "visible" : "hidden",  // Ustawiamy visibility zamiast display
                    width: "48px",
                    height: "48px",
                    opacity: quantityInList > 0 ? "1" : "0",  // Ustawiamy opacity, aby przycisk był niewidoczny
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
