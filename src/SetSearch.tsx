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
          placeholder="Search for set..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          autoFocus
        />
      </div>
      <ul className="product-list" style={{ padding: 'var(--spacing-md)', paddingTop: 'var(--spacing-sm)' }}>
        {filteredSets.map((set) => (
          <li
            key={set.name}
            className="product-card"
          >
            <span className="product-name">{set.name}</span>
            <button 
              onClick={() => onAddSet(set)}
              className="action-btn primary"
              style={{ height: '36px', padding: '0 20px', flex: 'none' }}
            >
              Add
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SetSearch;
