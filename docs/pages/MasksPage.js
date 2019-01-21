import React from "react";
import { MDBMask, MDBView, MDBContainer, MDBRow, MDBCol } from "mdbreact";
import DocsLink from "../components/docsLink";

const MasksPage = () => {
  return (
    <MDBContainer className="mt-5">
      <DocsLink
        title="Masks"
        href="https://mdbootstrap.com/docs/react/css/masks/"
      />
      <MDBRow>
        <MDBCol md="4">
          <MDBView>
            <img
              src="https://mdbootstrap.com/img/Photos/Others/nature-sm.jpg"
              className="img-fluid"
              alt=""
            />
            <MDBMask pattern={1} className="flex-center">
              <p className="white-text">pattern = &#123;1&#125;</p>
            </MDBMask>
          </MDBView>
        </MDBCol>
        <MDBCol md="4">
          <MDBView>
            <img
              src="https://mdbootstrap.com/img/Photos/Others/nature-sm.jpg"
              className="img-fluid"
              alt=""
            />
            <MDBMask pattern={2} className="flex-center">
              <p className="white-text">pattern = &#123;2&#125;</p>
            </MDBMask>
          </MDBView>
        </MDBCol>
        <MDBCol md="4">
          <MDBView waves>
            <img
              src="https://mdbootstrap.com/img/Photos/Others/nature-sm.jpg"
              className="img-fluid"
              alt=""
            />
            <MDBMask pattern={3} className="flex-center">
              <p className="white-text">pattern = &#123;3&#125;, waves</p>
            </MDBMask>
          </MDBView>
        </MDBCol>
      </MDBRow>
      <MDBRow className="mt-4">
        <MDBCol md="4">
          <MDBView>
            <img
              src="https://mdbootstrap.com/img/Photos/Others/nature-sm.jpg"
              className="img-fluid"
              alt=""
            />
            <MDBMask className="flex-center" overlay="blue-light">
              <p className="white-text">overlay = "blue-light"</p>
            </MDBMask>
          </MDBView>
        </MDBCol>
        <MDBCol md="4">
          <MDBView>
            <img
              src="https://mdbootstrap.com/img/Photos/Others/nature-sm.jpg"
              className="img-fluid"
              alt=""
            />
            <MDBMask className="flex-center" overlay="blue-strong">
              <p className="white-text">overlay = "blue-strong"</p>
            </MDBMask>
          </MDBView>
        </MDBCol>
        <MDBCol md="4">
          <MDBView waves>
            <img
              src="https://mdbootstrap.com/img/Photos/Others/nature-sm.jpg"
              className="img-fluid"
              alt=""
            />
            <MDBMask className="flex-center" overlay="blue-slight">
              <p className="white-text">overlay = "blue-slight", waves</p>
            </MDBMask>
          </MDBView>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default MasksPage;
