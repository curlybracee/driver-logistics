import React from 'react'
import './App.css';
import Header from './components/Header';
import Loader from './components/Loader';
import Footer from './components/Footer';
import { BrowserRouter as Router } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
