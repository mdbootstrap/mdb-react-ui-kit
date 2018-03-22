import React from 'react';
import { Container, Row, Col, Input, FormInline, Button, Fa } from 'mdbreact';

class FormsPage extends React.Component  {
  render() {
    return(
      <Container className="mt-5">
        <Row>
          <Col md="5">
            <h2 className="mb-5">Form login</h2>
            <form>
              <p className="h5 text-center mb-4">Sign in</p>
              <Input label="Type your email" icon="envelope" group type="email" validate error="wrong" success="right"/>
              <Input label="Type your password" icon="lock" group type="password" validate/>
              <div className="text-center">
                <Button>Login</Button>
              </div>
            </form>
          </Col>
        </Row>
        <hr className="my-5" />
        <Row className="mt-5">
          <Col md="5">
            <h2 className="mb-5">Form register</h2>
            <form>
              <p className="h5 text-center mb-4">Sign up</p>
              <Input label="Your name" icon="user" group type="email" validate error="wrong" success="right"/>
              <Input label="Your email" icon="envelope" group type="email" validate error="wrong" success="right"/>
              <Input label="Your password" icon="lock" group type="password" validate/>
              <div className="text-center">
                <Button color="deep-orange">Sign up</Button>
              </div>
            </form>
          </Col>
        </Row>
        <hr className="my-5" />
        <Row className="mt-5">
          <Col md="5">
            <h2 className="mb-5">Form subscription</h2>
            <form>
              <p className="h5 text-center mb-4">Subscribe</p>
              <Input label="Your name" icon="user" group type="email" validate error="wrong" success="right"/>
              <Input label="Your email" icon="envelope" group type="email" validate error="wrong" success="right"/>
              <div className="text-center">
                <Button color="deep-orange" color="indigo">Send <Fa icon="paper-plane-o" className="ml-1"/></Button>
              </div>
            </form>
          </Col>
        </Row>
        <hr className="my-5" />
        <Row className="my-5">
          <Col md="5">
            <h2 className="mb-5">Form contact</h2>
            <form>
              <p className="h5 text-center mb-4">Write to us</p>
              <Input label="Your name" icon="user" group type="email" validate error="wrong" success="right"/>
              <Input label="Your email" icon="envelope" group type="email" validate error="wrong" success="right"/>
              <Input label="Subject" icon="tag" group type="email" validate error="wrong" success="right"/>
              <Input type="textarea" rows="2" label="Your message" icon="pencil"/>
              <div className="text-center">
                <Button color="deep-orange" color="unique">Send <Fa icon="paper-plane-o" className="ml-1"/></Button>
              </div>
            </form>
          </Col>
        </Row>
      </Container>
    );
  }
};

export default FormsPage;
