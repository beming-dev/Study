import React from 'react'

class Item extends React.Component{
    render(){
        return (
        <a className="item" href="shop/buy">
            <img src="images/stock.jpg" alt="" className="image" />
            <div className="right">
            <div className="name">{this.props.name}</div>
            <div className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                asperiores modi saepe architecto numquam? Sequi ut ratione nostrum
                a inventore, error modi dignissimos exercitationem eum eligendi
                beatae esse eaque quibusdam!
            </div>
            </div>
        </a>
        )
    }
}

export default Item