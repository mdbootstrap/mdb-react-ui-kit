import React from 'react';
import { Col, Container, Row, Footer } from 'mdbreact';
const NavLink = require('react-router-dom').NavLink;

class FooterPage extends React.Component {
    render(){
        return(
        	<Footer className="center-on-small-only">
        		<Container fluid>
        			<Row>
        				<Col md="6">
        					<h5 className="title">Footer Content</h5>
                			<p>Here you can use rows and columns here to organize your footer content.</p>
        				</Col>
        				<Col md="6">
							<h5 className="title">Links</h5>
			                <ul>
			                    <li><a href="#!">Link 1</a></li>
			                    <li><a href="#!">Link 2</a></li>
			                    <li><a href="#!">Link 3</a></li>
			                    <li><a href="#!">Link 4</a></li>
			                </ul>
        				</Col>
        			</Row>
        		</Container>
		        <div className="footer-copyright">
		            <Container fluid>
		                &copy; {(new Date().getFullYear())} Copyright: <a href="https://www.MDBootstrap.com"> MDBootstrap.com </a>
		            </Container>
		        </div>
        	</Footer>
        );
    }
}

export default FooterPage;
