import React from 'react';
import { Breadcrumb, BreadcrumbItem, Container, Row, Fa } from 'mdbreact';


const BreadcrumbPage = (props) => {
  return(
    <Container>
      <Row className="align-items-center mt-5">
        <h4 className="grey-text" style={{margin: "0px"}}>
          <strong>Breadcrumb</strong>
        </h4>
        <a className="border grey-text px-2 border-light rounded ml-2" target="_blank"  href="https://mdbootstrap.com/react/components/breadcrumb/"><Fa icon="graduation-cap" className="mr-2"/>Docs</a>
      </Row>
      <hr className="mb-5" />
      <div className="container-fluid text-center">
        <Breadcrumb>
          <BreadcrumbItem active>Home</BreadcrumbItem>
        </Breadcrumb>
        <Breadcrumb>
          <BreadcrumbItem><a href="#!">Home</a></BreadcrumbItem>
          <BreadcrumbItem active>Library</BreadcrumbItem>
        </Breadcrumb>
        <Breadcrumb>
          <BreadcrumbItem><a href="#!">Home</a></BreadcrumbItem>
          <BreadcrumbItem><a href="#!">Library</a></BreadcrumbItem>
          <BreadcrumbItem active>Data</BreadcrumbItem>
        </Breadcrumb>
      </div>
    </Container>
  );
};

export default BreadcrumbPage;
