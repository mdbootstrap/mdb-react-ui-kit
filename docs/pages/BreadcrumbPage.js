import React from "react";
import {
  MDBBreadcrumb,
  MDBBreadcrumbItem,
  MDBContainer,
  MDBNavbar,
  MDBNavbarNav,
  MDBNavItem
} from "mdbreact";
import DocsLink from "./../components/docsLink";
import SectionContainer from "./../components/sectionContainer";

const BreadcrumbPage = props => {
  return (
    <MDBContainer>
      <DocsLink
        title="Breadcrumb"
        href="https://mdbootstrap.com/docs/react/navigation/breadcrumb/"
      />

      <SectionContainer header="Basic examples">
        <MDBBreadcrumb>
          <MDBBreadcrumbItem active>Home</MDBBreadcrumbItem>
        </MDBBreadcrumb>

        <MDBBreadcrumb>
          <MDBBreadcrumbItem>Home</MDBBreadcrumbItem>
          <MDBBreadcrumbItem active>Library</MDBBreadcrumbItem>
        </MDBBreadcrumb>

        <MDBBreadcrumb>
          <MDBBreadcrumbItem>Home</MDBBreadcrumbItem>
          <MDBBreadcrumbItem>Library</MDBBreadcrumbItem>
          <MDBBreadcrumbItem active>Data</MDBBreadcrumbItem>
        </MDBBreadcrumb>
      </SectionContainer>

      <SectionContainer header="With dark background">
        <MDBBreadcrumb light color="default">
          <MDBBreadcrumbItem>Home</MDBBreadcrumbItem>
          <MDBBreadcrumbItem active>Library</MDBBreadcrumbItem>
        </MDBBreadcrumb>

        <MDBBreadcrumb light color="primary">
          <MDBBreadcrumbItem>Home</MDBBreadcrumbItem>
          <MDBBreadcrumbItem active>Library</MDBBreadcrumbItem>
        </MDBBreadcrumb>

        <MDBBreadcrumb light color="secondary">
          <MDBBreadcrumbItem>Home</MDBBreadcrumbItem>
          <MDBBreadcrumbItem>Library</MDBBreadcrumbItem>
          <MDBBreadcrumbItem active>Data</MDBBreadcrumbItem>
        </MDBBreadcrumb>
      </SectionContainer>

      <SectionContainer header="With light background">
        <MDBBreadcrumb color="cyan lighten-4">
          <MDBBreadcrumbItem>Home</MDBBreadcrumbItem>
          <MDBBreadcrumbItem>Library</MDBBreadcrumbItem>
          <MDBBreadcrumbItem active>Data</MDBBreadcrumbItem>
        </MDBBreadcrumb>

        <MDBBreadcrumb color="pink lighten-4">
          <MDBBreadcrumbItem>Home</MDBBreadcrumbItem>
          <MDBBreadcrumbItem active>Library</MDBBreadcrumbItem>
        </MDBBreadcrumb>

        <MDBBreadcrumb color="purple lighten-4">
          <MDBBreadcrumbItem>Home</MDBBreadcrumbItem>
          <MDBBreadcrumbItem active>Library</MDBBreadcrumbItem>
        </MDBBreadcrumb>
      </SectionContainer>

      <SectionContainer header="With uppercases">
        <MDBBreadcrumb uppercase color="cyan lighten-4">
          <MDBBreadcrumbItem>Home</MDBBreadcrumbItem>
          <MDBBreadcrumbItem active>Library</MDBBreadcrumbItem>
        </MDBBreadcrumb>

        <MDBBreadcrumb bold uppercase color="cyan lighten-4">
          <MDBBreadcrumbItem>Home</MDBBreadcrumbItem>
          <MDBBreadcrumbItem active>Library</MDBBreadcrumbItem>
        </MDBBreadcrumb>
      </SectionContainer>

      <SectionContainer header="With icons">
        <MDBBreadcrumb light color="pink lighten-4">
          <MDBBreadcrumbItem icon="star">Home</MDBBreadcrumbItem>
        </MDBBreadcrumb>

        <MDBBreadcrumb light color="pink lighten-3">
          <MDBBreadcrumbItem icon="star">Home</MDBBreadcrumbItem>
          <MDBBreadcrumbItem icon="star" active>
            Library
          </MDBBreadcrumbItem>
        </MDBBreadcrumb>

        <MDBBreadcrumb light color="pink lighten-2">
          <MDBBreadcrumbItem icon="star">Home</MDBBreadcrumbItem>
          <MDBBreadcrumbItem icon="star">Library</MDBBreadcrumbItem>
          <MDBBreadcrumbItem icon="star" active>
            Data
          </MDBBreadcrumbItem>
        </MDBBreadcrumb>
      </SectionContainer>

      <SectionContainer header="With arrows">
        <MDBBreadcrumb color="indigo lighten-4">
          <MDBBreadcrumbItem appendIcon icon="caret-right">
            Home
          </MDBBreadcrumbItem>
          <MDBBreadcrumbItem appendIcon icon="caret-right">
            Library
          </MDBBreadcrumbItem>
          <MDBBreadcrumbItem appendIcon active>
            Data
          </MDBBreadcrumbItem>
        </MDBBreadcrumb>

        <MDBBreadcrumb color="blue-grey lighten-4">
          <MDBBreadcrumbItem appendIcon icon="angle-double-right">
            Home
          </MDBBreadcrumbItem>
          <MDBBreadcrumbItem appendIcon icon="angle-double-right">
            Library
          </MDBBreadcrumbItem>
          <MDBBreadcrumbItem appendIcon active>
            Data
          </MDBBreadcrumbItem>
        </MDBBreadcrumb>

        <MDBBreadcrumb color="purple lighten-4">
          <MDBBreadcrumbItem appendIcon icon="angle-right">
            Home
          </MDBBreadcrumbItem>
          <MDBBreadcrumbItem appendIcon icon="angle-right">
            Library
          </MDBBreadcrumbItem>
          <MDBBreadcrumbItem appendIcon active>
            Data
          </MDBBreadcrumbItem>
        </MDBBreadcrumb>

        <MDBBreadcrumb color="red lighten-4">
          <MDBBreadcrumbItem appendIcon icon="angle-double-left">
            Home
          </MDBBreadcrumbItem>
          <MDBBreadcrumbItem appendIcon icon="angle-double-left">
            Library
          </MDBBreadcrumbItem>
          <MDBBreadcrumbItem appendIcon active>
            Data
          </MDBBreadcrumbItem>
        </MDBBreadcrumb>

        <MDBBreadcrumb color="cyan lighten-4">
          <MDBBreadcrumbItem appendIcon icon="angle-left">
            Home
          </MDBBreadcrumbItem>
          <MDBBreadcrumbItem appendIcon icon="angle-left">
            Library
          </MDBBreadcrumbItem>
          <MDBBreadcrumbItem appendIcon active>
            Data
          </MDBBreadcrumbItem>
        </MDBBreadcrumb>

        <MDBBreadcrumb color="amber lighten-4">
          <MDBBreadcrumbItem appendIcon icon="caret-left">
            Home
          </MDBBreadcrumbItem>
          <MDBBreadcrumbItem appendIcon icon="caret-left">
            Library
          </MDBBreadcrumbItem>
          <MDBBreadcrumbItem appendIcon active>
            Data
          </MDBBreadcrumbItem>
        </MDBBreadcrumb>
      </SectionContainer>

      <SectionContainer header="With hamburger button">
        <MDBNavbar color="indigo" style={{ marginTop: "20px" }} dark>
          <span className="navbar-toggler-icon" />
          <MDBNavbarNav left>
            <MDBBreadcrumb color="indigo">
              <MDBBreadcrumbItem>Home</MDBBreadcrumbItem>
              <MDBBreadcrumbItem active>Library</MDBBreadcrumbItem>
            </MDBBreadcrumb>
          </MDBNavbarNav>
          <MDBNavbarNav right>
            <MDBNavItem>
              <input
                className="form-control form-control-sm ml-3 w-75"
                type="text"
                placeholder="Search"
                aria-label="Search"
              />
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBNavbar>
      </SectionContainer>
    </MDBContainer>
  );
};

export default BreadcrumbPage;
