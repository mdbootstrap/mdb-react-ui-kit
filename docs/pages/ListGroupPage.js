import React from 'react';
import { ListGroup, ListGroupItem, Badge } from 'mdbreact';

const PaginationPage = (props) => {
  return(
    <div className="container">
      <div className="row mt-5">
        <div className="col" style={{ maxWidth: '23rem' }}>
          <ListGroup>
            <ListGroupItem href="#" className="d-flex justify-content-between align-items-center">Link <Badge pill>14</Badge></ListGroupItem>
            <ListGroupItem active href="#" className="d-flex justify-content-between align-items-center">Active in <Badge pill>2</Badge></ListGroupItem>
            <ListGroupItem className="d-flex justify-content-between align-items-center">Not link <Badge pill>1</Badge></ListGroupItem>
            <ListGroupItem active className="d-flex justify-content-between align-items-center">Not link, but active <Badge pill>1</Badge></ListGroupItem>
          </ListGroup>
        </div>
      </div>
    </div>
  );
};

export default PaginationPage;