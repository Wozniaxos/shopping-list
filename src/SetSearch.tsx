import React, { useState } from "react";
import { SETS } from "./sets.ts";

type Props = {
  onAddSet: (set: { name: string; products: { name: string; category: string; quantity: number }[] }) => void;
};

const SetSearch: React.FC<Props> = ({ onAddSet }) => {
  const [search, setSearch] = useState("");

  const filteredSets = SETS.filter((set) =>
    set.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: "10px" }}>
      <input
        type="text"
        placeholder="Search set..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
      />
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
