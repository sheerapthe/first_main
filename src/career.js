import React from 'react';
import './career.css';
import img1 from './assets/img/b1.PNG';import img2 from './assets/img/c1.PNG';import img3 from './assets/img/d1.PNG';
import img4 from './assets/img/e1.PNG';import img5 from './assets/img/f1.PNG';import img6 from './assets/img/g1.PNG';
import i1 from './assets/img/z1.jpg';import i2 from './assets/img/z2.jpg';import i3 from './assets/img/z3.jpg';
import i4 from './assets/img/z4.jpg';import i5 from './assets/img/z5.jpg';import i6 from './assets/img/z6.jpg';
import i7 from './assets/img/z7.jpg';
import logo1 from './assets/img/a2.jpg';
import Navbar from './nav';
const Career =() => {
    return(
      
    
     
  
  <div>
    <Navbar/>
      <div className="header"><div class="centered"><span style={{fontSize:"3vw"}}>Explore and do what you love</span><br />
      <center><span id="span1">Welcome to Near Careers</span><br /><br /><button type="button" class="btn btn-primary" id="btn111">View Openings</button></center></div>
      <img src={logo1} style={{position: "absolute",display: "block"}} id="er1"></img>
      </div>                         
      <br />             
     <center> <div class="btn-group">
      <button type="button" class="btn btn-primary">Careers</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <button type="button" class="btn btn-primary">Culture</button></div></center>
      <br />
      <br />
      <br />
  
      <center><p style={{fontSize:'2vw',color:' #8C8C8C'}}>"Great Workplace is about Great Colleagues"</p>
       <p style={{fontSize:'2vw',color:' black'}}>PERKS AND BENEFITS</p>
       <button type="button" id="bigbtn" class="btn btn-primary">A great culture is not just about work, it's about work + life </button>
      </center>
      
      <br />
      <div class="container">
    <div class="card-columns">
      
      <div class="card-decoration-none">
        <div class="card-decoration-none text-center">
          <p class="card-text"> <div> 
                                <span id="surround">
                                <span id="initial"><img src={img1} id="er2"></img></span>
                                <span id="onhover"><img src={i1} id="er3"></img></span>
                                </span>
                                </div></p>
        </div>
      </div>
      <div class="card-decoration-none ">
        <div class="card-decoration-none text-center">
          <p class="card-text"> <div> 
                                <span id="surround">
                                <span id="initial"><img src={img2} id="er2"></img></span>
                                <span id="onhover"><img src={i2} id="er3"></img></span>
                                </span>
                                </div>
                                </p>
        </div>
      </div>
      <div class="card-decoration-none ">
        <div class="card-decoration-none text-center">
          <p class="card-text"> <div> 
                                <span id="surround">
                                <span id="initial"><img src={img3} id="er2"></img></span>
                                <span id="onhover"><img src={i3} id="er3"></img></span>
                                </span>
                                </div></p>
        </div>
      </div>
      <div class="card-decoration-none ">
        <div class="card-decoration-none text-center">
          <p class="card-text"> <div> 
                                <span id="surround">
                                <span id="initial"><img src={img4} id="er2"></img></span>
                                <span id="onhover"><img src={i4} id="er3"></img></span>
                                </span>
                                </div></p>
        </div>
      </div>  
      <div class="card-decoration-none ">
        <div class="card-decoration-none text-center">
          <p class="card-text"> <div> 
                                <span id="surround">
                                <span id="initial"><img src={img5} id="er2"></img></span>
                                <span id="onhover"><img src={i5} id="er3"></img></span>
                                </span>
                                </div></p>
        </div>
      </div>
      <div class="card-decoration-none ">
        <div class="card-decoration-none text-center">
          <p class="card-text"> <div> 
                                <span id="surround">
                                <span id="initial"><img src={img6} id="er2"></img></span>
                                <span id="onhover"><img src={i6} id="er3"></img></span>
                                </span>
                                </div></p>
        </div>
      </div>
    </div>
  </div>
  <br /><br />
      <img src={i7} id="er5"></img>
    
        <center><span id="span3">Open Positions</span></center>
    <span id="span4">Engineering</span>
    
    <div class="row">
    <div class="col-sm-4" class="col-md-4"   >     
    
    <div class="container" id="left1" class="card2">
    <div class="card" style={{width:"99%"}}>
      <div class="card-body">
       <h4 class="card-title" id="card_title"><b>Data Engineer</b></h4> 
        <p class="card-text">bangalore</p><hr></hr>
        <a href="#" class="btn btn-primary">See Profile</a>
      </div>
    </div></div>
    
    </div>
    <div class="col-md-4">  
    <div class="container" id="left2" class="card2">
    <div class="card" style={{width:"98%"}}>
      <div class="card-body">
       <h4 class="card-title" id="card_title"><b>Senior Engineer, Platform Engineering</b></h4> 
        <p class="card-text">bangalore</p><hr></hr>
        <a href="#" class="btn btn-primary">See Profile</a>
      </div>
    </div></div>
    </div>
  </div>
  <span id="span4">Product</span>
    
    <div class="row">
    <div class="col-sm-4" class="col-md-4"   >     
    
    <div class="container" id="left1" class="card2">
    <div class="card" style={{width:"99%"}}>
      <div class="card-body">
       <h4 class="card-title" id="card_title"><b>VP - Carbon</b></h4> 
        <p class="card-text">bangalore</p><hr></hr>
        <a href="#" class="btn btn-primary">See Profile</a>
      </div>
    </div></div>
    </div>
    <div class="col-md-4">  
    <div class="container" id="left2" class="card2">
    <div class="card" style={{width:"98%"}}>
      <div class="card-body">
       <h4 class="card-title" id="card_title"><b>Vice President of Data Partnerships</b></h4> 
        <p class="card-text">bangalore</p><hr></hr>
        <a href="#" class="btn btn-primary">See Profile</a>
      </div>
    </div></div>
    </div>
    <div class="col-md-4">  
    <div class="container" id="left2" class="card2">
    <div class="card" style={{width:"98%"}}>
      <div class="card-body">
       <h4 class="card-title" id="card_title"><b>Product Manager</b></h4> 
        <p class="card-text">bangalore</p><hr></hr>
        <a href="#" class="btn btn-primary">See Profile</a>
      </div>
    </div></div>
    </div>  
  </div>
  <span id="span4">Data&nbsp;Science</span>
    
    <div class="row">
    <div class="col-sm-4" class="col-md-4"   >     
    
    <div class="container" id="left1" class="card2">
    <div class="card" style={{width:"99%"}}>
      <div class="card-body">
       <h4 class="card-title" id="card_title"><b>Senior, Data Science</b></h4> 
        <p class="card-text">bangalore</p><hr></hr>
        <a href="#" class="btn btn-primary">See Profile</a>
      </div>
    </div></div>
    </div></div>
  
    <span id="span4">Research&nbsp;&&nbsp;Analytics</span>
    
    <div class="row">
    <div class="col-sm-4" class="col-md-4"   >     
    
    <div class="container" id="left1" class="card2">
    <div class="card" style={{width:"99%"}}>
      <div class="card-body">
       <h4 class="card-title" id="card_title"><b>Research Associate</b></h4> 
        <p class="card-text">bangalore</p><hr></hr>
        <a href="#" class="btn btn-primary">See Profile</a>
      </div>
    </div></div>
    </div></div>
  
  
    <span id="span4">Marketing</span>
    
    <div class="row">
    <div class="col-sm-4" class="col-md-4"   >     
    
    <div class="container" id="left1" class="card2">
    <div class="card" style={{width:"99%"}}>
      <div class="card-body">
       <h4 class="card-title" id="card_title"><b>Digital Marketing Technologist</b></h4> 
        <p class="card-text">bangalore</p><hr></hr>
        <a href="#" class="btn btn-primary">See Profile</a>
      </div>
    </div></div>
    </div>
    <div class="col-md-4">  
    <div class="container" id="left2" class="card2">
    <div class="card" style={{width:"98%"}}>
      <div class="card-body">
       <h4 class="card-title" id="card_title"><b>Content Marketing Specialist</b></h4> 
        <p class="card-text">bangalore</p><hr></hr>
        <a href="#" class="btn btn-primary">See Profile</a>
      </div>
    </div></div>
    </div>
    <div class="col-md-4">  
    <div class="container" id="left2" class="card2">
    <div class="card" style={{width:"98%"}}>
      <div class="card-body">
       <h4 class="card-title" id="card_title"><b>Product Manager</b></h4> 
        <p class="card-text">bangalore</p><hr></hr>
        <a href="#" class="btn btn-primary">See Profile</a>
      </div>
    </div></div>
    </div>  
  </div>
  <div class="row">
    <div class="col-sm-4" class="col-md-4"   >     
    
    <div class="container" id="left1" class="card2">
    <div class="card" style={{width:"99%"}}>
      <div class="card-body">
       <h4 class="card-title" id="card_title"><b>VP - CARBON</b></h4> 
        <p class="card-text">bangalore</p><hr></hr>
        <a href="#" class="btn btn-primary">See Profile</a>
      </div>
    </div></div>
    </div></div>
  
    <span id="span4">Platform&nbsp;Solutions</span>
    
    <div class="row">
    <div class="col-sm-4" class="col-md-4"   >     
    
    <div class="container" id="left1" class="card2">
    <div class="card" style={{width:"99%"}}>
      <div class="card-body">
       <h4 class="card-title" id="card_title"><b>Platform Solution Specialist</b></h4> 
        <p class="card-text">bangalore</p><hr></hr>
        <a href="#" class="btn btn-primary">See Profile</a>
      </div>
    </div></div>
    </div></div>
  
  
    <span id="span4">Sales</span>
    
    <div class="row">
    <div class="col-sm-4" class="col-md-4"   >     
    
    <div class="container" id="left1" class="card2">
    <div class="card" style={{width:"99%"}}>
      <div class="card-body">
       <h4 class="card-title" id="card_title"><b>Strategic Sales Lead</b></h4> 
        <p class="card-text">bangalore</p><hr></hr>
        <a href="." class="btn btn-primary">See Profil</a>
      </div>
    </div></div>
    </div></div>
  
  </div>
   
  
  
   
    );
}

export default Career;