import React, { Component } from "react";
import {
  Container,
  Button,
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
  Popover,
  PopoverBody,
  PopoverHeader,
  Tooltip,
  Row,
  Col,
  Input
} from "mdbreact";
import DocsLink from "./DocsLink";

class ModalPage extends Component {
  state = {
    modal1: false,
    modal2: false,
    modal3: false,
    modal4: false,
    modal5: false,
    modal6: false,
    modal7: false,
    modal8: false,
    modal9: false,
    modal10: false,
    modal11: false,
    modal12: false,
    modal13: false,
    modal14: false,
    modal15: false,
    modal16: false,
    modal17: false,
    modal18: false,
    backdrop: false,
    mailAddress: "@mdo"
  };

  toggle(nr) {
    let modalNumber = "modal" + nr;
    this.setState({
      [modalNumber]: !this.state[modalNumber]
    });
  }

  showFunction = () => {
    alert("This event is fired just before the modal is open.");
  };

  hideFunction = () => {
    alert("This event is fired just before the modal is hidden.");
  };

  hiddenFunction = () => {
    alert("This event is fired after the modal is closed.");
  };

  render() {
    return (
      <Container>
        <DocsLink
          title="Modal"
          href="https://mdbootstrap.com/react/advanced/modals/"
        />

        <h4 className="mt-4">Basic example</h4>
        <Button color="danger" onClick={() => this.toggle(1)}>
          Modal
        </Button>
        <Modal
          backdrop={false}
          isOpen={this.state.modal1}
          toggle={() => this.toggle(1)}
        >
          <ModalHeader toggle={() => this.toggle(1)}>Modal title</ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={() => this.toggle(1)}>
              Close
            </Button>
            <Button color="primary">Save changes</Button>
          </ModalFooter>
        </Modal>
        <h4 className="mt-4">Central modal</h4>
        <Button color="primary" onClick={() => this.toggle(2)}>
          Medium modal
        </Button>
        <Modal isOpen={this.state.modal2} toggle={() => this.toggle(2)}>
          <ModalHeader toggle={() => this.toggle(2)}>Modal title</ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={() => this.toggle(2)}>
              Close
            </Button>
            <Button color="primary">Save changes</Button>
          </ModalFooter>
        </Modal>
        <Button color="primary" onClick={() => this.toggle(3)}>
          Small modal
        </Button>
        <Modal
          isOpen={this.state.modal3}
          toggle={() => this.toggle(3)}
          size="sm"
        >
          <ModalHeader toggle={() => this.toggle(3)}>Modal title</ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" size="sm" onClick={() => this.toggle(3)}>
              Close
            </Button>
            <Button color="primary" size="sm">
              Save changes
            </Button>
          </ModalFooter>
        </Modal>
        <Button color="primary" onClick={() => this.toggle(4)}>
          Large modal
        </Button>
        <Modal
          isOpen={this.state.modal4}
          toggle={() => this.toggle(4)}
          size="lg"
        >
          <ModalHeader toggle={() => this.toggle(4)}>Modal title</ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={() => this.toggle(4)}>
              Close
            </Button>
            <Button color="primary">Save changes</Button>
          </ModalFooter>
        </Modal>
        <Button color="primary" onClick={() => this.toggle(5)}>
          Fluid modal
        </Button>
        <Modal
          isOpen={this.state.modal5}
          toggle={() => this.toggle(5)}
          size="fluid"
        >
          <ModalHeader toggle={() => this.toggle(5)}>Modal title</ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={() => this.toggle(5)}>
              Close
            </Button>
            <Button color="primary">Save changes</Button>
          </ModalFooter>
        </Modal>
        <h4 className="mt-4">Side modal</h4>
        <Button color="secondary" onClick={() => this.toggle(6)}>
          Top right
        </Button>
        <Modal
          isOpen={this.state.modal6}
          toggle={() => this.toggle(6)}
          side
          position="top-right"
        >
          <ModalHeader toggle={() => this.toggle(6)}>Modal title</ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={() => this.toggle(6)}>
              Close
            </Button>
            <Button color="primary">Save changes</Button>
          </ModalFooter>
        </Modal>
        <Button color="secondary" onClick={() => this.toggle(7)}>
          Bottom left
        </Button>
        <Modal
          isOpen={this.state.modal7}
          toggle={() => this.toggle(7)}
          side
          position="bottom-left"
        >
          <ModalHeader toggle={() => this.toggle(7)}>Modal title</ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={() => this.toggle(7)}>
              Close
            </Button>
            <Button color="primary">Save changes</Button>
          </ModalFooter>
        </Modal>
        <h4 className="mt-4">Fluid modal</h4>
        <Button color="info" onClick={() => this.toggle(8)}>
          Right
        </Button>
        {/*  */}
        <Modal
          isOpen={this.state.modal8}
          toggle={() => this.toggle(8)}
          fullHeight
          position="right"
        >
          <ModalHeader toggle={() => this.toggle(8)}>Modal title</ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={() => this.toggle(8)}>
              Close
            </Button>
            <Button color="primary">Save changes</Button>
          </ModalFooter>
        </Modal>
        <Button color="info" onClick={() => this.toggle(9)}>
          Bottom
        </Button>
        <Modal
          isOpen={this.state.modal9}
          toggle={() => this.toggle(9)}
          fullHeight
          position="bottom"
        >
          <ModalHeader toggle={() => this.toggle(9)}>Modal title</ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={() => this.toggle(9)}>
              Close
            </Button>
            <Button color="primary">Save changes</Button>
          </ModalFooter>
        </Modal>
        <h4 className="mt-4">Frame modal</h4>
        <Button color="warning" onClick={() => this.toggle(10)}>
          Bottom
        </Button>
        <Modal
          isOpen={this.state.modal10}
          toggle={() => this.toggle(10)}
          frame
          position="bottom"
        >
          <ModalBody className="text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            <Button color="secondary" onClick={() => this.toggle(10)}>
              Close
            </Button>
            <Button color="primary">Save changes</Button>
          </ModalBody>
        </Modal>
        <Button color="warning" onClick={() => this.toggle(11)}>
          Top
        </Button>
        <Modal
          isOpen={this.state.modal11}
          toggle={() => this.toggle(11)}
          frame
          position="top"
        >
          <ModalBody className="text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            <Button color="secondary" onClick={() => this.toggle(11)}>
              Close
            </Button>
            <Button color="primary">Save changes</Button>
          </ModalBody>
        </Modal>
        <h4 className="mt-4">Remove backdrop</h4>
        <Button onClick={() => this.toggle(12)}>Modal</Button>
        <Modal
          isOpen={this.state.modal12}
          toggle={() => this.toggle(12)}
          backdrop={false}
        >
          <ModalHeader toggle={() => this.toggle(12)}>Modal title</ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={() => this.toggle(12)}>
              Close
            </Button>
            <Button color="primary">Save changes</Button>
          </ModalFooter>
        </Modal>
        <h4 className="mt-4">Scrolling long content</h4>
        <Button color="primary" onClick={() => this.toggle(13)}>
          Modal
        </Button>
        <Modal isOpen={this.state.modal13} toggle={() => this.toggle(13)}>
          <ModalHeader toggle={() => this.toggle(13)}>Modal title</ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Lorem ipsum dolor sit amet, consectetur adipisicing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Lorem ipsum dolor sit amet, consectetur adipisicing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Lorem ipsum dolor sit amet, consectetur adipisicing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Lorem ipsum dolor sit amet, consectetur adipisicing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Lorem ipsum dolor sit amet, consectetur adipisicing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={() => this.toggle(13)}>
              Close
            </Button>
            <Button color="primary">Save changes</Button>
          </ModalFooter>
        </Modal>
        <h4 className="mt-4">Vertically centered</h4>
        <Button color="primary" onClick={() => this.toggle(14)}>
          Modal
        </Button>
        <Modal
          isOpen={this.state.modal14}
          toggle={() => this.toggle(14)}
          centered
        >
          <ModalHeader toggle={() => this.toggle(14)}>Modal title</ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={() => this.toggle(14)}>
              Close
            </Button>
            <Button color="primary">Save changes</Button>
          </ModalFooter>
        </Modal>
        <h4 className="mt-4">Tooltips and popovers</h4>
        <Button color="primary" onClick={() => this.toggle(15)}>
          Modal
        </Button>
        <Modal isOpen={this.state.modal15} toggle={() => this.toggle(15)}>
          <ModalHeader toggle={() => this.toggle(15)}>Modal title</ModalHeader>
          <ModalBody>
            This
            <Popover
              component="button"
              placement="right"
              popoverBody="button"
              tag="span"
              className="btn btn-secondary"
            >
              <PopoverHeader>Popover title</PopoverHeader>
              <PopoverBody>
                Popover body content is set in this attribute.
              </PopoverBody>
            </Popover>
            triggers a popover on click.
            <hr />
            <Tooltip
              placement="top"
              tag="a"
              component="span"
              tooltipContent="Tooltip"
            >
              This link
            </Tooltip>{" "}
            and{" "}
            <Tooltip
              placement="top"
              tag="a"
              component="span"
              tooltipContent="Tooltip"
            >
              that link
            </Tooltip>{" "}
            have tooltips on hover.
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={() => this.toggle(15)}>
              Close
            </Button>
            <Button color="primary">Save changes</Button>
          </ModalFooter>
        </Modal>
        <h4 className="mt-4">Using the grid</h4>
        <Button onClick={() => this.toggle(16)}>Modal</Button>
        <Modal isOpen={this.state.modal16} toggle={() => this.toggle(16)}>
          <ModalHeader toggle={() => this.toggle(16)}>Modal title</ModalHeader>
          <ModalBody>
            <Container fluid className="text-white">
              <Row>
                <Col md="4" className="bg-info">
                  .col-md-4
                </Col>
                <Col md="4" className="ml-auto bg-info">
                  .col-md-4 .ml-auto
                </Col>
              </Row>
              <br />
              <Row>
                <Col md="3" className="ml-auto bg-info">
                  .col-md-3 .ml-auto
                </Col>
                <Col md="2" className="ml-auto bg-info">
                  .col-md-2 .ml-auto
                </Col>
              </Row>
              <Row>
                <Col md="6" className="ml-5 bg-info">
                  .col-md-6 .ml-5
                </Col>
              </Row>
              <br />
              <Row>
                <Col sm="9" className="bg-info">
                  Level 1: .col-sm-9
                  <Row>
                    <Col sm="6" className="bg-info">
                      Level 2: .col-8 .col-sm-6
                    </Col>
                    <Col sm="6" className="bg-info">
                      Level 2: .col-4 .col-sm-6
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={() => this.toggle(16)}>
              Close
            </Button>{" "}
            <Button color="primary">Save changes</Button>
          </ModalFooter>
        </Modal>
        <h4 className="mt-4">Varying modal content</h4>
        <Button color="primary" onClick={() => this.toggle(17)}>
          Open modal for {this.state.mailAddress}
        </Button>
        <Modal isOpen={this.state.modal17} toggle={() => this.toggle(17)}>
          <ModalHeader toggle={() => this.toggle(17)}>
            New message to {this.state.mailAddress}
          </ModalHeader>
          <ModalBody>
            <div className="md-form">
              <Input value={this.state.mailAddress} />
              <Input type="textarea" label="Message" rows="2" />
            </div>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={() => this.toggle(17)}>
              Close
            </Button>{" "}
            <Button color="primary">Send message</Button>
          </ModalFooter>
        </Modal>
        <h4 className="mt-4">Modal Events</h4>
        <Button color="warning" onClick={() => this.toggle(18)}>
          Modal events
        </Button>
        <Modal
          isOpen={this.state.modal18}
          toggle={() => this.toggle(18)}
          hideModal={this.hideFunction}
          hiddenModal={this.hiddenFunction}
          showModal={this.showFunction}
        >
          <ModalHeader toggle={() => this.toggle(18)}>Modal title</ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={() => this.toggle(18)}>
              Close
            </Button>
            <Button color="primary">Save changes</Button>
          </ModalFooter>
        </Modal>
      </Container>
    );
  }
}

export default ModalPage;
