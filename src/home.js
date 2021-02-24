import React from 'react';
import Footer from './footer';
import Navbar from './nav';
import './home.css';
import img1 from './assets/img/ad1.png';


const Home  = () =>{
    
    return(
    <div> <Navbar />  
        <header className="masthead">
        <div className="container">
          <div className="intro-text">
            <div className="intro-lead-in">Welcome To Our Studio!</div>
            <div className="intro-heading text-uppercase">It's Nice To Meet You</div>
            <a className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#services">Tell Me More</a>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#services">Tell Me More</a>
          </div>
        </div>
      </header>
      <center> <p  id="x2">we focus on technologies and Practices that drive world-class 
            digital brand experience,  Through integrated business and software solutions. </p></center>
            <div class="section-title">
          <h2 id="x3">why baeon?</h2>
          
          <p>
          Every day, companies and organizations gain competitive advantage and value by 
          thinking digitally. Often, these companies need a partner to help them reach their full potential. We act as a strategic partner for enterprises, nonprofits and organizations that wish to harness the power and scale of technology to achieve business objectives.

We focus on the brands, technologies, and practices that drive world-class brand experience,
 through integrated business and software solutions.<br/><br/>
 <center><button type="button" class="btn btn-outline-warning" id="1b">LEARN MORE</button></center>
          </p>
        </div>
        <div class="row" id="card1">
  <div class="column" >
    <h2>Column 1</h2>
    <img src={img1} alt="Logo" width="130px" height="130px" ></img>
    
  </div>
  <div class="column" id="id1">
    <h2>Column 2</h2>
    <img src={img1} alt="Logo" width="130px" height="130px" ></img>
    
  </div>
  <div class="column">
    <h2>Column 3</h2>
    <img src={img1} alt="Logo" width="130px" height="130px" ></img>
    
  </div>
</div>
<div class="row2">
  <div class="column2" id="col2" >
    <h2>Column 1</h2>
    
  </div>
  <div class="column2" id="col3">
    <h2>Column 2</h2>
    
  </div>
</div>
      <Footer />
      </div>
    );
}


export default Home;