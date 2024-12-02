import React, { useState } from "react";
import { SETS } from "./sets.ts";

type Props = {
  onAddSet: (set: { name: string; products: { name: string; category: string; quantity: number }[] }) => void;
  onGoBack: () => void;
};

const SetSearch: React.FC<Props> = ({ onAddSet, onGoBack }) => {
  const [search, setSearch] = useState("");

  const filteredSets = SETS.filter((set) =>
    set.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: "10px" }}>
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
          placeholder="Search set..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
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
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {filteredSets.map((set) => (
          <li
            key={set.name}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "10px",
              marginBottom: "5px",
              backgroundColor: "#222",
              color: "white",
              borderRadius: "8px",
            }}
          >
            <span>{set.name}</span>
            <button onClick={() => onAddSet(set)}>Add</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SetSearch;
