import React from 'react';
import { ListGroup, ListGroupItem, Badge, Container, Row, Fa } from 'mdbreact';

const ListGroupPage = (props) => {
  return(
  <Container>
    <Row className="align-items-center mt-5">
        <h4 className="grey-text" style={{margin: "0px"}}>
          <strong>List Group</strong>
        </h4>
        <a className="border grey-text px-2 border-light rounded ml-2" target="_blank"  href="https://mdbootstrap.com/react/components/list-group/"><Fa icon="graduation-cap" className="mr-2"/>Docs</a>
    </Row>
    <hr className="mb-5" />
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
  </Container>
  );
};

export default ListGroupPage;
