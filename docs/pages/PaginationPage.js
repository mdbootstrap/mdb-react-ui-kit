import React from "react";
import { MDBPagination, MDBPageItem, MDBPageNav, MDBContainer, MDBCol, MDBRow } from "mdbreact";
import DocsLink from "../components/docsLink";

const PaginationPage = props => {
  return (
    <MDBContainer>
      <DocsLink
        title="Pagination"
        href="https://mdbootstrap.com/docs/react/components/pagination/"
      />

      <MDBRow>
        <MDBCol>
          <h4 className="title mb-5 text-left">Basic example</h4>
          <MDBPagination className="mb-5">
            <MDBPageItem disabled>
              <MDBPageNav aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
              </MDBPageNav>
            </MDBPageItem>
            <MDBPageItem active>
              <MDBPageNav>
                1 <span className="sr-only">(current)</span>
              </MDBPageNav>
            </MDBPageItem>
            <MDBPageItem>
              <MDBPageNav>2</MDBPageNav>
            </MDBPageItem>
            <MDBPageItem>
              <MDBPageNav>3</MDBPageNav>
            </MDBPageItem>
            <MDBPageItem>
              <MDBPageNav>4</MDBPageNav>
            </MDBPageItem>
            <MDBPageItem>
              <MDBPageNav>5</MDBPageNav>
            </MDBPageItem>
            <MDBPageItem disabled>
              <MDBPageNav aria-label="Previous">
                <span aria-hidden="true">&raquo;</span>
              </MDBPageNav>
            </MDBPageItem>
          </MDBPagination>
        </MDBCol>
      </MDBRow>

      <MDBRow>
        <MDBCol>
          <h4 className="title my-5 text-left">Bootstrap Pagination</h4>
          <MDBPagination circle >
            <MDBPageItem disabled>
              <MDBPageNav>
                <span>First</span>
              </MDBPageNav>
            </MDBPageItem>
            <MDBPageItem disabled>
              <MDBPageNav aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
                <span className="sr-only">Previous</span>
              </MDBPageNav>
            </MDBPageItem>
            <MDBPageItem active>
              <MDBPageNav>
                1 <span className="sr-only">(current)</span>
              </MDBPageNav>
            </MDBPageItem>
            <MDBPageItem>
              <MDBPageNav>
                2
              </MDBPageNav>
            </MDBPageItem>
            <MDBPageItem>
              <MDBPageNav>
                3
              </MDBPageNav>
            </MDBPageItem>
            <MDBPageItem>
              <MDBPageNav>
                4
              </MDBPageNav>
            </MDBPageItem>
            <MDBPageItem>
              <MDBPageNav>
                5
              </MDBPageNav>
            </MDBPageItem>
            <MDBPageItem>
              <MDBPageNav>
                &raquo;
              </MDBPageNav>
            </MDBPageItem>
            <MDBPageItem>
              <MDBPageNav>
                Last
              </MDBPageNav>
            </MDBPageItem>
          </MDBPagination>
        </MDBCol>
      </MDBRow>

      <MDBRow>
        <MDBCol>
          <h4 className="title my-5 text-left">MDBPagination color</h4>
          <MDBPagination color="blue">
            <MDBPageItem disabled>
              <MDBPageNav  aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
                <span className="sr-only">Previous</span>
              </MDBPageNav>
            </MDBPageItem>
            <MDBPageItem active>
              <MDBPageNav >
                1 <span className="sr-only">(current)</span>
              </MDBPageNav>
            </MDBPageItem>
            <MDBPageItem>
              <MDBPageNav >
                2
              </MDBPageNav>
            </MDBPageItem>
            <MDBPageItem>
              <MDBPageNav >
                3
              </MDBPageNav>
            </MDBPageItem>
            <MDBPageItem>
              <MDBPageNav >
                4
              </MDBPageNav>
            </MDBPageItem>
            <MDBPageItem>
              <MDBPageNav >
                5
              </MDBPageNav>
            </MDBPageItem>
            <MDBPageItem>
              <MDBPageNav >
                &raquo;
              </MDBPageNav>
            </MDBPageItem>
          </MDBPagination>

          <MDBPagination color="red">
            <MDBPageItem disabled>
              <MDBPageNav  aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
                <span className="sr-only">Previous</span>
              </MDBPageNav>
            </MDBPageItem>
            <MDBPageItem active>
              <MDBPageNav >
                1 <span className="sr-only">(current)</span>
              </MDBPageNav>
            </MDBPageItem>
            <MDBPageItem>
              <MDBPageNav >
                2
              </MDBPageNav>
            </MDBPageItem>
            <MDBPageItem>
              <MDBPageNav >
                3
              </MDBPageNav>
            </MDBPageItem>
            <MDBPageItem>
              <MDBPageNav >
                4
              </MDBPageNav>
            </MDBPageItem>
            <MDBPageItem>
              <MDBPageNav >
                5
              </MDBPageNav>
            </MDBPageItem>
            <MDBPageItem>
              <MDBPageNav >
                &raquo;
              </MDBPageNav>
            </MDBPageItem>
          </MDBPagination>

          <MDBPagination color="teal">
            <MDBPageItem disabled>
              <MDBPageNav  aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
                <span className="sr-only">Previous</span>
              </MDBPageNav>
            </MDBPageItem>
            <MDBPageItem active>
              <MDBPageNav >
                1 <span className="sr-only">(current)</span>
              </MDBPageNav>
            </MDBPageItem>
            <MDBPageItem>
              <MDBPageNav >
                2
              </MDBPageNav>
            </MDBPageItem>
            <MDBPageItem>
              <MDBPageNav >
                3
              </MDBPageNav>
            </MDBPageItem>
            <MDBPageItem>
              <MDBPageNav >
                4
              </MDBPageNav>
            </MDBPageItem>
            <MDBPageItem>
              <MDBPageNav >
                5
              </MDBPageNav>
            </MDBPageItem>
            <MDBPageItem>
              <MDBPageNav >
                &raquo;
              </MDBPageNav>
            </MDBPageItem>
          </MDBPagination>

          <MDBPagination color="dark">
            <MDBPageItem disabled>
              <MDBPageNav  aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
                <span className="sr-only">Previous</span>
              </MDBPageNav>
            </MDBPageItem>
            <MDBPageItem active>
              <MDBPageNav >
                1 <span className="sr-only">(current)</span>
              </MDBPageNav>
            </MDBPageItem>
            <MDBPageItem>
              <MDBPageNav >
                2
              </MDBPageNav>
            </MDBPageItem>
            <MDBPageItem>
              <MDBPageNav >
                3
              </MDBPageNav>
            </MDBPageItem>
            <MDBPageItem>
              <MDBPageNav >
                4
              </MDBPageNav>
            </MDBPageItem>
            <MDBPageItem>
              <MDBPageNav >
                5
              </MDBPageNav>
            </MDBPageItem>
            <MDBPageItem>
              <MDBPageNav >
                &raquo;
              </MDBPageNav>
            </MDBPageItem>
          </MDBPagination>

          <MDBPagination color="bluegrey">
            <MDBPageItem disabled>
              <MDBPageNav  aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
                <span className="sr-only">Previous</span>
              </MDBPageNav>
            </MDBPageItem>
            <MDBPageItem active>
              <MDBPageNav >
                1 <span className="sr-only">(current)</span>
              </MDBPageNav>
            </MDBPageItem>
            <MDBPageItem>
              <MDBPageNav >
                2
              </MDBPageNav>
            </MDBPageItem>
            <MDBPageItem>
              <MDBPageNav >
                3
              </MDBPageNav>
            </MDBPageItem>
            <MDBPageItem>
              <MDBPageNav >
                4
              </MDBPageNav>
            </MDBPageItem>
            <MDBPageItem>
              <MDBPageNav >
                5
              </MDBPageNav>
            </MDBPageItem>
            <MDBPageItem>
              <MDBPageNav >
                &raquo;
              </MDBPageNav>
            </MDBPageItem>
          </MDBPagination>

          <MDBPagination color="amber">
            <MDBPageItem disabled>
              <MDBPageNav  aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
                <span className="sr-only">Previous</span>
              </MDBPageNav>
            </MDBPageItem>
            <MDBPageItem active>
              <MDBPageNav >
                1 <span className="sr-only">(current)</span>
              </MDBPageNav>
            </MDBPageItem>
            <MDBPageItem>
              <MDBPageNav >
                2
              </MDBPageNav>
            </MDBPageItem>
            <MDBPageItem>
              <MDBPageNav >
                3
              </MDBPageNav>
            </MDBPageItem>
            <MDBPageItem>
              <MDBPageNav >
                4
              </MDBPageNav>
            </MDBPageItem>
            <MDBPageItem>
              <MDBPageNav >
                5
              </MDBPageNav>
            </MDBPageItem>
            <MDBPageItem>
              <MDBPageNav >
                &raquo;
              </MDBPageNav>
            </MDBPageItem>
          </MDBPagination>

          <MDBPagination color="purple">
            <MDBPageItem disabled>
              <MDBPageNav  aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
                <span className="sr-only">Previous</span>
              </MDBPageNav>
            </MDBPageItem>
            <MDBPageItem active>
              <MDBPageNav >
                1 <span className="sr-only">(current)</span>
              </MDBPageNav>
            </MDBPageItem>
            <MDBPageItem>
              <MDBPageNav >
                2
              </MDBPageNav>
            </MDBPageItem>
            <MDBPageItem>
              <MDBPageNav >
                3
              </MDBPageNav>
            </MDBPageItem>
            <MDBPageItem>
              <MDBPageNav >
                4
              </MDBPageNav>
            </MDBPageItem>
            <MDBPageItem>
              <MDBPageNav >
                5
              </MDBPageNav>
            </MDBPageItem>
            <MDBPageItem>
              <MDBPageNav >
                &raquo;
              </MDBPageNav>
            </MDBPageItem>
          </MDBPagination>

          <MDBPagination color="darkgrey">
            <MDBPageItem disabled>
              <MDBPageNav  aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
                <span className="sr-only">Previous</span>
              </MDBPageNav>
            </MDBPageItem>
            <MDBPageItem active>
              <MDBPageNav >
                1 <span className="sr-only">(current)</span>
              </MDBPageNav>
            </MDBPageItem>
            <MDBPageItem>
              <MDBPageNav >
                2
              </MDBPageNav>
            </MDBPageItem>
            <MDBPageItem>
              <MDBPageNav >
                3
              </MDBPageNav>
            </MDBPageItem>
            <MDBPageItem>
              <MDBPageNav >
                4
              </MDBPageNav>
            </MDBPageItem>
            <MDBPageItem>
              <MDBPageNav >
                5
              </MDBPageNav>
            </MDBPageItem>
            <MDBPageItem>
              <MDBPageNav >
                &raquo;
              </MDBPageNav>
            </MDBPageItem>
          </MDBPagination>
        </MDBCol>
      </MDBRow>

      <MDBRow>
        <MDBCol>
          <h4 className="title my-5 text-left">Sizing</h4>
          <MDBPagination size="lg">
            <MDBPageItem>
              <MDBPageNav  aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
                <span className="sr-only">Previous</span>
              </MDBPageNav>
            </MDBPageItem>
            <MDBPageItem>
              <MDBPageNav >
                1 <span className="sr-only">(current)</span>
              </MDBPageNav>
            </MDBPageItem>
            <MDBPageItem>
              <MDBPageNav >
                2
              </MDBPageNav>
            </MDBPageItem>
            <MDBPageItem>
              <MDBPageNav >
                3
              </MDBPageNav>
            </MDBPageItem>
            <MDBPageItem>
              <MDBPageNav >
                &raquo;
              </MDBPageNav>
            </MDBPageItem>
          </MDBPagination>

          <MDBPagination size="sm">
            <MDBPageItem>
              <MDBPageNav  aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
                <span className="sr-only">Previous</span>
              </MDBPageNav>
            </MDBPageItem>
            <MDBPageItem>
              <MDBPageNav >
                1 <span className="sr-only">(current)</span>
              </MDBPageNav>
            </MDBPageItem>
            <MDBPageItem>
              <MDBPageNav >
                2
              </MDBPageNav>
            </MDBPageItem>
            <MDBPageItem>
              <MDBPageNav >
                3
              </MDBPageNav>
            </MDBPageItem>
            <MDBPageItem>
              <MDBPageNav >
                &raquo;
              </MDBPageNav>
            </MDBPageItem>
          </MDBPagination>

        </MDBCol>
      </MDBRow>

    </MDBContainer>
  );
};

export default PaginationPage;
