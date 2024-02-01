/* eslint-disable react/prop-types */
function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onToggleItem(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>

      {/* use fuction to avoid running immediately the code */}
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}

export default Item;
