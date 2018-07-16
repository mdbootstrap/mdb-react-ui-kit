import React from 'react';
import { Container, Row, Col, Input, Button, Fa, Card, CardBody, Modal, ModalBody, ModalHeader, ModalFooter } from 'mdbreact';

class FormsPage extends React.Component  {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    }
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return(
      <Container className="mt-5">
        <h2 className="mb-5">Form login</h2>
        <Row>
          <Col md="6">
            <form>
              <p className="h5 text-center mb-4">Sign in</p>
              <div className="grey-text">
                <Input label="Type your email" icon="envelope" group type="email" validate error="wrong" success="right"/>
                <Input label="Type your password" icon="lock" group type="password" validate/>
              </div>
              <div className="text-center">
                <Button>Login</Button>
              </div>
            </form>
          </Col>
          <Col md="6">
            <form>
              <p className="h4 text-center mb-4">Sign in</p>
              <label htmlFor="defaultFormLoginEmailEx" className="grey-text">Your email</label>
              <input type="email" id="defaultFormLoginEmailEx" className="form-control"/>
              <br/>
              <label htmlFor="defaultFormLoginPasswordEx" className="grey-text">Your password</label>
              <input type="password" id="defaultFormLoginPasswordEx" className="form-control"/>
              <div className="text-center mt-4">
                <button className="btn btn-indigo" type="submit">Login</button>
              </div>
            </form>
          </Col>
        </Row>
        <hr className="my-5" />
        <h2 className="mb-5">Form register</h2>
        <Row className="mt-5">
          <Col md="6">
            <form>
              <p className="h5 text-center mb-4">Sign up</p>
              <div className="grey-text">
                <Input label="Your name" icon="user" group type="text" validate error="wrong" success="right"/>
                <Input label="Your email" icon="envelope" group type="email" validate error="wrong" success="right"/>
                <Input label="Confirm your email" icon="exclamation-triangle" group type="text" validate error="wrong" success="right"/>
                <Input label="Your password" icon="lock" group type="password" validate/>
              </div>
              <div className="text-center">
                <Button color="primary">Register</Button>
              </div>
            </form>
          </Col>
          <Col md="6">
            <form>
              <p className="h4 text-center mb-4">Sign up</p>
              <label htmlFor="defaultFormRegisterNameEx" className="grey-text">Your name</label>
              <input type="text" id="defaultFormRegisterNameEx" className="form-control"/>
              <br/>
              <label htmlFor="defaultFormRegisterEmailEx" className="grey-text">Your email</label>
              <input type="email" id="defaultFormRegisterEmailEx" className="form-control"/>
              <br/>
              <label htmlFor="defaultFormRegisterConfirmEx" className="grey-text">Confirm your email</label>
              <input type="email" id="defaultFormRegisterConfirmEx" className="form-control"/>
              <br/>
              <label htmlFor="defaultFormRegisterPasswordEx" className="grey-text">Your password</label>
              <input type="password" id="defaultFormRegisterPasswordEx" className="form-control"/>
              <div className="text-center mt-4">
                <button className="btn btn-unique" type="submit">Register</button>
              </div>
            </form>
          </Col>
        </Row>
        <hr className="my-5" />
        <h2 className="mb-5">Form subscription</h2>
        <Row className="mt-5">
          <Col md="6">
            <form>
              <p className="h5 text-center mb-4">Subscribe</p>
              <div className="grey-text">
                <Input label="Your name" icon="user" group type="text" validate error="wrong" success="right"/>
                <Input label="Your email" icon="envelope" group type="email" validate error="wrong" success="right"/>
              </div>
              <div className="text-center">
                <Button outline color="info">Send <Fa icon="paper-plane-o" className="ml-1"/></Button>
              </div>
            </form>
          </Col>
          <Col md="6">
            <form>
              <p className="h4 text-center mb-4">Subscribe</p>
              <label htmlFor="defaultFormSubscriptionNameEx" className="grey-text">Your name</label>
              <input type="text" id="defaultFormSubscriptionNameEx" className="form-control"/>
              <br/>
              <label htmlFor="defaultFormSubscriptionEmailEx" className="grey-text">Your email</label>
              <input type="email" id="defaultFormSubscriptionEmailEx" className="form-control"/>
              <div className="text-center mt-4">
                <button className="btn btn-outline-purple" type="submit">Send<i className="fa fa-paper-plane-o ml-2"></i></button>
              </div>
            </form>
          </Col>
        </Row>
        <hr className="my-5" />
        <h2 className="mb-5">Form contact</h2>
        <Row className="my-5">
          <Col md="6">
            <form>
              <p className="h5 text-center mb-4">Write to us</p>
              <div className="grey-text">
                <Input label="Your name" icon="user" group type="text" validate error="wrong" success="right"/>
                <Input label="Your email" icon="envelope" group type="email" validate error="wrong" success="right"/>
                <Input label="Subject" icon="tag" group type="text" validate error="wrong" success="right"/>
                <Input type="textarea" rows="2" label="Your message" icon="pencil"/>
              </div>
              <div className="text-center">
                <Button outline color="secondary">Send <Fa icon="paper-plane-o" className="ml-1"/></Button>
              </div>
            </form>
          </Col>
          <Col md="6">
            <form>
              <p className="h4 text-center mb-4">Write to us</p>
              <label htmlFor="defaultFormContactNameEx" className="grey-text">Your name</label>
              <input type="text" id="defaultFormContactNameEx" className="form-control"/>
              <br/>
              <label htmlFor="defaultFormContactEmailEx" className="grey-text">Your email</label>
              <input type="email" id="defaultFormContactEmailEx" className="form-control"/>
              <br/>
              <label htmlFor="defaultFormContactSubjectEx" className="grey-text">Subject</label>
              <input type="text" id="defaultFormContactSubjectEx" className="form-control"/>
              <br/>
              <label htmlFor="defaultFormContactMessageEx" className="grey-text">Your message</label>
              <textarea type="text" id="defaultFormContactMessageEx" className="form-control" rows="3"></textarea>
              <div className="text-center mt-4">
                <button className="btn btn-outline-warning" type="submit">Send<i className="fa fa-paper-plane-o ml-2"></i></button>
              </div>
            </form>
          </Col>
        </Row>
        <hr className="my-5" />
        <h2 className="mb-5">A form within a card</h2>
        <Row>
          <Col md="6">
            <Card>
              <CardBody>
                <form>
                  <p className="h4 text-center py-4">Sign up</p>
                  <div className="grey-text">
                    <Input label="Your name" icon="user" group type="text" validate error="wrong" success="right"/>
                    <Input label="Your email" icon="envelope" group type="email" validate error="wrong" success="right"/>
                    <Input label="Confirm your email" icon="exclamation-triangle" group type="text" validate error="wrong" success="right"/>
                    <Input label="Your password" icon="lock" group type="password" validate/>
                  </div>
                  <div className="text-center py-4 mt-3">
                    <Button color="cyan" type="submit">Register</Button>
                  </div>
                </form>
              </CardBody>
            </Card>
          </Col>
          <Col md="6">
            <div className="card mx-xl-5">
              <div className="card-body">
                <form>
                  <p className="h4 text-center py-4">Subscribe</p>
                  <label htmlFor="defaultFormCardNameEx" className="grey-text font-weight-light">Your name</label>
                  <input type="text" id="defaultFormCardNameEx" className="form-control" />
                  <br />
                  <label htmlFor="defaultFormCardEmailEx" className="grey-text font-weight-light">Your email</label>
                  <input type="email" id="defaultFormCardEmailEx" className="form-control" />
                  <div className="text-center py-4 mt-3">
                    <button className="btn btn-outline-purple" type="submit">Send<i className="fa fa-paper-plane-o ml-2"></i></button>
                  </div>
                </form>
              </div>
            </div>
          </Col>
        </Row>
        <hr className="my-5" />
        <h2 className="mb-5">A form within a modal</h2>
        <Row>
          <Col size="12" className="text-center mb-5">
            <Button color="info" onClick={this.toggle}>Launch modal contact form</Button>
            <Modal isOpen={this.state.modal} toggle={this.toggle} className="cascading-modal">
              <div className="modal-header primary-color white-text">
                <h4 className="title">
                  <Fa className="fa fa-pencil" /> Contact form</h4>
                <button type="button" className="close" onClick={this.toggle}>
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <ModalBody className="grey-text">
                <Input size="sm" label="Your name" icon="user" group type="text" validate error="wrong" success="right"/>
                <Input size="sm" label="Your email" icon="envelope" group type="email" validate error="wrong" success="right"/>
                <Input size="sm" label="Subject" icon="tag" group type="text" validate error="wrong" success="right"/>
                <Input size="sm" type="textarea" rows="2" label="Your message" icon="pencil"/>
              </ModalBody>
              <ModalFooter>
                <Button color="secondary" onClick={this.toggle}>Close</Button>{' '}
                <Button color="primary">Save changes</Button>
              </ModalFooter>
            </Modal>
          </Col>
        </Row>
      </Container>
    );
  }
};

export default FormsPage;
