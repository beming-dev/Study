import React from 'react';
import '../css/home.css';

import Header from './header.js'
import Footer from './footer.js'
import Nav from './nav.js'
import Body from './body_home.js'

class Home extends React.Component{
    render() { 
        return (
            <div className="home">
                <Header/>
                <Nav/>
                <Body/>
                <Footer/>
            </div>
        )
    }
}

export default Home;