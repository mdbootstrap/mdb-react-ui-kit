import React from "react";
import { MDBJumbotron, MDBBtn, MDBContainer, MDBRow, MDBCol } from "mdbreact";
import DocsLink from "../components/docsLink";

const JumbotronPage = props => {
  return (
    <>
    <MDBContainer className="mt-5 text-center">
        <DocsLink title="Jumbotron" href="https://mdbootstrap.com/docs/react/components/jumbotron/" />
      <MDBRow>
        <MDBCol>
          <h4 className="title mb-5 text-left">Basic example</h4>
          <MDBJumbotron>
            <h2 className="h1 display-3">Hello, world!</h2>
            <p className="lead">
              This is a simple hero unit, a simple Jumbotron-style component for
              calling extra attention to featured content or information.
            </p>
            <hr className="my-2" />
            <p>
              It uses utility classes for typgraphy and spacing to space content out
              within the larger container.
            </p>
            <p className="lead">
              <MDBBtn color="primary">Learn More</MDBBtn>
            </p>
          </MDBJumbotron>
        </MDBCol>
      </MDBRow>
        <h4 className="title mb-5 text-left">Fluid jumbotron</h4>
    </MDBContainer>
    <MDBJumbotron fluid>
      <MDBContainer>
            <h2 className="display-4">Fluid jumbotron</h2>
            <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
      </MDBContainer>
    </MDBJumbotron>
    </>
  );
};

export default JumbotronPage;
