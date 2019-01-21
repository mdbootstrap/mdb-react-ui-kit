import React from "react";
import { MDBContainer, MDBAlert } from 'mdbreact';
import DocsLink from "../components/docsLink";

const AlertPage = () => {
  return (
    <MDBContainer>
      <DocsLink
        title="Alerts"
        href="https://mdbootstrap.com/docs/react/advanced/alerts/"
      />
      <MDBAlert color="success">
        <h4 className="alert-heading">Well done!</h4>
        <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
        <hr />
        <p className="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
      </MDBAlert>

      <MDBAlert color="danger" dismiss onClose={()=> alert('This event fires immediately when the close instance method is called.')} onClosed={()=> alert('This event is fired when the alert has been closed (will wait for CSS transitions to complete).')}>
        Alert component exposes a few events for hooking into alert functionality.
      </MDBAlert>
      <MDBAlert color="primary" dismiss>
        A simple primary alert—check it out!
      </MDBAlert>
      <MDBAlert color="secondary" dismiss>
        A simple secondary alert—check it out!
      </MDBAlert>
      <MDBAlert color="success" dismiss>
        A simple success alert—check it out!
      </MDBAlert>
      <MDBAlert color="danger" dismiss>
        A simple success alert—check it out!
      </MDBAlert>
      <MDBAlert color="warning" dismiss>
        A simple warning alert—check it out!
      </MDBAlert>
      <MDBAlert color="info" dismiss>
        A simple info alert—check it out!
      </MDBAlert>
      <MDBAlert color="light" dismiss>
        A simple light alert—check it out!
      </MDBAlert>
      <MDBAlert color="dark" dismiss>
        A simple dark alert—check it out!
      </MDBAlert>

      <MDBAlert color="primary">
        A simple primary alert with <a href="#!" className="alert-link">an example link</a>. Give it a click if you like.
      </MDBAlert>
      <MDBAlert color="secondary">
        A simple primary alert with <a href="#!" className="alert-link">an example link</a>. Give it a click if you like.
      </MDBAlert>
      <MDBAlert color="success">
        A simple primary alert with <a href="#!" className="alert-link">an example link</a>. Give it a click if you like.
      </MDBAlert>
      <MDBAlert color="danger">
        A simple primary alert with <a href="#!" className="alert-link">an example link</a>. Give it a click if you like.
      </MDBAlert>
      <MDBAlert color="warning">
        A simple primary alert with <a href="#!" className="alert-link">an example link</a>. Give it a click if you like.
      </MDBAlert>
      <MDBAlert color="info">
        A simple primary alert with <a href="#!" className="alert-link">an example link</a>. Give it a click if you like.
      </MDBAlert>
      <MDBAlert color="light">
        A simple primary alert with <a href="#!" className="alert-link">an example link</a>. Give it a click if you like.
      </MDBAlert>
      <MDBAlert color="dark">
        A simple primary alert with <a href="#!" className="alert-link">an example link</a>. Give it a click if you like.
      </MDBAlert>
    </MDBContainer>
  );
};

export default AlertPage;
