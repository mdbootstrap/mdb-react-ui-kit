import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBTabPane, MDBTabContent, MDBNav, MDBNavItem, MDBNavLink } from "mdbreact";
import DocsLink from "../components/docsLink";
import SectionContainer from "../components/sectionContainer";

class PillsPage extends Component {
  state = {
    activeItemPills: "1"
  };

  togglePills = tab => () => {
    if (this.state.activePills !== tab) {
      this.setState({
        activeItemPills: tab
      });
    }
  };

  render() {
    return (
      <MDBContainer>
        <DocsLink title="Pills" href="https://mdbootstrap.com/docs/react/components/pills/" />
        <MDBContainer>
          <MDBRow>
            <MDBCol md="12">
              <SectionContainer header="Basic example">
                <MDBNav className="nav-pills">
                  <MDBNavItem>
                    <MDBNavLink to="#" active={this.state.activeItemPills === "1"} onClick={this.togglePills("1")}>
                      Home
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#" active={this.state.activeItemPills === "2"} onClick={this.togglePills("2")}>
                      Profile
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#" active={this.state.activeItemPills === "3"} onClick={this.togglePills("3")}>
                      Contact
                    </MDBNavLink>
                  </MDBNavItem>
                </MDBNav>
                <MDBTabContent activeItem={this.state.activeItemPills}>
                  <MDBTabPane tabId="1">
                    <p>
                      Consequat occaecat ullamco amet non eiusmod nostrud dolore irure incididunt est duis anim
                      sunt officia. Fugiat velit proident aliquip nisi incididunt nostrud exercitation proident est
                      nisi. Irure magna elit commodo anim ex veniam culpa eiusmod id nostrud sit cupidatat in
                      veniam ad. Eiusmod consequat eu adipisicing minim anim aliquip cupidatat culpa excepteur
                      quis. Occaecat sit eu exercitation irure Lorem incididunt nostrud.
                    </p>
                  </MDBTabPane>
                  <MDBTabPane tabId="2">
                    <p>
                      Ad pariatur nostrud pariatur exercitation ipsum ipsum culpa mollit commodo mollit ex. Aute
                      sunt incididunt amet commodo est sint nisi deserunt pariatur do. Aliquip ex eiusmod voluptate
                      exercitation cillum id incididunt elit sunt. Qui minim sit magna Lorem id et dolore velit
                      Lorem amet exercitation duis deserunt. Anim id labore elit adipisicing ut in id occaecat
                      pariatur ut ullamco ea tempor duis.
                    </p>
                  </MDBTabPane>
                  <MDBTabPane tabId="3">
                    <p>
                      Est quis nulla laborum officia ad nisi ex nostrud culpa Lorem excepteur aliquip dolor aliqua
                      irure ex. Nulla ut duis ipsum nisi elit fugiat commodo sunt reprehenderit laborum veniam eu
                      veniam. Eiusmod minim exercitation fugiat irure ex labore incididunt do fugiat commodo
                      aliquip sit id deserunt reprehenderit aliquip nostrud. Amet ex cupidatat excepteur aute
                      veniam incididunt mollit cupidatat esse irure officia elit do ipsum ullamco Lorem. Ullamco ut
                      ad minim do mollit labore ipsum laboris ipsum commodo sunt tempor enim incididunt. Commodo
                      quis sunt dolore aliquip aute tempor irure magna enim minim reprehenderit. Ullamco
                      consectetur culpa veniam sint cillum aliqua incididunt velit ullamco sunt ullamco quis quis
                      commodo voluptate. Mollit nulla nostrud adipisicing aliqua cupidatat aliqua pariatur mollit
                      voluptate voluptate consequat non.
                    </p>
                  </MDBTabPane>
                </MDBTabContent>
              </SectionContainer>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </MDBContainer>
    );
  }
}

export default PillsPage;
