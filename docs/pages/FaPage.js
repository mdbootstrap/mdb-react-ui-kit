import React from "react";
import { MDBIcon, MDBContainer } from "mdbreact";
import DocsLink from "../components/docsLink";

const FaPage = props => {
  return (
    <MDBContainer className="mt-3 text-center">
      <DocsLink
        title="Icons"
        href="https://mdbootstrap.com/docs/react/content/icons-usage/"
      />
      <div className="">
        <p>
          <MDBIcon icon="camera-retro" />
        </p>
        <p>
          <MDBIcon icon="camera-retro" size="lg" />
        </p>
        <p>
          <MDBIcon icon="camera-retro" size="2x" />
        </p>
        <p>
          <MDBIcon icon="camera-retro" size="4x" />
        </p>
        <p>
          <MDBIcon icon="camera-retro" size="5x" />
        </p>
        <p>
          <MDBIcon icon="camera-retro" size="10x" />
        </p>
        <p>
          <MDBIcon icon="quote-left" size="5x" border />
        </p>
        <p>
          <MDBIcon icon="quote-left" size="5x" border pull="right" />
        </p>
        <p>
          <MDBIcon icon="quote-left" size="5x" border pull="left" />
        </p>
        <p>
          <MDBIcon icon="spinner" size="5x" spin />
        </p>
        <p>
          <MDBIcon icon="spinner" size="5x" pulse />
        </p>
        <p>
          <MDBIcon icon="circle-notch" size="5x" spin />
        </p>
        <p>
          <MDBIcon icon="sync" size="5x" spin />
        </p>
        <p>
          <MDBIcon icon="camera-retro" size="5x" rotate="90" />
        </p>
        <p>
          <MDBIcon icon="camera-retro" size="5x" flip="vertical" />
        </p>
      </div>
    </MDBContainer>
  );
};

export default FaPage;
