import React from "react";
import { Breadcrumb, BreadcrumbItem, Container } from "mdbreact";
import DocsLink from "./DocsLink";

const BreadcrumbPage = props => {
  return (
    <Container>
      <DocsLink
        title="Breadcrumb"
        href="https://mdbootstrap.com/react/components/breadcrumb/"
      />
      <div className="container-fluid text-center">
        <Breadcrumb>
          <BreadcrumbItem active>Home</BreadcrumbItem>
        </Breadcrumb>
        <Breadcrumb>
          <BreadcrumbItem>
            <a href="#!">Home</a>
          </BreadcrumbItem>
          <BreadcrumbItem active>Library</BreadcrumbItem>
        </Breadcrumb>
        <Breadcrumb>
          <BreadcrumbItem>
            <a href="#!">Home</a>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <a href="#!">Library</a>
          </BreadcrumbItem>
          <BreadcrumbItem active>Data</BreadcrumbItem>
        </Breadcrumb>
      </div>
    </Container>
  );
};

export default BreadcrumbPage;
