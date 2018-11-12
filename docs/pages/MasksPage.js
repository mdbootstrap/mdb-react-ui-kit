import React from "react";
import { Mask, View, Container, Row, Col } from "mdbreact";
import DocsLink from "./DocsLink";

class MasksPage extends React.Component {
  render() {
    return (
      <Container className="mt-5">
        <DocsLink
          title="Masks"
          href="https://mdbootstrap.com/docs/react/css/masks/"
        />
        <Row>
          <Col md="4">
            <View>
              <img
                src="https://mdbootstrap.com/img/Photos/Others/nature-sm.jpg"
                className="img-fluid"
                alt=""
              />
              <Mask pattern={1} className="flex-center">
                <p className="white-text">pattern = &#123;1&#125;</p>
              </Mask>
            </View>
          </Col>
          <Col md="4">
            <View>
              <img
                src="https://mdbootstrap.com/img/Photos/Others/nature-sm.jpg"
                className="img-fluid"
                alt=""
              />
              <Mask pattern={2} className="flex-center">
                <p className="white-text">pattern = &#123;2&#125;</p>
              </Mask>
            </View>
          </Col>
          <Col md="4">
            <View waves>
              <img
                src="https://mdbootstrap.com/img/Photos/Others/nature-sm.jpg"
                className="img-fluid"
                alt=""
              />
              <Mask pattern={3} className="flex-center">
                <p className="white-text">pattern = &#123;3&#125;, waves</p>
              </Mask>
            </View>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col md="4">
            <View>
              <img
                src="https://mdbootstrap.com/img/Photos/Others/nature-sm.jpg"
                className="img-fluid"
                alt=""
              />
              <Mask className="flex-center" overlay="blue-light">
                <p className="white-text">overlay = "blue-light"</p>
              </Mask>
            </View>
          </Col>
          <Col md="4">
            <View>
              <img
                src="https://mdbootstrap.com/img/Photos/Others/nature-sm.jpg"
                className="img-fluid"
                alt=""
              />
              <Mask className="flex-center" overlay="blue-strong">
                <p className="white-text">overlay = "blue-strong"</p>
              </Mask>
            </View>
          </Col>
          <Col md="4">
            <View waves>
              <img
                src="https://mdbootstrap.com/img/Photos/Others/nature-sm.jpg"
                className="img-fluid"
                alt=""
              />
              <Mask className="flex-center" overlay="blue-slight">
                <p className="white-text">overlay = "blue-slight", waves</p>
              </Mask>
            </View>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default MasksPage;
