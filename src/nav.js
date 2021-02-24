import React from 'react';
import './App.css';
import { HashLink as Link } from 'react-router-hash-link';
//import  { useHistory } from 'react-router-dom';

const Navbar = () => {
    
    return(
        
<nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
<div className="container">
  <a className="navbar-brand js-scroll-trigger" href="#page-top">Baeon</a>
  <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
    Menu
    <i className="fa fa-bars"></i>
  </button>
  <div className="collapse navbar-collapse" id="navbarResponsive">
    <ul className="navbar-nav text-uppercase ml-auto">
      <li className="nav-item">
        <Link className="nav-link js-scroll-trigger" to="about">About</Link>
      </li>
     
      <li className="nav-item">
        <Link className="nav-link js-scroll-trigger" to="career">Carieer</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link js-scroll-trigger" to="market">Market</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link js-scroll-trigger" to="blog">Blog</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link js-scroll-trigger" to="contact">Contact</Link>
      </li>
    </ul>
  </div>
</div>
</nav>
    );
}

export default Navbar;