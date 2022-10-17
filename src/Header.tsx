import React from 'react';
import logo from './img/logo.png';
import userImage from './img/userImage.png';
import './App.scss';
import $ from 'jquery';

function Header() {
  const toggleSidebar = () =>{
    $('.sidebar').toggleClass('hide');
    
  }
  return (
      <div className="header sticky-top px-4">

        <img src={logo} alt="" className='logo' />

        <i className="fa fa-bars" onClick={toggleSidebar}>

        </i>

        <div className="inputDiv">
          <input type="text" placeholder='Search Anything' className='px-3'/>
          <button><i className='fa fa-search'></i></button>
        </div>

        <div className="edge px-4">
          <p className="docs m-3">Docs</p>
          <i className="fa fa-bell"></i>

          <div className="details">
            <img src={userImage} alt="" />
            <p className="username m-3">Adedeji</p>
            <i className="fa fa-angle-down"></i>
          </div>
          
        </div>
          
          
      </div>    
  );
}

export default Header;
