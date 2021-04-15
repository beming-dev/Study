import React from 'react';
import '../css/buy.css';

import Header from './header.js'
import Footer from './footer.js'
import Nav from './nav.js'
import Body from './body_buy.js'

class Buy extends React.Component{
    render() { 
        return (
            <div className="buy">
                <Header/>
                <Nav/>
                <Body/>
                <Footer/>
            </div>
        )
    }
}

export default Buy;