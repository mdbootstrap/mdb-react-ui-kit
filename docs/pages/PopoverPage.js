import React from "react";
import { Popover, PopoverBody, PopoverHeader, Container } from "mdbreact";
import DocsLink from "./DocsLink";

class PopoverPage extends React.Component {
  render() {
    return (
      <Container>
        <DocsLink
          title="Popovers"
          href="https://mdbootstrap.com/react/advanced/popovers/"
        />
        <div style={{ display: "flex" }} className="m-5 p-5">
          <Popover
            component="button"
            placement="top"
            popoverBody="popover on top"
            className="btn btn-default"
          >
            <PopoverHeader>popover on top</PopoverHeader>
            <PopoverBody>
              Sed posuere consectetur est at lobortis. Aenean eu leo quam.
              Pellentesque ornare sem lacinia quam venenatis vestibulum.
            </PopoverBody>
          </Popover>
          <Popover
            component="button"
            placement="right"
            popoverBody="popover on right"
            className="btn btn-default"
          >
            <PopoverHeader>popover on right</PopoverHeader>
            <PopoverBody>
              Sed posuere consectetur est at lobortis. Aenean eu leo quam.
              Pellentesque ornare sem lacinia quam venenatis vestibulum.
            </PopoverBody>
          </Popover>
          <Popover
            component="button"
            placement="bottom"
            popoverBody="popover on bottom"
            className="btn btn-default"
          >
            <PopoverHeader>popover on bottom</PopoverHeader>
            <PopoverBody>
              Sed posuere consectetur est at lobortis. Aenean eu leo quam.
              Pellentesque ornare sem lacinia quam venenatis vestibulum.
            </PopoverBody>
          </Popover>
          <Popover
            component="button"
            placement="left"
            popoverBody="popover on left"
            className="btn btn-default"
          >
            <PopoverHeader>popover on left</PopoverHeader>
            <PopoverBody>
              Sed posuere consectetur est at lobortis. Aenean eu leo quam.
              Pellentesque ornare sem lacinia quam venenatis vestibulum.
            </PopoverBody>
          </Popover>
        </div>
      </Container>
    );
  }
}
export default PopoverPage;
