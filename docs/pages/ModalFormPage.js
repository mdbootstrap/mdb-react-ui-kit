import React from "react";
import {
  Container,
  Button,
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
  Row,
  Input,
  Fa
} from "mdbreact";
import DocsLink from "./DocsLink";

class ModalPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal1: false,
      modal2: false,
      modal3: false,
      modal4: false,
      modal5: false
    };
  }

  toggle(nr) {
    let modalNumber = "modal" + nr;
    this.setState({
      [modalNumber]: !this.state[modalNumber]
    });
  }

  render() {
    return (
      <Container>
        <DocsLink
          title="Modal Form"
          href="https://mdbootstrap.com/react/advanced/modals/"
        />
        <h4 className="mt-4">Simple modal login</h4>
        <Row>
          <Button rounded onClick={() => this.toggle(1)}>
            Launch Modal Login Form
          </Button>
          <Modal isOpen={this.state.modal1} toggle={() => this.toggle(1)}>
            <ModalHeader
              className="text-center"
              titleClass="w-100 font-weight-bold"
              toggle={() => this.toggle(1)}
            >
              Sign in
            </ModalHeader>
            <ModalBody>
              <form className="mx-3 grey-text">
                <Input
                  label="Type your email"
                  icon="envelope"
                  group
                  type="email"
                  validate
                  error="wrong"
                  success="right"
                />
                <Input
                  label="Type your password"
                  icon="lock"
                  group
                  type="password"
                  validate
                />
              </form>
            </ModalBody>
            <ModalFooter className="justify-content-center">
              <Button onClick={() => this.toggle(1)}>Login</Button>
            </ModalFooter>
          </Modal>
        </Row>

        <h4 className="mt-4">Simple modal register</h4>
        <Row>
          <Button rounded onClick={() => this.toggle(2)}>
            Launch Modal Register Form
          </Button>
          <Modal isOpen={this.state.modal2} toggle={() => this.toggle(2)}>
            <ModalHeader
              className="text-center"
              titleClass="w-100 font-weight-bold"
              toggle={() => this.toggle(2)}
            >
              Sign in
            </ModalHeader>
            <ModalBody>
              <form className="mx-3 grey-text">
                <Input
                  label="Your name"
                  icon="user"
                  group
                  type="text"
                  validate
                  error="wrong"
                  success="right"
                />
                <Input
                  label="Your email"
                  icon="envelope"
                  group
                  type="email"
                  validate
                  error="wrong"
                  success="right"
                />
                <Input
                  label="Your password"
                  icon="lock"
                  group
                  type="password"
                  validate
                />
              </form>
            </ModalBody>
            <ModalFooter className="justify-content-center">
              <Button color="deep-orange" onClick={() => this.toggle(2)}>
                SIGN UP
              </Button>
            </ModalFooter>
          </Modal>
        </Row>

        <h4 className="mt-4">Simple modal subscription</h4>
        <Row>
          <Button rounded onClick={() => this.toggle(3)}>
            Launch Modal subscription Form
          </Button>
          <Modal isOpen={this.state.modal3} toggle={() => this.toggle(3)}>
            <ModalHeader
              className="text-center"
              titleClass="w-100 font-weight-bold"
              toggle={() => this.toggle(3)}
            >
              Subscribe
            </ModalHeader>
            <ModalBody>
              <form className="mx-3 grey-text">
                <Input
                  label="Your name"
                  icon="user"
                  group
                  type="text"
                  validate
                />
                <Input
                  label="Your email"
                  icon="envelope"
                  group
                  type="email"
                  validate
                  error="wrong"
                  success="right"
                />
              </form>
            </ModalBody>
            <ModalFooter className="justify-content-center">
              <Button color="indigo" onClick={() => this.toggle(3)}>
                Send
                <Fa icon="paper-plane-o" className="ml-2" />
              </Button>
            </ModalFooter>
          </Modal>
        </Row>

        <h4 className="mt-4">Simple modal contact</h4>
        <Row>
          <Button rounded onClick={() => this.toggle(4)}>
            Launch Modal Contact Form
          </Button>
          <Modal isOpen={this.state.modal4} toggle={() => this.toggle(4)}>
            <ModalHeader
              className="text-center"
              titleClass="w-100 font-weight-bold"
              toggle={() => this.toggle(4)}
            >
              Write to us
            </ModalHeader>
            <ModalBody>
              <form className="mx-3 grey-text">
                <Input
                  label="Your name"
                  icon="user"
                  group
                  type="text"
                  validate
                />
                <Input
                  label="Your email"
                  icon="envelope"
                  group
                  type="email"
                  validate
                  error="wrong"
                  success="right"
                />
                <Input label="Your Subject" icon="tag" group type="text" />
                <Input
                  type="textarea"
                  rows="2"
                  label="Your message"
                  icon="pencil"
                />
              </form>
            </ModalBody>
            <ModalFooter className="justify-content-center">
              <Button color="unique" onClick={() => this.toggle(4)}>
                Send
                <Fa icon="paper-plane-o" className="ml-2" />
              </Button>
            </ModalFooter>
          </Modal>
        </Row>

        <h4 className="mt-4">Modal with avatar</h4>
        <Row>
          <Button rounded onClick={() => this.toggle(5)}>
            Launch Modal Login With Avatar
          </Button>
          <Modal
            size="sm"
            cascading
            className="modal-avatar"
            isOpen={this.state.modal5}
            toggle={() => this.toggle(5)}
          >
            <ModalHeader className="mx-auto">
              <img
                src="https://mdbootstrap.com/img/Photos/Avatars/img%20%281%29.jpg"
                alt="avatar"
                className="rounded-circle img-responsive"
              />
            </ModalHeader>
            <ModalBody className="text-center mb-1">
              <h5 className="mt-1 mb-2">Maria Doe</h5>
              <form className="mx-3 grey-text">
                <Input label="Enter password" group type="password" validate />
              </form>
            </ModalBody>
            <ModalFooter className="justify-content-center">
              <Button color="cyan" onClick={() => this.toggle(5)}>
                Login
                <Fa icon="sign-in" className="ml-2" />
              </Button>
            </ModalFooter>
          </Modal>
        </Row>

        <h4 className="mt-4">Subscription modal with orange header</h4>
        <Row>
          <Button rounded onClick={() => this.toggle(6)}>
            Launch Modal Subscription
          </Button>
          <Modal
            className="modal-notify modal-warning white-text"
            isOpen={this.state.modal6}
            toggle={() => this.toggle(6)}
          >
            <ModalHeader
              className="text-center"
              titleClass="w-100 font-weight-bold"
              toggle={() => this.toggle(6)}
            >
              Subscribe
            </ModalHeader>
            <ModalBody>
              <form className="mx-3 grey-text">
                <Input
                  label="Your name"
                  icon="user"
                  iconClass="grey-text"
                  group
                  type="text"
                  validate
                  error="wrong"
                  success="right"
                />
                <Input
                  label="Your email"
                  icon="envelope"
                  iconClass="grey-text"
                  group
                  type="email"
                  validate
                  error="wrong"
                  success="right"
                />
              </form>
            </ModalBody>
            <ModalFooter className="justify-content-center">
              <Button color="warning" outline onClick={() => this.toggle(6)}>
                Send
                <Fa icon="paper-plane-o" className="ml-2" />
              </Button>
            </ModalFooter>
          </Modal>
        </Row>
      </Container>
    );
  }
}

export default ModalPage;
