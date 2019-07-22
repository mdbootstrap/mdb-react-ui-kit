import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBAnimation,
} from "mdbreact";
import DocsLink from "../components/docsLink";
import SectionContainer from "../components/sectionContainer";

class AnimationPage extends React.Component {
  render() {
    return (
      <MDBContainer className="mt-5">
        <DocsLink
          title="Animations"
          href="https://mdbootstrap.com/docs/react/css/animations/"
        />

        
        <hr style={{opacity: "0", marginBottom: "50px"}}/>

        <SectionContainer header="Reveal animations when scrolling">
          <MDBRow className="mb-4">
            <MDBCol md="4">
              <MDBAnimation reveal type="bounceInUp">
                <img
                  alt="A view on mountains."
                  className="img-fluid"
                  src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(31).jpg"
                />
              </MDBAnimation>
            </MDBCol>
            <MDBCol md="4">
              <MDBAnimation reveal type="tada">
                <img
                  alt="Cottage on a lake surrounded by mountains."
                  className="img-fluid"
                  src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(32).jpg"
                />
              </MDBAnimation>
            </MDBCol>
            <MDBCol md="4">
              <MDBAnimation reveal type="fadeInLeft">
                <img
                  alt="A boat floating on an ocean"
                  className="img-fluid"
                  src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(73).jpg"
                />
              </MDBAnimation>
            </MDBCol>
          </MDBRow>

          <MDBRow className="mb-4">
            <MDBCol md="4">
              <MDBAnimation reveal type="fadeInRight">
                <img
                  alt="View on mountains from mountain top."
                  className="img-fluid"
                  src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg"
                />
              </MDBAnimation>
            </MDBCol>
            <MDBCol md="4">
              <MDBAnimation reveal type="fadeInRight">
                <img
                  alt="Rocky shore in the morning."
                  className="img-fluid"
                  src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(14).jpg"
                />
              </MDBAnimation>
            </MDBCol>
            <MDBCol md="4">
              <MDBAnimation
                reveal
                type="fadeInUp"
                onAnimationEnd={() =>
                  console.log("The last picture has been revealed")
                }
              >
                <img
                  alt="Rocky shore in the morning."
                  className="img-fluid"
                  src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(35).jpg"
                />
              </MDBAnimation>
            </MDBCol>
          </MDBRow>
        </SectionContainer>
      </MDBContainer>
    );
  }
}
export default AnimationPage;
