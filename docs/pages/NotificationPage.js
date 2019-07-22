import React, { Component } from "react";
import { MDBNotification, MDBContainer } from "mdbreact";
import DocsLink from "../components/docsLink";
import SectionContainer from "../components/sectionContainer";

class NotificationPage extends Component {
  render() {
    return (
      <MDBContainer>
        <DocsLink
          title="Notifications"
          href="https://mdbootstrap.com/docs/react/addons/notification/"
        />

        <SectionContainer header="Default"z>
          <MDBNotification
            iconClassName="text-primary"
            show
            fade
            title="Bootstrap"
            message="Hello, world! This is a toast message."
            text="11 mins ago"
          />
        </SectionContainer>

        <SectionContainer
          title="Accessibility"
          description="Notification with autohide! Refresh page and wait 3 sec"
        >
          <MDBNotification
            iconClassName="text-primary"
            show
            fade
            title="Bootstrap"
            message="Hello, world! This is a toast message."
            text="11 mins ago"
            autohide={3000}
          />
        </SectionContainer>

        <SectionContainer header="Custom icons">
          <MDBNotification
            iconClassName="green-text"
            icon="envelope"
            show
            fade
            title="Bootstrap"
            message="Hello, world! This is a toast message."
            text="11 mins ago"
          />
        </SectionContainer>

        <SectionContainer header="Translucent" dark>
          <MDBNotification
            iconClassName="text-primary"
            show
            fade
            title="Bootstrap"
            message="Hello, world! This is a toast message."
            text="11 mins ago"
          />
        </SectionContainer>

        <SectionContainer header="Stacking">
          <MDBNotification
            iconClassName="text-primary"
            show
            fade
            title="Bootstrap"
            message="See? Just like this."
            text="just now"
          />
          <MDBNotification
            iconClassName="text-primary"
            show
            fade
            title="Bootstrap"
            message="Heads up, toasts will stack automatically"
            text="2 seconds ago"
          />
        </SectionContainer>

        <SectionContainer header="Placement" noBorder>
          <SectionContainer dark>
            <div style={{ minHeight: "200px", position: "relative" }}>
              <MDBNotification
                iconClassName="text-primary"
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
          </SectionContainer>
          <SectionContainer
            style={{
              backgroundImage:
                "url('https://mdbootstrap.com/img/Photos/Horizontal/Nature/6-col/img%20(122).jpg')",
              minHeight: "350px"
            }}
          >
            <div style={{ position: "relative" }}>
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  right: 0
                }}
              >
                <MDBNotification
                  iconClassName="text-primary"
                  show
                  fade
                  title="Bootstrap"
                  message="See? Just like this."
                  text="just now"
                />
                <MDBNotification
                  icon="user"
                  show
                  fade
                  title="Bootstrap"
                  message="Heads up, toasts will stack automatically"
                  text="2 seconds ago"
                />
                <MDBNotification
                  iconClassName="green-text"
                  icon="envelope"
                  show
                  fade
                  title="Bootstrap"
                  message="Hello, world! This is a toast message."
                  text="11 mins ago"
                />
              </div>
            </div>
          </SectionContainer>
        </SectionContainer>

        <SectionContainer header="Customizable">
          <MDBNotification
            autohide={0} // by default = ∞ ms
            bodyClassName="p-5 font-weight-bold white-text"
            className="stylish-color-dark"
            closeClassName="blue-grey-text"
            fade
            icon="bell"
            iconClassName="blue-grey-text"
            message="Hello, world! This is a toast message."
            show
            text="11 mins ago"
            title="Bootstrap"
            titleClassName="elegant-color-dark white-text"
          />
        </SectionContainer>
      </MDBContainer>
    );
  }
}

export default NotificationPage;
