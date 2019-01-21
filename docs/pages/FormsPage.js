import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBIcon, MDBCard, MDBCardBody, MDBModal,  MDBModalBody, MDBModalFooter } from "mdbreact";
import DocsLink from "./../components/docsLink";

class FormsPage extends Component {
  state = {
    modal: false
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <MDBContainer className="mt-5">
        <DocsLink
          title="Forms"
          href="https://mdbootstrap.com/docs/react/forms/basic/"
        />
        <MDBRow>
          <MDBCol md="6">
            <form>
              <p className="h5 text-center mb-4">Sign in</p>
              <div className="grey-text">
                <MDBInput
                  label="Type your email"
                  icon="envelope"
                  group
                  type="email"
                  validate
                  error="wrong"
                  success="right"
                />
                <MDBInput
                  label="Type your password"
                  icon="lock"
                  group
                  type="password"
                  validate
                />
              </div>
              <div className="text-center">
                <MDBBtn>Login</MDBBtn>
              </div>
            </form>
          </MDBCol>
          <MDBCol md="6">
            <form>
              <p className="h4 text-center mb-4">Sign in</p>
              <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
                Your email
              </label>
              <input
                type="email"
                id="defaultFormLoginEmailEx"
                className="form-control"
              />
              <br />
              <label htmlFor="defaultFormLoginPasswordEx" className="grey-text">
                Your password
              </label>
              <input
                type="password"
                id="defaultFormLoginPasswordEx"
                className="form-control"
              />
              <div className="text-center mt-4">
                <button className="btn btn-indigo" type="submit">
                  Login
                </button>
              </div>
            </form>
          </MDBCol>
        </MDBRow>
        <hr className="my-5" />
        <h2 className="mb-5">Form register</h2>
        <MDBRow className="mt-5">
          <MDBCol md="6">
            <form>
              <p className="h5 text-center mb-4">Sign up</p>
              <div className="grey-text">
                <MDBInput
                  label="Your name"
                  icon="user"
                  group
                  type="text"
                  validate
                  error="wrong"
                  success="right"
                />
                <MDBInput
                  label="Your email"
                  icon="envelope"
                  group
                  type="email"
                  validate
                  error="wrong"
                  success="right"
                />
                <MDBInput
                  label="Confirm your email"
                  icon="exclamation-triangle"
                  group
                  type="text"
                  validate
                  error="wrong"
                  success="right"
                />
                <MDBInput
                  label="Your password"
                  icon="lock"
                  group
                  type="password"
                  validate
                />
              </div>
              <div className="text-center">
                <MDBBtn color="primary">Register</MDBBtn>
              </div>
            </form>
          </MDBCol>
          <MDBCol md="6">
            <form>
              <p className="h4 text-center mb-4">Sign up</p>
              <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
                Your name
              </label>
              <input
                type="text"
                id="defaultFormRegisterNameEx"
                className="form-control"
              />
              <br />
              <label htmlFor="defaultFormRegisterEmailEx" className="grey-text">
                Your email
              </label>
              <input
                type="email"
                id="defaultFormRegisterEmailEx"
                className="form-control"
              />
              <br />
              <label
                htmlFor="defaultFormRegisterConfirmEx"
                className="grey-text"
              >
                Confirm your email
              </label>
              <input
                type="email"
                id="defaultFormRegisterConfirmEx"
                className="form-control"
              />
              <br />
              <label
                htmlFor="defaultFormRegisterPasswordEx"
                className="grey-text"
              >
                Your password
              </label>
              <input
                type="password"
                id="defaultFormRegisterPasswordEx"
                className="form-control"
              />
              <div className="text-center mt-4">
                <button className="btn btn-unique" type="submit">
                  Register
                </button>
              </div>
            </form>
          </MDBCol>
        </MDBRow>
        <hr className="my-5" />
        <h2 className="mb-5">Form subscription</h2>
        <MDBRow className="mt-5">
          <MDBCol md="6">
            <form>
              <p className="h5 text-center mb-4">Subscribe</p>
              <div className="grey-text">
                <MDBInput
                  label="Your name"
                  icon="user"
                  group
                  type="text"
                  validate
                  error="wrong"
                  success="right"
                />
                <MDBInput
                  label="Your email"
                  icon="envelope"
                  group
                  type="email"
                  validate
                  error="wrong"
                  success="right"
                />
              </div>
              <div className="text-center">
                <MDBBtn outline color="info">
                  Send <MDBIcon icon="paper-plane" className="ml-1" />
                </MDBBtn>
              </div>
            </form>
          </MDBCol>
          <MDBCol md="6">
            <form>
              <p className="h4 text-center mb-4">Subscribe</p>
              <label
                htmlFor="defaultFormSubscriptionNameEx"
                className="grey-text"
              >
                Your name
              </label>
              <input
                type="text"
                id="defaultFormSubscriptionNameEx"
                className="form-control"
              />
              <br />
              <label
                htmlFor="defaultFormSubscriptionEmailEx"
                className="grey-text"
              >
                Your email
              </label>
              <input
                type="email"
                id="defaultFormSubscriptionEmailEx"
                className="form-control"
              />
              <div className="text-center mt-4">
                <button className="btn btn-outline-purple" type="submit">
                  Send
                  <MDBIcon icon="paper-plane" className="ml-2" />
                </button>
              </div>
            </form>
          </MDBCol>
        </MDBRow>
        <hr className="my-5" />
        <h2 className="mb-5">Form contact</h2>
        <MDBRow className="my-5">
          <MDBCol md="6">
            <form>
              <p className="h5 text-center mb-4">Write to us</p>
              <div className="grey-text">
                <MDBInput
                  label="Your name"
                  icon="user"
                  group
                  type="text"
                  validate
                  error="wrong"
                  success="right"
                />
                <MDBInput
                  label="Your email"
                  icon="envelope"
                  group
                  type="email"
                  validate
                  error="wrong"
                  success="right"
                />
                <MDBInput
                  label="Subject"
                  icon="tag"
                  group
                  type="text"
                  validate
                  error="wrong"
                  success="right"
                />
                <MDBInput
                  type="textarea"
                  rows="2"
                  label="Your message"
                  icon="pencil-alt"
                />
              </div>
              <div className="text-center">
                <MDBBtn outline color="secondary">
                  Send <MDBIcon icon="paper-plane" className="ml-1" />
                </MDBBtn>
              </div>
            </form>
          </MDBCol>
          <MDBCol md="6">
            <form>
              <p className="h4 text-center mb-4">Write to us</p>
              <label htmlFor="defaultFormContactNameEx" className="grey-text">
                Your name
              </label>
              <input
                type="text"
                id="defaultFormContactNameEx"
                className="form-control"
              />
              <br />
              <label htmlFor="defaultFormContactEmailEx" className="grey-text">
                Your email
              </label>
              <input
                type="email"
                id="defaultFormContactEmailEx"
                className="form-control"
              />
              <br />
              <label
                htmlFor="defaultFormContactSubjectEx"
                className="grey-text"
              >
                Subject
              </label>
              <input
                type="text"
                id="defaultFormContactSubjectEx"
                className="form-control"
              />
              <br />
              <label
                htmlFor="defaultFormContactMessageEx"
                className="grey-text"
              >
                Your message
              </label>
              <textarea
                type="text"
                id="defaultFormContactMessageEx"
                className="form-control"
                rows="3"
              />
              <div className="text-center mt-4">
                <button className="btn btn-outline-warning" type="submit">
                  Send
                  <MDBIcon icon="paper-plane" className="ml-2" />
                </button>
              </div>
            </form>
          </MDBCol>
        </MDBRow>
        <hr className="my-5" />
        <h2 className="mb-5">A form within a card</h2>
        <MDBRow>
          <MDBCol md="6">
            <MDBCard>
              <MDBCardBody>
                <form>
                  <p className="h4 text-center py-4">Sign up</p>
                  <div className="grey-text">
                    <MDBInput
                      label="Your name"
                      icon="user"
                      group
                      type="text"
                      validate
                      error="wrong"
                      success="right"
                    />
                    <MDBInput
                      label="Your email"
                      icon="envelope"
                      group
                      type="email"
                      validate
                      error="wrong"
                      success="right"
                    />
                    <MDBInput
                      label="Confirm your email"
                      icon="exclamation-triangle"
                      group
                      type="text"
                      validate
                      error="wrong"
                      success="right"
                    />
                    <MDBInput
                      label="Your password"
                      icon="lock"
                      group
                      type="password"
                      validate
                    />
                  </div>
                  <div className="text-center py-4 mt-3">
                    <MDBBtn color="cyan" type="submit">
                      Register
                    </MDBBtn>
                  </div>
                </form>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol md="6">
            <div className="card mx-xl-5">
              <div className="card-body">
                <form>
                  <p className="h4 text-center py-4">Subscribe</p>
                  <label
                    htmlFor="defaultFormCardNameEx"
                    className="grey-text font-weight-light"
                  >
                    Your name
                  </label>
                  <input
                    type="text"
                    id="defaultFormCardNameEx"
                    className="form-control"
                  />
                  <br />
                  <label
                    htmlFor="defaultFormCardEmailEx"
                    className="grey-text font-weight-light"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    id="defaultFormCardEmailEx"
                    className="form-control"
                  />
                  <div className="text-center py-4 mt-3">
                    <button className="btn btn-outline-purple" type="submit">
                      Send
                      <MDBIcon icon="paper-plane" className="ml-2" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </MDBCol>
        </MDBRow>
        <hr className="my-5" />
        <h2 className="mb-5">A form within a modal</h2>
        <MDBRow>
          <MDBCol size="12" className="text-center mb-5">
            <MDBBtn color="info" onClick={this.toggle}>
              Launch modal contact form
            </MDBBtn>
            <MDBModal
              isOpen={this.state.modal}
              toggle={this.toggle}
              className="cascading-modal"
            >
              <div className="modal-header primary-color white-text">
                <h4 className="title">
                  <MDBIcon icon="pencil-alt" /> Contact form
                </h4>
                <button type="button" className="close" onClick={this.toggle}>
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <MDBModalBody>
                <form className="grey-text">
                  <MDBInput
                    size="sm"
                    label="Your name"
                    icon="user"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                  />
                  <MDBInput
                    size="sm"
                    label="Your email"
                    icon="envelope"
                    group
                    type="email"
                    validate
                    error="wrong"
                    success="right"
                  />
                  <MDBInput
                    size="sm"
                    label="Subject"
                    icon="tag"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                  />
                  <MDBInput
                    size="sm"
                    type="textarea"
                    rows="2"
                    label="Your message"
                    icon="pencil-alt"
                  />
                </form>
              </MDBModalBody>
              <MDBModalFooter>
                <MDBBtn color="secondary" onClick={this.toggle}>
                  Close
                </MDBBtn>
                <MDBBtn color="primary">Save changes</MDBBtn>
              </MDBModalFooter>
            </MDBModal>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default FormsPage;
