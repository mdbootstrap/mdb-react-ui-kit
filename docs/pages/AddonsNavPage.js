import React from "react";
import { MDBEdgeHeader, MDBContainer, MDBRow, MDBCol, MDBJumbotron, MDBIcon, MDBAnimation } from "mdbreact";
import MenuLink from "./../components/menuLink";

const AddonsNavPage = () => {
  return (
    <>
      <MDBEdgeHeader color="indigo darken-3" className="sectionPage" />
      <MDBAnimation type="zoomIn" duration="500ms">
        <MDBContainer>
          <MDBRow>
            <MDBCol md="8" className="mt-3 mx-auto">
              <MDBJumbotron>
                <h1 className="text-center">
                  <MDBIcon icon="window-restore" className="mr-2 indigo-text" />
                  Addons
                </h1>
                <ul className="list-unstyled example-components-list">
                  <h6 className="mt-3 grey-text"><strong>FREE</strong></h6>
                  <MenuLink to="/addons/edge-header" title="Edge Header" />
                  <MenuLink to="/addons/iframe" title="Iframe" />
                  <MenuLink to="/addons/notifications" title="Notifications" />
                  <MenuLink to="/addons/treeview" title="Treeview" />
                  <MenuLink to="/addons/rating" title="Rating" />
                  {/* PRO-START */}
                  <h6 className="mt-4 grey-text"><strong className="indigo-text">PRO</strong></h6>
                  <MenuLink to="/addons/pro/blog-components" title="Blog components" />
                  <MenuLink to="/addons/pro/chat" title="Chat" />
                  <MenuLink to="/addons/pro/e-commerce-components" title="E-commerce components" />
                  <MenuLink to="/addons/pro/flipping-cards" title="Flipping Cards" />
                  <MenuLink to="/addons/pro/notifications" title="Notifications" />
                  <MenuLink to="/addons/pro/streak" title="Streak" />
                  <MenuLink to="/addons/pro/timeline" title="Timeline" />
                  {/* PRO-END */}
                </ul>
              </MDBJumbotron>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </MDBAnimation>
    </>
  );
}

export default AddonsNavPage;
