import React, { Component } from 'react';

function Serv(){
  return(
      <div className="hero" style={{width:'100%'}}>
           
          <div class="container">
              <div class="py-5 row" style={{alignItems: 'center'}}>
                  
                      <div class="text-center  col-md-12">
                         
                          <h2 class="text-secondary"> Bong Services
                          </h2>
                      </div>
              </div>
          </div>
      </div>
  )
}



export default class Services extends Component {
 
 render() {
   return (
     <div>
      

         <Serv/>  
 
     </div>
   );
 }
}

