import { useState } from "react";

const Form = ({ onAddItem }) => {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      description,
      quantity,
      packed: false,
      id: Date.now(),
    };

    console.log(newItem);
    onAddItem(newItem);
    setDescription("");
    setQuantity(1);
  };

  const handleChange = (e) => {
    setDescription(e.target.value);
  };

  const onQuantityChange = (e) => {
    setQuantity(+e.target.value);
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip ?</h3>
      <select value={quantity} onChange={onQuantityChange}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        value={description}
        type="text"
        placeholder="item..."
        onChange={handleChange}
      />
      <button disabled={!description}>Add</button>
    </form>
  );
};

export default Form;
