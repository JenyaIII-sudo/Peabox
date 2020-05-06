import React from "react";
import "./App.css";
import HomePage from "./pages/homePage/HomePage.";
import { BrowserRouter as Router } from "react-router-dom";
import SmoothScrollbar from "smooth-scrollbar";
import OverscrollPlugin from "smooth-scrollbar/plugins/overscroll";
import Scrollbar from "react-smooth-scrollbar";

SmoothScrollbar.use(OverscrollPlugin);

const App = () => {
  return (
    <Router>
      <div className="App">
        <Scrollbar
          style={{ height: "100vh" }}
          damping={0.1}
          thumbMinSize={20}
          syncCallbacks={true}
          renderByPixels={true}
          alwaysShowTracks={true}
          continuousScrolling={true}
        >
          <HomePage />
        </Scrollbar>
      </div>
    </Router>
  );
};

export default App;
