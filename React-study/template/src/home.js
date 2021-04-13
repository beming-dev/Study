import React from 'react';
import './css/home.css';

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
            <div className="body">
                <div className="part part1">
                    <img src='/images/workplace.jpg' alt="" className="image image1"/>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus placeat doloribus quod culpa vel magni sint accusamus. Quidem aspernatur nemo voluptates recusandae unde itaque ea quo voluptas cum ex. Pariatur.</p>
                </div>
                <div className="part part2">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus placeat doloribus quod culpa vel magni sint accusamus. Quidem aspernatur nemo voluptates recusandae unde itaque ea quo voluptas cum ex. Pariatur.</p>
                    <img src="/images/flower.jpg" alt="" className="image image2"/>
                </div>
                <div className="part part3">
                    <img src="/images/workplace.jpg" alt="" className="image image3"/>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus placeat doloribus quod culpa vel magni sint accusamus. Quidem aspernatur nemo voluptates recusandae unde itaque ea quo voluptas cum ex. Pariatur.</p>
                </div>
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

export default Home;