import React from 'react';
import { Container, Button, Modal, ModalBody, ModalHeader, ModalFooter, Popover, PopoverBody, PopoverHeader, Tooltip, Row, Col, Input } from 'mdbreact';


class ModalPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
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
      backdrop: false,
      mailAddress: '@mdo'
    };

    this.toggle = this.toggle.bind(this);
    this.toggle2 = this.toggle2.bind(this);
    this.toggle3 = this.toggle3.bind(this);
    this.toggle4 = this.toggle4.bind(this);
    this.toggle5 = this.toggle5.bind(this);
    this.toggle6 = this.toggle6.bind(this);
    this.toggle7 = this.toggle7.bind(this);
    this.toggle8 = this.toggle8.bind(this);
    this.toggle9 = this.toggle9.bind(this);
    this.toggle10 = this.toggle10.bind(this);
    this.toggle11 = this.toggle11.bind(this);
    this.toggle12 = this.toggle12.bind(this);
    this.toggle13 = this.toggle13.bind(this);
    this.toggle14 = this.toggle14.bind(this);
    this.toggle15 = this.toggle15.bind(this);
    this.toggle16 = this.toggle16.bind(this);
    this.toggle17 = this.toggle17.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }
  toggle2() {
    this.setState({
      modal2: !this.state.modal2
    });
  }
  toggle3() {
    this.setState({
      modal3: !this.state.modal3
    });
  }
  toggle4() {
    this.setState({
      modal4: !this.state.modal4
    });
  }
  toggle5() {
    this.setState({
      modal5: !this.state.modal5
    });
  }
  toggle6() {
    this.setState({
      modal6: !this.state.modal6
    });
  }
  toggle7() {
    this.setState({
      modal7: !this.state.modal7
    });
  }
  toggle8() {
    this.setState({
      modal8: !this.state.modal8
    });
  }
  toggle9() {
    this.setState({
      modal9: !this.state.modal9
    });
  }
  toggle10() {
    this.setState({
      modal10: !this.state.modal10
    });
  }
  toggle11() {
    this.setState({
      modal11: !this.state.modal11
    });
  }
  toggle12() {
    this.setState({
      modal12: !this.state.modal12
    });
  }
  toggle13() {
    this.setState({
      modal13: !this.state.modal13
    });
  }
  toggle14() {
    this.setState({
      modal14: !this.state.modal14
    });
  }
  toggle15() {
    this.setState({
      modal15: !this.state.modal15
    });
  }
  toggle16() {
    this.setState({
      modal16: !this.state.modal16
    });
  }
  toggle17() {
    this.setState({
      modal17: !this.state.modal17
    });
  }

  render() {
    return (
      <Container>
        <h4 className="mt-4">Basic example</h4>
        <Button color="danger" onClick={this.toggle} >Modal</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>Close</Button>{' '}
            <Button color="primary">Save changes</Button>
          </ModalFooter>
        </Modal>
        <h4 className="mt-4">Central modal</h4>
        <Button color="primary" onClick={this.toggle2} >Medium modal</Button>
        <Modal isOpen={this.state.modal2} toggle={this.toggle2}>
          <ModalHeader toggle={this.toggle2}>Modal title</ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle2}>Close</Button>{' '}
            <Button color="primary">Save changes</Button>
          </ModalFooter>
        </Modal>
        <Button color="primary" onClick={this.toggle3} >Small modal</Button>
        <Modal isOpen={this.state.modal3} toggle={this.toggle3} size="sm">
          <ModalHeader toggle={this.toggle3}>Modal title</ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" size="sm" onClick={this.toggle3}>Close</Button>{' '}
            <Button color="primary" size="sm">Save changes</Button>
          </ModalFooter>
        </Modal>
        <Button color="primary" onClick={this.toggle4} >Large modal</Button>
        <Modal isOpen={this.state.modal4} toggle={this.toggle4} size="lg">
          <ModalHeader toggle={this.toggle4}>Modal title</ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle4}>Close</Button>{' '}
            <Button color="primary">Save changes</Button>
          </ModalFooter>
        </Modal>
        <Button color="primary" onClick={this.toggle5}>Fluid modal</Button>
        <Modal isOpen={this.state.modal5} toggle={this.toggle5} size="fluid">
          <ModalHeader toggle={this.toggle5}>Modal title</ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle5}>Close</Button>{' '}
            <Button color="primary">Save changes</Button>
          </ModalFooter>
        </Modal>
        <h4 className="mt-4">Side modal</h4>
        <Button color="secondary" onClick={this.toggle6}>Top right</Button>
        <Modal isOpen={this.state.modal6} toggle={this.toggle6} side position="top-right">
          <ModalHeader toggle={this.toggle6}>Modal title</ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle6}>Close</Button>{' '}
            <Button color="primary">Save changes</Button>
          </ModalFooter>
        </Modal>
        <Button color="secondary" onClick={this.toggle7}>Bottom left</Button>
        <Modal isOpen={this.state.modal7} toggle={this.toggle7} side position="bottom-left">
          <ModalHeader toggle={this.toggle7}>Modal title</ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle7}>Close</Button>{' '}
            <Button color="primary">Save changes</Button>
          </ModalFooter>
        </Modal>
        <h4 className="mt-4">Fluid modal</h4>
        <Button color="info" onClick={this.toggle8}>Right</Button>
        <Modal isOpen={this.state.modal8} toggle={this.toggle8} fullHeight position="right">
          <ModalHeader toggle={this.toggle8}>Modal title</ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle8}>Close</Button>{' '}
            <Button color="primary">Save changes</Button>
          </ModalFooter>
        </Modal>        
        <Button color="info" onClick={this.toggle9}>Bottom</Button>
        <Modal isOpen={this.state.modal9} toggle={this.toggle9} fullHeight position="bottom">
          <ModalHeader toggle={this.toggle9}>Modal title</ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle9}>Close</Button>{' '}
            <Button color="primary">Save changes</Button>
          </ModalFooter>
        </Modal>        
        <h4 className="mt-4">Frame modal</h4>
        <Button color="warning" onClick={this.toggle10}>Bottom</Button>
        <Modal isOpen={this.state.modal10} toggle={this.toggle10} frame position="bottom">
          <ModalBody className="text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            <Button color="secondary" onClick={this.toggle10}>Close</Button>{' '}
            <Button color="primary">Save changes</Button>
          </ModalBody>
        </Modal> 
        <Button color="warning" onClick={this.toggle11}>Top</Button>
        <Modal isOpen={this.state.modal11} toggle={this.toggle11} frame position="top">
          <ModalBody className="text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            <Button color="secondary" onClick={this.toggle11}>Close</Button>{' '}
            <Button color="primary">Save changes</Button>
          </ModalBody>
        </Modal> 
        <h4 className="mt-4">Remove backdrop</h4>
        <Button onClick={this.toggle12}>Modal</Button>
        <Modal isOpen={this.state.modal12} toggle={this.toggle12} backdrop={false}>
          <ModalHeader toggle={this.toggle12}>Modal title</ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle12}>Close</Button>{' '}
            <Button color="primary">Save changes</Button>
          </ModalFooter>
        </Modal>       
        <h4 className="mt-4">Scrolling long content</h4>
        <Button color="primary" onClick={this.toggle13}>Modal</Button>
        <Modal isOpen={this.state.modal13} toggle={this.toggle13}>
          <ModalHeader toggle={this.toggle13}>Modal title</ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle13}>Close</Button>{' '}
            <Button color="primary">Save changes</Button>
          </ModalFooter>
        </Modal>    
        <h4 className="mt-4">Vertically centered</h4>
        <Button color="primary" onClick={this.toggle14} >Modal</Button>
        <Modal isOpen={this.state.modal14} toggle={this.toggle14} centered>
          <ModalHeader toggle={this.toggle14}>Modal title</ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle14}>Close</Button>{' '}
            <Button color="primary">Save changes</Button>
          </ModalFooter>
        </Modal> 
        <h4 className="mt-4">Tooltips and popovers</h4>
        <Button color="primary" onClick={this.toggle15} >Modal</Button>
        <Modal isOpen={this.state.modal15} toggle={this.toggle15}>
          <ModalHeader toggle={this.toggle15}>Modal title</ModalHeader>
          <ModalBody>
            This
            <Popover 
              component="button"
              placement="right" 
              popoverBody="button" 
              tag="span"
              className="btn btn-secondary">
              <PopoverHeader>Popover title</PopoverHeader>
              <PopoverBody>Popover body content is set in this attribute.</PopoverBody>
            </Popover>
            triggers a popover on click.
            <hr />
            <Tooltip
              placement="top"
              tag="a"
              component="span"
              tooltipContent="Tooltip">
                This link
            </Tooltip>
            {' '}and{' '}
            <Tooltip
              placement="top"
              tag="a"
              component="span"
              tooltipContent="Tooltip">
                that link 
            </Tooltip>
            {' '}have tooltips on hover.
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle15}>Close</Button>{' '}
            <Button color="primary">Save changes</Button>
          </ModalFooter>
        </Modal> 
        <h4 className="mt-4">Using the grid</h4>
        <Button onClick={this.toggle16}>Modal</Button>
        <Modal isOpen={this.state.modal16} toggle={this.toggle16}>
          <ModalHeader toggle={this.toggle16}>Modal title</ModalHeader>
          <ModalBody>
            <Container fluid className="text-white">
              <Row>
                <Col md="4" className="bg-info">.col-md-4</Col>
                <Col md="4" className="ml-auto bg-info">.col-md-4 .ml-auto</Col>
              </Row>
              <br />
              <Row>
                <Col md="3" className="ml-auto bg-info">.col-md-3 .ml-auto</Col>
                <Col md="2" className="ml-auto bg-info">.col-md-2 .ml-auto</Col>
              </Row>
              <Row>
                <Col md="6" className="ml-5 bg-info">.col-md-6 .ml-5</Col>
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
            <Button color="secondary" onClick={this.toggle16}>Close</Button>{' '}
            <Button color="primary">Save changes</Button>
          </ModalFooter>
        </Modal>  
        <h4 className="mt-4">Varying modal content</h4>
        <Button color="primary" onClick={this.toggle17} >Open modal for {this.state.mailAddress}</Button>
        <Modal isOpen={this.state.modal17} toggle={this.toggle17}>
          <ModalHeader toggle={this.toggle17}>New message to {this.state.mailAddress}</ModalHeader>
          <ModalBody>
            <div className="md-form">
            <Input defaultValue={this.state.mailAddress} />
            <Input type="textarea" label="Message" rows="2" />
            </div>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle17}>Close</Button>{' '}
            <Button color="primary">Send message</Button>
          </ModalFooter>
        </Modal>
      </Container>
    );
  }
}

export default ModalPage;