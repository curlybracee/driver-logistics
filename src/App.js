import React, { useEffect } from 'react'
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from './Routes'
import { useDispatch } from 'react-redux';
import { fetchBanner, fetchBlogs, fetchClients, fetchTestimonials } from './redux/action';
// import $ from 'jquery'

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTestimonials())
    dispatch(fetchBlogs())
    dispatch(fetchClients())
    dispatch(fetchBanner())
  }, [])

  return (
    <div className="App" >
      <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" />
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
