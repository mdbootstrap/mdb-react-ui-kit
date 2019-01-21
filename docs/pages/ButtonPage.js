import React from "react";
import { MDBBtn, MDBBtnGroup, MDBIcon, MDBContainer, MDBCol, MDBRow, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";
import DocsLink from "../components/docsLink";

const ButtonPage = props => {
  return (
    <MDBContainer>
      <DocsLink
        title="Buttons"
        href="https://mdbootstrap.com/docs/react/components/buttons/"
      />
      <div className="container-fluid text-center">
        <div>
          <MDBBtn disabled color="primary">
            Primary disabled
          </MDBBtn>
          <MDBBtn disabled href="#" color="primary">
            Primary href disabled
          </MDBBtn>
          <MDBBtn
            active
            href="https://www.mdbootstrap.com"
            target="_blank"
            color="primary"
          >
            Primary href target blank
          </MDBBtn>
          <MDBBtn active color="primary">
            Primary active
          </MDBBtn>
          <MDBBtn color="primary">Primary</MDBBtn>
          <MDBBtn>Default</MDBBtn>
          <MDBBtn color="secondary">Secondary</MDBBtn>
          <MDBBtn color="success">Success</MDBBtn>
          <MDBBtn color="info">Info</MDBBtn>
          <MDBBtn color="warning">Warning</MDBBtn>
          <MDBBtn color="danger">Danger</MDBBtn>
          <br />
          <MDBBtn color="elegant">Elegant</MDBBtn>
          <MDBBtn color="unique">Unique</MDBBtn>
          <MDBBtn color="pink">Pink</MDBBtn>
          <MDBBtn color="purple">Purple</MDBBtn>
          <MDBBtn color="deep-purple">Deep-purple</MDBBtn>
          <MDBBtn color="indigo">Indigo</MDBBtn>
          <MDBBtn color="light-blue">Light blue</MDBBtn>
          <MDBBtn color="cyan">Cyan</MDBBtn>
          <MDBBtn color="dark-green">Dark-green</MDBBtn>
          <MDBBtn color="light-green">Light-green</MDBBtn>
          <MDBBtn color="yellow">Yellow</MDBBtn>
          <MDBBtn color="amber">Amber</MDBBtn>
          <MDBBtn color="deep-orange">Deep-orange</MDBBtn>
          <MDBBtn color="brown">Brown</MDBBtn>
          <MDBBtn color="blue-grey">Blue-grey</MDBBtn>
          <MDBBtn color="mdb-color">MDB</MDBBtn>
          <br />
          <MDBBtn outline color="primary">
            Primary
          </MDBBtn>
          <MDBBtn outline>Default</MDBBtn>
          <MDBBtn outline color="secondary">
            Secondary
          </MDBBtn>
          <MDBBtn outline color="success">
            Success
          </MDBBtn>
          <MDBBtn outline color="info">
            Info
          </MDBBtn>
          <MDBBtn outline color="warning">
            Warning
          </MDBBtn>
          <MDBBtn outline color="danger">
            Danger
          </MDBBtn>
          <br />
          <MDBBtn color="primary">
            <MDBIcon icon="magic" className="mr-1" /> Left
          </MDBBtn>
          <MDBBtn color="default">
            Right <MDBIcon icon="magic" className="ml-1" />
          </MDBBtn>
          <br />
          <MDBBtn color="primary" href="#">
            Link
          </MDBBtn>
          <MDBBtn color="primary" type="submit">
            MDBBtn
          </MDBBtn>

          <br />

          <MDBBtn block>Block level button</MDBBtn>
          <MDBBtn block color="primary">
            Block level button
          </MDBBtn>

          <br />

          <MDBBtn color="light-green">light-green</MDBBtn>
          <MDBBtn color="mdb">MDB</MDBBtn>
          <MDBBtn color="success" outline>
            Success
          </MDBBtn>
          <MDBBtn color="danger" outline>
            Danger
          </MDBBtn>
          <MDBBtn color="warning" outline>
            Warning
          </MDBBtn>
          <MDBBtn color="default" block size="lg">
            Default
          </MDBBtn>
        </div>
        <div>
          <MDBBtnGroup vertical>
            <MDBBtn>Left</MDBBtn>
            <MDBBtn>Middle</MDBBtn>
            <MDBBtn>Right</MDBBtn>
          </MDBBtnGroup>
          <br />
          <br />
          <MDBBtnGroup size="lg">
            <MDBBtn>Left</MDBBtn>
            <MDBBtn>Middle</MDBBtn>
            <MDBBtn>Right</MDBBtn>
          </MDBBtnGroup>
          <br />
          <br />
          <MDBBtnGroup>
            <MDBBtn>Left</MDBBtn>
            <MDBBtn>Middle</MDBBtn>
            <MDBBtn>Right</MDBBtn>
          </MDBBtnGroup>
          <br />
          <br />
          <MDBBtnGroup size="sm">
            <MDBBtn>Left</MDBBtn>
            <MDBBtn>Middle</MDBBtn>
            <MDBBtn>Right</MDBBtn>
          </MDBBtnGroup>
        </div>

        <hr className="my-5" />

        <MDBRow center>
          <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
            <MDBBtnGroup className="mr-2">
              <MDBBtn>1</MDBBtn>
              <MDBBtn>2</MDBBtn>
              <MDBBtn>3</MDBBtn>
              <MDBBtn>4</MDBBtn>
            </MDBBtnGroup>
            <MDBBtnGroup className="mr-2">
              <MDBBtn>5</MDBBtn>
              <MDBBtn>6</MDBBtn>
              <MDBBtn>7</MDBBtn>
            </MDBBtnGroup>
            <MDBBtnGroup>
              <MDBBtn>8</MDBBtn>
            </MDBBtnGroup>
          </div>
        </MDBRow>


        <hr className="my-5" />

        <MDBRow>
          <MDBCol md='12' className="mb-4">
            <MDBBtnGroup size="lg">
              <MDBBtn color="unique">Left</MDBBtn>
              <MDBBtn color="unique">Middle</MDBBtn>
              <MDBBtn color="unique">Right</MDBBtn>
            </MDBBtnGroup>
          </MDBCol>
          <MDBCol md='12' className="mb-4">
            <MDBBtnGroup>
              <MDBBtn color="unique">Left</MDBBtn>
              <MDBBtn color="unique">Middle</MDBBtn>
              <MDBBtn color="unique">Right</MDBBtn>
            </MDBBtnGroup>
          </MDBCol>
          <MDBCol md='12' className="mb-4">
            <MDBBtnGroup size="sm">
              <MDBBtn color="unique">Left</MDBBtn>
              <MDBBtn color="unique">Middle</MDBBtn>
              <MDBBtn color="unique">Right</MDBBtn>
            </MDBBtnGroup>
          </MDBCol>
        </MDBRow>

        <hr className="my-5" />

        <MDBBtnGroup>
          <MDBBtn color="info" size="lg">1</MDBBtn>
          <MDBBtn color="info" size="lg">2</MDBBtn>
          <MDBBtnGroup>
            <MDBDropdown>
              <MDBDropdownToggle caret color="info" className="h-100">
                Dropdown
              </MDBDropdownToggle>
              <MDBDropdownMenu basic color="info">
                <MDBDropdownItem>Dropdown link</MDBDropdownItem>
                <MDBDropdownItem>Dropdown link</MDBDropdownItem>
              </MDBDropdownMenu>
            </MDBDropdown>
          </MDBBtnGroup>
        </MDBBtnGroup>

        <hr className="my-5" />


         <MDBRow center>
          <MDBCol xl="2" lg="3" md="4" className="mb-md-0 mb-4">
            <MDBBtnGroup vertical>
                <MDBBtn color="amber" className="ml-0">Button</MDBBtn>
                <MDBBtn color="amber">Button</MDBBtn>
                <MDBBtn color="amber">Button</MDBBtn>
                <MDBBtn color="amber">Button</MDBBtn>
                <MDBBtn color="amber">Button</MDBBtn>
                <MDBBtn color="amber">Button</MDBBtn>
            </MDBBtnGroup>
          </MDBCol>

          <MDBCol xl="2" lg="3" md="4">
            <MDBBtnGroup vertical>
              <MDBBtn color="indigo" className="ml-0">Button</MDBBtn>
              <MDBBtn color="indigo">Button</MDBBtn>

              <MDBDropdown className="w-100">
                <MDBDropdownToggle caret color="indigo" className="m-0">
                  Dropdown
              </MDBDropdownToggle>
                <MDBDropdownMenu basic color="info">
                  <MDBDropdownItem>Dropdown link</MDBDropdownItem>
                  <MDBDropdownItem>Dropdown link</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>

              <MDBBtn color="indigo">Button</MDBBtn>
              <MDBBtn color="indigo">Button</MDBBtn>

              <MDBDropdown className="w-100" >
                <MDBDropdownToggle caret color="indigo" className="m-0 rounded-0">
                  Dropdown
              </MDBDropdownToggle>
                <MDBDropdownMenu basic color="indigo">
                  <MDBDropdownItem>Dropdown link</MDBDropdownItem>
                  <MDBDropdownItem>Dropdown link</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
              <MDBDropdown className="w-100">
                <MDBDropdownToggle caret color="indigo" className="m-0 rounded-0">
                  Dropdown
              </MDBDropdownToggle>
                <MDBDropdownMenu basic color="indigo">
                  <MDBDropdownItem>Dropdown link</MDBDropdownItem>
                  <MDBDropdownItem>Dropdown link</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
              <MDBDropdown className="w-100">
                <MDBDropdownToggle caret color="indigo" className="m-0 rounded-0">
                  Dropdown
              </MDBDropdownToggle>
                <MDBDropdownMenu basic color="indigo">
                  <MDBDropdownItem>Dropdown link</MDBDropdownItem>
                  <MDBDropdownItem>Dropdown link</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>

            </MDBBtnGroup>
          </MDBCol>


        </MDBRow>

        <hr className="my-5" />

        <MDBRow>
            <MDBCol xl="5" md="6" className="mb-xl-0 mb-4">

              <MDBBtnGroup size="lg" className="mb-4" >
                <MDBBtn color="primary">Left</MDBBtn>
                <MDBBtn color="warning">Left</MDBBtn>
                <MDBBtn color="danger">Left</MDBBtn>
              </MDBBtnGroup>

              <MDBBtnGroup className="mb-4" >
                <MDBBtn color="primary">Left</MDBBtn>
                <MDBBtn color="warning">Left</MDBBtn>
                <MDBBtn color="danger">Left</MDBBtn>
              </MDBBtnGroup>

              <MDBBtnGroup size="sm" className="mb-4" >
                <MDBBtn color="primary">Left</MDBBtn>
                <MDBBtn color="warning">Left</MDBBtn>
                <MDBBtn color="danger">Left</MDBBtn>
              </MDBBtnGroup>

            </MDBCol>

            <MDBCol xl="3" md="12" className="mb-xl-0 mb-4">
              <MDBBtnGroup vertical>
                <MDBBtn color="primary" className="ml-0">1</MDBBtn>
                <MDBBtn color="pink">2</MDBBtn>
                <MDBBtn color="success">3</MDBBtn>
                <MDBBtn color="amber">4</MDBBtn>
                <MDBBtn color="red">5</MDBBtn>
              </MDBBtnGroup>
            </MDBCol>

            <MDBCol xl="4" md="12">
              <div className="btn-toolbar mb-4" role="toolbar">
                <MDBBtnGroup className="mr-2">
                  <MDBBtn color="mdb-color lighten-2">1</MDBBtn>
                  <MDBBtn color="indigo lighten-2">2</MDBBtn>
                  <MDBBtn color="blue lighten-2">3</MDBBtn>
                  <MDBBtn color="light-blue lighten-2">4</MDBBtn>
                  <MDBBtn color="cyan lighten-2">5</MDBBtn>
                </MDBBtnGroup>
              </div>
              <div className="btn-toolbar" role="toolbar" >
                <MDBBtnGroup className="mr-2">
                  <MDBBtn color="indigo lighten-2"><MDBIcon icon="hourglass-start" /></MDBBtn>
                  <MDBBtn color="blue lighten-2"><MDBIcon icon="heart" /></MDBBtn>
                  <MDBBtn color="light-blue lighten-2"><MDBIcon icon="user" /></MDBBtn>
                  <MDBBtn color="cyan lighten-2"><MDBIcon icon="twitter" brand /></MDBBtn>
                </MDBBtnGroup>
              </div>
            </MDBCol>

        </MDBRow>
      </div>
    </MDBContainer>
  );
};

export default ButtonPage;
