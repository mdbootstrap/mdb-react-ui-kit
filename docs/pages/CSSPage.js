import React from 'react';
import {Jumbotron} from 'mdbreact';
const NavLink = require('react-router-dom').NavLink;

class CSSPage extends React.Component {
    render(){
        return(
            <Jumbotron>
                <h1>CSS</h1>
				<ul className="list-unstyled">
					<li>
						<a href="/css/table">Table</a>
					</li>
					<li>
						<a href="/css/icons">Icons</a>
					</li>
					<li>
						<a href="/css/jumbotron">Jumbotron</a>
					</li>
				</ul>
            </Jumbotron>
        );
    }
}

export default CSSPage;
