import React from 'react'
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Loader from './components/Loader';
import AboutUs from './components/AboutUs';
import { BrowserRouter as Router } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from './Routes'
import $ from 'jquery'

function App() {
  return (
    <div className="App" >
      <Router>
        <Header />
        <div class="clearfix"></div>
        <main className="main">
          <Routes />
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
