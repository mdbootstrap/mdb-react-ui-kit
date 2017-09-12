import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'mdbreact';


const BreadcrumbPage = (props) => {
  return(
    <div className="container-fluid text-center">
      <div className="">
        <Breadcrumb>
          <BreadcrumbItem active>Home</BreadcrumbItem>
        </Breadcrumb>
        <Breadcrumb>
          <BreadcrumbItem><a href="#">Home</a></BreadcrumbItem>
          <BreadcrumbItem active>Library</BreadcrumbItem>
        </Breadcrumb>
        <Breadcrumb>
          <BreadcrumbItem><a href="#">Home</a></BreadcrumbItem>
          <BreadcrumbItem><a href="#">Library</a></BreadcrumbItem>
          <BreadcrumbItem active>Data</BreadcrumbItem>
        </Breadcrumb>
      </div>
    </div>
  )
};

export default BreadcrumbPage;