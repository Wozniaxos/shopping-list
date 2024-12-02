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
  Spices: "#D35400"
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
                  width: "15px",
                  height: "15px",
                  backgroundColor: categoryColors[product.category] || "gray",
                  borderRadius: "50%", // Zaokrąglony kwadrat
                }}
              ></div>
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
                }} onClick={() => onStatusChange(product.name, "missing")}></button>
                <button style={{
                  width: "48px",
                  height: "48px",
                }} onClick={() => onAddProduct(product)}>+</button>
                <button style={{
                  width: "48px",
                  height: "48px",
                }} onClick={() => onRemoveProduct(product.name)}>-</button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
