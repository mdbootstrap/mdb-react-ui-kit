import React from 'react';
const NavLink = require('react-router-dom').NavLink;

class HomePage extends React.Component {
    render(){
        return(
            <div className="jumbotron">
                <h1>Bartek & Mirek React Boar Developers</h1>
                <p>Start with Badge Components - this have got 1 story point</p>
                <NavLink to="/components/badge" className="btn btn-primary btn-lg">Dive into React</NavLink>
            </div>
        );
    }
}

export default HomePage;
