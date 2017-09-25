import React from 'react';
const NavLink = require('react-router-dom').NavLink;
import { Jumbotron } from 'mdbreact';


class ComponentsPage extends React.Component {
    render(){
        return(
            <Jumbotron>
                <h1>Components</h1>
				<ul className="list-unstyled">
					<li>
						<a href="/components/alert">Alert</a>
					</li>
					<li>
						<a href="/components/badge">Badge</a>
					</li>
					<li>
						<a href="/components/breadcrumb">Breadcrumb</a>
					</li>
					<li>
						<a href="/components/cards">Cards</a>
					</li>
					<li>
						<a href="/components/input">Input</a>
					</li>
					<li>
						<a href="/components/list-group">List group</a>
					</li>
					<li>
						<a href="/components/media">Media</a>
					</li>
					<li>
						<a href="/components/pagination">Pagination</a>
					</li>
					<li>
						<a href="/components/progress">Progress</a>
					</li>
			        <li>
			            <a href="/components/tooltips">Tooltips</a>
			        </li>
			        <li>
			            <a href="/components/footer">Footer</a>
			        </li>
				</ul>
            </Jumbotron>
        );
    }
}

export default ComponentsPage;
