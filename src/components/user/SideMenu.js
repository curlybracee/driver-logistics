import React, { useState } from 'react';
import { logo_admin, user_image } from '../../assets/user/img/'
import { Link, useLocation, useParams } from 'react-router-dom'
import { useHistory } from "react-router-dom";
// import { logo_admin } from '../../assets/user/img/'
// import { FooterLogo,MainLogo } from '../../assets/images'
import DashboardIcon from '../../assets/user/dashboard.svg';
import IntransitIcon from '../../assets/user/intransit.svg';
import DeliveredIcon from '../../assets/user/delivered.svg';
import FinanceIcon from '../../assets/user/finance.svg';
import clsx from 'clsx';

const SideMenu = ({ handleClose }) => {
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

   return (
      <div>
         <aside>

            <div>

               <ul class="side_menu">
                  <li onClick={handleClose} className={clsx(pathname === '/dashboard' && 'selectedNav')}><Link to="/dashboard"><img src={DashboardIcon} alt="dashboard icon" /></Link></li>
                  <li onClick={handleClose} className={clsx(pathname === '/dashboard/delivered' && 'selectedNav')}> <Link to="/dashboard/delivered"><img src={IntransitIcon} alt="dashboard icon" /></Link></li>
                  <li onClick={handleClose} className={clsx(pathname === '/dashboard/intransist' && 'selectedNav')}><Link to="/dashboard/intransist"><img src={DeliveredIcon} alt="dashboard icon" /></Link></li>
                  <li onClick={handleClose} className={clsx(pathname === '/dashboard/returned' && 'selectedNav')}><Link to="/dashboard/returned"><img src={FinanceIcon} alt="dashboard icon" /></Link></li>
                  {/* <li><a href=""> <i  class="fa fa-truck "></i> Tracking</a></li> */}
                  <li style={{ cursor: 'pointer' }}><a onClickCapture={logout}> <i class="fa fa-sign-out"></i> Logout</a></li>
               </ul>


            </div>
         </aside>



      </div>
   )
}
export default SideMenu
