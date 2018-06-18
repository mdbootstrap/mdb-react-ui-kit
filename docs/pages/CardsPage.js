import React, { Component } from 'react';
import { Button, Col, Row, Container, Card, CardBody, CardImage, CardTitle, CardText } from 'mdbreact';
import classNames from 'classnames';


class CardsPage extends Component {

  render() {
    return(
      <Container>
        <h2 className="mt-5">Reversed card</h2>
        <Row>
          <Col>
            <Card reverse style={{width: '22rem'}}>
              <CardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%282%29.jpg" waves/>
              <CardBody>
                <CardTitle>Card title</CardTitle>
                <CardText>Some quick example text to build on the card title and make up the bulk of the card&apos;s content.</CardText>
                <Button href="#">Button</Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
};

export default CardsPage;
