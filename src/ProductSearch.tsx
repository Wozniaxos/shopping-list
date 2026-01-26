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
    <div className="container" style={{ padding: 0, minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <div className="search-header" style={{ padding: 'var(--spacing-md)', paddingBottom: '0' }}>
        <button
          onClick={onGoBack}
          className="back-btn"
          style={{ height: '48px', width: 'auto' }}
        >
          Back
        </button>
        <input
          type="text"
          className="search-input"
          placeholder="Search for products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={handleFocus}
          autoFocus
        />
      </div>
      
      <div className="product-list" style={{ padding: 'var(--spacing-md)', paddingTop: 'var(--spacing-sm)' }}>
        {withQueryProducts.map((product) => {
          const quantityInList = productsInList[product.name]?.quantity || 0;
          return (
            <div key={product.name} className="product-card">
              <div className="product-info">
                   <div
                    style={{
                      width: "12px",
                      height: "12px",
                      backgroundColor: categoryColors[product.category] || "gray",
                      borderRadius: "50%",
                      flexShrink: 0
                    }}
                  ></div>
                <span 
                  className="product-name"
                  style={{ fontWeight: quantityInList > 0 ? "bold" : "normal" }}
                >
                  {product.name}
                </span>
              </div>
              
              <div className="card-actions">
                <span className="quantity-badge" style={{ opacity: quantityInList > 0 ? 1 : 0 }}>
                  {quantityInList > 0 && `x${quantityInList}`}
                </span>

                <button
                  onClick={() => onAddProduct(product)}
                  className="icon-btn"
                  style={{ backgroundColor: "#4CAF50", color: "white" }}
                >
                  +
                </button>

                <button
                  onClick={() => onRemoveProduct(product.name)}
                  className="icon-btn"
                  style={{
                    backgroundColor: "#f44336",
                    color: "white",
                    opacity: quantityInList > 0 ? "1" : "0.2",
                    pointerEvents: quantityInList > 0 ? 'auto' : 'none'
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
