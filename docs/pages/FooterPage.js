import React from 'react';
import { Col, Container, Row, Footer } from 'mdbreact';
const NavLink = require('react-router-dom').NavLink;

class FooterPage extends React.Component {
  render(){
    return(
      <div>
        <Footer color="blue" className="font-small pt-4 mt-4">
          <Container className="text-left">
            <Row>
              <Col md="6">
                <h5 className="title">Footer Content</h5>
                <p>Here you can use rows and columns here to organize your footer content.</p>
              </Col>
              <Col md="6">
                <h5 className="title">Links</h5>
                <ul>
                  <li className="list-unstyled"><a href="#!">Link 1</a></li>
                  <li className="list-unstyled"><a href="#!">Link 2</a></li>
                  <li className="list-unstyled"><a href="#!">Link 3</a></li>
                  <li className="list-unstyled"><a href="#!">Link 4</a></li>
                </ul>
              </Col>
            </Row>
          </Container>
          <div className="footer-copyright text-center py-3">
            <Container fluid>
                &copy; {(new Date().getFullYear())} Copyright: <a href="https://www.MDBootstrap.com"> MDBootstrap.com </a>
            </Container>
          </div>
        </Footer>
        <Footer color="stylish-color-dark" className="page-footer font-small pt-4 mt-4">
          <Container className="text-left">
            <Row>
              <Col md="6">
                <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">Footer Content</h5>
                <p>Here you can use rows and columns here to organize your footer content. Lorem ipsum dolor sit
                    amet, consectetur adipisicing elit.</p>
              </Col>
              <hr className="clearfix w-100 d-md-none"/>
              <Col md="2">
                <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">Links</h5>
                <ul className="list-unstyled">
                    <li><a href="#!">Link 1</a></li>
                    <li><a href="#!">Link 2</a></li>
                    <li><a href="#!">Link 3</a></li>
                    <li><a href="#!">Link 4</a></li>
                </ul>
              </Col>
              <hr className="clearfix w-100 d-md-none"/>
              <Col md="2">
                <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">Links</h5>
                <ul className="list-unstyled">
                    <li><a href="#!">Link 1</a></li>
                    <li><a href="#!">Link 2</a></li>
                    <li><a href="#!">Link 3</a></li>
                    <li><a href="#!">Link 4</a></li>
                </ul>
              </Col>
              <hr className="clearfix w-100 d-md-none"/>
              <Col md="2">
                <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">Links</h5>
                <ul className="list-unstyled">
                    <li><a href="#!">Link 1</a></li>
                    <li><a href="#!">Link 2</a></li>
                    <li><a href="#!">Link 3</a></li>
                    <li><a href="#!">Link 4</a></li>
                </ul>
              </Col>
            </Row>
          </Container>
          <hr/>
          <div className="text-center py-3">
              <ul className="list-unstyled list-inline mb-0">
                  <li className="list-inline-item">
                      <h5 className="mb-1">Register for free</h5>
                  </li>
                  <li className="list-inline-item"><a href="#!" className="btn btn-danger btn-rounded">Sign up!</a></li>
              </ul>
          </div>
          <hr/>
          <div className="text-center">
              <ul className="list-unstyled list-inline">
                  <li className="list-inline-item"><a className="btn-floating btn-sm btn-fb mx-1"><i className="fa fa-facebook"> </i></a></li>
                  <li className="list-inline-item"><a className="btn-floating btn-sm btn-tw mx-1"><i className="fa fa-twitter"> </i></a></li>
                  <li className="list-inline-item"><a className="btn-floating btn-sm btn-gplus mx-1"><i className="fa fa-google-plus"> </i></a></li>
                  <li className="list-inline-item"><a className="btn-floating btn-sm btn-li mx-1"><i className="fa fa-linkedin"> </i></a></li>
                  <li className="list-inline-item"><a className="btn-floating btn-sm btn-dribbble mx-1"><i className="fa fa-dribbble"> </i></a></li>
              </ul>
          </div>
          <div className="footer-copyright text-center py-3">
            <Container fluid>
                &copy; {(new Date().getFullYear())} Copyright: <a href="https://www.MDBootstrap.com"> MDBootstrap.com </a>
            </Container>
          </div>
        </Footer>
        <Footer color="unique-color-dark" className="page-footer font-small pt-0">
          <div style={{backgroundColor: '#6351ce'}}>
            <Container className="text-left">
              <Row className="py-4 d-flex align-items-center">
                <Col md="6" lg="5" className="text-center text-md-left mb-4 mb-md-0">
                  <h6 className="mb-0 white-text">Get connected with us on social networks!</h6>
                </Col>
                <Col md="6" lg="7" className="text-center text-md-right">
                  <a className="fb-ic ml-0"><i className="fa fa-facebook white-text mr-lg-4"> </i></a>
                  <a className="tw-ic"><i className="fa fa-twitter white-text mr-lg-4"> </i></a>
                  <a className="gplus-ic"><i className="fa fa-google-plus white-text mr-lg-4"> </i></a>
                  <a className="li-ic"><i className="fa fa-linkedin white-text mr-lg-4"> </i></a>
                  <a className="ins-ic"><i className="fa fa-instagram white-text mr-lg-4"> </i></a>
                </Col>
              </Row>
            </Container>
          </div>
          <Container className="mt-5 mb-4 text-center text-md-left">
            <Row className="mt-3">
              <Col md="3" lg="4" xl="3" className="mb-4">
                  <h6 className="text-uppercase font-weight-bold"><strong>Company name</strong></h6>
                  <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: '60px'}}/>
                  <p>Here you can use rows and columns here to organize your footer content. Lorem ipsum dolor sit
                      amet, consectetur adipisicing elit.</p>
              </Col>
              <Col md="2" lg="2" xl="2" className="mb-4">
                  <h6 className="text-uppercase font-weight-bold"><strong>Products</strong></h6>
                  <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: '60px'}}/>
                  <p><a href="#!">MDBootstrap</a></p>
                  <p><a href="#!">MDWordPress</a></p>
                  <p><a href="#!">BrandFlow</a></p>
                  <p><a href="#!">Bootstrap Angular</a></p>
              </Col>
              <Col md="3" lg="2" xl="2" className="mb-4">
                  <h6 className="text-uppercase font-weight-bold"><strong>Useful links</strong></h6>
                  <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: '60px'}}/>
                  <p><a href="#!">Your Account</a></p>
                  <p><a href="#!">Become an Affiliate</a></p>
                  <p><a href="#!">Shipping Rates</a></p>
                  <p><a href="#!">Help</a></p>
              </Col>
              <Col md="4" lg="3" xl="3" className="mb-4">
                  <h6 className="text-uppercase font-weight-bold"><strong>Contact</strong></h6>
                  <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: '60px'}}/>
                  <p><i className="fa fa-home mr-3"></i> New York, NY 10012, US</p>
                  <p><i className="fa fa-envelope mr-3"></i> info@example.com</p>
                  <p><i className="fa fa-phone mr-3"></i> + 01 234 567 88</p>
                  <p><i className="fa fa-print mr-3"></i> + 01 234 567 89</p>
              </Col>
            </Row>
          </Container>
          <div className="footer-copyright text-center py-3">
            <Container fluid>
                &copy; {(new Date().getFullYear())} Copyright: <a href="https://www.MDBootstrap.com"> MDBootstrap.com </a>
            </Container>
          </div>
        </Footer>
        <Footer color="blue-grey" className="page-footer font-small lighten-5 pt-0">
          <div style={{backgroundColor: '#21d192'}}>
            <Container className="text-left">
              <Row className="py-4 d-flex align-items-center">
                <Col md="6" lg="5" className="text-center text-md-left mb-4 mb-md-0">
                  <h6 className="mb-0 white-text">Get connected with us on social networks!</h6>
                </Col>
                <Col md="6" lg="7" className="text-center text-md-right">
                  <a className="fb-ic ml-0"><i className="fa fa-facebook white-text mr-lg-4"> </i></a>
                  <a className="tw-ic"><i className="fa fa-twitter white-text mr-lg-4"> </i></a>
                  <a className="gplus-ic"><i className="fa fa-google-plus white-text mr-lg-4"> </i></a>
                  <a className="li-ic"><i className="fa fa-linkedin white-text mr-lg-4"> </i></a>
                  <a className="ins-ic"><i className="fa fa-instagram white-text mr-lg-4"> </i></a>
                </Col>
              </Row>
            </Container>
          </div>
          <Container className="mt-5 mb-4 text-center text-md-left">
            <Row className="mt-3">
              <Col md="3" lg="4" xl="3" className="mb-4 dark-grey-text">
                  <h6 className="text-uppercase font-weight-bold"><strong>Company name</strong></h6>
                  <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: '60px'}}/>
                  <p>Here you can use rows and columns here to organize your footer content. Lorem ipsum dolor sit
                      amet, consectetur adipisicing elit.</p>
              </Col>
              <Col md="2" lg="2" xl="2" className="mb-4 dark-grey-text">
                  <h6 className="text-uppercase font-weight-bold"><strong>Products</strong></h6>
                  <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: '60px'}}/>
                  <p><a href="#!" className="dark-grey-text">MDBootstrap</a></p>
                  <p><a href="#!" className="dark-grey-text">MDWordPress</a></p>
                  <p><a href="#!" className="dark-grey-text">BrandFlow</a></p>
                  <p><a href="#!" className="dark-grey-text">Bootstrap Angular</a></p>
              </Col>
              <Col md="3" lg="2" xl="2" className="mb-4 dark-grey-text">
                  <h6 className="text-uppercase font-weight-bold"><strong>Useful links</strong></h6>
                  <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: '60px'}}/>
                  <p><a href="#!" className="dark-grey-text">Your Account</a></p>
                  <p><a href="#!" className="dark-grey-text">Become an Affiliate</a></p>
                  <p><a href="#!" className="dark-grey-text">Shipping Rates</a></p>
                  <p><a href="#!" className="dark-grey-text">Help</a></p>
              </Col>
              <Col md="4" lg="3" xl="3" className="mb-4 dark-grey-text">
                  <h6 className="text-uppercase font-weight-bold"><strong>Contact</strong></h6>
                  <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: '60px'}}/>
                  <p><i className="fa fa-home mr-3"></i> New York, NY 10012, US</p>
                  <p><i className="fa fa-envelope mr-3"></i> info@example.com</p>
                  <p><i className="fa fa-phone mr-3"></i> + 01 234 567 88</p>
                  <p><i className="fa fa-print mr-3"></i> + 01 234 567 89</p>
              </Col>
            </Row>
          </Container>
          <div className="footer-copyright text-center py-3">
            <Container fluid>
                &copy; {(new Date().getFullYear())} Copyright: <a href="https://www.MDBootstrap.com"> MDBootstrap.com </a>
            </Container>
          </div>
        </Footer>
        <Footer color="indigo" className="font-small pt-0">
          <Container>
            <Row>
              <Col md="12">
                <div className="mb-5 flex-center">
                  <a className="fb-ic"><i className="fa fa-facebook fa-lg white-text mr-md-5 mr-3 fa-2x"> </i></a>
                  <a className="tw-ic"><i className="fa fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x"> </i></a>
                  <a className="gplus-ic"><i className="fa fa-google-plus fa-lg white-text mr-md-5 mr-3 fa-2x"> </i></a>
                  <a className="li-ic"><i className="fa fa-linkedin fa-lg white-text mr-md-5 mr-3 fa-2x"> </i></a>
                  <a className="ins-ic"><i className="fa fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x"> </i></a>
                  <a className="pin-ic"><i className="fa fa-pinterest fa-lg white-text fa-2x"> </i></a>
                </div>
              </Col>
            </Row>
          </Container>
          <div className="footer-copyright text-center py-3">
            <Container fluid>
                &copy; {(new Date().getFullYear())} Copyright: <a href="https://www.MDBootstrap.com"> MDBootstrap.com </a>
            </Container>
          </div>
        </Footer>
        <Footer color="stylish-color-dark" className="font-small pt-4 mt-4">
          <Container className="text-center text-md-left">
            <Row className="text-center text-md-left mt-3 pb-3">
              <Col md="3" lg="3" xl="3" className="mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">Company name</h6>
                <p>Here you can use rows and columns here to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </Col>
              <hr className="w-100 clearfix d-md-none"/>
              <Col md="2" lg="2" xl="2" className="mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">Products</h6>
                <p><a href="#!">MDBootstrap</a></p>
                <p><a href="#!">MDWordPress</a></p>
                <p><a href="#!">BrandFlow</a></p>
                <p><a href="#!">Bootstrap Angular</a></p>
              </Col>
              <hr className="w-100 clearfix d-md-none"/>
              <Col md="3" lg="2" xl="2" className="mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">Useful links</h6>
                <p><a href="#!">Your Account</a></p>
                <p><a href="#!">Become an Affiliate</a></p>
                <p><a href="#!">Shipping Rates</a></p>
                <p><a href="#!">Help</a></p>
              </Col>
              <hr className="w-100 clearfix d-md-none"/>
              <Col md="4" lg="3" xl="3" className="mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
                <p><i className="fa fa-home mr-3"></i> New York, NY 10012, US</p>
                <p><i className="fa fa-envelope mr-3"></i> info@gmail.com</p>
                <p><i className="fa fa-phone mr-3"></i> + 01 234 567 88</p>
                <p><i className="fa fa-print mr-3"></i> + 01 234 567 89</p>
              </Col>
            </Row>
            <hr/>
            <Row className="d-flex align-items-center">
              <Col md="8" lg="8">
                <p className="text-center text-md-left grey-text">&copy; {(new Date().getFullYear())} Copyright: <a href="https://www.MDBootstrap.com"> MDBootstrap.com </a></p>
              </Col>
              <Col md="4" lg="4" className="ml-lg-0">
                <div className="text-center text-md-right">
                  <ul className="list-unstyled list-inline">
                    <li className="list-inline-item"><a className="btn-floating btn-sm rgba-white-slight mx-1"><i className="fa fa-facebook"></i></a></li>
                    <li className="list-inline-item"><a className="btn-floating btn-sm rgba-white-slight mx-1"><i className="fa fa-twitter"></i></a></li>
                    <li className="list-inline-item"><a className="btn-floating btn-sm rgba-white-slight mx-1"><i className="fa fa-google-plus"></i></a></li>
                    <li className="list-inline-item"><a className="btn-floating btn-sm rgba-white-slight mx-1"><i className="fa fa-linkedin"></i></a></li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Container>
        </Footer>
        <Footer color="indigo" className="font-small pt-0">
          <Container>
            <Row className="pt-5 mb-3 text-center d-flex justify-content-center">
              <Col md="2" className="b-3">
                <h6 className="title font-weight-bold"><a href="#!">About us</a></h6>
              </Col>
              <Col md="2" className="b-3">
                <h6 className="title font-weight-bold"><a href="#!">Products</a></h6>
              </Col>
              <Col md="2" className="b-3">
                <h6 className="title font-weight-bold"><a href="#!">Awards</a></h6>
              </Col>
              <Col md="2" className="b-3">
                <h6 className="title font-weight-bold"><a href="#!">Help</a></h6>
              </Col>
              <Col md="2" className="b-3">
                <h6 className="title font-weight-bold"><a href="#!">Contact</a></h6>
              </Col>
            </Row>
            <hr className="rgba-white-light" style={{margin: '0 15%'}}/>
            <Row className="d-flex text-center justify-content-center mb-md-0 mb-4">
              <Col md="8" sm="12" className="mt-5">
                <p style={{lineHeight: '1.7rem'}}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                    totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae
                    vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur.</p>
              </Col>
            </Row>
            <hr className="clearfix d-md-none rgba-white-light" style={{margin: '10% 15% 5%'}}/>
            <Row className="pb-3">
              <Col md="12">
                <div className="mb-5 flex-center">
                    <a className="fb-ic"><i className="fa fa-facebook fa-lg white-text mr-md-4"> </i></a>
                    <a className="tw-ic"><i className="fa fa-twitter fa-lg white-text mr-md-4"> </i></a>
                    <a className="gplus-ic"><i className="fa fa-google-plus fa-lg white-text mr-md-4"> </i></a>
                    <a className="li-ic"><i className="fa fa-linkedin fa-lg white-text mr-md-4"> </i></a>
                    <a className="ins-ic"><i className="fa fa-instagram fa-lg white-text mr-md-4"> </i></a>
                    <a className="pin-ic"><i className="fa fa-pinterest fa-lg white-text"> </i></a>
                </div>
              </Col>
            </Row>
          </Container>
          <div className="footer-copyright text-center py-3">
            <Container fluid>
                &copy; {(new Date().getFullYear())} Copyright: <a href="https://www.MDBootstrap.com"> MDBootstrap.com </a>
            </Container>
          </div>
        </Footer>
        <Footer color="mdb-color" className="font-small lighten-3 pt-4 mt-4">
          <Container className="text-center text-md-left">
            <Row className="my-4">
              <Col md="4" lg="4">
                <h5 className="text-uppercase mb-4 font-weight-bold">Footer Content</h5>
                <p>Here you can use rows and columns here to organize your footer content.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet numquam iure provident
                    voluptate esse quasi, veritatis totam voluptas nostrum. </p>
              </Col>
              <hr className="clearfix w-100 d-md-none"/>
              <Col md="2" lg="2" className="ml-auto">
                <h5 className="text-uppercase mb-4 font-weight-bold">About</h5>
                <ul className="list-unstyled">
                  <p><a href="#!">PROJECTS</a></p>
                  <p><a href="#!">ABOUT US</a></p>
                  <p><a href="#!">BLOG</a></p>
                  <p><a href="#!">AWARDS</a></p>
                </ul>
              </Col>
              <hr className="clearfix w-100 d-md-none"/>
              <Col md="5" lg="3">
                <h5 className="text-uppercase mb-4 font-weight-bold">Address</h5>
                <p><i className="fa fa-home mr-3"></i> New York, NY 10012, US</p>
                <p><i className="fa fa-envelope mr-3"></i> info@example.com</p>
                <p><i className="fa fa-phone mr-3"></i> + 01 234 567 88</p>
                <p><i className="fa fa-print mr-3"></i> + 01 234 567 89</p>
              </Col>
              <hr className="clearfix w-100 d-md-none"/>
              <Col md="2" lg="2" className="text-center">
                <h5 className="text-uppercase mb-4 font-weight-bold">About</h5>
                <div className="mt-2 ">
                  <a type="button" className="btn-floating btn-small btn-fb"><i className="fa fa-facebook"></i></a>
                  <a type="button" className="btn-floating btn-small btn-tw"><i className="fa fa-twitter"></i></a>
                  <a type="button" className="btn-floating btn-small btn-gplus"><i className="fa fa-google-plus"></i></a>
                  <a type="button" className="btn-floating btn-small btn-dribbble"><i className="fa fa-dribbble"></i></a>
                </div>
              </Col>
              <hr className="clearfix w-100 d-md-none"/>
            </Row>
          </Container>
          <div className="footer-copyright text-center py-3">
            <Container fluid>
                &copy; {(new Date().getFullYear())} Copyright: <a href="https://www.MDBootstrap.com"> MDBootstrap.com </a>
            </Container>
          </div>
        </Footer>
      </div>
    );
  }
}

export default FooterPage;
