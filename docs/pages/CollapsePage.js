import React, { Component } from "react";
import { MDBBtn, MDBCollapse, MDBContainer } from "mdbreact";
import DocsLink from "./../components/docsLink";

class CollapsePage extends Component {

  state = {
    collapseID: ""
  }

  toggleCollapse = (collapseID) => () => {
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }));
  }

  render() {
    return (
      <MDBContainer>
        <DocsLink
          title="Collapse"
          href="https://mdbootstrap.com/docs/react/advanced/collapse/"
        />
        <div>
          <h1>Basic examples</h1>
          <div>
            <MDBBtn
              color="primary"
              onClick={this.toggleCollapse("basicCollapse")}
              style={{ marginBottom: "1rem" }}
            >
              Toggle1
            </MDBBtn>
            <MDBBtn
              color="info"
              onClick={this.toggleCollapse("basicCollapse")}
              style={{ marginBottom: "1rem" }}
            >
              Toggle2
            </MDBBtn>
            <MDBCollapse id="basicCollapse" isOpen={this.state.collapseID}>
              <p>
                Anim pariatur cliche reprehenderit, enim eiusmod high life
                accusamus terry richardson ad squid. Nihil anim keffiyeh
                helvetica, craft beer labore wes anderson cred nesciunt sapiente
                ea proident.
              </p>
            </MDBCollapse>
          </div>

          <h1>Accordion without icon</h1>
          <div>
            <div>
              <MDBBtn
                color="primary"
                onClick={this.toggleCollapse("accordion1")}
                style={{ marginBottom: "1rem" }}
              >
                Collapsible Group Item #1
              </MDBBtn>
            </div>
            <MDBCollapse id="accordion1" isOpen={this.state.collapseID}>
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. 3 wolf moon officia aute, non
              cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
              laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
              on it squid single-origin coffee nulla assumenda shoreditch et.
              Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
              nesciunt sapiente ea proident. Ad vegan excepteur butcher vice
              lomo. Leggings occaecat craft beer farm-to-table, raw denim
              aesthetic synth nesciunt you probably haven&apos;t heard of them
              accusamus labore sustainable VHS.
            </MDBCollapse>

            <div>
              <MDBBtn
                color="primary"
                onClick={this.toggleCollapse("accordion2")}
                style={{ marginBottom: "1rem" }}
              >
                Collapsible Group Item #2
              </MDBBtn>
            </div>
            <MDBCollapse id="accordion2" isOpen={this.state.collapseID}>
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. 3 wolf moon officia aute, non
              cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
              laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
              on it squid single-origin coffee nulla assumenda shoreditch et.
              Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
              nesciunt sapiente ea proident. Ad vegan excepteur butcher vice
              lomo. Leggings occaecat craft beer farm-to-table, raw denim
              aesthetic synth nesciunt you probably haven&apos;t heard of them
              accusamus labore sustainable VHS.
            </MDBCollapse>

            <div>
              <MDBBtn
                color="primary"
                onClick={this.toggleCollapse("accordion3")}
                style={{ marginBottom: "1rem" }}
              >
                Collapsible Group Item #2
              </MDBBtn>
            </div>
            <MDBCollapse id="accordion3" isOpen={this.state.collapseID}>
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. 3 wolf moon officia aute, non
              cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
              laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
              on it squid single-origin coffee nulla assumenda shoreditch et.
              Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
              nesciunt sapiente ea proident. Ad vegan excepteur butcher vice
              lomo. Leggings occaecat craft beer farm-to-table, raw denim
              aesthetic synth nesciunt you probably haven&apos;t heard of them
              accusamus labore sustainable VHS.
            </MDBCollapse>
          </div>
        </div>
      </MDBContainer>
    );
  }
}

export default CollapsePage;
