import React from 'react';
import '../css/shop.css';

import Header from './header.js'
import Footer from './footer.js'
import Nav from './nav.js'
import Body from './body_shop.js'


class Shop extends React.Component{
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

export default Shop;