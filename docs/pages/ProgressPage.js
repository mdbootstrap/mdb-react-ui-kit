import React from 'react';
import { Progress, Container, Row, Fa } from 'mdbreact';


const ProgressPage = (props) => {
  return(
    <Container>
      <Row className="align-items-center mt-5">
          <h4 className="grey-text" style={{margin: "0px"}}>
            <strong>Progress Bar</strong>
          </h4>
          <a className="border grey-text px-2 border-light rounded ml-2" target="_blank"  href="https://mdbootstrap.com/react/components/progress-bars/"><Fa icon="graduation-cap" className="mr-2"/>Docs</a>
      </Row>
      <hr className="mb-5" />
      <div className="container-fluid text-center">
        <div className="">
          <Progress value={100}></Progress>
          <Progress value={0}></Progress>
          <Progress value={25}></Progress>
          <Progress value={75}></Progress>
          <Progress animated  color="warning" value={75}></Progress>
          <Progress value="25">25%</Progress>
          <Progress striped value={50}></Progress>
          <Progress color="success" value="100" striped>You did it!</Progress>
          <Progress color="warning" value="30" animated>Wow!</Progress>
          <Progress color="info" value="25">Cool</Progress>
        </div>
      </div>
    </Container>
  );
};

export default ProgressPage;
