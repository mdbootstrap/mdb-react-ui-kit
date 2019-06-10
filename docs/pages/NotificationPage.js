import React, { Component } from "react";
import { MDBNotification, MDBContainer } from "mdbreact";
import DocsLink from "../components/docsLink";

class NotificationPage extends Component {
  render() {
    return (
      <MDBContainer>
        <DocsLink
          title="Notifications"
          href="https://mdbootstrap.com/docs/react/addons/notification/"
        />
        <h2 className="mt-5">Default</h2>
        <MDBNotification
          show
          fade
          title="Bootstrap"
          message="Hello, world! This is a toast message."
          text="11 mins ago"
        />
        <h2 className="mt-5">Translucent</h2>
        <MDBContainer className="grey darken-3 p-3">
          <MDBNotification
            show
            fade
            title="Bootstrap"
            message="Hello, world! This is a toast message."
            text="11 mins ago"
          />
        </MDBContainer>
        <h2 className="mt-5">Stacking</h2>
        <MDBNotification
          show
          fade
          title="Bootstrap"
          message="See? Just like this."
          text="just now"
        />
        <MDBNotification
          show
          fade
          title="Bootstrap"
          message="Heads up, toasts will stack automatically"
          text="2 seconds ago"
        />
        <h2 className="mt-5">Placement</h2>
        <MDBContainer className="grey darken-3 p-3 mb-5">
          <div style={{ minHeight: "200px", position: "relative" }}>
            <MDBNotification
              show
              fade
              title="Bootstrap"
              message="Hello, world! This is a toast message."
              text="11 mins ago"
              style={{
                position: "absolute",
                top: 0,
                right: 0
              }}
            />
          </div>
        </MDBContainer>
        <MDBContainer className="grey darken-3 p-3  mb-5">
          <div style={{ minHeight: "200px", position: "relative" }}>
            <div
              style={{
                position: "absolute",
                top: 0,
                right: 0
              }}
            >
              <MDBNotification
                show
                fade
                title="Bootstrap"
                message="See? Just like this."
                text="just now"
              />
              <MDBNotification
                show
                fade
                title="Bootstrap"
                message="Heads up, toasts will stack automatically"
                text="2 seconds ago"
              />
            </div>
          </div>
        </MDBContainer>
        <h2 className="mt-5" id="Accessibility">
          Accessibility
        </h2>
        <MDBNotification
          show
          fade
          title="Bootstrap"
          message="Hello, world! This is a toast message."
          text="11 mins ago"
          autohide={7500}
        />
        <p className="mb-5">
          Notification with autohide! Refresh page and wait 7.5 sec
        </p>
        <h2 className="mt-5">Customizable</h2>
        <MDBNotification
          show
          fade
          labelColor="#59698d"
          title="Bootstrap"
          titleClassName="elegant-color-dark white-text"
          closeClassName="blue-grey-text"
          message="Hello, world! This is a toast message."
          bodyClassName="p-5 font-weight-bold white-text"
          text="11 mins ago"
          autohide={0} // by default = ∞ ms
          className="stylish-color-dark"
        />
        <hr
          style={{
            opacity: 0
          }}
          className="mt-5"
        />
      </MDBContainer>
    );
  }
}

export default NotificationPage;
