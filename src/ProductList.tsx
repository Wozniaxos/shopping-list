import React from "react";

type Product = { name: string; category: string; quantity: number; status: "default" | "bought" | "missing" };

type Props = {
  products: Product[];
  onStatusChange: (name: string, status: "bought" | "missing") => void;
  onAddProduct: (product: { category: string, name: string }) => void;
  onRemoveProduct: (name: string) => void;
  onClear: () => void;
};

export const categoryColors: { [key: string]: string } = {
  Vegetables: "#4CAF50",
  Fruits: "#FF5733",
  Frost: "#5DADE2",
  Konserwy: "#D35400",
  Dairy: "#F7DC6F",
  Bakalie: "#8E6E53",
  Zboza: "#E5B45F",
  Meat: "#C0392B",
  Pieczywo: "#D7B377",
  Alco: "#9B59B6",
  Chemia: "#16A085",
  Spices: "#D35400",
  Candy: "#D35400",
  Fit: "#4CAF50",
};

const ProductList: React.FC<Props> = ({ products, onStatusChange, onAddProduct, onRemoveProduct }) => {
  const sortedProducts = [...products].sort((a, b) => {
    const statusOrder = ["default", "missing", "bought"];
    return (
      statusOrder.indexOf(a.status) - statusOrder.indexOf(b.status) || a.category.localeCompare(b.category)
    );
  });

  return (
    <div className="container" style={{ padding: 0 }}>
      {products.length === 0 && (
        <div style={{ textAlign: 'center', color: '#666', marginTop: 50 }}>
          List is empty
        </div>
      )}
      <ul className="product-list">
        {sortedProducts.map((product) => (
          <li
            key={product.name}
            className={`product-card ${product.status === "bought" ? "bought" : ""}`}
            style={{
              // Keep dynamic border color/status visual logic if valid, but let CSS handle valid parts
              borderLeft: `4px solid ${categoryColors[product.category] || "gray"}`,
            }}
          >
            <div className="product-info">
              <div
                className="category-checkbox"
                onClick={() => onStatusChange(product.name, "bought")}
                style={{
                  borderColor: categoryColors[product.category] || "gray",
                  backgroundColor: product.status === "bought" ? (categoryColors[product.category] || "gray") : "transparent",
                }}
              >
                {product.status === "bought" && <span className="checkmark">✓</span>}
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
                <span 
                  className="product-name" 
                  onClick={() => onStatusChange(product.name, "bought")}
                  style={{
                    textDecoration: product.status === "bought" ? "line-through" : "none",
                    color: product.status === "bought" ? "#aaa" : (product.status === "missing" ? "orange" : "inherit")
                  }}
                >
                  {product.name}
                </span>
                {product.status === "missing" && <span style={{fontSize: '0.8em', color: 'orange'}}>Missing</span>}
              </div>
            </div>

            <div className="card-actions">
              <span className="quantity-badge">
                x{product.quantity}
              </span>
              
              <button 
                className="icon-btn missing-btn"
                onClick={() => onStatusChange(product.name, "missing")}
                aria-label="Mark as missing"
              >
                ?
              </button>

              <div className="controls-column">
                <button 
                  className="add-btn"
                  onClick={() => onAddProduct(product)}
                >+</button>
                <button 
                  className="remove-btn"
                  onClick={() => onRemoveProduct(product.name)}
                >-</button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
