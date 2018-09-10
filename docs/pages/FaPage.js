import React from 'react';
import { Fa, Container, Row } from 'mdbreact';


const FaPage = (props) => {
  return(
    <Container className="mt-3 text-center">
      <Row className="align-items-center mt-5">
        <h4 className="grey-text" style={{margin: "0px"}}>
          <strong>Icons</strong>
        </h4>
        <a className="border grey-text px-2 border-light rounded ml-2" target="_blank"  href="https://mdbootstrap.com/react/content/icons/"><Fa icon="graduation-cap" className="mr-2"/>Docs</a>
      </Row>
      <hr className="mb-5" />
      <div className="">
        <p><Fa icon="camera-retro"/></p>
        <p><Fa icon="camera-retro" size="lg"/></p>
        <p><Fa icon="camera-retro" size="2x"/></p>
        <p><Fa icon="camera-retro" size="4x"/></p>
        <p><Fa icon="camera-retro" size="5x"/></p>
        <p><Fa icon="camera-retro" size="5x"/></p>
        <p><Fa icon="quote-left" size="5x" border/></p>
        <p><Fa icon="quote-left" size="5x" border pull="right"/></p>
        <p><Fa icon="quote-left" size="5x" border pull="left"/></p>
        <p><Fa icon="spinner" size="5x" spin/></p>
        <p><Fa icon="spinner" size="5x" pulse/></p>
        <p><Fa icon="circle-o-notch" size="5x" spin/></p>
        <p><Fa icon="refresh" size="5x" spin/></p>
        <p><Fa icon="circle-o-notch" size="5x" spin fixed/></p>
        <p><Fa icon="refresh" size="5x" spin fixed/></p>
        <p><Fa icon="camera-retro" size="5x" rotate="90"/></p>
        <p><Fa icon="camera-retro" size="5x" flip="vertical"/></p>
      </div>
    </Container>
  );
};

export default FaPage;
