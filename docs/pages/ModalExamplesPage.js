import React from 'react';
import { Container, Button, Modal, ModalBody, ModalHeader, ModalFooter, Row, Input, Fa, Badge, Col, Table, TableBody, TableHead, Select, SelectOption, SelectOptions, SelectInput, CollapseHeader, Card, Collapse, CardBody, Carousel, CarouselInner, CarouselItem } from 'mdbreact';
import './ModalExamplesPage.css';

class ModalPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
      accordion: 1
    };
  }

  toggle(nr) {
    let modalNumber = 'modal' + nr
    this.setState({ ...this.state,
      [modalNumber]: !this.state[modalNumber]
    });
  }

  onClick = number => () => {
      let state;
      if(this.state.accordion !== number) {
        state = number;
      } else {
        state = false;
      }

      this.setState({
        ...this.state,
        accordion: state});
  }

  render() {
    let { accordion } = this.state;
    return (
      <Container>
        <Row className="align-items-center mt-5">
          <h4 className="grey-text" style={{margin: "0px"}}>
            <strong>Modal Templates & Examples</strong>
          </h4>
          <a className="border grey-text px-2 border-light rounded ml-2" target="_blank"  href="https://mdbootstrap.com/react/advanced/modals/"><Fa icon="graduation-cap" className="mr-2"/>Docs</a>
        </Row>
        <hr className="mb-5" />
        <h4 className="mt-4">Modal Cookies</h4>
        <Row>
          <Button onClick={() => this.toggle(1)}>Launch Modal</Button>
          <Modal position="top" backdrop={false} frame isOpen={this.state.modal1} toggle={() => this.toggle(1)} >
            <ModalBody>
              <Row className="justify-content-center align-items-center">
                <p className="pt-3 pr-2">We use cookies to improve your website experience</p>
                <Button color="primary"  onClick={() => this.toggle(1)}>Learn more<Fa icon="book" className="ml-1" /></Button>
                <Button color="primary" outline onClick={() => this.toggle(1)}>Ok, thanks</Button>
              </Row>
            </ModalBody>
          </Modal>
        </Row>

        <h4 className="mt-4">Modal Coupon</h4>
        <Row>
          <Button onClick={() => this.toggle(2)}>Launch Modal</Button>
          <Modal position="bottom" backdrop={false} frame isOpen={this.state.modal2} toggle={() => this.toggle(2)} >
            <ModalBody>
              <Row className="justify-content-center align-items-center">
                <h3><Badge color="success">v52gs1</Badge></h3>
                <p className="pt-3 mx-4">We have a gift for you! Use this code to get a <strong>10% discount</strong>.</p>
                <Button color="success"  onClick={() => this.toggle(2)}>Learn more<Fa icon="book" className="ml-1" /></Button>
                <Button color="success" outline onClick={() => this.toggle(2)}>No, thanks</Button>
              </Row>
            </ModalBody>
          </Modal>
        </Row>

        <h4 className="mt-4">Modal Discount</h4>
        <Row>
          <Button onClick={() => this.toggle(3)}>Launch Modal</Button>
          <Modal size="lg" className="modal-notify modal-danger text-white" side position="bottom-right" backdrop={false}  isOpen={this.state.modal3} toggle={() => this.toggle(3)} >
            <ModalHeader tag="p" toggle={() => this.toggle(3)}>
              Discount offer: <strong>10% off</strong>
            </ModalHeader>
            <ModalBody>
              <Row>
                <Col size="3" className="d-flex justify-content-center align-items-center">
                  <Fa size="4x" icon="gift" className="ml-1" />
                </Col>
                <Col size="9">
                  <p>Sharing is caring. Therefore, from time to time we like to give our visitors small gifts. Today is one of those days.</p>
                  <p><strong>Copy the following code and use it at the checkout. It's valid for <u>one day</u>.</strong></p>
                  <h3><Badge color="danger">v52gs1</Badge></h3>
                </Col>
              </Row>
            </ModalBody>
            <ModalFooter className="justify-content-center">
              <Button color="danger"  onClick={() => this.toggle(3)}>Get it now<Fa icon="diamond" className="ml-1 white-text" /></Button>
              <Button color="danger" outline onClick={() => this.toggle(3)}>No, thanks</Button>
            </ModalFooter>
          </Modal>
        </Row>

        <h4 className="mt-4">Modal Related content</h4>
        <Row>
          <Button onClick={() => this.toggle(4)}>Launch Modal</Button>
          <Modal className="modal-notify modal-info text-white" side position="bottom-right" backdrop={false}  isOpen={this.state.modal4} toggle={() => this.toggle(4)} >
            <ModalHeader tag="p" toggle={() => this.toggle(4)}>
              Related article
            </ModalHeader>
            <ModalBody>
              <Row>
                <Col size="5">
                  <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(55).jpg" class="img-fluid" alt="" />
                </Col>
                <Col size="7">
                  <p><strong>My travel to paradise</strong></p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
                  <Button color="primary" size='md' outline onClick={() => this.toggle(4)}>Read more</Button>
                </Col>
              </Row>
            </ModalBody>
          </Modal>
        </Row>

        <h4 className="mt-4">Modal Abandoned cart</h4>
        <Row>
          <Button onClick={() => this.toggle(5)}>Launch Modal</Button>
          <Modal className="modal-notify modal-info text-white" side position="top-right" backdrop={false}  isOpen={this.state.modal5} toggle={() => this.toggle(5)} >
            <ModalHeader tag="p" toggle={() => this.toggle(5)}>
              Product in the cart
            </ModalHeader>
            <ModalBody>
              <Row>
                <Col size="3" className="d-flex justify-content-center align-items-center">
                  <Fa size="4x" icon="shopping-cart" className="ml-1" />
                </Col>
                <Col size="9">
                  <p>Do you need more time to make a purchase decision?</p>
                  <p>No pressure, your product will be waiting for you in the cart.</p>
                </Col>
              </Row>
            </ModalBody>
            <ModalFooter className="justify-content-center">
              <Button color="primary"  onClick={() => this.toggle(5)}>Go to cart</Button>
              <Button color="primary" outline onClick={() => this.toggle(5)}>Cancel</Button>
            </ModalFooter>
          </Modal>
        </Row>

        <h4 className="mt-4">Modal Confirm delete</h4>
        <Row>
          <Button onClick={() => this.toggle(6)}>Launch Modal</Button>
          <Modal modalStyle="danger" className="text-white" size="sm" side position="top-right" backdrop={false}  isOpen={this.state.modal6} toggle={() => this.toggle(6)} >
            <ModalHeader className="text-center" titleClass="w-100" tag="p" toggle={() => this.toggle(6)}>
              Are you sure?
            </ModalHeader>
            <ModalBody className="text-center">
              <Fa icon="times" size="4x" className="animated rotateIn" />
            </ModalBody>
            <ModalFooter className="justify-content-center">
              <Button color="danger"  onClick={() => this.toggle(6)}>Yes</Button>
              <Button color="danger" outline onClick={() => this.toggle(6)}>No</Button>
            </ModalFooter>
          </Modal>
        </Row>

        <h4 className="mt-4">Modal Poll</h4>
        <Row>
          <Button onClick={() => this.toggle(9)}>Launch Modal</Button>
          <Modal fullHeight position="right" backdrop={false} className="modal-notify modal-info text-white" isOpen={this.state.modal9} toggle={() => this.toggle(9)} >
            <ModalHeader tag="p" toggle={() => this.toggle(9)}>
              Feedback request
            </ModalHeader>
            <ModalBody className="text-center">
              <Fa icon="file-text-o" size="4x" className="animated rotateIn mb-3" />
              <p className="font-weight-bold mb-3">Your opinion matters</p>
              <p>Have some ideas how to improve our product? Give us your feedback.</p>
              <hr />
              {/* Radio */}
              <p className="mb-3">Your rating</p>
              <div className="text-left">
                <Input label="Very good" type="radio" id="radio1" />
                <Input label="Good" type="radio" id="radio2" />
                <Input label="Mediocre" type="radio" id="radio3" />
                <Input label="Bad" type="radio" id="radio4" />
                <Input label="Very bad" type="radio" id="radio5" />
              </div>
              {/* Textarea */}
              <p className="mb-3">What could we improve?</p>
              <Input label="Your message" type="textarea" id="radio1" />
            </ModalBody>
            <ModalFooter className="justify-content-center">
              <Button color="primary" onClick={() => this.toggle(9)}>Send<Fa icon="paper-plane" className="ml-1" /></Button>
              <Button color="primary" outline onClick={() => this.toggle(9)}>Calcel</Button>
            </ModalFooter>
          </Modal>
        </Row>

        <h4 className="mt-4">Modal Cart</h4>
        <Row>
          <Button onClick={() => this.toggle(10)}>Launch Modal</Button>
          <Modal isOpen={this.state.modal10} toggle={() => this.toggle(10)} >
            <ModalHeader toggle={() => this.toggle(10)}>
              Your cart
            </ModalHeader>
            <ModalBody>
              <Table striped>
                <TableHead>
                  <tr>
                    <th></th>
                    <th>Product name</th>
                    <th>Price</th>
                    <th>Remove</th>
                  </tr>
                </TableHead>
                <TableBody>
                  <tr>
                    <td>1</td>
                    <td>Product 1</td>
                    <td>100$</td>
                    <td><Fa icon="remove" /></td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Product 2</td>
                    <td>1 340$</td>
                    <td><Fa icon="remove" /></td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Product 3</td>
                    <td>30$</td>
                    <td><Fa icon="remove" /></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td><strong>Total</strong></td>
                    <td><strong>1 470$</strong></td>
                    <td></td>
                  </tr>
                </TableBody>
              </Table>
            </ModalBody>
            <ModalFooter className="justify-content-end">
              <Button color="primary" outline onClick={() => this.toggle(10)}>Close</Button>
              <Button color="primary" onClick={() => this.toggle(10)}>Checkout</Button>
            </ModalFooter>
          </Modal>
        </Row>

        <h4 className="mt-4">Modal Push</h4>
        <Row>
          <Button onClick={() => this.toggle(7)}>Launch Modal</Button>
          <Modal className="modal-notify modal-info text-white" isOpen={this.state.modal7} toggle={() => this.toggle(7)} >
            <ModalHeader className="text-center" titleClass="w-100" tag="p">
              Be always up to date
            </ModalHeader>
            <ModalBody className="text-center">
              <Fa icon="bell" size="4x" className="animated rotateIn mb-4" />
              <p>Do you want to receive the push notification about the newest posts?</p>
            </ModalBody>
            <ModalFooter className="justify-content-center">
              <Button color="primary"  onClick={() => this.toggle(7)}>Yes</Button>
              <Button color="primary" outline onClick={() => this.toggle(7)}>No</Button>
            </ModalFooter>
          </Modal>
        </Row>

        <h4 className="mt-4">Modal YouTube</h4>
        <Row>
          <Button onClick={() => this.toggle(11)}>Launch Modal</Button>
          <Modal size="lg" isOpen={this.state.modal11} toggle={() => this.toggle(11)} >
            <ModalBody className="mb-0 p-0">
              <div className="embed-responsive embed-responsive-16by9 z-depth-1-half">
                  <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/A3PDXmYoF5U" allowFullScreen></iframe>
              </div>
            </ModalBody>
            <ModalFooter className="justify-content-center">
              <span className="mr-4">Spread the word!</span>
              <Button tag="a" size="sm" floating social="fb"><Fa icon="facebook" /></Button>
              <Button tag="a" size="sm" floating social="tw"><Fa icon="twitter" /></Button>
              <Button tag="a" size="sm" floating social="gplus"><Fa icon="google-plus" /></Button>
              <Button tag="a" size="sm" floating social="li"><Fa icon="linkedin" /></Button>
              <Button color="primary" outline rounded size="md" className="ml-4" onClick={() => this.toggle(11)}>Close</Button>
            </ModalFooter>
          </Modal>
        </Row>

        <h4 className="mt-4">Modal Vimeo</h4>
        <Row>
          <Button onClick={() => this.toggle(12)}>Launch Modal</Button>
          <Modal size="lg" isOpen={this.state.modal12} toggle={() => this.toggle(12)} >
            <ModalBody className="mb-0 p-0">
              <div className="embed-responsive embed-responsive-16by9 z-depth-1-half">
                <iframe className="embed-responsive-item" src="https://player.vimeo.com/video/115098447" allowFullScreen></iframe>
              </div>
            </ModalBody>
            <ModalFooter className="justify-content-center">
              <span className="mr-4">Spread the word!</span>
              <Button tag="a" size="sm" floating social="fb"><Fa icon="facebook" /></Button>
              <Button tag="a" size="sm" floating social="tw"><Fa icon="twitter" /></Button>
              <Button tag="a" size="sm" floating social="gplus"><Fa icon="google-plus" /></Button>
              <Button tag="a" size="sm" floating social="li"><Fa icon="linkedin" /></Button>
              <Button color="primary" outline rounded size="md" className="ml-4" onClick={() => this.toggle(12)}>Close</Button>
            </ModalFooter>
          </Modal>
        </Row>

        <h4 className="mt-4">Modal Product</h4>
        <Row>
          <Button onClick={() => this.toggle(13)}>Launch Modal</Button>
          <Modal size="lg" isOpen={this.state.modal13} toggle={() => this.toggle(13)} >
            <ModalBody className="d-flex">
              <Col size="5" lg="5">
              {/* Carrousel */}
                <Carousel
                  activeItem={1}
                  length={3}
                  showControls={true}
                  showIndicators={true}
                  thumbnails
                  className="z-depth-1">
                  <CarouselInner>
                    <CarouselItem itemId="1">
                      <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/img%20(23).jpg" alt="First slide" />
                    </CarouselItem>
                    <CarouselItem itemId="2">
                      <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/img%20(24).jpg" alt="Second slide" />
                    </CarouselItem>
                    <CarouselItem itemId="3">
                      <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/img%20(25).jpg" alt="Third slide" />
                    </CarouselItem>
                  </CarouselInner>
                </Carousel>
              </Col>
              <Col size="7" lg="7">
                <h2 className="h2-responsive product-name">
                  <strong>Product Name</strong>
                </h2>
                <h4 className="h4-responsive">
                  <span className="green-text">
                    <strong>$49</strong>
                  </span>
                  <span className="grey-text ml-1">
                    <small>
                      <s>$89</s>
                    </small>
                  </span>
                </h4>
                {/* Accordion wrapper */}
                <div className="my-4">
                  <Card>
                    <CollapseHeader onClick={this.onClick(1)}>Description
                    <i className={"ml-1 " + (accordion === 1 ? 'fa fa-angle-down rotate-icon' : 'fa fa-angle-down')}></i>
                    </CollapseHeader>
                    <Collapse isOpen={accordion === 1}>
                      <CardBody>
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                      </CardBody>
                    </Collapse>
                  </Card>
                  <Card>
                    <CollapseHeader onClick={this.onClick(2)}>Details
                      <i className={"ml-1 " + (accordion === 2 ? 'fa fa-angle-down rotate-icon' : 'fa fa-angle-down')}></i>
                    </CollapseHeader>
                    <Collapse isOpen={accordion === 2}>
                      <CardBody>
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                      </CardBody>
                    </Collapse>
                  </Card>
                  <Card>
                    <CollapseHeader onClick={this.onClick(3)}>Shipping
                    <i className={"ml-1 " + (accordion === 3 ? 'fa fa-angle-down rotate-icon' : 'fa fa-angle-down')}></i>
                    </CollapseHeader>
                    <Collapse isOpen={accordion === 3}>
                      <CardBody>
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                      </CardBody>
                    </Collapse>
                  </Card>
                </div>
                <Row>
                  <Col size="6">
                    <Select>
                      <SelectInput></SelectInput>
                      <SelectOptions>
                        <SelectOption disabled>Choose your option</SelectOption>
                        <SelectOption>White</SelectOption>
                        <SelectOption>Black</SelectOption>
                        <SelectOption>Pink</SelectOption>
                      </SelectOptions>
                    </Select>
                    <label>Select color</label>
                  </Col>
                  <Col size="6">
                    <Select>
                      <SelectInput></SelectInput>
                      <SelectOptions>
                        <SelectOption disabled>Choose your option</SelectOption>
                        <SelectOption>White</SelectOption>
                        <SelectOption>Black</SelectOption>
                        <SelectOption>Pink</SelectOption>
                      </SelectOptions>
                    </Select>
                    <label>Select size</label>
                  </Col>
                </Row>
                <Row className="justify-content-center">
                  <Button color="secondary" className="ml-4" onClick={() => this.toggle(13)}>Close</Button>
                  <Button color="primary" className="ml-4" onClick={() => this.toggle(13)}>Add to Cart<Fa icon="cart-plus" className="ml-2" /></Button>
                </Row>
              </Col>
            </ModalBody>
          </Modal>
        </Row>

        <h4 className="mt-4">Modal Social share</h4>
        <Row>
          <Button onClick={() => this.toggle(8)}>Launch Modal</Button>
          <Modal cascading isOpen={this.state.modal8} toggle={() => this.toggle(8)} >
            <ModalHeader className="text-center text-white light-blue darken-3" titleClass="w-100" tag="h5" toggle={() => this.toggle(8)}>
             <Fa icon="users" className="text-white mr-2" />
              Spreed the word!
            </ModalHeader>
            <ModalBody className="text-center">
              <Button tag="a" floating social="fb"><Fa icon="facebook" /></Button>
              <Button tag="a" floating social="tw"><Fa icon="twitter" /></Button>
              <Button tag="a" floating social="gplus"><Fa icon="google-plus" /></Button>
              <Button tag="a" floating social="li"><Fa icon="linkedin" /></Button>
              <Button tag="a" floating social="ins"><Fa icon="instagram" /></Button>
              <Button tag="a" floating social="pin"><Fa icon="pinterest" /></Button>
              <Button tag="a" floating social="yt"><Fa icon="youtube" /></Button>
              <Button tag="a" floating social="dribble"><Fa icon="dribbble" /></Button>
              <Button tag="a" floating social="vk"><Fa icon="vk" /></Button>
              <Button tag="a" floating social="so"><Fa icon="stack-overflow" /></Button>
              <Button tag="a" floating social="slack"><Fa icon="slack" /></Button>
              <Button tag="a" floating social="git"><Fa icon="github" /></Button>
              <Button tag="a" floating social="comm"><Fa icon="comments" /></Button>
              <Button tag="a" floating social="email"><Fa icon="envelope" /></Button>
            </ModalBody>
          </Modal>
        </Row>
      </Container>
    );
  }
}

export default ModalPage;
