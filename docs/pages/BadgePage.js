import React from "react";
import { MDBBadge, MDBContainer } from "mdbreact";
import DocsLink from "../components/docsLink";

const BadgePage = props => {
  return (
    <MDBContainer>
      <DocsLink
        title="Badges"
        href="https://mdbootstrap.com/docs/react/components/badges/"
      />
      <MDBContainer fluid className="text-center mt-5">
          <h1>
            Heading <MDBBadge>Default</MDBBadge>
          </h1>
          <h2>
            Heading <MDBBadge color="primary">primary</MDBBadge>
          </h2>
          <h3>
            Heading <MDBBadge pill color="success">success pill</MDBBadge>
          </h3>
          <h4>
            Heading <MDBBadge color="info">info</MDBBadge>
          </h4>
          <h5>
            Heading <MDBBadge color="warning">warning</MDBBadge>
          </h5>
          <h6>
            Heading <MDBBadge color="danger">danger</MDBBadge>
          </h6>
      </MDBContainer>
    </MDBContainer>
  );
};

export default BadgePage;
