import React from "react";
import { MDBMask, MDBView, MDBContainer, MDBRow, MDBCol } from "mdbreact";
import DocsLink from "../components/docsLink";

const HoverPage = () => {
  return (
    <MDBContainer className="mt-5">
      <DocsLink
        title="Hover Effects"
        href="https://mdbootstrap.com/docs/react/css/hover-effects/"
      />
      <MDBRow>
        <MDBCol md="4">
          <MDBView hover>
            <img
              src="https://mdbootstrap.com/img/Photos/Others/nature-sm.jpg"
              className="img-fluid"
              alt=""
            />
            <MDBMask className="flex-center" overlay="red-strong">
              <p className="white-text">Strong overlay</p>
            </MDBMask>
          </MDBView>
        </MDBCol>
        <MDBCol md="4">
          <MDBView hover>
            <img
              src="https://mdbootstrap.com/img/Photos/Others/nature-sm.jpg"
              className="img-fluid"
              alt=""
            />
            <MDBMask className="flex-center" overlay="red-light">
              <p className="white-text">Light overlay</p>
            </MDBMask>
          </MDBView>
        </MDBCol>
        <MDBCol md="4">
          <MDBView hover>
            <img
              src="https://mdbootstrap.com/img/Photos/Others/nature-sm.jpg"
              className="img-fluid"
              alt=""
            />
            <MDBMask className="flex-center" overlay="red-slight">
              <p className="white-text">Super light overlay</p>
            </MDBMask>
          </MDBView>
        </MDBCol>
      </MDBRow>
      <MDBRow className="mt-4">
        <MDBCol md="6">
          <MDBView hover zoom>
            <img
              src="https://mdbootstrap.com/img/Photos/Others/nature-sm.jpg"
              className="img-fluid"
              alt=""
            />
            <MDBMask className="flex-center">
              <p className="white-text">Zoom effect</p>
            </MDBMask>
          </MDBView>
        </MDBCol>
        <MDBCol md="6">
          <h5 className="text-center">Shadow effect</h5>
          <img
            src="https://mdbootstrap.com/img/Photos/Others/nature-sm.jpg"
            className="img-fluid rounded-circle hoverable"
            alt=""
          />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default HoverPage;
