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
      <div className="d-flex m-5 p-5 justify-content-center">
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
      <h4 className="mt-5">Popover with image</h4>
      <div className="d-flex justify-content-center">
        <MDBPopover
          component="button"
          placement="left"
          popoverBody="click me"
          className="btn btn-purple"
        >
          <MDBPopoverBody>
            <img src="https://mdbootstrap.com/img/Others/documentation/img%20(30)-mini.jpg" alt="" />
          </MDBPopoverBody>
        </MDBPopover>
        <MDBPopover
          component="button"
          placement="bottom"
          popoverBody="click me"
          className="btn btn-purple"
        >
          <MDBPopoverBody>
            <img src="https://mdbootstrap.com/img/logo/mdb192x192.jpg" alt="" />
          </MDBPopoverBody>
        </MDBPopover>
        <MDBPopover
          component="button"
          placement="top"
          popoverBody="click me"
          className="btn btn-purple"
        >
          <MDBPopoverBody>
            <img src="//placehold.it/100x50" alt="" />
          </MDBPopoverBody>
        </MDBPopover>
        <MDBPopover
          component="button"
          placement="right"
          popoverBody="click me"
          className="btn btn-purple"
        >
          <MDBPopoverBody>
            <img src="//placehold.it/50x50" alt="" />
          </MDBPopoverBody>
        </MDBPopover>
      </div>

    </MDBContainer >
  );
}

export default PopoverPage;
