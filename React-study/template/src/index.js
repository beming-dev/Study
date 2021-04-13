import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import './css/header.css';
import './css/footer.css';

import Home from './home.js'
import Shop from './shop.js'
import Enter from './main.js'

class Index extends React.Component{
    render(){
        return(
            <BrowserRouter>
                <Route path="/" component={Enter} exact/>
                <Route path="/home" component={Home} exact/>
                <Route path="/shop" component={Shop}/>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(
    <Index/>,
    document.getElementById('root')
);