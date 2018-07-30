import React, { Component } from 'react';
import { Button, Col, Row, Container, Card, CardBody, CardGroup, CardImage, CardTitle, CardText } from 'mdbreact';
import classNames from 'classnames';


class CardsPage extends Component {

  render() {
    return(
      <Container>
        <h2 className="mt-5">Reversed card</h2>
        <Row>
          <Col>
            <Card reverse style={{width: '22rem'}}>
              <CardImage cascade className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%282%29.jpg" waves/>
              <CardBody cascade>
                <CardTitle>Card title</CardTitle>
                <CardText>Some quick example text to build on the card title and make up the bulk of the card&apos;s content.</CardText>
                <Button href="#">Button</Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <hr className="mt-5"/>
    <h2 className="mt-5">Card decks</h2>

    <CardGroup>

    <Card>
      <CardImage src="https://mdbootstrap.com/img/Photos/Others/images/49.jpg" alt="Card image cap" top hover overlay="white-slight"/>
      <CardBody>
        <CardTitle tag="h5">Panel title</CardTitle>
        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
        <Button color="primary" size="md">read more</Button>
      </CardBody>
    </Card>

    <Card>
      <CardImage src="https://mdbootstrap.com/img/Photos/Others/images/48.jpg" alt="Card image cap" top hover overlay="white-slight"/>
      <CardBody>
        <CardTitle tag="h5">Panel title</CardTitle>
        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
        <Button color="primary" size="md">read more</Button>
      </CardBody>
    </Card>

    <Card>
      <CardImage src="https://mdbootstrap.com/img/Photos/Others/images/77.jpg" alt="Card image cap" top hover overlay="white-slight"/>
      <CardBody>
        <CardTitle tag="h5">Panel title</CardTitle>
        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
        <Button color="primary"  size="md">read more</Button>
      </CardBody>
    </Card>

      </CardGroup>

      <CardGroup deck className="mt-3">

        <Card>
          <CardImage src="https://mdbootstrap.com/img/Photos/Others/images/16.jpg" alt="Card image cap" top hover overlay="white-slight"/>
          <CardBody>
            <CardTitle tag="h5">Panel title</CardTitle>
            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
            <Button color="light-blue" size="md">read more</Button>
          </CardBody>
        </Card>

        <Card>
          <CardImage src="https://mdbootstrap.com/img/Photos/Others/images/14.jpg" alt="Card image cap" top hover overlay="white-slight"/>
          <CardBody>
            <CardTitle tag="h5">Panel title</CardTitle>
            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
            <Button color="light-blue" size="md">read more</Button>
          </CardBody>
        </Card>

        <Card>
          <CardImage src="https://mdbootstrap.com/img/Photos/Others/images/15.jpg" alt="Card image cap" top hover overlay="white-slight"/>
          <CardBody>
            <CardTitle tag="h5">Panel title</CardTitle>
            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
            <Button color="light-blue" size="md">read more</Button>
          </CardBody>
        </Card>

      </CardGroup>
      </Container>
    );
  }
};

export default CardsPage;
