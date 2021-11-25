import React from 'react';
import ReactDOM from 'react-dom';
//import { Switch, Redirect, Route } from 'react-router';
import { BrowserRouter, Link } from 'react-router-dom';
import { Routes ,Route } from 'react-router-dom';

import Login from './Login';
import Register from './Register';
import Contact from './Contact';
import Home from './Home';
import Shop from './Shop';
import Service from './Services';

import About from './About';
import './Login.css';
import Navbar from './component/Navbar'
import Message from './Message';

ReactDOM.render(
    <BrowserRouter>
    <Navbar/>
        <Route>
            
        
            <Route path='/contact' component={Contact} />
            <Route exact path='/home' component={Home} />
            <Route exact path='/shop' component={Shop} />
            <Route exact path='/service' component={Service} />

            <Route exact path='/about' component={About} />

            <Route exact path='/' component={Login} />
            <Route exact path='/register' component={Register} />

            <Route exact path='/message' component={Message} />


            {/* <Route component={NotFound}/> */}
        </Route>
    </BrowserRouter>,
    document.getElementById('root')
);