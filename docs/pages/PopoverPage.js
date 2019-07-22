import React, { useState } from "react";
import {
  MDBPopover,
  MDBBtn,
  MDBPopoverBody,
  MDBPopoverHeader,
  MDBContainer
} from "mdbreact";
import DocsLink from "./../components/docsLink";
import SectionContainer from "./../components/sectionContainer";

const PopoverPage = () => {
  const [visible, setVisibility] = useState(true);

  return (
    <MDBContainer>
      <DocsLink
        title="Popovers"
        href="https://mdbootstrap.com/docs/react/advanced/popovers/"
      />

      <SectionContainer
        header="With text"
        className="d-flex justify-content-center py-5"
      >
        <MDBPopover
          popover
          clickable
          isVisible={visible}
          id="popper1"
          onChange={val => setVisibility(val)}
        >
          <MDBBtn>popover on top</MDBBtn>
          <div>
            <MDBPopoverHeader className="d-flex justify-content-between align-items-center">
              popover on top{" "}
              <MDBBtn
                size="sm"
                className="py-1 px-2"
                onClick={() => setVisibility(false)}
              >
                X
              </MDBBtn>
            </MDBPopoverHeader>
            <MDBPopoverBody>
              Sed posuere consectetur est at lobortis. Aenean eu leo quam.
              Pellentesque ornare sem lacinia quam venenatis vestibulum.
            </MDBPopoverBody>
          </div>
        </MDBPopover>

        <MDBPopover placement="right" popover clickable id="popper2">
          <MDBBtn>popover on right</MDBBtn>
          <div>
            <MDBPopoverHeader>popover on right</MDBPopoverHeader>
            <MDBPopoverBody>
              Sed posuere consectetur est at lobortis. Aenean eu leo quam.
              Pellentesque ornare sem lacinia quam venenatis vestibulum.
            </MDBPopoverBody>
          </div>
        </MDBPopover>

        <MDBPopover placement="bottom" popover clickable id="popper3">
          <MDBBtn>popover on bottom</MDBBtn>
          <div>
            <MDBPopoverHeader>popover on bottom</MDBPopoverHeader>
            <MDBPopoverBody>
              Sed posuere consectetur est at lobortis. Aenean eu leo quam.
              Pellentesque ornare sem lacinia quam venenatis vestibulum.
            </MDBPopoverBody>
          </div>
        </MDBPopover>

        <MDBPopover placement="left" popover clickable id="popper4">
          <MDBBtn>popover on left</MDBBtn>
          <div>
            <MDBPopoverHeader>popover on left</MDBPopoverHeader>
            <MDBPopoverBody>
              Sed posuere consectetur est at lobortis. Aenean eu leo quam.
              Pellentesque ornare sem lacinia quam venenatis vestibulum.
            </MDBPopoverBody>
          </div>
        </MDBPopover>
      </SectionContainer>

      <SectionContainer
        header="With image"
        className="d-flex justify-content-center py-5"
      >
        <MDBPopover placement="left" popover isVisible clickable id="popper5">
          <MDBBtn color="purple">popover on left</MDBBtn>
          <div>
            <MDBPopoverBody>
              <img
                src="https://mdbootstrap.com/img/Others/documentation/img%20(30)-mini.jpg"
                alt=""
              />
            </MDBPopoverBody>
          </div>
        </MDBPopover>

        <MDBPopover placement="bottom" popover clickable id="popper6">
          <MDBBtn color="purple">popover on bottom</MDBBtn>
          <div>
            <MDBPopoverBody>
              <img
                src="https://mdbootstrap.com/img/logo/mdb192x192.jpg"
                alt=""
              />
            </MDBPopoverBody>
          </div>
        </MDBPopover>

        <MDBPopover placement="top" popover clickable>
          <MDBBtn color="purple">popover on top</MDBBtn>
          <div>
            <MDBPopoverBody>
              <img src="//placehold.it/100x50" alt="" />
            </MDBPopoverBody>
          </div>
        </MDBPopover>

        <MDBPopover placement="right" popover clickable id="popper7">
          <MDBBtn color="purple">popover on right</MDBBtn>
          <div>
            <MDBPopoverBody>
              <img src="//placehold.it/50x50" alt="" />
            </MDBPopoverBody>
          </div>
        </MDBPopover>
      </SectionContainer>
    </MDBContainer>
  );
};

export default PopoverPage;
