import React from 'react';
import logo from './img/logo.png';
import caseIcon from './img/briefcase.png';
import homeIcon from './img/home.png';
import userIcon from './img/users.png';
import friendIcon from './img/friends.png';
import sackIcon from './img/sack.png';
import handIcon from './img/hand.png';
import saveIcon from './img/save.png';
import requestIcon from './img/request.png';
import ucheckIcon from './img/ucheck.png';
import utimesIcon from './img/utimes.png';
import bankIcon from './img/bank.png';
import coinIcon from './img/coin.png';
import serviceIcon from './img/service.png';
import cogIcon from './img/cog.png';
import scrollIcon from './img/scroll.png';
import chartIcon from './img/chart.png';
import sliderIcon from './img/slider.png';
import badgeIcon from './img/badge.png';
import clipIcon from './img/clip.png';
import icon from './img/icon.png';


import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function Sidebar() {
  return (
      <div className="nav flex-column sidebar">

        <ul className='nav-item mb-4'>
          <li className='my-4 active'>
            <p className='child'><img src={caseIcon} alt=""/> <span className='mx-2'>Switch Organization</span> <i className='fa fa-angle-down'></i></p>
          </li>

          <li className='mb-4'>
            <p className='child'><img src={homeIcon} alt=""/> <span className='mx-2'>Dashboard</span></p>
          </li>

          <p className="tags px-4 my-2">
            CUSTOMERS
          </p>

          <li className="activate my-3">
            <p className='child'><img src={friendIcon} alt=""/> <span className='mx-2'>Users</span></p>
          </li>

          <li className="my-3">
            <p className='child'><img src={userIcon} alt=""/> <span className='mx-2'>Guarantors</span></p>
          </li>

          <li className="my-3">
            <p className='child'><img src={sackIcon} alt=""/> <span className='mx-2'>Loans</span></p>
          </li>


          <li className="my-3">
            <p className='child'><img src={handIcon} alt=""/> <span className='mx-2'>Decision Models</span></p>
          </li>


          <li className="my-3">
            <p className='child'><img src={saveIcon} alt=""/> <span className='mx-2'>Savings</span></p>
          </li>

          <li className="my-3">
            <p className='child'><img src={requestIcon} alt=""/> <span className='mx-2'>Loan Requests</span></p>
          </li>

          <li className="my-3">
            <p className='child'><img src={ucheckIcon} alt=""/> <span className='mx-2'>Whitelist</span></p>
          </li>


          <li className="my-3">
            <p className='child'><img src={utimesIcon} alt=""/> <span className='mx-2'>Karma</span></p>
          </li>


          <p className="tags px-4 my-2">
            BUSINESSES
          </p>

          <li className="my-3">
            <p className='child'><img src={caseIcon} alt=""/> <span className='mx-2'>Organization</span></p>
          </li>

          <li className="my-3">
            <p className='child'><img src={requestIcon} alt=""/> <span className='mx-2'>Loan Products</span></p>
          </li>

          <li className="my-3">
            <p className='child'><img src={bankIcon} alt=""/> <span className='mx-2'>Savings Products</span></p>
          </li>


          <li className="my-3">
            <p className='child'><img src={coinIcon} alt=""/> <span className='mx-2'>Fees and Charges</span></p>
          </li>


          <li className="my-3">
            <p className='child'><img src={icon} alt=""/> <span className='mx-2'>Transactions</span></p>
          </li>

          <li className="my-3">
            <p className='child'><img src={serviceIcon} alt=""/> <span className='mx-2'>Services</span></p>
          </li>


          <li className="my-3">
            <p className='child'><img src={cogIcon} alt=""/> <span className='mx-2'>Service Account</span></p>
          </li>


          <li className="my-3">
            <p className='child'><img src={scrollIcon} alt=""/> <span className='mx-2'>Settlements</span></p>
          </li>

          <li className="my-3">
            <p className='child'><img src={chartIcon} alt=""/> <span className='mx-2'>Reports</span></p>
          </li>

          <p className="tags px-4 my-2">
            SETTINGS
          </p>

          <li className="my-3">
            <p className='child'><img src={sliderIcon} alt=""/> <span className='mx-2'>Preferences</span></p>
          </li>


          <li className="my-3">
            <p className='child'><img src={badgeIcon} alt=""/> <span className='mx-2'>Fees and Pricing</span></p>
          </li>


          <li className="my-3">
            <p className='child'><img src={clipIcon} alt=""/> <span className='mx-2'>Audit Logs</span></p>
          </li>

        </ul>
          

          
          
      </div>    
  );
}

export default Sidebar;
