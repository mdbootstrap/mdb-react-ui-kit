import React from 'react';
import SideNav from '../../src/components/SideNav';
import SideNavNav from '../../src/components/SideNavNav';
import SideNavCat from '../../src/components/SideNavCat';
import SideNavItem from '../../src/components/SideNavItem';
import { Fa } from 'mdbreact';

class SideNavPage extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.onClick1 = this.onClick1.bind(this);
    this.onClick2 = this.onClick2.bind(this);
    this.onClick3 = this.onClick3.bind(this);
    this.onClick4 = this.onClick4.bind(this);
    this.handleToggleClickA = this.handleToggleClickA.bind(this);
    this.handleToggleClickB = this.handleToggleClickB.bind(this);
    this.state ={
      collapse: false,
      accordion: false,
      toggleStateA: false,
      toggleStateB: false
    };
  }

  // Collapse/ Accordion
  onClick(){
    let state = '';

    if (this.state.accordion !== 0) {
      state = 0;
    } else {
      state = false;
    }

    this.setState({
      collapse: !this.state.collapse,
      accordion: state});
  }

  onClick1(){
    let state = '';

    if (this.state.accordion !== 1) {
      state = 1;
    } else {
      state = false;
    }

    this.setState({
      collapse: !this.state.collapse,
      accordion: state});
  }

  onClick2(){
    let state = '';

    if (this.state.accordion !== 2) {
      state = 2;
    } else {
      state = false;
    }

    this.setState({
      collapse: !this.state.collapse,
      accordion: state});
  }

  onClick3(){
    let state = '';

    if (this.state.accordion !== 3) {
      state = 3;
    } else {
      state = false;
    }

    this.setState({
      collapse: !this.state.collapse,
      accordion: state});
  }

  onClick4(){
    let state = '';

    if (this.state.accordion !== 4) {
      state = 4;
    } else {
      state = false;
    }

    this.setState({
      collapse: !this.state.collapse,
      accordion: state});
  }


// Slide out buttons event handlers
  handleToggleClickA(){
    this.setState({
      toggleStateA: !this.state.toggleStateA
    })
  }

  handleToggleClickB(){
    this.setState({
      toggleStateB: !this.state.toggleStateB
    })
  }

  render() {
    const divstyle = {width: "50%", display: "inline-block"}
    const button1 = <a href="#" onClick={this.handleToggleClickA} key="sideNavToggleA"><Fa icon="bars" size="5x"></Fa></a>
    const button2 = <a href="#" onClick={this.handleToggleClickB} key="sideNavToggleB"><Fa icon="bars" size="5x"></Fa></a>
    const isOpenWithButtonA = this.state.toggleStateA;
    const isOpenWithButtonB = this.state.toggleStateB;

    return (
      <div className="container" style={{height: "500px"}}>
      <div style={{height: "45%"}}></div>
          <div className="text-center" style={divstyle}>
          {button1}
        </div>
        <div className="text-center" style={divstyle}>
          {button2}
        </div>
      <SideNav logo="https://mdbootstrap.com/img/logo/mdb-transparent.png" hidden isOpenWithButton={isOpenWithButtonA} breakWidth={1300} className="deep-purple darken-4">
      <li>
        <ul className="social">
          <li><a href="#"><Fa icon="facebook"></Fa></a></li>
          <li><a href="#"><Fa icon="pinterest"></Fa></a></li>
          <li><a href="#"><Fa icon="google-plus"></Fa></a></li>
          <li><a href="#"><Fa icon="twitter"></Fa></a></li>
        </ul>
      </li>
        <SideNavNav>
          <SideNavCat name="Submit blog" onClick={this.onClick} isOpen={this.state.accordion === 0 } icon="chevron-right">
              <SideNavItem>Submit listing</SideNavItem>
              <SideNavItem>Registration form</SideNavItem>
            </SideNavCat>
            <SideNavCat name="Instruction" onClick={this.onClick1} isOpen={this.state.accordion === 1 } icon="hand-pointer-o">
              <SideNavItem>For bloggers</SideNavItem>
              <SideNavItem>For authors</SideNavItem>
            </SideNavCat>
            <SideNavCat name="About" onClick={this.onClick2} isOpen={this.state.accordion === 2 } icon="eye">
              <SideNavItem>Instruction</SideNavItem>
              <SideNavItem>Monthly meetings</SideNavItem>
            </SideNavCat>
            <SideNavCat name="Contact me" onClick={this.onClick3} isOpen={this.state.accordion === 3 } icon="envelope-o">
              <SideNavItem>FAQ</SideNavItem>
              <SideNavItem>Write a message</SideNavItem>
            </SideNavCat>
        </SideNavNav>
      </SideNav>

      <SideNav logo="https://mdbootstrap.com/img/logo/mdb-transparent.png" hidden isOpenWithButton={isOpenWithButtonB} className="side-nav-light" right breakWidth={1300}>
      <li>
        <ul className="social">
          <li><a href="#" className="icons-sm fb-ic"><i className="fa fa-facebook"></i></a></li>
          <li><a href="#" className="icons-sm pin-ic"><i className="fa fa-pinterest"></i></a></li>
          <li><a href="#" className="icons-sm gplus-ic"><i className="fa fa-google-plus"></i></a></li>
          <li><a href="#" className="icons-sm tw-ic"><i className="fa fa-twitter"></i></a></li>
        </ul>
      </li>
        <SideNavNav>
          <SideNavCat name="Submit blog" onClick={this.onClick} isOpen={this.state.accordion === 0 } icon="chevron-right" >
              <SideNavItem>Submit listing</SideNavItem>
              <SideNavItem>Registration form</SideNavItem>
            </SideNavCat>
            <SideNavCat name="Instruction" onClick={this.onClick1} isOpen={this.state.accordion === 1 } icon="hand-pointer-o">
              <SideNavItem>For bloggers</SideNavItem>
              <SideNavItem>For authors</SideNavItem>
            </SideNavCat>
            <SideNavCat name="About" onClick={this.onClick2} isOpen={this.state.accordion === 2 } icon="eye">
              <SideNavItem>Instruction</SideNavItem>
              <SideNavItem>Monthly meetings</SideNavItem>
            </SideNavCat>
            <SideNavCat name="Contact me" onClick={this.onClick3} isOpen={this.state.accordion === 3 } icon="envelope-o">
              <SideNavItem>FAQ</SideNavItem>
              <SideNavItem>Write a message</SideNavItem>
            </SideNavCat>
        </SideNavNav>
      </SideNav>
        </div>
    );
  }
}

export default SideNavPage;
