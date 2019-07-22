import React, { Component } from "react";
import { MDBInput, MDBInputSelect, MDBFormInline, MDBBtn, MDBContainer, MDBRow, MDBCol } from "mdbreact";
import DocsLink from "./../components/docsLink";
import SectionContainer from "./../components/sectionContainer";

class InputPage extends Component {
  constructor() {
    super();
    this.state = {
      value: "Controlled input with value",
      iconInput: "eye-slash",
      typeInput: "password"
    };

    this.nextInputRef = null;
  }

  componentDidMount() {
    document.querySelectorAll(".iconHover").forEach(el => (el.style.cursor = "pointer"));
  }

  handleSubmit = event => {
    alert("MDBInput value: " + this.state.value);
    event.preventDefault();
  };

  saveToState = value => this.setState({ value });

  getValue = value => console.log(value);

  handleChange = event => this.setState({ value: event.target.value });

  changeFocus = () => this.nextInputRef.focus();

  mouseEnter = () => {
    this.setState({
      iconInput: "eye",
      typeInput: "text"
    });
  };

  mouseLeave = () => {
    this.setState({
      iconInput: "eye-slash",
      typeInput: "password"
    });
  };

  render() {
    return (
      <MDBContainer className="mt-5">
        <DocsLink title="Inputs" href="https://mdbootstrap.com/docs/react/forms/inputs/" />

        <SectionContainer header="Basic examples">
          <MDBRow>
            <MDBCol md="6">
              <MDBInput
                label="Material input"
                getValue={this.getValue}
                valueDefault="Uncontrolled input with default value"
              />
            </MDBCol>
            <MDBCol md="6">
              <MDBInput label="Example label" onChange={this.handleChange} value={this.state.value} />
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol md="6">
              <MDBInput
                label="Focus next input on change (uses ref)"
                onChange={this.changeFocus}
                size="sm"
                icon="envelope"
              />
            </MDBCol>
            <MDBCol md="6">
              <MDBInput label="Example label" inputRef={ref => (this.nextInputRef = ref)} icon="envelope" />
            </MDBCol>
          </MDBRow>

          <MDBRow>
            <MDBCol md="6">
              <MDBInput
                iconClass="iconHover"
                label="Run function on click icon"
                icon="bell"
                onIconClick={() => alert("Wait! This is an alert!")}
              />
            </MDBCol>
            <MDBCol md="6">
              <MDBInput
                label="Hover Eye to show password!"
                valueDefault="Do you see me?"
                type={this.state.typeInput}
                icon={this.state.iconInput}
                onIconMouseEnter={this.mouseEnter}
                onIconMouseLeave={this.mouseLeave}
              />
            </MDBCol>
          </MDBRow>

          <MDBInput hint="placeholder" label="Example label" />
          <MDBInput label="Example label" />
          <MDBBtn onClick={this.handleSubmit}>Submit</MDBBtn>

          <MDBRow>
            <MDBCol md="6">
              <MDBInput
                label="Type your email"
                icon="envelope"
                group
                type="email"
                validate
                error="wrong"
                success="right"
              />
            </MDBCol>
            <MDBCol md="6">
              <MDBInput label="Type your password" icon="lock" group type="password" validate />
            </MDBCol>
          </MDBRow>

          <MDBInput label="Disabled" disabled />

          <MDBFormInline>
            <MDBInput
              label="Type your email"
              icon="envelope"
              group
              type="email"
              validate
              error="wrong"
              success="right"
            />
            <MDBInput label="Type your password" icon="lock" group type="password" validate />
            <MDBBtn>Login</MDBBtn>
          </MDBFormInline>

          <MDBRow>
            <MDBCol md="6">
              <MDBInput getValue={this.getValue} type="textarea" label="Icon Prefix" rows="2" icon="pencil-alt" />
            </MDBCol>
            <MDBCol md="6">
              <MDBInput type="textarea" label="Basic textarea" rows="2" />
            </MDBCol>
          </MDBRow>
        </SectionContainer>

        <SectionContainer title="Styles" noBorder>
          <MDBRow>
            <MDBCol md="6" tag="section">
              <SectionContainer header="Outline">
                <MDBInput labelClass="labelBg" outline label="Type your email" type="email" />

                <MDBInput labelClass="labelBg" outline label="Type your password" icon="lock" type="password" />

                <MDBInput
                  labelClass="labelBg"
                  outline
                  getValue={this.getValue}
                  type="textarea"
                  label="Icon Prefix"
                  rows="2"
                  icon="pencil-alt"
                />

                <MDBInput labelClass="labelBg" outline type="textarea" label="Basic textarea" rows="2" />
              </SectionContainer>
            </MDBCol>

            <MDBCol md="6" tag="section">
              <SectionContainer header="With background">
                <MDBInput labelClass="labelBg" background label="Type your email" type="email" />

                <MDBInput labelClass="labelBg" background label="Type your password" icon="lock" type="password" />

                <MDBInput
                  labelClass="labelBg"
                  background
                  getValue={this.getValue}
                  type="textarea"
                  label="Icon Prefix"
                  rows="2"
                  icon="pencil-alt"
                />

                <MDBInput labelClass="labelBg" background type="textarea" label="Basic textarea" rows="2" />
              </SectionContainer>
            </MDBCol>
          </MDBRow>
        </SectionContainer>

        <SectionContainer header="Numeric">
          <MDBCol md="5">
            <MDBInputSelect getValue={this.getValue} min={5} max={15} value={10} className="mb-2" />

            <MDBInputSelect precision={2} value={50.3} step={0.1} className="mb-2" />

            <MDBInputSelect precision={2} value={50.3} step={0.5} snap className="mb-2" />
          </MDBCol>
        </SectionContainer>

        <SectionContainer header="Default Bootstrap">
          <label htmlFor="exampleForm2">Basic example</label>
          <input type="text" id="exampleForm2" className="form-control" />

          <label htmlFor="inputDisabledEx2" className="disabled mt-4">
            Disabled input
          </label>
          <input type="text" id="inputDisabledEx2" className="form-control" disabled />
        </SectionContainer>

        <SectionContainer header="MDBInput fields">
          <input className="form-control form-control-lg mb-3" type="text" placeholder="Large input" />
          <input className="form-control mb-3" type="text" placeholder="Medium input" />
          <input className="form-control form-control-sm" type="text" placeholder="Small input" />
        </SectionContainer>

        <SectionContainer header="Form groups" tag="form">
          <div className="form-group">
            <label htmlFor="formGroupExampleInput">Example label</label>
            <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Example input" />
          </div>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput2">Another label</label>
            <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Another input" />
          </div>
        </SectionContainer>

        <SectionContainer noBorder className="row">
          <MDBCol md="6">
            <SectionContainer header="Form grid" tag="form">
              <MDBRow>
                <MDBCol>
                  <input type="text" className="form-control" placeholder="First name" />
                </MDBCol>
                <MDBCol>
                  <input type="text" className="form-control" placeholder="Last name" />
                </MDBCol>
              </MDBRow>
            </SectionContainer>
          </MDBCol>
          <MDBCol md="6">
            <SectionContainer header="Form row" tag="form">
              <div className="form-row">
                <MDBCol>
                  <input type="text" className="form-control" placeholder="First name" />
                </MDBCol>
                <MDBCol>
                  <input type="text" className="form-control" placeholder="Last name" />
                </MDBCol>
              </div>
            </SectionContainer>
          </MDBCol>
        </SectionContainer>

        <SectionContainer header="Form layout">
          <form>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="inputEmail4">Email</label>
                <input type="email" className="form-control" id="inputEmail4" placeholder="Email" />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="inputPassword4">Password</label>
                <input type="password" className="form-control" id="inputPassword4" placeholder="Password" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="inputAddress">Address</label>
              <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
            </div>
            <div className="form-group">
              <label htmlFor="inputAddress2">Address 2</label>
              <input
                type="text"
                className="form-control"
                id="inputAddress2"
                placeholder="Apartment, studio, or floor"
              />
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="inputCity">City</label>
                <input type="text" className="form-control" id="inputCity" placeholder="New York City" />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="inputZip">Zip</label>
                <input type="text" className="form-control" id="inputZip" placeholder="11206-1117" />
              </div>
            </div>
            <button type="submit" className="btn btn-primary btn-md">
              Sign in
            </button>
          </form>
        </SectionContainer>

        <SectionContainer header="Horizontal form">
          <form>
            <div className="form-group row">
              <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
                Email
              </label>
              <div className="col-sm-10">
                <input type="email" className="form-control" id="inputEmail3" placeholder="Email" />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">
                Password
              </label>
              <div className="col-sm-10">
                <input type="password" className="form-control" id="inputPassword3" placeholder="Password" />
              </div>
            </div>
            <div className="form-group row">
              <div className="col-sm-10">
                <button type="submit" className="btn btn-primary btn-md">
                  Sign in
                </button>
              </div>
            </div>
          </form>
        </SectionContainer>

        <SectionContainer header="Column sizing">
          <form>
            <div className="form-row">
              <div className="col-7">
                <input type="text" className="form-control" placeholder="City" />
              </div>
              <div className="col">
                <input type="text" className="form-control" placeholder="State" />
              </div>
              <div className="col">
                <input type="text" className="form-control" placeholder="Zip" />
              </div>
            </div>
          </form>
        </SectionContainer>

        <SectionContainer header="Auto-sizing">
          <form>
            <div className="form-row align-items-center">
              <div className="col-auto">
                <label className="sr-only" htmlFor="inlineFormInput">
                  Name
                </label>
                <input type="text" className="form-control mb-2" id="inlineFormInput" placeholder="Jane Doe" />
              </div>
              <div className="col-auto">
                <label className="sr-only" htmlFor="inlineFormInputGroup">
                  Username
                </label>
                <div className="input-group mb-2">
                  <div className="input-group-prepend">
                    <div className="input-group-text">@</div>
                  </div>
                  <input
                    type="text"
                    className="form-control py-0"
                    id="inlineFormInputGroup"
                    placeholder="Username"
                  />
                </div>
              </div>
              <div className="col-auto">
                <button type="submit" className="btn btn-primary btn-md mt-0">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </SectionContainer>

        <SectionContainer header="Inline forms">
          <form>
            <div className="form-row">
              <div className="col-7">
                <input type="text" className="form-control" placeholder="City" />
              </div>
              <div className="col">
                <input type="text" className="form-control" placeholder="State" />
              </div>
              <div className="col">
                <input type="text" className="form-control" placeholder="Zip" />
              </div>
            </div>
          </form>
        </SectionContainer>

        <SectionContainer header="Textarea">
          <div className="form-group">
            <label htmlFor="exampleFormControlTextarea1">Example textarea</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="5" />
          </div>
        </SectionContainer>

        <SectionContainer header="Help text">
          <label htmlFor="inputPassword5">Password</label>
          <input
            type="password"
            id="inputPassword5"
            className="form-control"
            aria-describedby="passwordHelpBlock"
          />
          <small id="passwordHelpBlock" className="form-text text-muted">
            Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces,
            special characters, or emoji.
          </small>
          <br />
          <form className="form-inline">
            <div className="form-group">
              <label htmlFor="inputPassword6">Password</label>
              <input
                type="password"
                id="inputPassword6"
                className="form-control mx-sm-3"
                aria-describedby="passwordHelpInline"
              />
              <small id="passwordHelpInline" className="text-muted">
                Must be 8-20 characters long.
              </small>
            </div>
          </form>
        </SectionContainer>
      </MDBContainer>
    );
  }
}

export default InputPage;
