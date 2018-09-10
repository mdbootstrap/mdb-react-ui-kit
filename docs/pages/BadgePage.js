import React from 'react';
import { Badge, Container, Row, Fa } from 'mdbreact';


const BadgePage = (props) => {
  return(
    <Container>
      <Row className="align-items-center mt-5">
          <h4 className="grey-text" style={{margin: "0px"}}>
            <strong>Badges</strong>
          </h4>
          <a className="border grey-text px-2 border-light rounded ml-2" target="_blank"  href="https://mdbootstrap.com/react/components/badges/"><Fa icon="graduation-cap" className="mr-2"/>Docs</a>
      </Row>
      <hr className="mb-5" />
      <div className="container-fluid text-center mt-5">
        <div className="">
          <h1>Heading <Badge>Default</Badge></h1>
          <h2>Heading <Badge color="primary">primary</Badge></h2>
          <h3>Heading <Badge pill color="success">success pill</Badge></h3>
          <h4>Heading <Badge color="info">info</Badge></h4>
          <h5>Heading <Badge color="warning">warning</Badge></h5>
          <h6>Heading <Badge color="danger">danger</Badge></h6>
        </div>
      </div>
    </Container>
  );
};

export default BadgePage;
