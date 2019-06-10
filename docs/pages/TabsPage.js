import React, { Component } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBTabPane,
  MDBTabContent,
  MDBNav,
  MDBNavItem,
  MDBNavLink
} from "mdbreact";
import DocsLink from "../components/docsLink";

class TabsPage extends Component {
  state = {
    activeItem: "1"
  };

  toggle = tab => e => {
    if (this.state.activeItem !== tab) {
      this.setState({
        activeItem: tab
      });
    }
  };

  render() {
    return (
      <MDBContainer>
        <DocsLink
          title="Tabs"
          href="https://mdbootstrap.com/docs/react/components/tabs/"
        />
        <MDBContainer className="mt-4">
          <MDBRow>
            <MDBCol md="12">
              <h2>Basic</h2>
              <MDBNav className="nav-tabs mt-5">
                <MDBNavItem>
                  <MDBNavLink
                    to="#"
                    className={this.state.activeItem === "1" ? "active" : ""}
                    onClick={this.toggle("1")}
                    role="tab"
                  >
                    Home
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink
                    to="#"
                    className={this.state.activeItem === "2" ? "active" : ""}
                    onClick={this.toggle("2")}
                    role="tab"
                  >
                    Profile
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink
                    to="#"
                    className={this.state.activeItem === "3" ? "active" : ""}
                    onClick={this.toggle("3")}
                    role="tab"
                  >
                    Profile
                  </MDBNavLink>
                </MDBNavItem>
              </MDBNav>
              <MDBTabContent
                activeItem={this.state.activeItem}
              >
                <MDBTabPane tabId="1" role="tabpanel">
                  <p className="mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Nihil odit magnam minima, soluta doloribus reiciendis
                    molestiae placeat unde eos molestias. Quisquam aperiam,
                    pariatur. Tempora, placeat ratione porro voluptate odit
                    minima.
                  </p>
                </MDBTabPane>
                <MDBTabPane tabId="2" role="tabpanel">
                  <p className="mt-2">
                    Quisquam aperiam, pariatur. Tempora, placeat ratione porro
                    voluptate odit minima. Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. Nihil odit magnam minima,
                    soluta doloribus reiciendis molestiae placeat unde eos
                    molestias.
                  </p>
                  <p>
                    Quisquam aperiam, pariatur. Tempora, placeat ratione porro
                    voluptate odit minima. Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. Nihil odit magnam minima,
                    soluta doloribus reiciendis molestiae placeat unde eos
                    molestias.
                  </p>
                </MDBTabPane>
                <MDBTabPane tabId="3" role="tabpanel">
                  <p className="mt-2">
                    Quisquam aperiam, pariatur. Tempora, placeat ratione porro
                    voluptate odit minima. Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. Nihil odit magnam minima,
                    soluta doloribus reiciendis molestiae placeat unde eos
                    molestias.
                  </p>
                </MDBTabPane>
              </MDBTabContent>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </MDBContainer>
    );
  }
}

export default TabsPage;
