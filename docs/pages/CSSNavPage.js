import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBJumbotron, MDBIcon } from "mdbreact";
import MenuLink from "./../components/menuLink";

const CSSPage = () => {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="8" className="mx-auto">
          <MDBJumbotron className="mt-3">
            <h1>
              <MDBIcon icon="css3" brand className="grey-text" /> CSS
            </h1>
            <ul className="list-unstyled example-components-list">
              <h6 className="mt-3 grey-text">FREE </h6>
              <MenuLink to="/css/animations" title="Animation" />
              <MenuLink to="/css/hover" title="Hover effects" />
              <MenuLink to="/css/icons" title="Icons" />
              <MenuLink to="/css/jumbotron" title="Jumbotron" />
              <MenuLink to="/css/masks" title="Masks"  />
              <MenuLink to="/css/masonry" title="Masonry Layout"  />
            </ul>
          </MDBJumbotron>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default CSSPage;
