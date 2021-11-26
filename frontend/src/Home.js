import React, { Component } from 'react';
import "./App.css";



import headphone from "./images/headphone.jpg";
import cam3 from "./images/cam3.jpg";
import bag2 from "./images/bag2.jpg";
import tel from "./images/tel.jpg";

import vest from "./images/vest.jpg";

import { Col } from "react-bootstrap";
import { Link } from 'wouter'

function Top(){
  return(
      <div className="head" style={{width:'100%'}}>
           
          <div class="container">
              <div class="py-5 row" style={{alignItems: 'center'}}>
                  
                      <div class="text-center  col-md-12">
                         
                          <h2 class="text-secondary"> Welcome to Bong Store
                          </h2>
                      </div>
              </div>
          </div>
      </div>
  )
}




function Products(){
  return(
      <div class="what-is-mern">
          <div class="container">
              <h2 class="text-light mb-4 poppins text-center">Our <span class="text-green">Products</span> </h2>
              <div class="container">
                  <div class="mern row">
                      <div class="col-md-3 col-sm-6">
                          <img src={cam3} alt="img"  className='home-image' class="item"/>
                          <h4 class="text-light mb-4">Camera</h4>
                          <p>£56.00</p>
                          <p class="text-secondary">Lorem ipsum adipiscing elit, ut labore
                           et doirure dolor in reprehenderila cunt mollit anim id est laborum.</p>
                      </div>
                      <div class="col-md-3 col-sm-6">
                          <img src={tel} alt="img"  className='home-image' class="item"/>
                          <h4 class="text-light mb-4">Telephone</h4>
                          <p>£30.00</p>

                          <p class="text-secondary">Lote irurecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidata est laborum."</p>
                      </div>
                      <div class="col-md-3 col-sm-6">
                      <img src={cam3} alt="img"  className='home-image' class="item"/>
                          <h4 class="text-light mb-4">Camera</h4>
                          <p>£36.00</p>

                          <p class="text-secondary">Lorem ipsum do minquip  aute irure dol cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                          rum."</p>
                      </div>
                      <div class="col-md-3 col-sm-6">
                      <img src={headphone} alt="img"  className='home-image' class="item"/>
                          <h4 class="text-light mb-4">Headphone</h4>
                          <p>£56.00</p>

                          <p class="text-secondary">Lorem ip elit, sed do d minolor in ore eu fxcepteur sint occaecat cupidatat non proide
                          deserunt mollit anim id est laborum."</p>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  )
}

function Subscribe(){
  return(
      <div class="subscribe">
          <div class="container"><h2 class="mb-4 poppins">
              <span class="text-green">Subscribe</span> to our newsletter</h2>
              <p class="text-secondary">Subscribe to our newsletter for latest updates on our sessions!</p>
              <form class="subscribe-form">
                  <input type="text" class="form-control" placeholder="Enter your email"/>
                  <button class="btn btn-dark mt-3 poppins">Subscribe</button>
              </form>
          </div>
      </div>
  )
}

function Footer(){
  return(
      <div class="footer">
          <div class="container">
              <div class="py-5 row">
                  <div class="text-md-start col-md-4 ">
                      <Col >
                      <h4 class="mb-4" style={{color:'black'}}>About Us</h4>
                      <p class="text-secondary">bong team inolor in ore eu fxcepteur  inolor in ore eu fxcepteur </p>
                      </Col>
                  </div>
                  <div class=" text-md-end   col-md-4 ">
                      <Col>
                      <h4 class="mb-4" style={{color:'black'} }>Services</h4>
                      <a class="footer-link" href="/home">Payment</a><br/>
                      <a class="footer-link" href="/home">Shipping</a><br/>
                      <a class="footer-link" href="/home">Refund</a><br/>
                      </Col>
                  </div>
                  <div class=" text-md-end   col-md-4">
                      <Col>
                      <h4 class="mb-4" style={{color:'black'} }>Links</h4>
                      <a class="footer-link" href="/home">Home</a><br/>
                      <a class="footer-link" href="/about">About Us</a><br/>
                      <a class="footer-link" href="/contact">Contact</a><br/>
                      </Col>
                  </div>

              </div>
              <hr/>

              <div class=" row">
              <div class="  col-md-6 ">
             <p>@ 2021 BONG Store. All Rights Reserved. </p>
                  </div>

                  <div class=" col-md-6">
                      <p>Privacy | Policy</p>
                  </div>
</div>

          </div>
      </div>
      
  )
}



export default class Home extends Component {
 
 
 render() {
   return (
     <div>
      
         <Top/>
         <Products/>
         <Subscribe/>
         <Footer/>
      
 
     </div>
   );
 }
}

