import React from 'react';
import './css/shop.css';

import Header from './components/header.js'
import Footer from './components/footer.js'
import Nav from './components/nav.js'
import Body from './components/shop.js'


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