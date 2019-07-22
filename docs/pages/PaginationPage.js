import React from "react";
import { MDBPagination, MDBPageItem, MDBPageNav, MDBContainer, MDBCol, MDBRow } from "mdbreact";
import DocsLink from "../components/docsLink";
import SectionContainer from "../components/sectionContainer";

const PaginationPage = props => {
  return (
    <MDBContainer>
      <DocsLink title="Pagination" href="https://mdbootstrap.com/docs/react/components/pagination/" />

      <MDBRow>
        <MDBCol>
          <SectionContainer header="Basic example" className="d-flex justify-content-center">
            <MDBPagination style={{ marginTop: "1rem" }}>
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
          </SectionContainer>
        </MDBCol>
      </MDBRow>

      <MDBRow>
        <MDBCol>
          <SectionContainer header="Bootstrap Pagination" className="d-flex justify-content-center">
            <MDBPagination style={{ marginTop: "1rem" }} circle>
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
              <MDBPageItem>
                <MDBPageNav>&raquo;</MDBPageNav>
              </MDBPageItem>
              <MDBPageItem>
                <MDBPageNav>Last</MDBPageNav>
              </MDBPageItem>
            </MDBPagination>
          </SectionContainer>
        </MDBCol>
      </MDBRow>

      <MDBRow>
        <MDBCol>
          <SectionContainer header="MDBPagination color" className="d-flex align-items-center flex-column">
            <MDBPagination style={{ marginTop: "1rem" }} color="blue">
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
              <MDBPageItem>
                <MDBPageNav>&raquo;</MDBPageNav>
              </MDBPageItem>
            </MDBPagination>

            <MDBPagination style={{ marginTop: "1rem" }} color="red">
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
              <MDBPageItem>
                <MDBPageNav>&raquo;</MDBPageNav>
              </MDBPageItem>
            </MDBPagination>

            <MDBPagination style={{ marginTop: "1rem" }} color="teal">
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
              <MDBPageItem>
                <MDBPageNav>&raquo;</MDBPageNav>
              </MDBPageItem>
            </MDBPagination>

            <MDBPagination style={{ marginTop: "1rem" }} color="dark">
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
              <MDBPageItem>
                <MDBPageNav>&raquo;</MDBPageNav>
              </MDBPageItem>
            </MDBPagination>

            <MDBPagination style={{ marginTop: "1rem" }} color="bluegrey">
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
              <MDBPageItem>
                <MDBPageNav>&raquo;</MDBPageNav>
              </MDBPageItem>
            </MDBPagination>

            <MDBPagination style={{ marginTop: "1rem" }} color="amber">
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
              <MDBPageItem>
                <MDBPageNav>&raquo;</MDBPageNav>
              </MDBPageItem>
            </MDBPagination>

            <MDBPagination style={{ marginTop: "1rem" }} color="purple">
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
              <MDBPageItem>
                <MDBPageNav>&raquo;</MDBPageNav>
              </MDBPageItem>
            </MDBPagination>

            <MDBPagination style={{ marginTop: "1rem" }} color="darkgrey">
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
              <MDBPageItem>
                <MDBPageNav>&raquo;</MDBPageNav>
              </MDBPageItem>
            </MDBPagination>
          </SectionContainer>
        </MDBCol>
      </MDBRow>

      <MDBRow>
        <MDBCol>
          <SectionContainer header="Sizing" className="d-flex align-items-center flex-column">
            <MDBPagination style={{ marginTop: "1rem" }} size="lg">
              <MDBPageItem>
                <MDBPageNav aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                  <span className="sr-only">Previous</span>
                </MDBPageNav>
              </MDBPageItem>
              <MDBPageItem>
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
                <MDBPageNav>&raquo;</MDBPageNav>
              </MDBPageItem>
            </MDBPagination>

            <MDBPagination style={{ marginTop: "1rem" }} size="sm">
              <MDBPageItem>
                <MDBPageNav aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                  <span className="sr-only">Previous</span>
                </MDBPageNav>
              </MDBPageItem>
              <MDBPageItem>
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
                <MDBPageNav>&raquo;</MDBPageNav>
              </MDBPageItem>
            </MDBPagination>
          </SectionContainer>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default PaginationPage;
