import React from 'react';
import '../css/about.css';

import Header from './header.js'
import Footer from './footer.js'
import Nav from './nav.js'
import Body from './body_about.js'

class About extends React.Component{
    render() { 
        return (
            <div className="blog">
                <Header/>
                <Nav/>
                <Body/>
                <Footer/>
            </div>
        )
    }
}

export default About;