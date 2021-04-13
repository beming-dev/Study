import React from 'react';
import './css/shop.css';

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

class Header extends React.Component{
    render(){
        return (
            <div className="header">
                <a href="./home" className="title">PinkyWay</a>
            </div>
        )
    }
}

class Nav extends React.Component{
    render(){
        return (
            <ul className="nav">
                <a href="./home" className="navItem"><li >Home</li></a>
                <a href="./shop" className="navItem"><li >Shop</li></a>
                <a href="./news" className="navItem"><li >news</li></a>
                <a href="./blog" className="navItem"><li >Blog</li></a>
                <a href="./about" className="navItem"><li >About us</li></a>
            </ul>
        )
    }
}

class Body extends React.Component{
    render(){
        return (
            <div class="body">
                <a class="item" href="#">
                    <img src="images/stock.jpg" alt="" class="image"/>
                    <div class="right">
                        <div class="name">Stock</div>
                        <div class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est asperiores modi saepe architecto numquam? Sequi ut ratione nostrum a inventore, error modi dignissimos exercitationem eum eligendi beatae esse eaque quibusdam!</div>
                    </div>
                </a>
                <a class="item" href="#">
                    <img src="images/stock.jpg" alt="" class="image"/>
                    <div class="right">
                        <div class="name">Stock</div>
                        <div class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est asperiores modi saepe architecto numquam? Sequi ut ratione nostrum a inventore, error modi dignissimos exercitationem eum eligendi beatae esse eaque quibusdam!</div>
                    </div>
                </a>
                <a class="item" href="#">
                    <img src="images/stock.jpg" alt="" class="image"/>
                    <div class="right">
                        <div class="name">Stock</div>
                        <div class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est asperiores modi saepe architecto numquam? Sequi ut ratione nostrum a inventore, error modi dignissimos exercitationem eum eligendi beatae esse eaque quibusdam!</div>
                    </div>
                </a>
                <a class="item" href="#">
                    <img src="images/stock.jpg" alt="" class="image"/>
                    <div class="right">
                        <div class="name">Stock</div>
                        <div class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est asperiores modi saepe architecto numquam? Sequi ut ratione nostrum a inventore, error modi dignissimos exercitationem eum eligendi beatae esse eaque quibusdam!</div>
                    </div>
                </a>
            </div>
        )
    }
}

class Footer extends React.Component{
    render(){
        return (
        <div className="footer">
            <div className="icons">
                <i className="fab fa-facebook"></i>
                <i className="fas fa-camera-retro"></i>
                <i className="fab fa-github-square"></i>
            </div>
            <div className="info">
                <a href="#">Info</a>
                <a href="#">Support</a>
                <a href="#">Marketing</a>
            </div>
            <div className="explain">
                <a href="#">Terms of Use</a>
                <a href="#">Privacy Policy</a>
            </div>
            <div className="copyright">
                <a href="#">ⓒ 2021 beming-dev</a>
            </div>
        </div>
        )
    }
}

export default Shop;