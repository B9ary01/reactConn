import React, { Component } from 'react';
import ConForm from './component/ContactForm';


function Contactpage(){
  return(
      <div className="hero" style={{width:'100%'}}>
           
          <div class="container">
              <div class="py-2 row" style={{alignItems: 'center'}}>
                  
                      <div class="text-center  col-md-12">
                         
                          <h2 class="text-secondary"> Contact Us
                          </h2>
                      </div>
              </div>
          </div>
      </div>
  )
}
export default class Contact extends Component {
 
 
 render() {
   return (
     <div>
      
<Contactpage/>        
        <ConForm/>
     </div>
   );
 }
}

