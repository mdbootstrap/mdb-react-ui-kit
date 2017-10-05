import React from 'react';
import { Progress } from 'mdbreact';


const ProgressPage = (props) => {
  return(
    <div className="container-fluid text-center">
      <div className="">
        <Progress value={100}></Progress>
        <Progress value={0}></Progress>
        <Progress value={25}></Progress>
        <Progress value={75}></Progress>
        <Progress animated  color="warning" value={75}></Progress>
        <Progress value="25">25%</Progress>
        <Progress striped value={50}></Progress>
        <Progress  color="success" value="100" striped>You did it!</Progress>
        <Progress  color="warning" value="30" animated>Wow!</Progress>
        <Progress  color="info" value="25">Cool</Progress>
      </div>
    </div>
  );
};

export default ProgressPage;