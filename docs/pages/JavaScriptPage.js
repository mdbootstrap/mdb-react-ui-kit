import React from 'react';
import { Jumbotron } from 'mdbreact';
const NavLink = require('react-router-dom').NavLink;

class JavaScriptPage extends React.Component {
    render(){
        return(
            <Jumbotron>
                <h1>JavaScript</h1>
				<ul className="list-unstyled">
					<li>
						<a href="/javascript/modal">Modal</a>
					</li>
				</ul>
            </Jumbotron>
        );
    }
}

export default JavaScriptPage;
