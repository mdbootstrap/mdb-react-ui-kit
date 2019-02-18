import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBNav, MDBNavItem, MDBNavLink } from "mdbreact";
import DocsLink from "../components/docsLink";

class NavsPage extends Component {

  render() {
    return (
      <MDBContainer>
        <DocsLink
          title="Tabs"
          href="https://mdbootstrap.com/docs/react/navigation/navs/"
        />

        <h2 className="mt-5">Basic Navs</h2>
        <MDBContainer className="mt-4">
          <MDBNav>
            <MDBNavItem>
              <MDBNavLink active to="#!">Active</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#!">Link</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#!">Link</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink disabled to="#!">Disabled</MDBNavLink>
            </MDBNavItem>
          </MDBNav>
        </MDBContainer>

        <MDBContainer className="mt-4">
          <MDBNav className="justify-content-center">
            <MDBNavItem>
              <MDBNavLink active to="#!">Active</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#!">Link</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#!">Link</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink disabled to="#!">Disabled</MDBNavLink>
            </MDBNavItem>
          </MDBNav>
        </MDBContainer>

        <MDBContainer className="mt-4">
          <MDBNav className="justify-content-end">
            <MDBNavItem>
              <MDBNavLink active to="#!">Active</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#!">Link</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#!">Link</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink disabled to="#!">Disabled</MDBNavLink>
            </MDBNavItem>
          </MDBNav>
        </MDBContainer>

        <MDBContainer className="mt-4">
          <MDBNav className="flex-column">
            <MDBNavItem>
              <MDBNavLink active to="#!">Active</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#!">Link</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#!">Link</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink disabled to="#!">Disabled</MDBNavLink>
            </MDBNavItem>
          </MDBNav>
        </MDBContainer>

        <h2 className="mt-5">Navs with bold font</h2>

        <MDBContainer className="mt-4">
          <MDBRow>
            <MDBCol>
              <MDBNav className="font-weight-bold">
                <MDBNavLink active to="#!">Active</MDBNavLink>
                <MDBNavLink to="#!">Link</MDBNavLink>
                <MDBNavLink to="#!">Link</MDBNavLink>
                <MDBNavLink disabled to="#!">Disabled</MDBNavLink>
              </MDBNav>
            </MDBCol>

            <MDBCol>
              <MDBNav className="flex-column font-weight-bold">
                <MDBNavLink active to="#!">Active</MDBNavLink>
                <MDBNavLink to="#!">Link</MDBNavLink>
                <MDBNavLink to="#!">Link</MDBNavLink>
                <MDBNavLink disabled to="#!">Disabled</MDBNavLink>
              </MDBNav>
            </MDBCol>
          </MDBRow>
        </MDBContainer>

        <h2 className="mt-5">Navs with various font and background color</h2>
        <MDBContainer className="mt-4">
          <MDBRow>
            <MDBCol>
              <MDBNav color="grey" className="flex-column font-weight-bold">
                <MDBNavLink className="white-text" active to="#!">Active</MDBNavLink>
                <MDBNavLink className="white-text" to="#!">Link 1</MDBNavLink>
                <MDBNavLink className="white-text" to="#!">Link 2</MDBNavLink>
                <MDBNavLink className="white-text" to="#!">Link 3</MDBNavLink>
              </MDBNav>
            </MDBCol>

            <MDBCol>
              <MDBNav color="amber" className="flex-column font-weight-bold">
                <MDBNavLink active to="#!" className="dark-grey-text">Active</MDBNavLink>
                <MDBNavLink to="#!" className="dark-grey-text">Link 1</MDBNavLink>
                <MDBNavLink to="#!" className="dark-grey-text">Link 2</MDBNavLink>
                <MDBNavLink to="#!" className="dark-grey-text">Link 3</MDBNavLink>
              </MDBNav>
            </MDBCol>

            <MDBCol>
              <MDBNav color="cyan" className="flex-column font-weight-bold">
                <MDBNavLink active to="#!" className="indigo-text">Active</MDBNavLink>
                <MDBNavLink to="#!">Link 1</MDBNavLink>
                <MDBNavLink to="#!">Link 2</MDBNavLink>
                <MDBNavLink to="#!">Link 3</MDBNavLink>
              </MDBNav>
            </MDBCol>
          </MDBRow>
        </MDBContainer>

        <h2 className="mt-5">Navs with gradient background</h2>
        <MDBContainer className="mt-4">
          <MDBRow>
            <MDBCol size="6">
              <MDBNav color="peach-gradient" className="font-weight-bold py-4 px-2 mb-4">
                <MDBNavLink className="white-text" active to="#!">Active</MDBNavLink>
                <MDBNavLink className="white-text" to="#!">Link 1</MDBNavLink>
                <MDBNavLink className="white-text" to="#!">Link 2</MDBNavLink>
                <MDBNavLink className="white-text" to="#!">Link 3</MDBNavLink>
              </MDBNav>

              <MDBNav color="purple-gradient" className="font-weight-bold py-4 px-2 mb-4">
                <MDBNavLink className="white-text" active to="#!">Active</MDBNavLink>
                <MDBNavLink className="white-text" to="#!">Link 1</MDBNavLink>
                <MDBNavLink className="white-text" to="#!">Link 2</MDBNavLink>
                <MDBNavLink className="white-text" to="#!">Link 3</MDBNavLink>
              </MDBNav>
            </MDBCol>

            <MDBCol size="6">
              <MDBNav color="aqua-gradient" className="font-weight-bold py-4 px-2 mb-4">
                <MDBNavLink className="white-text" active to="#!">Active</MDBNavLink>
                <MDBNavLink className="white-text" to="#!">Link 1</MDBNavLink>
                <MDBNavLink className="white-text" to="#!">Link 2</MDBNavLink>
                <MDBNavLink className="white-text" to="#!">Link 3</MDBNavLink>
              </MDBNav>

              <MDBNav color="blue-gradient" className="font-weight-bold py-4 px-2 mb-4">
                <MDBNavLink className="white-text" active to="#!">Active</MDBNavLink>
                <MDBNavLink className="white-text" to="#!">Link 1</MDBNavLink>
                <MDBNavLink className="white-text" to="#!">Link 2</MDBNavLink>
                <MDBNavLink className="white-text" to="#!">Link 3</MDBNavLink>
              </MDBNav>
            </MDBCol>
          </MDBRow>
        </MDBContainer>

        <h2 className="mt-5">Tabs & Pills in Navs</h2>
        <MDBContainer className="mt-4">
          <MDBNav className="nav-tabs mt-5">
            <MDBNavItem>
              <MDBNavLink active to="#!">Active</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#!">Link 1</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#!">Link 2</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#!">Link 3</MDBNavLink>
            </MDBNavItem>
          </MDBNav>
        </MDBContainer>

        <MDBContainer className="mt-4">
          <MDBNav className="nav-pills">
            <MDBNavItem>
              <MDBNavLink active to="#!">Active</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#!">Link 1</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#!">Link 2</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#!">Link 3</MDBNavLink>
            </MDBNavItem>
          </MDBNav>
        </MDBContainer>

        <h2 className="mt-5">Fill & justify</h2>

        <MDBContainer className="mt-4">
          <MDBNav className="nav-pills nav-fill">
            <MDBNavItem>
              <MDBNavLink active to="#!">Active</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#!">Longer nav link</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#!">Link</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink disabled to="#!">Disabled</MDBNavLink>
            </MDBNavItem>
          </MDBNav>
        </MDBContainer>

        <MDBContainer className="mt-4">
          <MDBNav className="nav-tabs nav-fill">
            <MDBNavItem>
              <MDBNavLink active to="#!">Active</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#!">Longer nav link</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#!">Link</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink disabled to="#!">Disabled</MDBNavLink>
            </MDBNavItem>
          </MDBNav>
        </MDBContainer>

        <MDBContainer className="mt-4">
        </MDBContainer>
        <MDBContainer className="mt-4">
          <MDBNav className="nav-pills nav-justified">
            <MDBNavItem>
              <MDBNavLink active to="#!">Active</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#!">Longer nav link</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#!">Link</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink disabled to="#!">Disabled</MDBNavLink>
            </MDBNavItem>
          </MDBNav>
        </MDBContainer>

        <MDBContainer className="mt-4">
          <MDBNav className="nav-tabs nav-justified">
            <MDBNavItem>
              <MDBNavLink active to="#!">Active</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#!">Longer nav link</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#!">Link</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink disabled to="#!">Disabled</MDBNavLink>
            </MDBNavItem>
          </MDBNav>
        </MDBContainer>

      </MDBContainer>
    );
  }
}

export default NavsPage;

