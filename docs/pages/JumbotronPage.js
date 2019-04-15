import React from "react";
import { MDBJumbotron, MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCardTitle, MDBIcon, MDBNavLink, MDBNav, MDBCardImage, MDBCardBody, MDBCardText } from "mdbreact";
import DocsLink from "../components/docsLink";

const JumbotronPage = props => {
  return (
    <>
      <MDBContainer className="mt-5 text-center">
        <DocsLink title="Jumbotron" href="https://mdbootstrap.com/docs/react/components/jumbotron/" />
        <MDBRow>
          <MDBCol>
            <h4 className="title mt-5 mb-4 text-left">Basic example</h4>
            <MDBJumbotron>
              <h2 className="h1 display-3">Hello, world!</h2>
              <p className="lead">
                This is a simple hero unit, a simple Jumbotron-style component for
                calling extra attention to featured content or information.
              </p>
              <hr className="my-2" />
              <p>
                It uses utility classes for typgraphy and spacing to space content out
                within the larger container.
              </p>
              <p className="lead">
                <MDBBtn color="primary">Learn More</MDBBtn>
              </p>
            </MDBJumbotron>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <hr />

      <h4 className="title mt-5 mb-4 container text-left">Fluid jumbotron</h4>
      <MDBJumbotron fluid>
        <MDBContainer>
          <h2 className="display-4">Fluid jumbotron</h2>
          <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
        </MDBContainer>
      </MDBJumbotron>

      <hr />

      <MDBContainer className="mt-5 text-center">
        <MDBRow>
          <MDBCol>
            <h4 className="title mt-5 mb-4 text-left">Jumbotron with a background image </h4>
            <MDBJumbotron style={{ padding: 0 }}>
              <MDBCol className="text-white text-center py-5 px-4" style={{ backgroundImage: `url(https://mdbootstrap.com/img/Photos/Others/gradient1.jpg)` }}>
                <MDBCol className="py-5">
                  <MDBCardTitle className="h1-responsive pt-3 m-5 font-bold">Create your beautiful website with MDBootstrap</MDBCardTitle>
                  <p className="mx-5 mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat fugiat, laboriosam, voluptatem,
                    optio vero odio nam sit officia accusamus minus error nisi architecto nulla ipsum dignissimos. Odit sed qui, dolorum!
                  </p>
                  <MDBBtn outline color="white" className="mb-5"><MDBIcon icon="clone" className="mr-2"></MDBIcon> View project</MDBBtn>
                </MDBCol>
              </MDBCol>
            </MDBJumbotron>
          </MDBCol>
        </MDBRow>

        <hr />

        <MDBRow>
          <MDBCol>
            <h4 className="title mt-5 mb-4 text-left">Jumbotron with image </h4>
            <MDBJumbotron className="text-center">
              <MDBCardTitle className="card-title h4 pb-2">
                <strong>My adventure</strong>
              </MDBCardTitle>
              <MDBCardImage
                src="https://mdbootstrap.com/img/Photos/Slides/img%20(70).jpg"
                className="img-fluid"
              />
              <MDBCardBody>
                <MDBCardTitle className="indigo-text h5 m-4">
                  Photography
              </MDBCardTitle>
                <MDBCardText>
                  Sed ut perspiciatis unde omnis iste natus sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam.
              </MDBCardText>

                <MDBNav className="justify-content-center">
                  <MDBNavLink to="#!">
                    <MDBIcon
                      fab
                      icon="linkedin-in"
                      className="grey-text"
                      size="lg"
                    />
                  </MDBNavLink>
                  <MDBNavLink to="#!">
                    <MDBIcon fab icon="twitter" className="grey-text" size="lg" />
                  </MDBNavLink>
                  <MDBNavLink to="#!">
                    <MDBIcon
                      fab
                      icon="facebook-f"
                      className="grey-text"
                      size="lg"
                    />
                  </MDBNavLink>
                </MDBNav>
              </MDBCardBody>
            </MDBJumbotron>
          </MDBCol>
        </MDBRow>

        <hr />

        <MDBRow>
          <MDBCol>
            <h4 className="title mt-5 mb-4 text-left">Jumbotron with buttons</h4>
            <MDBJumbotron>
              <MDBCardBody>
                <MDBCardTitle className="h2">
                  Material Design for Bootstrap
              </MDBCardTitle>
                <p className="blue-text my-4 font-weight-bold">
                  Powerful and free Material Design UI KIT
              </p>
                <MDBCardText>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
                  aliquid dolorem ea distinctio exercitationem delectus qui, quas
                  eum architecto, amet quasi accusantium, fugit consequatur
                  ducimus obcaecati numquam molestias hic itaque accusantium
                  doloremque laudantium, totam rem aperiam.
              </MDBCardText>
                <hr className="my-4" />
                <div className="pt-2">
                  <MDBBtn
                    color="primary"
                    className="waves-effect"
                  >
                    Buy now <MDBIcon far icon="gem" />
                  </MDBBtn>
                  <MDBBtn
                    outline
                    color="primary"
                    className="waves-effect"
                  >
                    Download <MDBIcon icon="download" />
                  </MDBBtn>
                </div>
              </MDBCardBody>
            </MDBJumbotron>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
};

export default JumbotronPage;
