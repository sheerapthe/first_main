import React from 'react';
import './contactus.css';
import Footer from './footer';
import Navbar from './nav';
import image1 from './assets/img/sss.png';

const Contact = () => {
    
  return(
   <div>
    <Navbar />
    <div className="main">
        <div className="left">
         
       <br/>
       <br/>
       <center> <h1>Contact Us</h1> </center>
       <br/>
       <br/>
       <br/>
        <center> <h5>we would you love to heart from you</h5> </center>
       <center> <h5>For Press Enquiries,write at</h5></center>
    <br/>
    
    <center><h3 id="mail1" >real@gmail.com</h3> </center>
        <br/>
        <center><button class="button2">MEDIA KID</button></center>
        <center><img src={image1} id='img1'></img></center>
        </div>
<div class="right">

<div class="container-fluid">
  <div class="row">
    <div class="col-sm-6">
      
<input id="tx1" type="text" style={{marginTop:"70px"}} placeholder="First Name"></input><br/><br/>
<input id="tx1" type="text" placeholder="Job Title"></input><br/><br/>
<input id="tx1" type="text" placeholder="Company"></input><br/><br/>
<select id="tx1" name="country">
<option value="country">country</option>
<option value="India">India</option>
<option value="USA">USA</option>
<option value="UK">UK</option>
<option value="China">China</option>
<option value="Austrila">Austrila</option>
<option value="Dubai">Dubai</option>
<option value="Europe">Europe</option>
<option value="Pakisthan">Pakisthan</option>
</select>


</div>
    <div class="col-sm-6">

    <input id="tx1" type="text" style={{marginTop:"70px"}} placeholder="Second Name"></input><br/><br/>
<input id="tx1" type="mail" placeholder="Business E-mail"></input><br/><br/>
<input id="tx1" type="number" placeholder="Contact number "></input><br/><br/>
<input id="tx1" type="text" placeholder="You Are Near"></input><br/><br/>
</div>

 
     
  </div>
</div> 


<center><br/><br/><br/><button class="button1"><span>SUBMIT</span></button></center>

</div>  
</div>

    <Footer />
    </div>
  )}

export default Contact;