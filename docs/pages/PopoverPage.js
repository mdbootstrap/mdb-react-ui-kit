import React from "react";
import { MDBPopover, MDBPopoverBody, MDBPopoverHeader, MDBContainer } from "mdbreact";
import DocsLink from "./../components/docsLink";

const PopoverPage = () => {
  return (
    <MDBContainer>
      <DocsLink
        title="Popovers"
        href="https://mdbootstrap.com/docs/react/advanced/popovers/"
      />
      <div style={{ display: "flex" }} className="m-5 p-5">
        <MDBPopover
          component="button"
          placement="top"
          popoverBody="popover on top"
          className="btn btn-default"
        >
          <MDBPopoverHeader>popover on top</MDBPopoverHeader>
          <MDBPopoverBody>
            Sed posuere consectetur est at lobortis. Aenean eu leo quam.
            Pellentesque ornare sem lacinia quam venenatis vestibulum.
          </MDBPopoverBody>
        </MDBPopover>
        <MDBPopover
          component="button"
          placement="right"
          popoverBody="popover on right"
          className="btn btn-default"
        >
          <MDBPopoverHeader>popover on right</MDBPopoverHeader>
          <MDBPopoverBody>
            Sed posuere consectetur est at lobortis. Aenean eu leo quam.
            Pellentesque ornare sem lacinia quam venenatis vestibulum.
          </MDBPopoverBody>
        </MDBPopover>
        <MDBPopover
          component="button"
          placement="bottom"
          popoverBody="popover on bottom"
          className="btn btn-default"
        >
          <MDBPopoverHeader>popover on bottom</MDBPopoverHeader>
          <MDBPopoverBody>
            Sed posuere consectetur est at lobortis. Aenean eu leo quam.
            Pellentesque ornare sem lacinia quam venenatis vestibulum.
          </MDBPopoverBody>
        </MDBPopover>
        <MDBPopover
          component="button"
          placement="left"
          popoverBody="popover on left"
          className="btn btn-default"
        >
          <MDBPopoverHeader>popover on left</MDBPopoverHeader>
          <MDBPopoverBody>
            Sed posuere consectetur est at lobortis. Aenean eu leo quam.
            Pellentesque ornare sem lacinia quam venenatis vestibulum.
          </MDBPopoverBody>
        </MDBPopover>
      </div>
    </MDBContainer>
  );
}

export default PopoverPage;
