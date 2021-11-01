import React from 'react'
import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
      <Router>
        <Header />

      </Router>
    </div>
  );
}

export default App;
