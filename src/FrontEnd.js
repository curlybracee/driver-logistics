import React, { useEffect } from 'react'
import './App.css';
// import './assets/styles/mysass.scss'
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from './Routes'
import { useDispatch } from 'react-redux';
import { fetchBanner, fetchBlogs, fetchClients, fetchStatitics, fetchTestimonials } from './redux/action';
import MyAlert from './components/common/MyAlert';
import ScrollToTop from './components/common/ScrollToTop';
import { Alert } from 'react-bootstrap';
import './index.css';

function FrontEnd() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTestimonials())
    dispatch(fetchClients())
    dispatch(fetchBanner())
    dispatch(fetchStatitics())
  }, [])

  return (
    <div className={"frontend"} >
        <Header />
        <div class="clearfix"></div>
        <main className="main">
        <ScrollToTop />
          <Routes />
          <MyAlert />
        </main>
        <Footer />
    </div>
  );


}

export default FrontEnd;
