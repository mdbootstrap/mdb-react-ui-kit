import React from 'react';
import Container from '../components/Container';

import Fa from '../components/Fa';

const NavLink = require('react-router-dom').NavLink;

class Header extends React.Component {
    render(){
        return(
			<footer className="page-footer center-on-small-only pt-0 mt-5">

		        <div className="footer-copyright">
		            <Container fluid>
		                &copy; {(new Date().getFullYear())} Copyright: <a href="https://www.MDBootstrap.com"> MDBootstrap.com </a>

		            </Container>
		        </div>

		    </footer>
        );
    }
}

export default Header;
