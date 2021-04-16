import React from 'react';
import '../css/register.css'

import Header from './header.js'
import Footer from './footer.js'
import Nav from './nav.js'
import Body from './body_register.js'

class Register extends React.Component{
    render(){
        return(
            <div className="register-container">
                <Header/>
                <Nav/>
                <Body/>
                <Footer/>
            </div>
        )
    }
}

export default Register