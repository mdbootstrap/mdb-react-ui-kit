import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  ListGroup,
  ListGroupItem,
  CardHeader,
  CardFooter,
  Button,
  Col,
  Row,
  Nav,
  NavItem,
  NavLink,
  CardGroup,
  Jumbotron,
  Container
} from "mdbreact";
import DocsLink from "./DocsLink";

function PanelPage() {
  const panelStyle = { width: "22rem", marginTop: "1rem" };
  return (
    <Container>
      <DocsLink
        title="Panels"
        href="https://mdbootstrap.com/docs/react/components/panels/"
      />
      <section className="m-5">
        <h2 className="mt-5">Basic example</h2>
        <Card className="card-body" style={panelStyle}>
          <CardTitle>Panel Title</CardTitle>
          <CardText>
            Some quick example text to build on the panel title and make up the
            bulk of the panel's content.
          </CardText>
          <div className="flex-row">
            <a href="#!">Card link</a>
            <a href="#!" style={{ marginLeft: "1.25rem" }}>Another link</a>
          </div>
        </Card>
        <hr className="mt-5" />
        <h2 className="mt-5">Body</h2>

        <Card>
          <CardBody>This is some text within a panel body.</CardBody>
        </Card>

        <h2 className="mt-5">Titles, text and links</h2>

        <Card style={{ width: "22rem", marginTop: "1rem" }}>
          <CardBody>
            <CardTitle>Panel title</CardTitle>
            <CardTitle tag="h6" sub className="mb-2 text-muted">
              Panel title
            </CardTitle>
            <CardText>
              Some quick example text to build on the panel title and make up
              the bulk of the panel's content.{" "}
            </CardText>
            <a href="#!" className="card-link">
              Panel link
            </a>
            <a href="#!" className="card-link">
              Another link
            </a>
          </CardBody>
        </Card>

        <h2 className="mt-5">List groups</h2>

        <Card style={{ width: "22rem", marginTop: "1rem" }}>
          <ListGroup>
            <ListGroupItem>Cras justo odio</ListGroupItem>
            <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
            <ListGroupItem>Vestibulum at eros</ListGroupItem>
          </ListGroup>
        </Card>

        <hr className="mt-5" />
        <h2 className="mt-5">Header and footer</h2>

        <Card style={{ width: "22rem", marginTop: "1rem" }}>
          <CardHeader color="deep-orange lighten-1">Featured</CardHeader>
          <CardBody>
            <CardTitle>Special title treatment</CardTitle>
            <CardText>
              With supporting text below as a natural lead-in to additional
              content.
            </CardText>
            <Button color="deep-orange">go somewhere</Button>
          </CardBody>
        </Card>

        <Card style={{ width: "22rem", marginTop: "1rem" }}>
          <CardHeader color="primary-color" tag="h3">
            Featured
          </CardHeader>
          <CardBody>
            <CardTitle>Special title treatment</CardTitle>
            <CardText>
              With supporting text below as a natural lead-in to additional
              content.
            </CardText>
            <Button color="primary">go somewhere</Button>
          </CardBody>
        </Card>

        <Card
          style={{ width: "22rem", marginTop: "1rem" }}
          className="text-center"
        >
          <CardHeader color="success-color">Featured</CardHeader>
          <CardBody>
            <CardTitle>Special title treatment</CardTitle>
            <CardText>
              With supporting text below as a natural lead-in to additional
              content.
            </CardText>
            <Button color="success" size="sm">
              go somewhere
            </Button>
          </CardBody>
          <CardFooter color="success-color">2 days ago</CardFooter>
        </Card>

        <hr className="mt-5" />
        <h2 className="mt-5">Sizing</h2>

        <Row className="mb-4">
          <Col sm="6">
            <Card>
              <CardBody>
                <CardTitle>Special title treatment</CardTitle>
                <CardText>
                  With supporting text below as a natural lead-in to additional
                  content.
                </CardText>
                <Button color="primary">go somewhere</Button>
              </CardBody>
            </Card>
          </Col>

          <Col sm="6">
            <Card>
              <CardBody>
                <CardTitle>Special title treatment</CardTitle>
                <CardText>
                  With supporting text below as a natural lead-in to additional
                  content.
                </CardText>
                <Button color="primary">go somewhere</Button>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Card className="w-75 mb-4">
          <CardBody>
            <CardTitle>Special title treatment</CardTitle>
            <CardText>
              With supporting text below as a natural lead-in to additional
              content.
            </CardText>
            <Button color="primary">go somewhere</Button>
          </CardBody>
        </Card>

        <Card className="w-50">
          <CardBody>
            <CardTitle>Special title treatment</CardTitle>
            <CardText>
              With supporting text below as a natural lead-in to additional
              content.
            </CardText>
            <Button color="primary">go somewhere</Button>
          </CardBody>
        </Card>

        <hr className="mt-5" />
        <h2 className="mt-5">Text alignment</h2>

        <Card style={{ width: "20rem", marginTop: "1rem" }}>
          <CardBody>
            <CardTitle>Special title treatment</CardTitle>
            <CardText>
              With supporting text below as a natural lead-in to additional
              content.
            </CardText>
            <Button color="primary">go somewhere</Button>
          </CardBody>
        </Card>

        <Card
          className="text-center"
          style={{ width: "20rem", marginTop: "1rem" }}
        >
          <CardBody>
            <CardTitle>Special title treatment</CardTitle>
            <CardText>
              With supporting text below as a natural lead-in to additional
              content.
            </CardText>
            <Button color="primary">go somewhere</Button>
          </CardBody>
        </Card>

        <Card
          className="text-right"
          style={{ width: "20rem", marginTop: "1rem" }}
        >
          <CardBody>
            <CardTitle>Special title treatment</CardTitle>
            <CardText>
              With supporting text below as a natural lead-in to additional
              content.
            </CardText>
            <Button color="primary">go somewhere</Button>
          </CardBody>
        </Card>

        <hr className="mt-5" />
        <h2 className="mt-5">Navigation</h2>

        <Card className="text-center">
          <CardHeader>
            <Nav header>
              <NavItem>
                <NavLink active to="#">
                  Active
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="#">Link</NavLink>
              </NavItem>
              <NavItem>
                <NavLink disabled to="#">
                  Disabled
                </NavLink>
              </NavItem>
            </Nav>
          </CardHeader>
          <CardBody>
            <CardTitle>Special title treatment</CardTitle>
            <CardText>
              With supporting text below as a natural lead-in to additional
              content.
            </CardText>
            <Button color="primary">go somewhere</Button>
          </CardBody>
        </Card>

        <hr className="mt-5" />
        <h2 className="mt-5">Styles</h2>

        <Row>
          <Col md="6" className="mb-4">
            <Card color="indigo" text="white" className="text-center">
              <CardBody>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                posuere erat a ante.
              </CardBody>
            </Card>

            <br />

            <Card color="pink lighten-2" text="white" className="text-center">
              <CardBody>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                posuere erat a ante.
              </CardBody>
            </Card>

            <br />

            <Card color="info-color" text="white" className="text-center">
              <CardBody>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                posuere erat a ante.
              </CardBody>
            </Card>
          </Col>
          <Col md="6">
            <Card color="red lighten-1" text="white" className="text-center">
              <CardBody>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                posuere erat a ante.
              </CardBody>
            </Card>

            <br />

            <Card color="success-color" text="white" className="text-center">
              <CardBody>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                posuere erat a ante.
              </CardBody>
            </Card>

            <br />

            <Card
              color="mdb-color lighten-2"
              text="white"
              className="text-center"
            >
              <CardBody>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                posuere erat a ante.
              </CardBody>
            </Card>
          </Col>
        </Row>

        <br />

        <Card border="primary" className="mb-3" style={{ maxWidth: "18rem" }}>
          <CardHeader>Header</CardHeader>
          <CardBody className="text-primary">
            <CardTitle tag="h5">Primary card title</CardTitle>
            <CardText>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </CardText>
          </CardBody>
        </Card>

        <Card border="secondary" className="mb-3" style={{ maxWidth: "18rem" }}>
          <CardHeader>Header</CardHeader>
          <CardBody className="text-secondary">
            <CardTitle tag="h5">Secondary card title</CardTitle>
            <CardText>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </CardText>
          </CardBody>
        </Card>

        <Card border="success" className="mb-3" style={{ maxWidth: "18rem" }}>
          <CardHeader>Header</CardHeader>
          <CardBody className="text-success">
            <CardTitle tag="h5">Success card title</CardTitle>
            <CardText>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </CardText>
          </CardBody>
        </Card>

        <Card border="danger" className="mb-3" style={{ maxWidth: "18rem" }}>
          <CardHeader>Header</CardHeader>
          <CardBody className="text-danger">
            <CardTitle tag="h5">Danger card title</CardTitle>
            <CardText>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </CardText>
          </CardBody>
        </Card>

        <Card border="warning" className="mb-3" style={{ maxWidth: "18rem" }}>
          <CardHeader>Header</CardHeader>
          <CardBody className="text-warning">
            <CardTitle tag="h5">Warning card title</CardTitle>
            <CardText>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </CardText>
          </CardBody>
        </Card>

        <Card border="info" className="mb-3" style={{ maxWidth: "18rem" }}>
          <CardHeader>Header</CardHeader>
          <CardBody className="text-info">
            <CardTitle tag="h5">Info card title</CardTitle>
            <CardText>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </CardText>
          </CardBody>
        </Card>

        <Card border="light" className="mb-3" style={{ maxWidth: "18rem" }}>
          <CardHeader>Header</CardHeader>
          <CardBody>
            <CardTitle tag="h5">Light card title</CardTitle>
            <CardText>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </CardText>
          </CardBody>
        </Card>

        <Card border="dark" className="mb-3" style={{ maxWidth: "18rem" }}>
          <CardHeader>Header</CardHeader>
          <CardBody className="text-dark">
            <CardTitle tag="h5">Dark card title</CardTitle>
            <CardText>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </CardText>
          </CardBody>
        </Card>

        <Card border="success" style={{ maxWidth: "18rem" }}>
          <CardHeader transparent border="success">
            Header
          </CardHeader>
          <CardBody className="text-success">
            <CardTitle tag="h5">Success card title</CardTitle>
            <CardText>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </CardText>
          </CardBody>
          <CardFooter transparent border="success">
            Footer
          </CardFooter>
        </Card>

        <hr className="mt-5" />
        <h2 className="mt-5">Layout</h2>

        <CardGroup>
          <Card>
            <CardBody>
              <CardTitle tag="h5">Panel title</CardTitle>
              <CardText>
                This is a wider panel with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </CardText>
              <CardText small muted>
                Last updated 3 mins ago
              </CardText>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <CardTitle tag="h5">Panel title</CardTitle>
              <CardText>
                This panel has supporting text below as a natural lead-in to
                additional content.
              </CardText>
              <CardText small muted>
                Last updated 3 mins ago
              </CardText>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <CardTitle tag="h5">Panel title</CardTitle>
              <CardText>
                This is a wider panel with supporting text below as a natural
                lead-in to additional content. This panel has even longer
                content than the first to show that equal height action.
              </CardText>
              <CardText small muted>
                Last updated 3 mins ago
              </CardText>
            </CardBody>
          </Card>
        </CardGroup>

        <br />

        <CardGroup>
          <Card>
            <CardBody>
              <CardTitle tag="h5">Panel title</CardTitle>
              <CardText>
                This is a wider panel with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </CardText>
            </CardBody>
            <CardFooter small muted>
              Last updated 3 mins ago
            </CardFooter>
          </Card>
          <Card>
            <CardBody>
              <CardTitle tag="h5">Panel title</CardTitle>
              <CardText>
                This panel has supporting text below as a natural lead-in to
                additional content.
              </CardText>
            </CardBody>
            <CardFooter small muted>
              Last updated 3 mins ago
            </CardFooter>
          </Card>
          <Card>
            <CardBody>
              <CardTitle tag="h5">Panel title</CardTitle>
              <CardText>
                This is a wider panel with supporting text below as a natural
                lead-in to additional content. This panel has even longer
                content than the first to show that equal height action.
              </CardText>
            </CardBody>
            <CardFooter small muted>
              Last updated 3 mins ago
            </CardFooter>
          </Card>
        </CardGroup>

        <br />

        <CardGroup deck>
          <Card>
            <CardBody>
              <CardTitle tag="h5">Panel title</CardTitle>
              <CardText>
                This is a wider panel with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </CardText>
              <CardText small muted>
                Last updated 3 mins ago
              </CardText>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <CardTitle tag="h5">Panel title</CardTitle>
              <CardText>
                This panel has supporting text below as a natural lead-in to
                additional content.
              </CardText>
              <CardText small muted>
                Last updated 3 mins ago
              </CardText>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <CardTitle tag="h5">Panel title</CardTitle>
              <CardText>
                This is a wider panel with supporting text below as a natural
                lead-in to additional content. This panel has even longer
                content than the first to show that equal height action.
              </CardText>
              <CardText small muted>
                Last updated 3 mins ago
              </CardText>
            </CardBody>
          </Card>
        </CardGroup>

        <br />

        <CardGroup deck>
          <Card>
            <CardBody>
              <CardTitle tag="h5">Panel title</CardTitle>
              <CardText>
                This is a wider panel with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </CardText>
            </CardBody>
            <CardFooter small muted>
              Last updated 3 mins ago
            </CardFooter>
          </Card>
          <Card>
            <CardBody>
              <CardTitle tag="h5">Panel title</CardTitle>
              <CardText>
                This panel has supporting text below as a natural lead-in to
                additional content.
              </CardText>
            </CardBody>
            <CardFooter small muted>
              Last updated 3 mins ago
            </CardFooter>
          </Card>
          <Card>
            <CardBody>
              <CardTitle tag="h5">Panel title</CardTitle>
              <CardText>
                This is a wider panel with supporting text below as a natural
                lead-in to additional content. This panel has even longer
                content than the first to show that equal height action.
              </CardText>
            </CardBody>
            <CardFooter small muted>
              Last updated 3 mins ago
            </CardFooter>
          </Card>
        </CardGroup>

        <br />

        <CardGroup column>
          <Card>
            <CardBody>
              <CardTitle tag="h5">
                Panel title that wraps to a new line
              </CardTitle>
              <CardText>
                This is a longer panel with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </CardText>
            </CardBody>
          </Card>
          <Card className="p-3">
            <blockquote className="blockquote mb-0 card-body">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                posuere erat a ante.
              </p>
              <footer className="blockquote-footer">
                <small className="text-muted">
                  Someone famous in{" "}
                  <cite title="Source Title">Source Title</cite>
                </small>
              </footer>
            </blockquote>
          </Card>
          <Card>
            <CardBody>
              <CardTitle tag="h5">Panel title</CardTitle>
              <CardText>
                This panel has supporting text below as a natural lead-in to
                additional content.
              </CardText>
              <CardText small muted>
                Last updated 3 mins ago
              </CardText>
            </CardBody>
          </Card>

          <Card color="primary-color" text="white" className="text-center p-3">
            <blockquote className="blockquote mb-0">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                posuere erat.
              </p>
              <footer className="blockquote-footer">
                <small className="text-muted">
                  Someone famous in{" "}
                  <cite title="Source Title">Source Title</cite>
                </small>
              </footer>
            </blockquote>
          </Card>

          <Card className="text-center">
            <CardBody>
              <CardTitle tag="h5">Panel title</CardTitle>
              <CardText>
                This panel has supporting text below as a natural lead-in to
                additional content.
              </CardText>
              <CardText small muted>
                Last updated 3 mins ago
              </CardText>
            </CardBody>
          </Card>

          <Card className="text-right p-3">
            <blockquote className="blockquote mb-0 card-body">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                posuere erat a ante.
              </p>
              <footer className="blockquote-footer">
                <small className="text-muted">
                  Someone famous in{" "}
                  <cite title="Source Title">Source Title</cite>
                </small>
              </footer>
            </blockquote>
          </Card>

          <Card>
            <CardBody>
              <CardTitle tag="h5">Panel title</CardTitle>
              <CardText>
                This is a wider panel with supporting text below as a natural
                lead-in to additional content. This panel has even longer
                content than the first to show that equal height action.
              </CardText>
              <CardText small muted>
                Last updated 3 mins ago
              </CardText>
            </CardBody>
          </Card>
        </CardGroup>

        <hr className="mt-5" />
        <h2 className="mt-5">Jumbotron</h2>

        <Jumbotron>
          <h1 className="h1-responsive">Hello, world!</h1>
          <p className="lead">
            This is a simple hero unit, a simple jumbotron-style component for
            calling extra attention to featured content or information.
          </p>
          <hr className="my-2" />
          <p>
            It uses utility classNamees for typography and spacing to space
            content out within the larger container.
          </p>
          <Button color="primary" size="lg">
            Learn more
          </Button>
        </Jumbotron>
      </section>
    </Container>
  );
}

export default PanelPage;
