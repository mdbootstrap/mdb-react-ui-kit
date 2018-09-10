import React, { Component } from 'react';
import { Button, Collapse, Container, Row, Fa } from 'mdbreact';

class CollapsePage extends Component {
  constructor(props) {
    super(props);
    this.toggleCollapse = this.toggleCollapse.bind(this);
    this.state = {
      collapseID: ''
    };
  }

  toggleCollapse(collapseID) {
    this.setState(prevState => ({ collapseID: (prevState.collapseID !== collapseID ? collapseID : '') }));
  }

  render() {
    return (
      <Container>
        <Row className="align-items-center mt-5">
          <h4 className="grey-text" style={{margin: "0px"}}>
            <strong>Collapse</strong>
          </h4>
          <a className="border grey-text px-2 border-light rounded ml-2" target="_blank"  href="https://mdbootstrap.com/react/advanced/collapse/"><Fa icon="graduation-cap" className="mr-2"/>Docs</a>
        </Row>
        <hr className="mb-5" />
        <div>
          <h1>Basic examples</h1>
          <div>
            <Button color="primary"  onClick={() => this.toggleCollapse('basicCollapse')} style={{ marginBottom: '1rem' }}>Toggle1</Button>
            <Button color="info" onClick={() => this.toggleCollapse('basicCollapse')} style={{ marginBottom: '1rem' }}>Toggle2</Button>
            <Collapse id="basicCollapse" isOpen={this.state.collapseID}>
              <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim
              keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.</p>
            </Collapse>
          </div>

          <h1>Accordion without icon</h1>
          <div>
            <div>
              <Button color="primary" onClick={() => this.toggleCollapse('accordion1')} style={{ marginBottom: '1rem' }}>Collapsible Group Item #1</Button>
            </div>
            <Collapse id="accordion1" isOpen={this.state.collapseID}>
                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute,
                  non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf
                  moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch
                  et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                  Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic
                  synth nesciunt you probably haven&apos;t heard of them accusamus labore sustainable VHS.
            </Collapse>

            <div>
              <Button color="primary" onClick={() => this.toggleCollapse('accordion2')} style={{ marginBottom: '1rem' }}>Collapsible Group Item #2</Button>
            </div>
            <Collapse id="accordion2" isOpen={this.state.collapseID}>
                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute,
                  non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf
                  moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch
                  et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                  Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic
                  synth nesciunt you probably haven&apos;t heard of them accusamus labore sustainable VHS.
            </Collapse>

            <div>
              <Button color="primary" onClick={() => this.toggleCollapse('accordion3')} style={{ marginBottom: '1rem' }}>Collapsible Group Item #2</Button>
            </div>
            <Collapse id="accordion3" isOpen={this.state.collapseID}>
                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute,
                  non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf
                  moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch
                  et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                  Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic
                  synth nesciunt you probably haven&apos;t heard of them accusamus labore sustainable VHS.
            </Collapse>
          </div>
        </div>
      </Container>
    );
  }
}

export default CollapsePage;
