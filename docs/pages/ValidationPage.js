import React from "react";
import { Container, Row, Col } from "mdbreact";
import DocsLink from "./DocsLink";

class FormsPage extends React.Component {
  state = {
    fname: "Mark",
    lname: "Otto",
    email: "",
    city: "",
    state: "",
    zip: ""
  };

  submitHandler = event => {
    event.preventDefault();
    event.target.className += " was-validated";
  };

  changeHandler = event => {
    this.setState({ ...this.state, [event.target.name]: event.target.value });
  };

  render() {
    return (
      <Container>
        <DocsLink
          title="Form Validation"
          href="https://mdbootstrap.com/react/components/form-validation/"
        />
        <Row>
          <Col md="">
            <form
              className="needs-validation"
              onSubmit={this.submitHandler}
              noValidate
            >
              <Row>
                <div className="col-md-4 mb-3">
                  <label
                    htmlFor="defaultFormRegisterNameEx"
                    className="grey-text"
                  >
                    First name
                  </label>
                  <input
                    value={this.state.fname}
                    name="fname"
                    onChange={this.changeHandler}
                    type="text"
                    id="defaultFormRegisterNameEx"
                    className="form-control"
                    placeholder="First name"
                    required
                  />
                  <div className="valid-feedback">Looks good!</div>
                </div>
                <div className="col-md-4 mb-3">
                  <label
                    htmlFor="defaultFormRegisterEmailEx2"
                    className="grey-text"
                  >
                    Last name
                  </label>
                  <input
                    value={this.state.lname}
                    name="lname"
                    onChange={this.changeHandler}
                    type="text"
                    id="defaultFormRegisterEmailEx2"
                    className="form-control"
                    placeholder="Last name"
                    required
                  />
                  <div className="valid-feedback">Looks good!</div>
                </div>
                <div className="col-md-4 mb-3">
                  <label
                    htmlFor="defaultFormRegisterConfirmEx3"
                    className="grey-text"
                  >
                    Email
                  </label>
                  <input
                    value={this.state.email}
                    onChange={this.changeHandler}
                    type="email"
                    id="defaultFormRegisterConfirmEx3"
                    className="form-control"
                    name="email"
                    placeholder="Your Email address"
                  />
                  <small id="emailHelp" className="form-text text-muted">
                    We'll never share your email with anyone else.
                  </small>
                </div>
              </Row>
              <Row>
                <div className="col-md-4 mb-3">
                  <label
                    htmlFor="defaultFormRegisterPasswordEx4"
                    className="grey-text"
                  >
                    City
                  </label>
                  <input
                    value={this.state.city}
                    onChange={this.changeHandler}
                    type="text"
                    id="defaultFormRegisterPasswordEx4"
                    className="form-control"
                    name="city"
                    placeholder="City"
                    required
                  />
                  <div className="invalid-feedback">
                    Please provide a valid city.
                  </div>
                  <div className="valid-feedback">Looks good!</div>
                </div>
                <div className="col-md-4 mb-3">
                  <label
                    htmlFor="defaultFormRegisterPasswordEx4"
                    className="grey-text"
                  >
                    State
                  </label>
                  <input
                    value={this.state.state}
                    onChange={this.changeHandler}
                    type="text"
                    id="defaultFormRegisterPasswordEx4"
                    className="form-control"
                    name="state"
                    placeholder="State"
                    required
                  />
                  <div className="invalid-feedback">
                    Please provide a valid state.
                  </div>
                  <div className="valid-feedback">Looks good!</div>
                </div>
                <div className="col-md-4 mb-3">
                  <label
                    htmlFor="defaultFormRegisterPasswordEx4"
                    className="grey-text"
                  >
                    Zip
                  </label>
                  <input
                    value={this.state.zip}
                    onChange={this.changeHandler}
                    type="text"
                    id="defaultFormRegisterPasswordEx4"
                    className="form-control"
                    name="zip"
                    placeholder="Zip"
                    required
                  />
                  <div className="invalid-feedback">
                    Please provide a valid zip.
                  </div>
                  <div className="valid-feedback">Looks good!</div>
                </div>
              </Row>
              <div className="col-md-4 mb-3">
                <div className="form-check pl-0">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="invalidCheck"
                    required
                  />
                  <label className="form-check-label" htmlFor="invalidCheck">
                    Agree to terms and conditions
                  </label>
                  <div className="invalid-feedback">
                    You must agree before submitting.
                  </div>
                </div>
              </div>
              <button className="btn btn-unique" type="submit">
                Submit Form
              </button>
            </form>
          </Col>
        </Row>
        <hr className="my-5" />
        <h2 className="mb-5">Supported elements</h2>
        <Row className="mt-6">
          <Col md="">
            <form className="was-validated" noValidate>
              <div className="custom-control custom-checkbox mb-3">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customControlValidation1"
                  required
                />
                <label
                  className="custom-control-label"
                  htmlFor="customControlValidation1"
                >
                  Check this custom checkbox
                </label>
                <div className="invalid-feedback">
                  Example invalid feedback text
                </div>
              </div>

              <div className="custom-control custom-radio">
                <input
                  type="radio"
                  className="custom-control-input"
                  id="customControlValidation2"
                  name="radio-stacked"
                  required
                />
                <label
                  className="custom-control-label"
                  htmlFor="customControlValidation2"
                >
                  Toggle this custom radio
                </label>
              </div>
              <div className="custom-control custom-radio mb-3">
                <input
                  type="radio"
                  className="custom-control-input"
                  id="customControlValidation3"
                  name="radio-stacked"
                  required
                />
                <label
                  className="custom-control-label"
                  htmlFor="customControlValidation3"
                >
                  Or toggle this other custom radio
                </label>
                <div className="invalid-feedback">
                  More example invalid feedback text
                </div>
              </div>

              <div className="form-group">
                <select className="custom-select browser-default" required>
                  <option value="">Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
                <div className="invalid-feedback">
                  Example invalid custom select feedback
                </div>
              </div>

              <div className="custom-file">
                <input
                  type="file"
                  className="custom-file-input"
                  id="validatedCustomFile"
                  required
                />
                <label
                  className="custom-file-label"
                  htmlFor="validatedCustomFile"
                >
                  Choose file...
                </label>
                <div className="invalid-feedback">
                  Example invalid custom file feedback
                </div>
              </div>
            </form>
          </Col>
        </Row>
        <hr className="my-5" />
        <h2 className="mb-5">Tooltips</h2>
        <Row className="mt-6">
          <Col md="">
            <form
              className="needs-validation"
              onSubmit={this.submitHandler}
              noValidate
            >
              <Row>
                <div className="col-md-4 mb-3">
                  <label
                    htmlFor="defaultFormRegisterNameEx"
                    className="grey-text"
                  >
                    First name
                  </label>
                  <input
                    value={this.state.fname}
                    name="fname"
                    onChange={this.changeHandler}
                    type="text"
                    id="defaultFormRegisterNameEx"
                    className="form-control"
                    placeholder="First name"
                    required
                  />
                  <div style={{ top: "auto" }} className="valid-tooltip">
                    Looks good!
                  </div>
                </div>
                <div className="col-md-4 mb-3">
                  <label
                    htmlFor="defaultFormRegisterEmailEx2"
                    className="grey-text"
                  >
                    Last name
                  </label>
                  <input
                    value={this.state.lname}
                    name="lname"
                    onChange={this.changeHandler}
                    type="text"
                    id="defaultFormRegisterEmailEx2"
                    className="form-control"
                    placeholder="Last name"
                    required
                  />
                  <div style={{ top: "auto" }} className="valid-tooltip">
                    Looks good!
                  </div>
                </div>
                <div className="col-md-4 mb-3">
                  <label
                    htmlFor="defaultFormRegisterConfirmEx3"
                    className="grey-text"
                  >
                    Email
                  </label>
                  <input
                    value={this.state.email}
                    onChange={this.changeHandler}
                    type="email"
                    id="defaultFormRegisterConfirmEx3"
                    className="form-control"
                    name="email"
                    placeholder="Your Email address"
                  />
                  <small id="emailHelp" className="form-text text-muted">
                    We'll never share your email with anyone else.
                  </small>
                </div>
              </Row>
              <Row>
                <div className="col-md-4 mb-3">
                  <label
                    htmlFor="defaultFormRegisterPasswordEx4"
                    className="grey-text"
                  >
                    City
                  </label>
                  <input
                    value={this.state.city}
                    onChange={this.changeHandler}
                    type="text"
                    id="defaultFormRegisterPasswordEx4"
                    className="form-control"
                    name="city"
                    placeholder="City"
                    required
                  />
                  <div style={{ top: "auto" }} className="invalid-tooltip">
                    Please provide a valid city.
                  </div>
                  <div style={{ top: "auto" }} className="valid-tooltip">
                    Looks good!
                  </div>
                </div>
                <div className="col-md-4 mb-3">
                  <label
                    htmlFor="defaultFormRegisterPasswordEx4"
                    className="grey-text"
                  >
                    State
                  </label>
                  <input
                    value={this.state.state}
                    onChange={this.changeHandler}
                    type="text"
                    id="defaultFormRegisterPasswordEx4"
                    className="form-control"
                    name="state"
                    placeholder="State"
                    required
                  />
                  <div style={{ top: "auto" }} className="invalid-tooltip">
                    Please provide a valid state.
                  </div>
                  <div style={{ top: "auto" }} className="valid-tooltip">
                    Looks good!
                  </div>
                </div>
                <div className="col-md-4 mb-3">
                  <label
                    htmlFor="defaultFormRegisterPasswordEx4"
                    className="grey-text"
                  >
                    Zip
                  </label>
                  <input
                    value={this.state.zip}
                    onChange={this.changeHandler}
                    type="text"
                    id="defaultFormRegisterPasswordEx4"
                    className="form-control"
                    name="zip"
                    placeholder="Zip"
                    required
                  />
                  <div style={{ top: "auto" }} className="invalid-tooltip">
                    Please provide a valid zip.
                  </div>
                  <div style={{ top: "auto" }} className="valid-tooltip">
                    Looks good!
                  </div>
                </div>
              </Row>
              <button className="btn btn-unique" type="submit">
                Submit Form
              </button>
            </form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default FormsPage;
