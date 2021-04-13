import React from 'react';
import './css/home.css';

import Header from './components/header.js'
import Footer from './components/footer.js'
import Nav from './components/nav.js'
import Body from './components/home.js'

class Home extends React.Component{
    render() { 
        return (
            <div className="container">
                <Header/>
                <Nav/>
                <Body/>
                <Footer/>
            </div>
        )
    }
}

export default Home;