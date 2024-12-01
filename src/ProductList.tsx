import React from "react";

type Product = { name: string; category: string; quantity: number; status: "default" | "bought" | "missing" };

type Props = {
  products: Product[];
  onStatusChange: (name: string, status: "bought" | "missing") => void;
  onAddProduct: (product: { category: string, name: string }) => void;
  onRemoveProduct: (name: string) => void;
  onClear: () => void;
};

const categoryColors: { [key: string]: string } = {
  Vegetables: "green",
  Meats: "red",
  Pasta: "yellow",
  Dairy: "white",
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
              gap: "10px",
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
            <span>
              {product.name} ({product.quantity})
            </span>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div
                style={{
                  width: "15px",
                  height: "15px",
                  backgroundColor: categoryColors[product.category] || "gray",
                  borderRadius: "50%", // Zaokrąglony kwadrat
                  marginRight: "10px",
                }}
              ></div>
              <div style={{
                display: "flex",
                gap: "5px",
              }}>
                <button style={
                  {
                    backgroundColor: 'green'
                  }
                } onClick={() => onStatusChange(product.name, "bought")}>B</button>
                <button style={{
                  backgroundColor: 'orange'
                }} onClick={() => onStatusChange(product.name, "missing")}>M</button>
                <button onClick={() => onAddProduct(product)}>+</button>
                <button onClick={() => onRemoveProduct(product.name)}>-</button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
