import React from 'react';
import { logo_admin, user_image } from '../../assets/user/img/'
import ReactDOM from 'react-dom';
import $ from 'jquery';
import { useState, useEffect, useRef } from "react";
import { Modal, Button } from "react-bootstrap";
import { Link, useLocation } from 'react-router-dom'
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateSearch } from '../../redux/action';
import { makeStyles } from '@material-ui/core';
import DashboardIcon from '../../assets/user/dashboard.svg';
import IntransitIcon from '../../assets/user/intransit.svg';
import DeliveredIcon from '../../assets/user/delivered.svg';
import FinanceIcon from '../../assets/user/finance.svg';
import clsx from 'clsx';

const useStyles = makeStyles({
   search: {
      width: 300,
      borderRadius: 10,
      border: '1px solid black',
      height: '30px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
   },
   input: {
      border: 'none',
      height: '28px',
      width: '100%',
      padding: '0 10',
      borderRadius: 10,
      '&:focus': {
         outline: 'none'
      }
   },
   searchIcon: {
      width: '30px',
      height: '30px',
      display: 'flex',
      alignItems: 'center'
   }
})
const Header = (props) => {
   const { pathname } = useLocation()
   const history = useHistory();
   const logout = () => {
      const confirmBox = window.confirm(
         "Do you want to logout?"
      )
      if (confirmBox === true) {
         console.log("logout")
         localStorage.removeItem('user');
         history.push("/login");
      }
   };

   const dispatch = useDispatch();
   const { onSearch } = props;

   const [mobile_menu, setmobile_menu] = useState(false)

   const mobile_navClick = () => {
      $(".mobile_menu").toggleClass("is_open");
      $(".overlay").css("display", "block");
   };

   const btn_closeClick = () => {
      $(".mobile_menu").removeClass("is_open");
      $(".overlay").css("display", "none", "slow");
   };

   const search_mobileClick = () => {
      $(".mobile_search_wrap").slideToggle();
   };




   const [name, setName] = useState(() => {
      const user = JSON.parse(localStorage.getItem("user"));
      const initialValue = user ? user.Username : "";
      return initialValue;
   });

   const [consigner, setConsigner] = useState(() => {
      const user = JSON.parse(localStorage.getItem("user"));
      const initialValue = user ? user.Consigner : "";
      return initialValue;
   });

   // const isSearch=false;

   const [searchText, setSearchText] = useState("");
   const handleSearchChange = (e) => {
      const text = e.target.value;
      setSearchText(text);

      // dispatch(updateSearch(text))
      // SearchUpdate(text,true);
   };

   useEffect(() => {
      console.log("header working")
   }, []);

   const handleSearchClick = (e) => {
      e.preventDefault()
      // dispatch(updateSearch(searchText))
      history.push(`/dashboard/search/${searchText}`)
      //   console.log("Clicked "+searchText);
   }
   function SearchUpdate(searchData, isSearch) {
      history.push({
         pathname: '/user',
         state: { searchData: searchData, isSearch: false }
      });
   }

   const classes = useStyles()
   return (

      <>
         <header>
            <div class="inner">
               <div class="brad_loog">
                  <Link to="/dashboard"> <img src={logo_admin} alt="" /></Link>
               </div>
               {/* <div class="mobile_logo">
                  <Link to="/dashboard"> <img src={logo_admin} alt="" /></Link>
               </div> */}

               <div class="header_right_info">
                  <div class="inner">
                     {/* <div className={classes.search}>
                        <input className={classes.input} />
                        <div className={classes.searchIcon}>
                           <i class="fa fa-search" />
                        </div>
                     </div> */}
                     <div class="seach_col mobile">
                        <form class="search_wrap">
                           <input type="text" placeholder="Search transactions, Invoices or Help" value={searchText} onChange={handleSearchChange} />
                           <button onClick={handleSearchClick} type='submit'><i class="fa fa-search"></i></button>
                        </form>
                     </div>
                     <div class="paint">
                        <div className='cls_headname'>{name}</div>
                        <div className='cls_headconsigner'>{consigner}</div>
                     </div>
                     <ul class="user_col">
                        <li>
                           {/* <a href="" class="more_menu">
                              <i class="fa fa-th-large"></i>
                           </a> */}
                           <li class="search_mobile" onClick={() => search_mobileClick()}>
                              <div class="search_sml">
                                 <i class="fa fa-search"></i>
                              </div>
                           </li>
                        </li>
                        <li class="dp_user">
                           <Link to="/dashboard"> <img src={user_image} alt="" /> </Link>
                        </li>
                        <li class="mobile_nav" onClick={() => mobile_navClick()}>
                           <i class="fa fa-bars"></i>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
         </header>

         {/* <section class="mobile_search_wrap">
                       <div class="search_wrap mobile clearfix">
                          <input type="text" placeholder="Search transactions, Invoices or Help" value={searchText} onChange={handleSearchChange}/>
                          <button onClick={handleSearchClick}><i class="fa fa-search"></i></button>
                       </div>
                    </section> */}

         <div class="clearfix"></div>




         <div class="overlay"></div>
         <div class="mobile_menu">
            <button class="btn_close" onClick={() => btn_closeClick()}> <i class="fa fa-times-circle"></i> </button>
            <ul class="side_menu">
               <li><a href="#"> <i class="fa fa-th-large"></i> Dashboard</a></li>
               <li className={clsx(pathname === '/dashboard' && 'selectedNav')}><Link to="/dashboard"><img src={DashboardIcon} alt="dashboard icon" /></Link></li>
               <li className={clsx(pathname === '/dashboard/delivered' && 'selectedNav')}> <Link to="/dashboard/delivered"><img src={IntransitIcon} alt="dashboard icon" /></Link></li>
               <li className={clsx(pathname === '/dashboard/intransist' && 'selectedNav')}><Link to="/dashboard/intransist"><img src={DeliveredIcon} alt="dashboard icon" /></Link></li>
               <li className={clsx(pathname === '/dashboard/returned' && 'selectedNav')}><Link to="/dashboard/returned"><img src={FinanceIcon} alt="dashboard icon" /></Link></li>
               <li><a onClickCapture={logout}> <i class="fa fa-sign-out"></i> Logout</a></li>
               {/* <li><a href="/user"> <i class="fa fa-truck "></i> Tracking</a></li> */}
            </ul>
         </div>








      </>

   )



}
export default Header
