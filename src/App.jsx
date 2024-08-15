import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import DisplayAllItems from './components/DisplayAllItems';
import AddNewItem from './components/AddNewItem';
import UpdateItem from './components/UpdateItem'; 
import DeleteItem from './components/DeleteItem'; 
import Contact from './components/Contact';
import './App.css';

const App = () => (
  <Router>
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/display-all-items" element={<DisplayAllItems />} />
          <Route path="/add-new-item" element={<AddNewItem />} />
          <Route path="/update-item" element={<UpdateItem />} />
          <Route path="/delete-item" element={<DeleteItem />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  </Router>
);

export default App;
