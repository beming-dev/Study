import React from 'react';

class Header extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username:null
        };
    }

    componentDidMount(){
        fetch('http://localhost:3001/api')
        .then(res=>res.json())
        .then(data=>this.setState({username:data.username}));
    }

    render(){
        const {username} = this.state;
        return (
            <div className="header">
                <a href="/home" className="title">{username ? `PinkyWay ${username}` : 'PinkyWay'}</a>
            </div>
        )
    }
}

export default Header