import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UpdateItem = () => {
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3000/items')
      .then(response => setItems(response.data))
      .catch(error => console.error('Error fetching items:', error));
  }, []);

  const handleUpdate = () => {
    // Handle update logic here
  };

  return (
    <div className="container my-5">
      <h1>Update Item</h1>
      <select onChange={e => setSelectedItem(e.target.value)}>
        <option value="">Select an item</option>
        {items.map(item => (
          <option key={item.id} value={item.id}>{item.name}</option>
        ))}
      </select>
      {selectedItem && (
        <div>
          {/* Form to update item details */}
          <button onClick={handleUpdate}>Update Item</button>
        </div>
      )}
    </div>
  );
};

export default UpdateItem;
