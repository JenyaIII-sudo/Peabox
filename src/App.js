import React from "react";
import "./App.css";
import HomePage from "./pages/homePage/HomePage.";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  const [open, setOpen] = useState(false);
  const [modal, setModal] = useState('login');
  const handleOpenModal = e => {
    setModal(e.target.name);
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };
  return (
    <Router>
      <div className="App">
        <HomePage />
      </div>
    </Router>
  );
};

export default App;
