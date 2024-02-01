/* eslint-disable react/prop-types */
import { useState } from "react";

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

export default Form;
