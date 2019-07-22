import React from "react";
import {
  MDBBtn,
  MDBCol,
  MDBRow,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardGroup,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText
} from "mdbreact";
import DocsLink from "../components/docsLink";
import SectionContainer from "../components/sectionContainer";

const CardsPage = () => {
  return (
    <MDBContainer>
      <DocsLink title="Cards" href="https://mdbootstrap.com/docs/react/components/cards/" />

      <MDBRow>
        <MDBCol>
          <SectionContainer header="Basic example" className="justify-content-center d-flex">
            <MDBCard style={{ width: "22rem" }}>
              <MDBCardImage
                className="img-fluid"
                src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg"
                waves
              />
              <MDBCardBody>
                <MDBCardTitle>Card title</MDBCardTitle>
                <MDBCardText>
                  Some quick example text to build on the card title and make up the bulk of the card&apos;s
                  content.
                </MDBCardText>
                <MDBBtn href="#">MDBBtn</MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </SectionContainer>
        </MDBCol>
      </MDBRow>

      <MDBRow>
        <MDBCol>
          <SectionContainer header="Reversed card" className="justify-content-center d-flex">
            <MDBCard reverse style={{ width: "22rem" }}>
              <MDBCardImage
                zoom
                cascade
                className="img-fluid"
                src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%282%29.jpg"
                waves
              />
              <MDBCardBody cascade>
                <MDBCardTitle>MDBCard title</MDBCardTitle>
                <MDBCardText>
                  Some quick example text to build on the card title and make up the bulk of the card&apos;s
                  content.
                </MDBCardText>
                <MDBBtn href="#">MDBBtn</MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </SectionContainer>
        </MDBCol>
      </MDBRow>

      <SectionContainer header="Card decks v.1">
        <MDBCardGroup deck className="mt-3">
          <MDBCard>
            <MDBCardImage
              src="https://mdbootstrap.com/img/Photos/Others/images/16.jpg"
              alt="MDBCard image cap"
              top
              hover
              overlay="white-slight"
            />
            <MDBCardBody>
              <MDBCardTitle tag="h5">Panel title</MDBCardTitle>
              <MDBCardText>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </MDBCardText>
              <MDBBtn color="light-blue" size="md">
                read more
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>

          <MDBCard>
            <MDBCardImage
              src="https://mdbootstrap.com/img/Photos/Others/images/14.jpg"
              alt="MDBCard image cap"
              top
              hover
              overlay="white-slight"
            />
            <MDBCardBody>
              <MDBCardTitle tag="h5">Panel title</MDBCardTitle>
              <MDBCardText>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </MDBCardText>
              <MDBBtn color="light-blue" size="md">
                read more
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>

          <MDBCard>
            <MDBCardImage
              src="https://mdbootstrap.com/img/Photos/Others/images/15.jpg"
              alt="MDBCard image cap"
              top
              hover
              overlay="white-slight"
            />
            <MDBCardBody>
              <MDBCardTitle tag="h5">Panel title</MDBCardTitle>
              <MDBCardText>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </MDBCardText>
              <MDBBtn color="light-blue" size="md">
                read more
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCardGroup>
      </SectionContainer>

      <SectionContainer header="Card decks v.2">
        <MDBCardGroup>
          <MDBCard>
            <MDBCardImage
              src="https://mdbootstrap.com/img/Photos/Others/images/49.jpg"
              alt="MDBCard image cap"
              top
              hover
              overlay="white-slight"
            />
            <MDBCardBody>
              <MDBCardTitle tag="h5">Panel title</MDBCardTitle>
              <MDBCardText>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </MDBCardText>
              <MDBBtn color="primary" size="md">
                read more
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>

          <MDBCard>
            <MDBCardImage
              src="https://mdbootstrap.com/img/Photos/Others/images/48.jpg"
              alt="MDBCard image cap"
              top
              hover
              overlay="white-slight"
            />
            <MDBCardBody>
              <MDBCardTitle tag="h5">Panel title</MDBCardTitle>
              <MDBCardText>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </MDBCardText>
              <MDBBtn color="primary" size="md">
                read more
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>

          <MDBCard>
            <MDBCardImage
              src="https://mdbootstrap.com/img/Photos/Others/images/77.jpg"
              alt="MDBCard image cap"
              top
              hover
              overlay="white-slight"
            />
            <MDBCardBody>
              <MDBCardTitle tag="h5">Panel title</MDBCardTitle>
              <MDBCardText>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </MDBCardText>
              <MDBBtn color="primary" size="md">
                read more
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCardGroup>
      </SectionContainer>
    </MDBContainer>
  );
};

export default CardsPage;
