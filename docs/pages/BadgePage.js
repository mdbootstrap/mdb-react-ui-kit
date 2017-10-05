import React from 'react';
import { Badge } from 'mdbreact';


const BadgePage = (props) => {
  return(
    <div className="container-fluid text-center">
      <div className="">
        <h1>Heading <Badge>Default</Badge></h1>
        <h2>Heading <Badge color="primary">primary</Badge></h2>
        <h3>Heading <Badge pill color="success">success pill</Badge></h3>
        <h4>Heading <Badge color="info">info</Badge></h4>
        <h5>Heading <Badge color="warning">warning</Badge></h5>
        <h6>Heading <Badge color="danger">danger</Badge></h6>
      </div>
    </div>
  );
};

export default BadgePage;