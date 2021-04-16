import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import './css/header.css';
import './css/footer.css';

import Enter from './components/main.js'
import Home from './components/home.js'
import Shop from './components/shop.js'
import News from './components/news.js'
import About from './components/about.js'
import Buy from './components/buy.js'
import Register from './components/register.js'


class Index extends React.Component{
    render(){
        return(
            <BrowserRouter>
                <Route path="/" component={Enter} exact/>
                <Route path="/home" component={Home} exact/>
                <Route path="/shop" component={Shop} exact/>
                <Route path="/news" component={News} exact/>
                <Route path="/blog" component={About} exact/>
                <Route path="/about" component={About} exact/>
                <Route path="/shop/buy" component={Buy} exact/>
                <Route path="/register" component={Register} exact/>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(
    <Index/>,
    document.getElementById('root')
);