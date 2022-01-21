import React, { useEffect } from 'react'
import './App.css';
import './assets/styles/mysass.scss'
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from './Routes'
import { useDispatch } from 'react-redux';
import { fetchBanner, fetchBlogs, fetchClients, fetchStatitics, fetchTestimonials } from './redux/action';


function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTestimonials())
    dispatch(fetchBlogs())
    dispatch(fetchClients())
    dispatch(fetchBanner())
    dispatch(fetchStatitics())
  }, [])

  return (
    <div className={"App"} >
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
