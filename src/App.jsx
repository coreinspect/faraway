import PropTypes from "prop-types";
import { useState } from "react";

export default function App() {
  const [items, setItems] = useState([]);
  function handleAddItems(item) {
    //new array of items, spread the using ...items from the props(item)
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList items={items} onDeleteItem={handleDeleteItem} />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>🌴Far Away❤️</h1>;
}
function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    // if there is no description, don't add
    if (!description) {
      return;
    }
    const newItem = { id: Date.now(), description, quantity, packed: false };
    console.log(newItem);

    //calling the function to add new item
    onAddItems(newItem);

    //set the state to the default after adding new Item
    setDescription("");
    setQuantity(1);
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip?</h3>
      <select
        value={quantity}
        onChange={(e) => {
          console.log(quantity);
          setQuantity(Number(e.target.value));
        }}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Add an item"
        //the default value is "" but change when user put something
        // the value is set to the state
        value={description}
        // the value of the input is set to base on the state and target value
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
function PackingList({ items, onDeleteItem }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item item={item} onDeleteItem={onDeleteItem} key={item.id} />
        ))}
      </ul>
    </div>
  );
}

function Item({ item, onDeleteItem }) {
  return (
    <li>
      <input type="checkbox" />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>

      {/* use fuction to avoid running immediately the code */}
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}
Item.propTypes = {
  item: PropTypes.shape({
    quantity: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    packed: PropTypes.bool.isRequired,
  }).isRequired,
};

function Stats() {
  return (
    <footer className="stats">
      <em>You have X items on your list, and you already packed X (X%)</em>
    </footer>
  );
}
