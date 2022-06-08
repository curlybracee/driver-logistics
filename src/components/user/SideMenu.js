import React from 'react';
import { Link, useLocation } from 'react-router-dom'
import { useHistory } from "react-router-dom";
import DashboardIcon from '../../assets/user/dashboard.svg';
import IntransitIcon from '../../assets/user/intransit.svg';
import DeliveredIcon from '../../assets/user/delivered.svg';
import FinanceIcon from '../../assets/user/finance.svg';
import clsx from 'clsx';
import { Drawer } from '@material-ui/core';

const SideMenu = ({ open, setOpen }) => {
   const { pathname } = useLocation()
   const history = useHistory();
   const logout = () => {
      const confirmBox = window.confirm(
         "Do you want to logout?"
      )
      if (confirmBox === true) {
         localStorage.removeItem('user');
         history.push("/login");
      }
   };

   const handleClose = () => {
      setOpen(false)
   }

   return (
      <div >
         <Drawer variant="temporary" open={open} style={{ top: '60 important' }} onClose={handleClose}>

            <div>

               <ul class="side_menu" onMouseLeave={handleClose} >
                  <li onClick={handleClose} className={clsx(pathname === '/dashboard' && 'selectedNav')}><Link to="/dashboard"><img src={DashboardIcon} alt="dashboard icon" /></Link></li>
                  <li onClick={handleClose} className={clsx(pathname === '/dashboard/delivered' && 'selectedNav')}> <Link to="/dashboard/delivered"><img src={IntransitIcon} alt="dashboard icon" /></Link></li>
                  <li onClick={handleClose} className={clsx(pathname === '/dashboard/intransist' && 'selectedNav')}><Link to="/dashboard/intransist"><img src={DeliveredIcon} alt="dashboard icon" /></Link></li>
                  <li onClick={handleClose} className={clsx(pathname === '/dashboard/returned' && 'selectedNav')}><Link to="/dashboard/returned"><img src={FinanceIcon} alt="dashboard icon" /></Link></li>
                  {/* <li><a href=""> <i  class="fa fa-truck "></i> Tracking</a></li> */}
                  <li style={{ cursor: 'pointer' }}><a onClickCapture={logout}> <i class="fa fa-sign-out"></i></a></li>
               </ul>


            </div>
         </Drawer>



      </div>
   )
}
export default SideMenu
