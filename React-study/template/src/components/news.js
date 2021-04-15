import React from 'react'
import '../css/news.css'

import Header from './header.js'
import Footer from './footer.js'
import Nav from './nav.js'
import Body from './body_news.js'

class News extends React.Component{
    render() { 
        return (
            <div className="news">
                <Header/>
                <Nav/>
                <Body/>
                <Footer/>
            </div>
        )
    }
}

export default News