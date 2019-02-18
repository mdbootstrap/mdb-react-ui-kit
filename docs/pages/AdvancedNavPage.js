import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBJumbotron, MDBIcon } from "mdbreact";
import MenuLink from "./../components/menuLink";

const AdvancedNavPage = () => {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="8" className="mt-3 mx-auto">
          <MDBJumbotron>
            <h1>
              <MDBIcon icon="code" className="grey-text" /> Advanced
            </h1>
            <ul className="list-unstyled example-components-list">
              <h6 className="mt-3 grey-text">FREE </h6>
              <MenuLink to="/advanced/alerts" title="Alerts" />
              <MenuLink to="/advanced/carousel" title="Carousel" />
              <MenuLink to="/advanced/charts" title="Charts" />
              <MenuLink to="/advanced/collapse" title="Collapse" />
              <MenuLink to="/advanced/popover" title="Popover" />
              <MenuLink to="/advanced/scrollbar" title="ScrollBar" />
              <MenuLink to="/advanced/tooltips" title="Tooltips" />
              <MenuLink to="/advanced/videocarousel" title="Video Carousel" />
            </ul>
          </MDBJumbotron>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default AdvancedNavPage;
