import React from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Container
} from "mdbreact";
import DocsLink from "./DocsLink";

class DropdownPage extends React.Component {
  render() {
    return (
      <Container>
        <DocsLink
          title="Dropdown"
          href="https://mdbootstrap.com/react/components/dropdowns/"
        />
        <div className="container">
          <h2>Basic example</h2>
          <Dropdown>
            <DropdownToggle caret color="primary">
              Material dropdown
            </DropdownToggle>
            <DropdownMenu basic>
              <DropdownItem href="#">Action</DropdownItem>
              <DropdownItem href="#">Another Action</DropdownItem>
              <DropdownItem href="#">Something else here</DropdownItem>
              <DropdownItem href="#">Something else here</DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <Dropdown>
            <DropdownToggle caret color="danger">
              Material dropdown
            </DropdownToggle>
            <DropdownMenu basic>
              <DropdownItem>Action</DropdownItem>
              <DropdownItem>Another Action</DropdownItem>
              <DropdownItem>Something else here</DropdownItem>
              <DropdownItem>Something else here</DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <Dropdown>
            <DropdownToggle caret color="success">
              Material dropdown
            </DropdownToggle>
            <DropdownMenu basic>
              <DropdownItem>Action</DropdownItem>
              <DropdownItem>Another Action</DropdownItem>
              <DropdownItem>Something else here</DropdownItem>
              <DropdownItem>Something else here</DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <br />
          <h2>Sizing</h2>
          <Dropdown size="lg">
            <DropdownToggle caret>Large Button</DropdownToggle>
            <DropdownMenu basic>
              <DropdownItem>Action</DropdownItem>
              <DropdownItem>Another Action</DropdownItem>
              <DropdownItem>Something else here</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Separated link</DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <Dropdown size="sm">
            <DropdownToggle caret color="primary">
              Small Button
            </DropdownToggle>
            <DropdownMenu basic>
              <DropdownItem>Action</DropdownItem>
              <DropdownItem>Another Action</DropdownItem>
              <DropdownItem>Something else here</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Separated link</DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <br />
          <h2>Dropup variation</h2>
          <Dropdown dropup>
            <DropdownToggle caret color="primary">
              Dropup
            </DropdownToggle>
            <DropdownMenu basic>
              <DropdownItem>Action</DropdownItem>
              <DropdownItem>Another Action</DropdownItem>
              <DropdownItem>Something else here</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Separated link</DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <br />
          <h2>Alignment</h2>
          <Dropdown>
            <DropdownToggle caret color="primary">
              This dropdown&apos;s menu is right-aligned
            </DropdownToggle>
            <DropdownMenu right basic>
              <DropdownItem>Action</DropdownItem>
              <DropdownItem>Another Action</DropdownItem>
              <DropdownItem>Something else here</DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <br />
          <h2>Menu headers</h2>
          <Dropdown>
            <DropdownToggle caret color="primary">
              Dropdown
            </DropdownToggle>
            <DropdownMenu basic>
              <DropdownItem header>Dropdown header</DropdownItem>
              <DropdownItem>Action</DropdownItem>
              <DropdownItem>Another Action</DropdownItem>
              <DropdownItem>Something else here</DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <br />
          <h2>Menu dividers</h2>
          <Dropdown>
            <DropdownToggle caret color="primary">
              Dropdown
            </DropdownToggle>
            <DropdownMenu basic>
              <DropdownItem>Action</DropdownItem>
              <DropdownItem>Another Action</DropdownItem>
              <DropdownItem>Something else here</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Separated link</DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <br />
          <h2>Disabled menu items</h2>
          <Dropdown>
            <DropdownToggle caret color="primary">
              Dropdown
            </DropdownToggle>
            <DropdownMenu basic>
              <DropdownItem>Regular link</DropdownItem>
              <DropdownItem disabled href="#">
                Disabled link
              </DropdownItem>
              <DropdownItem href="#">Another link</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </Container>
    );
  }
}

export default DropdownPage;
