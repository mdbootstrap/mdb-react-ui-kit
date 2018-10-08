import React from "react";
import { Container, Row, Col, Animation } from "mdbreact";
import DocsLink from "./DocsLink";

const AnimationPage = function() {
  let count = 0;
  const increment = () => {
    count++;
    if (count < 6 || count % 5 === 0) {
      console.log(`The MDB logo bounced ${count} times.`);
    }
  };

  return (
    <Container className="mt-5">
      <DocsLink
        title="Animations"
        href="https://mdbootstrap.com/react/css/animations/"
      />
      <Row center>
        <Animation type="bounce" infinite onAnimationIteration={increment}>
          <img
            alt=""
            className="img-fluid"
            src="https://mdbootstrap.com/img/logo/mdb-transparent-250px.png"
          />
        </Animation>
        <br />
      </Row>

      <Row center className="mt-5">
        <h4>&#8659; Scroll down &#8659;</h4>
      </Row>

      <Row className="mb-4" style={{ marginTop: "100vh" }}>
        <Col md="4">
          <Animation reveal type="bounceInUp">
            <img
              alt="A view on mountains."
              className="img-fluid"
              src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(31).jpg"
            />
          </Animation>
        </Col>
        <Col md="4">
          <Animation reveal type="tada">
            <img
              alt="Cottage on a lake surrounded by mountains."
              className="img-fluid"
              src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(32).jpg"
            />
          </Animation>
        </Col>
        <Col md="4">
          <Animation reveal type="fadeInLeft">
            <img
              alt="A boat floating on an ocean"
              className="img-fluid"
              src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(73).jpg"
            />
          </Animation>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col md="4">
          <Animation reveal type="fadeInRight">
            <img
              alt="View on mountains from mountain top."
              className="img-fluid"
              src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg"
            />
          </Animation>
        </Col>
        <Col md="4">
          <Animation reveal type="fadeInRight">
            <img
              alt="Rocky shore in the morning."
              className="img-fluid"
              src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(14).jpg"
            />
          </Animation>
        </Col>
        <Col md="4">
          <Animation
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
          </Animation>
        </Col>
      </Row>
    </Container>
  );
};

export default AnimationPage;
