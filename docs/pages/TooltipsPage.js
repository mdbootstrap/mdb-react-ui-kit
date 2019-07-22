import React from "react";
import { MDBTooltip, MDBContainer, MDBBtn } from "mdbreact";
import DocsLink from "./../components/docsLink";
import SectionContainer from "./../components/sectionContainer";

const TooltipsPage = () => {
  const style = { display: "inline-block", maxWidth: "50vh" };
  return (
    <MDBContainer>
      <DocsLink
        title="Tooltips"
        href="https://mdbootstrap.com/docs/react/advanced/tooltips/"
      />

      <SectionContainer header="Positioning" className="text-center p-5">
        <MDBTooltip placement="top">
          <MDBBtn>Top tooltip</MDBBtn>
          <div>MDBTooltip on top</div>
        </MDBTooltip>

        <div>
          <div style={style} className="text-right">
            <MDBTooltip placement="left">
              <MDBBtn>Left tooltip</MDBBtn>
              <div>MDBTooltip on left</div>
            </MDBTooltip>
          </div>

          <div style={style} className="text-left">
            <MDBTooltip placement="right">
              <MDBBtn>Right tooltip</MDBBtn>
              <div>MDBTooltip on right</div>
            </MDBTooltip>
          </div>
        </div>

        <MDBTooltip placement="bottom">
          <MDBBtn>Top tooltip</MDBBtn>
          <div>MDBTooltip on bottom</div>
        </MDBTooltip>
      </SectionContainer>

      <SectionContainer header="On text">
        <p className="mt-4">
          Lorem ipsum dolor sit amet,
          <MDBTooltip
            domElement
            tag="span"
            style={{ display: "inline" }}
            placement="top"
          >
            <span className="blue-text"> consectetur adipiscing </span>
            <span>Tooltip within text paragraph</span>
          </MDBTooltip>
          elit. Phasellus id dictum lectus. Cras vitae nibh enim. Curabitur
          scelerisque tortor eget eros accumsan aliquam. Aliquam a luctus leo,
          vitae rhoncus purus. Etiam iaculis lacus massa, sit amet placerat
          risus dictum at. Nullam venenatis sed lacus eget congue. Maecenas
          auctor augue et ex fermentum porttitor. Interdum et malesuada fames ac
          ante ipsum primis in faucibus. Mauris nec convallis velit. Nullam non
          libero efficitur lacus aliquet pretium eget eget lorem. Cras at odio
          nulla. Duis molestie magna a rhoncus ultricies.
        </p>
      </SectionContainer>

      <SectionContainer header="On click" flexCenter>
        <MDBTooltip placement="top" clickable>
          <MDBBtn
            color="indigo"
          >
            Tooltip on click
          </MDBBtn>
          <div>MDBTooltip on click</div>
        </MDBTooltip>
      </SectionContainer>
    </MDBContainer>
  );
};

export default TooltipsPage;
