import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBJumbotron, MDBIcon } from "mdbreact";
import MenuLink from "./../components/menuLink";

const ModalsNavPage = () => {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="8" className="mt-3 mx-auto">
          <MDBJumbotron>
            <h1>
              <MDBIcon icon="window-restore" className="grey-text mr-2" />
              Modals
            </h1>
            <ul className="list-unstyled example-components-list">
              <h6 className="mt-3 grey-text">FREE </h6>
              <MenuLink to="/modals/modal" title="Modal" />
              <MenuLink to="/modals/modal-form" title="Modal Form" />
              <MenuLink to="/modals/modal-examples" title="Modal Templates & Examples" />
            </ul>
          </MDBJumbotron>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default ModalsNavPage;
