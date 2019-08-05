import React, { Component } from "react";
import {
  MDBContainer,
  MDBTreeview,
  MDBTreeviewList,
  MDBTreeviewItem,
  MDBCol,
  MDBRow
} from "mdbreact";
import DocsLink from "../components/docsLink";
import SectionContainer from "../components/sectionContainer";

class TreeviewPage extends Component {
  state = {
    folderOpen: false
  }

  handleSwitchChange = () => {
    this.setState({
      folderOpen: !this.state.folderOpen
    });
  }

  render() {
    return (
      <MDBContainer>
        <DocsLink
          title="Tabs"
          href="https://mdbootstrap.com/plugins/react/treeview/"
        />
        <SectionContainer header="Basic example">
          <MDBCol md="4">
            <MDBTreeview
              header="Folders"
              className="w-20"
              getValue={value => console.log(value)}
            >
              <MDBTreeviewList icon="envelope-open" title="Mail" far>
                <MDBTreeviewItem icon="address-book" title="Contact" far />
                <MDBTreeviewItem icon="bell" title="Offer" far />
                <MDBTreeviewList icon="calendar" title="Calendar" far>
                  <MDBTreeviewItem icon="clock" title="Deadlines" far />
                  <MDBTreeviewItem icon="users" title="Meetings" />
                  <MDBTreeviewItem icon="basketball-ball" title="Workouts" />
                  <MDBTreeviewItem icon="mug-hot" title="Events" />
                </MDBTreeviewList>
              </MDBTreeviewList>
              <MDBTreeviewList title="Inbox">
                <MDBTreeviewItem title="Admin" far />
                <MDBTreeviewItem title="Corporate" far />
                <MDBTreeviewItem title="Finance" far />
                <MDBTreeviewItem title="Other" far />
              </MDBTreeviewList>
              <MDBTreeviewList icon="gem" title="Favourites" far>
                <MDBTreeviewItem icon="pepper-hot" title="Restaurants" />
                <MDBTreeviewItem icon="eye" title="Places" far />
                <MDBTreeviewItem icon="gamepad" title="Games" />
                <MDBTreeviewItem icon="cocktail" title="Cocktails" />
                <MDBTreeviewItem icon="pizza-slice" title="Food" />
              </MDBTreeviewList>
              <MDBTreeviewItem icon="comment" title="Notes" far />
              <MDBTreeviewItem icon="cog" title="Settings" />
              <MDBTreeviewItem icon="desktop" title="Devices" />
              <MDBTreeviewItem icon="trash-alt" title="Deleted items" />
            </MDBTreeview>
          </MDBCol>
        </SectionContainer>

        <SectionContainer header="Animated">
          <MDBCol md="4">
            <MDBTreeview
              theme="animated"
              header="Folders"
              className="w-20"
              getValue={value => console.log(value)}
            >
              <MDBTreeviewList icon="envelope-open" title="Mail" far open>
                <MDBTreeviewItem icon="address-book" title="Contact" far />
                <MDBTreeviewItem icon="bell" title="Offer" far />
                <MDBTreeviewList icon="calendar" title="Calendar" far open>
                  <MDBTreeviewItem icon="clock" title="Deadlines" far />
                  <MDBTreeviewItem icon="users" title="Meetings" opened />
                  <MDBTreeviewItem icon="basketball-ball" title="Workouts" />
                  <MDBTreeviewItem icon="mug-hot" title="Events" />
                </MDBTreeviewList>
              </MDBTreeviewList>
              <MDBTreeviewList title="Inbox" far>
                <MDBTreeviewItem title="Admin" far />
                <MDBTreeviewItem title="Corporate" far />
                <MDBTreeviewItem title="Finance" far />
                <MDBTreeviewItem title="Other" far />
              </MDBTreeviewList>
              <MDBTreeviewList icon="gem" title="Favourites" far>
                <MDBTreeviewItem icon="pepper-hot" title="Restaurants" />
                <MDBTreeviewItem icon="eye" title="Places" far />
                <MDBTreeviewItem icon="gamepad" title="Games" />
                <MDBTreeviewItem icon="cocktail" title="Cocktails" />
                <MDBTreeviewItem icon="pizza-slice" title="Food" />
              </MDBTreeviewList>
              <MDBTreeviewItem icon="comment" title="Notes" far />
              <MDBTreeviewItem icon="cog" title="Settings" />
              <MDBTreeviewItem icon="desktop" title="Devices" />
              <MDBTreeviewItem icon="trash-alt" title="Deleted items" />
            </MDBTreeview>
          </MDBCol>
        </SectionContainer>

        <SectionContainer header="Colorful">
          <MDBCol md="4">
            <MDBTreeview
              theme="colorful"
              header="Folders"
              className="border-secondary w-20 "
              getValue={value => console.log(value)}
            >
              <MDBTreeviewList icon="envelope-open" title="Mail" far>
                <MDBTreeviewItem icon="address-book" title="Contact" far />
                <MDBTreeviewItem icon="bell" title="Offer" far />
                <MDBTreeviewList icon="calendar" title="Calendar" far>
                  <MDBTreeviewItem icon="clock" title="Deadlines" far />
                  <MDBTreeviewItem icon="users" title="Meetings" />
                  <MDBTreeviewItem icon="basketball-ball" title="Workouts" />
                  <MDBTreeviewItem icon="mug-hot" title="Events" />
                </MDBTreeviewList>
              </MDBTreeviewList>
              <MDBTreeviewList title="Inbox" far>
                <MDBTreeviewItem title="Admin" far />
                <MDBTreeviewItem title="Corporate" far />
                <MDBTreeviewItem title="Finance" far />
                <MDBTreeviewItem title="Other" far />
              </MDBTreeviewList>
              <MDBTreeviewList icon="gem" title="Favourites" far>
                <MDBTreeviewItem icon="pepper-hot" title="Restaurants" />
                <MDBTreeviewItem icon="eye" title="Places" far />
                <MDBTreeviewItem icon="gamepad" title="Games" />
                <MDBTreeviewItem icon="cocktail" title="Cocktails" />
                <MDBTreeviewItem icon="pizza-slice" title="Food" />
              </MDBTreeviewList>
              <MDBTreeviewItem icon="comment" title="Notes" far />
              <MDBTreeviewItem icon="cog" title="Settings" />
              <MDBTreeviewItem icon="desktop" title="Devices" />
              <MDBTreeviewItem icon="trash-alt" title="Deleted items" />
            </MDBTreeview>
          </MDBCol>
        </SectionContainer>

        <SectionContainer header="Control elements">
          <MDBRow>
          <MDBCol md="4">
            <MDBTreeview
              theme="animated"
              header="Open and disabled elements"
              className="border-secondary w-20 "
              getValue={value => console.log(value)}
            >
              <MDBTreeviewList icon="envelope-open" title="Normal folder" far>
                <MDBTreeviewItem icon="address-book" title="Contact" far/>
                <MDBTreeviewItem icon="bell" title="Offer" far />
                <MDBTreeviewList icon="calendar" title="Calendar" far>
                  <MDBTreeviewItem icon="clock" title="Deadlines" far />
                  <MDBTreeviewItem icon="users" title="Meetings" />
                  <MDBTreeviewItem icon="basketball-ball" title="Workouts" />
                  <MDBTreeviewItem icon="mug-hot" title="Events" />
                </MDBTreeviewList>
              </MDBTreeviewList>
              <MDBTreeviewList title="Disabled folder" icon="folder-minus" disabled disabledClassName="disabled text-muted"/>
              <MDBTreeviewList icon="gem" title="Opened folder" opened far>
                <MDBTreeviewItem icon="pepper-hot" title="Restaurants" />
                <MDBTreeviewItem icon="eye" title="Places" far />
                <MDBTreeviewItem icon="gamepad" title="Games" />
              </MDBTreeviewList>
              <MDBTreeviewList icon="folder-open" title="Opened and disabled folder" opened disabled disabledClassName="disabled">
                <MDBTreeviewItem icon="folder" title="Normal item" />
                <MDBTreeviewItem icon="folder-minus" title="Disabled item" disabled disabledClassName="disabled text-muted"/>
                <MDBTreeviewItem icon="folder" far title="Opened item" opened />
              </MDBTreeviewList>
            </MDBTreeview>
            
          </MDBCol>
          </MDBRow>
        </SectionContainer>
      </MDBContainer>
    );
  }
}

export default TreeviewPage;
