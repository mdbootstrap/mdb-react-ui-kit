import React from 'react';
import { Mask, View, Container, Row, Col } from 'mdbreact';


class MasksPage extends React.Component {

  render () {
    return (
      <Container>
        <Row>
          <Col md="4">
            <View>
              <img src="https://mdbootstrap.com/img/Photos/Others/nature-sm.jpg" className="img-fluid" alt="" />
              <Mask className="pattern-1 flex-center">
                <p className="white-text">.pattern-1</p>
              </Mask>
            </View>
          </Col>
          <Col md="4">
            <View>
              <img src="https://mdbootstrap.com/img/Photos/Others/nature-sm.jpg" className="img-fluid" alt="" />
              <Mask className="pattern-2 flex-center">
                <p className="white-text">.pattern-2</p>
              </Mask>
            </View>
          </Col>
          <Col md="4">
            <View>
              <img src="https://mdbootstrap.com/img/Photos/Others/nature-sm.jpg" className="img-fluid" alt="" />
              <Mask className="pattern-3 flex-center">
                <p className="white-text">.pattern-3</p>
              </Mask>
            </View>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col md="4">
            <View className="hm-blue-light">
              <img src="https://mdbootstrap.com/img/Photos/Others/nature-sm.jpg" className="img-fluid" alt="" />
              <Mask className="flex-center">
                <p className="white-text">.pattern-1</p>
              </Mask>
            </View>
          </Col>
          <Col md="4">
            <View className="hm-blue-strong">
              <img src="https://mdbootstrap.com/img/Photos/Others/nature-sm.jpg" className="img-fluid" alt="" />
              <Mask className="flex-center">
                <p className="white-text">.pattern-2</p>
              </Mask>
            </View>
          </Col>
          <Col md="4">
            <View className="hm-blue-slight">
              <img src="https://mdbootstrap.com/img/Photos/Others/nature-sm.jpg" className="img-fluid" alt="" />
              <Mask className="flex-center">
                <p className="white-text">.pattern-3</p>
              </Mask>
            </View>
          </Col>
        </Row>
        <div style={{height: '100vh'}} />
      </Container>
    );
  }
}

export default MasksPage;
