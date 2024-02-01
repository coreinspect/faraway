/* eslint-disable react/prop-types */
import { useState } from "react";
import Item from "./Item";
function PackingList({ items, onDeleteItem, onToggleItem, onClearItems }) {
  const [sortBy, setSortBy] = useState("input");
  let sortedItems;
  if (sortBy === "input") sortedItems = items;
  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
            key={item.id}
          />
        ))}
      </ul>

      {/* Code for Sorting */}
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort By Input order</option>
          <option value="description">Sort By Description</option>
          <option value="packed">Sort By Packed Status</option>
        </select>
        <button onClick={onClearItems}>Clear List</button>
      </div>
    </div>
  );
}

export default PackingList;
