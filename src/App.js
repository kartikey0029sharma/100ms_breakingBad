import React from 'react';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Character from './Components/Character'
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route path="/" exact component={Home} />
        <Route path="/character" exact component={Character} />
      </div>
    </Router>
  );
}

export default App;

