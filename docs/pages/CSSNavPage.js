import React from "react";
import {
  MDBEdgeHeader,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBJumbotron,
  MDBIcon,
  MDBAnimation
} from "mdbreact";
import MenuLink from "./../components/menuLink";

const CSSPage = () => {
  return (
    <>
    <MDBEdgeHeader color="indigo darken-3" className="sectionPage" />
      <MDBAnimation type="zoomIn" duration="500ms">
        <MDBContainer>
          <MDBRow>
            <MDBCol md="8" className="mx-auto">
                <MDBJumbotron className="mt-3">
                  <h1 className="text-center">
                    <MDBIcon icon="css3" brand className="indigo-text mr-w" />
                    CSS
                  </h1>
                  <ul className="list-unstyled example-components-list">
                    <h6 className="mt-3 grey-text"><strong>FREE</strong></h6>
                    <MenuLink to="/css/animations" title="Animation" />
                    <MenuLink to="/css/hover" title="Hover effects" />
                    <MenuLink to="/css/icons" title="Icons" />
                    <MenuLink to="/css/jumbotron" title="Jumbotron" />
                    <MenuLink to="/css/masks" title="Masks" />
                    <MenuLink to="/css/masonry" title="Masonry Layout" />
                  </ul>
                </MDBJumbotron>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </MDBAnimation>
    </>
  );
};

export default CSSPage;
