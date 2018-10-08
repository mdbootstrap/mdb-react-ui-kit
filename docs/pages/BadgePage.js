import React from "react";
import { Badge, Container } from "mdbreact";
import DocsLink from "./DocsLink";

const BadgePage = props => {
  return (
    <Container>
      <DocsLink
        title="Badges"
        href="https://mdbootstrap.com/react/components/badges/"
      />
      <div className="container-fluid text-center mt-5">
        <div className="">
          <h1>
            Heading <Badge>Default</Badge>
          </h1>
          <h2>
            Heading <Badge color="primary">primary</Badge>
          </h2>
          <h3>
            Heading{" "}
            <Badge pill color="success">
              success pill
            </Badge>
          </h3>
          <h4>
            Heading <Badge color="info">info</Badge>
          </h4>
          <h5>
            Heading <Badge color="warning">warning</Badge>
          </h5>
          <h6>
            Heading <Badge color="danger">danger</Badge>
          </h6>
        </div>
      </div>
    </Container>
  );
};

export default BadgePage;
