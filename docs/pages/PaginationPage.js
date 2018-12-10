import React from "react";
import { Pagination, PageItem, PageLink, Container } from "mdbreact";
import DocsLink from "./DocsLink";

const PaginationPage = props => {
  return (
    <Container>
      <DocsLink
        title="Pagination"
        href="https://mdbootstrap.com/docs/react/components/pagination/"
      />
      <div className="container">
        <div className="row mt-5">
          <div className="col" style={{ maxWidth: "23rem" }}>
            <Pagination>
              <PageItem disabled>
                <PageLink aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                </PageLink>
              </PageItem>
              <PageItem active>
                <PageLink>
                  1 <span className="sr-only">(current)</span>
                </PageLink>
              </PageItem>
              <PageItem>
                <PageLink>2</PageLink>
              </PageItem>
              <PageItem>
                <PageLink>3</PageLink>
              </PageItem>
              <PageItem>
                <PageLink>4</PageLink>
              </PageItem>
              <PageItem>
                <PageLink>5</PageLink>
              </PageItem>
            </Pagination>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default PaginationPage;
