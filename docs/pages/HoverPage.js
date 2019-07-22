import React from "react";
import { MDBMask, MDBView, MDBContainer, MDBRow, MDBCol } from "mdbreact";
import DocsLink from "../components/docsLink";
import SectionContainer from "../components/sectionContainer";

const HoverPage = () => {
  return (
    <MDBContainer className="mt-5">
      <DocsLink
        title="Hover Effects"
        href="https://mdbootstrap.com/docs/react/css/hover-effects/"
      />

      <SectionContainer header="Overlay">
        <MDBRow>
          <MDBCol md="4">
            <MDBView hover>
              <img
                src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/6-col/img%20(75).jpg"
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
                src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/6-col/img%20(75).jpg"
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
                src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/6-col/img%20(75).jpg"
                className="img-fluid"
                alt=""
              />
              <MDBMask className="flex-center" overlay="red-slight">
                <p className="white-text">Super light overlay</p>
              </MDBMask>
            </MDBView>
          </MDBCol>
        </MDBRow>
      </SectionContainer>

      <SectionContainer noBorder>
        <MDBRow>
          <MDBCol md="6">
            <SectionContainer header="Zoom">
              <MDBView hover zoom>
                <img
                  src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/6-col/img%20(66).jpg"
                  className="img-fluid"
                  alt=""
                />
                <MDBMask className="flex-center">
                  <p className="white-text">Zoom effect</p>
                </MDBMask>
              </MDBView>
            </SectionContainer>
          </MDBCol>
          <MDBCol md="6">
            <SectionContainer header="Shadow">
              <img
                src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/6-col/img%20(42).jpg"
                className="img-fluid hoverable"
                alt=""
              />
            </SectionContainer>
          </MDBCol>
        </MDBRow>
      </SectionContainer>
    </MDBContainer>
  );
};

export default HoverPage;
