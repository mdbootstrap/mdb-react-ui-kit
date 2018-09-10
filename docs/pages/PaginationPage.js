import React from 'react';
import { Pagination, PageItem, PageLink, Container, Row, Fa } from 'mdbreact';

const PaginationPage = (props) => {
  return(
    <Container>
      <Row className="align-items-center mt-5">
          <h4 className="grey-text" style={{margin: "0px"}}>
            <strong>Pagination</strong>
          </h4>
          <a className="border grey-text px-2 border-light rounded ml-2" target="_blank"  href="https://mdbootstrap.com/react/components/pagination/"><Fa icon="graduation-cap" className="mr-2"/>Docs</a>
      </Row>
      <hr className="mb-5" />
      <div className="container">
        <div className="row mt-5">
          <div className="col" style={{ maxWidth: '23rem' }}>
            <Pagination>
              <PageItem disabled>
                <PageLink className="page-link" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                  <span className="sr-only">Previous</span>
                </PageLink>
              </PageItem>
              <PageItem active>
                <PageLink className="page-link">
                  1 <span className="sr-only">(current)</span>
                </PageLink>
              </PageItem>
              <PageItem>
                <PageLink className="page-link">
                  2
                </PageLink>
              </PageItem>
              <PageItem>
                <PageLink className="page-link">
                  3
                </PageLink>
              </PageItem>
              <PageItem>
                <PageLink className="page-link">
                  4
                </PageLink>
              </PageItem>
              <PageItem>
                <PageLink className="page-link">
                  5
                </PageLink>
              </PageItem>
            </Pagination>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default PaginationPage;
