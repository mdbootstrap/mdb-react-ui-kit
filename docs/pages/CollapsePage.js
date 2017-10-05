import React, { Component } from 'react';
import { Button, Collapse } from 'mdbreact';

class CollapsePage extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.onClick1 = this.onClick1.bind(this);
    this.onClick2 = this.onClick2.bind(this);
    this.onClick3 = this.onClick3.bind(this);

    this.state = { 
      collapse: false, 
      accordion: false
    };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  onClick1() {
    let state = '';

    if(this.state.accordion !== 1) {
      state = 1;
    } else {
      state = false;
    }

    this.setState({
      accordion: state});
  }

  onClick2() {
    let state = '';
    
    if(this.state.accordion !== 2) {
      state = 2;
    } else {
      state = false;
    }

    this.setState({
      accordion: state});
  }

  onClick3() {
    let state = '';
    
    if(this.state.accordion !== 3) {
      state = 3;
    } else {
      state = false;
    }

    this.setState({
      accordion: state});
  }

  render() {
    return (
      <div>
        <h1>Basic examples</h1>
        <div>
          <Button color="primary"  onClick={this.toggle} style={{ marginBottom: '1rem' }}>Toggle1</Button>
          <Button color="info" onClick={this.toggle} style={{ marginBottom: '1rem' }}>Toggle2</Button>
          <Collapse isOpen={this.state.collapse}>
            <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim
            keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.</p>
          </Collapse>
        </div>

        <h1>Accordion without icon</h1>
        <div>
          <div>
            <Button color="primary"  onClick={this.onClick1} style={{ marginBottom: '1rem' }}>Collapsible Group Item #1</Button>
          </div>
          <Collapse isOpen={this.state.accordion === 1}>
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute,
                non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf
                moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch
                et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic
                synth nesciunt you probably haven&apos;t heard of them accusamus labore sustainable VHS.
          </Collapse>

          <div>
            <Button color="primary"  onClick={this.onClick2} style={{ marginBottom: '1rem' }}>Collapsible Group Item #2</Button>
          </div>
          <Collapse isOpen={this.state.accordion === 2}>
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute,
                non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf
                moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch
                et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic
                synth nesciunt you probably haven&apos;t heard of them accusamus labore sustainable VHS.
          </Collapse>

          <div>
            <Button color="primary"  onClick={this.onClick3} style={{ marginBottom: '1rem' }}>Collapsible Group Item #2</Button>
          </div>
          <Collapse isOpen={this.state.accordion === 3}>
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute,
                non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf
                moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch
                et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic
                synth nesciunt you probably haven&apos;t heard of them accusamus labore sustainable VHS.
          </Collapse>
        </div>
      </div>
    );
  }
}

export default CollapsePage;