import React, { useState } from 'react';
import './App.css';
import HomePage from './pages/homePage/HomePage.';
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div className="App">
        <HomePage />
      </div>
    </Router>
  );
};

export default App;
