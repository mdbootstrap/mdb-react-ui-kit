import React from "react";
import { MDBBtn, MDBBtnGroup, MDBIcon, MDBContainer } from "mdbreact";
import DocsLink from "./DocsLink";

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
      </div>
    </MDBContainer>
  );
};

export default ButtonPage;
