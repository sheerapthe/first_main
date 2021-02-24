import React from 'react';
// import logo from './logo.svg';

import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
//import './App.css';
//import Navbar from './nav';
import Home from './home';
import About from './about';
import Career from './career';
import Contact from './contactus';
import Market from './market';
import Blog from './blog';
//import Footer from './footer';

function App() {
 
  return (
    <div className="App">
    
    
  

     <Router>
      <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/career" component={Career} />
      <Route exact path="/market" component={Market} />
      <Route exact path="/blog" component={Blog} />
      <Route exact path="/contact" component={Contact} />
      </Switch>  
    </Router>
 

  
 

  
  
  
 

  
  
  
  

  
  
  
    </div>
  );
}

export default App;
