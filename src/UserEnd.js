import React, { useEffect, useState } from 'react'
// import './assets/styles/mysass.scss'
import Header from './components/user/Header';
import Footer from './components/user/Footer';
import { BrowserRouter as Router, Link } from "react-router-dom";
import Routes from './Routes'
import { Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/user/css/style.css';
import './assets/user/css/responsive.css';
import './assets/user/font-awesome-4.6.3/css/font-awesome.css';
import SideMenu from './components/user/SideMenu';
import Intransist from './components/user/Intransist';
import { AppBar, Card, Grid, IconButton, makeStyles, Toolbar, Typography, useTheme } from '@material-ui/core'
import { Drawer } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appbar: {
    width: '100%',
    height: 60,
    display: 'flex'
  }
  ,
}))
function UserEnd() {

  const onSearch = async (text) => {
    // console.log(text)
  }
  const classes = useStyles();
  const [open, setOpen] = useState(true)
  return (
    <div className={"userend"} >
      <div class="admin" onMouseEnter={() => setOpen(true)}>
        {/* <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={() => setOpen(true)}
          edge="start"
        >
          <i class="fa-solid fa-bars"></i>
        </IconButton> */}
        <Drawer anchor={'left'} open={open} onClose={() => setOpen(false)} >
          <SideMenu handleClose={() => setOpen(false)} />
        </Drawer>

        <div class="right_col">
          <Header onSearch={onSearch} headline="Header" />
          {/* <Card className={classes.appbar}>
            <Link to='/dashboard' onClick={() => handleClick(1)} className={classes.navLink}>
              Dashboard
            </Link>
            <Link to='/dashboard/intransist' onClick={() => handleClick(5)} className={classes.navLink}>
              custom report
            </Link>
            {/* <Link className={classes.navLink}>
                        help
                    </Link>
                    <Link className={classes.navLink}>
                        tutorials
                    </Link> 
        </Card> */}
          <section class="col_dlp_transist clearfix" style={{ float: "left", width: "100%" }}>
            <ul class="tab_clp">
              <li><Link to="/dashboard">Dashboard</Link></li>
              <li><Link to="/dashboard/delivered">custom report</Link></li>
            </ul>
          </section>
          <Routes />
        </div>
        <Footer />
      </div>
      {/* <div class="clearfix"></div>
        <main className="main">

        </main> */}
      {/* <Footer /> */}
    </div >
  );
}

export default UserEnd;
