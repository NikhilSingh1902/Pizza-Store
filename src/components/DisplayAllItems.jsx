import React, { useState, useEffect } from 'react';
import axios from 'axios';
import pizza1 from '../assets/pizza1.jpg';
import pizza2 from '../assets/pizza2.jpg';
import pizza3 from '../assets/pizza3.jpg';
import pizza4 from '../assets/pizza4.jpg';
import pizza5 from '../assets/pizza5.jpg';
import pizza6 from '../assets/pizza6.jpg';
import pizza7 from '../assets/pizza7.jpg';
import pizza8 from '../assets/pizza8.jpg';

const DisplayAllItems = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/items')
      .then(response => setItems(response.data))
      .catch(error => console.error('Error fetching items:', error));
  }, []);

  // Map image names to imported image paths
  const imageMap = {
    'pizza1.jpg': pizza1,
    'pizza2.jpg': pizza2,
    'pizza3.jpg': pizza3,
    'pizza4.jpg': pizza4,
    'pizza5.jpg': pizza5,
    'pizza6.jpg': pizza6,
    'pizza7.jpg': pizza7,
    'pizza8.jpg': pizza8,
  };

  return (
    <div className="container my-5">
      <h1 className="text-center mb-5">Our Pizzas</h1>
      <div className="row">
        {items.map(item => (
          <div key={item.id} className="col-md-4 mb-4">
            <div className="card h-100">
              <img src={imageMap[item.image]} className="card-img-top" alt={item.name} />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">{item.description}</p>
                <p className="card-text">${item.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DisplayAllItems;
