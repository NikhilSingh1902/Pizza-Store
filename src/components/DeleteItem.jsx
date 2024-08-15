import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const DeleteItem = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleDelete = () => {
    axios.delete(`http://localhost:3000/items/${id}`)
      .then(() => navigate('/display-all-items'))
      .catch(error => console.error('Error deleting item:', error));
  };

  return (
    <div className="container text-center">
      <h1>Are you sure you want to delete this item?</h1>
      <button onClick={handleDelete} className="btn btn-danger mt-3">Delete Item</button>
      <button onClick={() => navigate('/display-all-items')} className="btn btn-secondary mt-3">Cancel</button>
    </div>
  );
};

export default DeleteItem;
