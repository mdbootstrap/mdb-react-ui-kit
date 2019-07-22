import React, { Component } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBNav,
  MDBNavItem,
  MDBNavLink
} from "mdbreact";
import DocsLink from "../components/docsLink";
import SectionContainer from "../components/sectionContainer";

class NavsPage extends Component {
  render() {
    return (
      <MDBContainer>
        <DocsLink
          title="Navs"
          href="https://mdbootstrap.com/docs/react/navigation/navs/"
        />

        <SectionContainer title="Basic examples" noBorder>
          <SectionContainer header="Left">
            <MDBNav>
              <MDBNavItem>
                <MDBNavLink active to="#!">
                  Active
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="#!">Link</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="#!">Link</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink disabled to="#!">
                  Disabled
                </MDBNavLink>
              </MDBNavItem>
            </MDBNav>
          </SectionContainer>

          <SectionContainer header="Center">
            <MDBNav className="justify-content-center">
              <MDBNavItem>
                <MDBNavLink active to="#!">
                  Active
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="#!">Link</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="#!">Link</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink disabled to="#!">
                  Disabled
                </MDBNavLink>
              </MDBNavItem>
            </MDBNav>
          </SectionContainer>

          <SectionContainer header="Right">
            <MDBNav className="justify-content-end">
              <MDBNavItem>
                <MDBNavLink active to="#!">
                  Active
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="#!">Link</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="#!">Link</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink disabled to="#!">
                  Disabled
                </MDBNavLink>
              </MDBNavItem>
            </MDBNav>
          </SectionContainer>

          <SectionContainer header="Vertical">
            <MDBNav className="flex-column">
              <MDBNavItem>
                <MDBNavLink active to="#!">
                  Active
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="#!">Link</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="#!">Link</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink disabled to="#!">
                  Disabled
                </MDBNavLink>
              </MDBNavItem>
            </MDBNav>
          </SectionContainer>
        </SectionContainer>

        <hr className="my-5" />

        <SectionContainer header="With bold font" noBorder>
          <MDBRow>
            <MDBCol md="6">
              <SectionContainer>
                <MDBNav className="font-weight-bold">
                  <MDBNavLink active to="#!">
                    Active
                  </MDBNavLink>
                  <MDBNavLink to="#!">Link</MDBNavLink>
                  <MDBNavLink to="#!">Link</MDBNavLink>
                  <MDBNavLink disabled to="#!">
                    Disabled
                  </MDBNavLink>
                </MDBNav>
              </SectionContainer>
            </MDBCol>
            <MDBCol md="6">
              <SectionContainer>
                <MDBNav className="flex-column font-weight-bold">
                  <MDBNavLink active to="#!">
                    Active
                  </MDBNavLink>
                  <MDBNavLink to="#!">Link</MDBNavLink>
                  <MDBNavLink to="#!">Link</MDBNavLink>
                  <MDBNavLink disabled to="#!">
                    Disabled
                  </MDBNavLink>
                </MDBNav>
              </SectionContainer>
            </MDBCol>
          </MDBRow>
        </SectionContainer>

        <SectionContainer header="With various font and background color">
          <MDBRow>
            <MDBCol>
              <MDBNav color="grey" className="flex-column font-weight-bold">
                <MDBNavLink className="white-text" active to="#!">
                  Active
                </MDBNavLink>
                <MDBNavLink className="white-text" to="#!">
                  Link 1
                </MDBNavLink>
                <MDBNavLink className="white-text" to="#!">
                  Link 2
                </MDBNavLink>
                <MDBNavLink className="white-text" to="#!">
                  Link 3
                </MDBNavLink>
              </MDBNav>
            </MDBCol>

            <MDBCol>
              <MDBNav color="amber" className="flex-column font-weight-bold">
                <MDBNavLink active to="#!" className="dark-grey-text">
                  Active
                </MDBNavLink>
                <MDBNavLink to="#!" className="dark-grey-text">
                  Link 1
                </MDBNavLink>
                <MDBNavLink to="#!" className="dark-grey-text">
                  Link 2
                </MDBNavLink>
                <MDBNavLink to="#!" className="dark-grey-text">
                  Link 3
                </MDBNavLink>
              </MDBNav>
            </MDBCol>

            <MDBCol>
              <MDBNav color="cyan" className="flex-column font-weight-bold">
                <MDBNavLink active to="#!" className="indigo-text">
                  Active
                </MDBNavLink>
                <MDBNavLink to="#!">Link 1</MDBNavLink>
                <MDBNavLink to="#!">Link 2</MDBNavLink>
                <MDBNavLink to="#!">Link 3</MDBNavLink>
              </MDBNav>
            </MDBCol>
          </MDBRow>
        </SectionContainer>

        <SectionContainer header="With gradient background">
          <MDBRow>
            <MDBCol md="6">
              <MDBNav
                color="peach-gradient"
                className="font-weight-bold py-4 px-2 mb-4"
              >
                <MDBNavLink className="white-text" active to="#!">
                  Active
                </MDBNavLink>
                <MDBNavLink className="white-text" to="#!">
                  Link 1
                </MDBNavLink>
                <MDBNavLink className="white-text" to="#!">
                  Link 2
                </MDBNavLink>
                <MDBNavLink className="white-text" to="#!">
                  Link 3
                </MDBNavLink>
              </MDBNav>
            </MDBCol>
            <MDBCol md="6">
              <MDBNav
                color="purple-gradient"
                className="font-weight-bold py-4 px-2 mb-4"
              >
                <MDBNavLink className="white-text" active to="#!">
                  Active
                </MDBNavLink>
                <MDBNavLink className="white-text" to="#!">
                  Link 1
                </MDBNavLink>
                <MDBNavLink className="white-text" to="#!">
                  Link 2
                </MDBNavLink>
                <MDBNavLink className="white-text" to="#!">
                  Link 3
                </MDBNavLink>
              </MDBNav>
            </MDBCol>
            <MDBCol md="6">
              <MDBNav
                color="aqua-gradient"
                className="font-weight-bold py-4 px-2 mb-4"
              >
                <MDBNavLink className="white-text" active to="#!">
                  Active
                </MDBNavLink>
                <MDBNavLink className="white-text" to="#!">
                  Link 1
                </MDBNavLink>
                <MDBNavLink className="white-text" to="#!">
                  Link 2
                </MDBNavLink>
                <MDBNavLink className="white-text" to="#!">
                  Link 3
                </MDBNavLink>
              </MDBNav>
            </MDBCol>
            <MDBCol md="6">
              <MDBNav
                color="blue-gradient"
                className="font-weight-bold py-4 px-2 mb-4"
              >
                <MDBNavLink className="white-text" active to="#!">
                  Active
                </MDBNavLink>
                <MDBNavLink className="white-text" to="#!">
                  Link 1
                </MDBNavLink>
                <MDBNavLink className="white-text" to="#!">
                  Link 2
                </MDBNavLink>
                <MDBNavLink className="white-text" to="#!">
                  Link 3
                </MDBNavLink>
              </MDBNav>
            </MDBCol>
          </MDBRow>
        </SectionContainer>

        <SectionContainer title="Wtih tabs & pills" noBorder>
          <MDBRow>
            <MDBCol md="6">
              <SectionContainer header="Tabs">
                <MDBNav className="nav-tabs">
                  <MDBNavItem>
                    <MDBNavLink active to="#!">
                      Active
                    </MDBNavLink>
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
              </SectionContainer>
            </MDBCol>
            <MDBCol md="6">
              <SectionContainer header="Pills">
                <MDBNav className="nav-pills">
                  <MDBNavItem>
                    <MDBNavLink active to="#!">
                      Active
                    </MDBNavLink>
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
              </SectionContainer>
            </MDBCol>
          </MDBRow>
          <SectionContainer header="Fill & justify">
            <MDBContainer className="mt-4">
              <MDBNav className="nav-pills nav-fill">
                <MDBNavItem>
                  <MDBNavLink active to="#!">
                    Active
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="#!">Longer nav link</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="#!">Link</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink disabled to="#!">
                    Disabled
                  </MDBNavLink>
                </MDBNavItem>
              </MDBNav>
            </MDBContainer>
            <MDBContainer className="mt-4">
              <MDBNav className="nav-tabs nav-fill">
                <MDBNavItem>
                  <MDBNavLink active to="#!">
                    Active
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="#!">Longer nav link</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="#!">Link</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink disabled to="#!">
                    Disabled
                  </MDBNavLink>
                </MDBNavItem>
              </MDBNav>
            </MDBContainer>

            <MDBContainer className="mt-4">
              <MDBNav className="nav-pills nav-justified">
                <MDBNavItem>
                  <MDBNavLink active to="#!">
                    Active
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="#!">Longer nav link</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="#!">Link</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink disabled to="#!">
                    Disabled
                  </MDBNavLink>
                </MDBNavItem>
              </MDBNav>
            </MDBContainer>

            <MDBContainer className="mt-4">
              <MDBNav className="nav-tabs nav-justified">
                <MDBNavItem>
                  <MDBNavLink active to="#!">
                    Active
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="#!">Longer nav link</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="#!">Link</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink disabled to="#!">
                    Disabled
                  </MDBNavLink>
                </MDBNavItem>
              </MDBNav>
            </MDBContainer>
          </SectionContainer>
        </SectionContainer>
      </MDBContainer>
    );
  }
}

export default NavsPage;
