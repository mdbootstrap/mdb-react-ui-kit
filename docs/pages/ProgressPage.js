import React from "react";
import { Progress, Container } from "mdbreact";
import DocsLink from "./DocsLink";

const ProgressPage = props => {
  return (
    <Container>
      <DocsLink
        title="Progress Bar"
        href="https://mdbootstrap.com/docs/react/components/progress-bar/"
      />
      <div className="container-fluid text-center">
        <div className="">
          <Progress value={100} />
          <Progress value={0} />
          <Progress value={25} />
          <Progress value={75} />
          <Progress animated color="warning" value={75} />
          <Progress value="25">25%</Progress>
          <Progress striped value={50} />
          <Progress color="success" value="100" striped>
            You did it!
          </Progress>
          <Progress color="warning" value="30" animated>
            Wow!
          </Progress>
          <Progress color="info" value="25">
            Cool
          </Progress>
        </div>
      </div>
    </Container>
  );
};

export default ProgressPage;
