import React from 'react';
import home from '../assets/home.jpg';

const Home = () => (
  <div className="container text-center my-5">
    <h1 className="mb-4">Welcome to Our Pizza Store</h1>
    <p className="lead">Discover the best pizzas made with fresh ingredients.</p>
    <img src={home} alt="Pizza Store" className="img-fluid rounded" />
  </div>
);

export default Home;
