import React from "react";
import { MDBTooltip, MDBContainer } from "mdbreact";
import DocsLink from "./../components/docsLink";

const TooltipsPage = () => {
  const style = { display: "inline-block", maxWidth: "50vh" };
  return (
    <MDBContainer>
      <DocsLink
        title="Tooltips"
        href="https://mdbootstrap.com/docs/react/advanced/tooltips/"
      />
      <div className="m-5 text-center">
        <MDBTooltip
          placement="top"
          componentClass="btn btn-primary"
          tag="div"
          component="button"
          tooltipContent="MDBTooltip on top"
        >
          MDBTooltip on top
        </MDBTooltip>
        <div style={style} className="text-right">
          <MDBTooltip
            placement="left"
            componentClass="btn btn-primary"
            tag="div"
            component="button"
            tooltipContent="MDBTooltip on left"
          >
            MDBTooltip on left
          </MDBTooltip>
        </div>
        <div style={style} className="text-left">
          <MDBTooltip
            placement="right"
            componentClass="btn btn-primary"
            tag="div"
            component="button"
            tooltipContent="MDBTooltip on right"
          >
            MDBTooltip on right
          </MDBTooltip>
        </div>
        <MDBTooltip
          placement="bottom"
          componentClass="btn btn-primary"
          tag="div"
          component="button"
          tooltipContent="MDBTooltip on bottom"
        >
          MDBTooltip on bottom
        </MDBTooltip>
      </div>
    </MDBContainer>
  );
}

export default TooltipsPage;
