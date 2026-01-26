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
    <div style={{ padding: "10px" }}>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {sortedProducts.map((product) => (
          <li
            key={product.name}
            style={{
              display: "flex",
              gap: "20px",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "10px",
              marginBottom: "5px",
              backgroundColor: "#222",
              color: product.status === "bought" ? "green" : product.status === "missing" ? "orange" : "white",
              textDecoration: product.status !== "default" ? "line-through" : "none", // Przekreślenie
              borderRadius: "8px",
            }}
          >
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
            }}>
              <div
                onClick={() => onStatusChange(product.name, "bought")}
                style={{
                  minWidth: "30px",
                  minHeight: "30px",
                  borderRadius: "50%",
                  border: `3px solid ${categoryColors[product.category] || "gray"}`,
                  backgroundColor: product.status === "bought" ? (categoryColors[product.category] || "gray") : "transparent",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                }}
              >
                {product.status === "bought" && <span style={{ color: "white", fontWeight: "bold", textShadow: "0px 0px 3px black" }}>✓</span>}
              </div>
              <span onClick={() => onStatusChange(product.name, "bought")}>
                {product.name}
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>  
              <div style={{
                display: "flex",
                gap: "5px",
                alignItems: "center"
              }}>
                <span style={{ color: "#888" }}>
                {`x${product.quantity}`}
              </span>
                <button style={{
                  backgroundColor: 'orange',
                  color: 'white',
                  width: "48px",
                  height: "48px",
                  fontSize: "24px",
                  fontWeight: "bold",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                  padding: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }} onClick={() => onStatusChange(product.name, "missing")}>?</button>
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                }}>
                  <button style={{
                    width: "48px",
                    height: "24px",
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }} onClick={() => onAddProduct(product)}>+</button>
                  <button style={{
                    width: "48px",
                    height: "24px",
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }} onClick={() => onRemoveProduct(product.name)}>-</button>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
