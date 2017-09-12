import React, { Component } from 'react';

import { Dropdown } from 'mdbreact';
import { Manager, Target, Popper, Arrow } from 'react-popper';

class DropdownPage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      dropdownOpen: false
    };

    this.toggle = this.toggle.bind(this);
    // alert('asd');
  }

  toggle(e) {
    e.preventDefault();

    console.log('kurwaaaa');

    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });

  }

  render () {
    const { placement } = this.state
    return (
      <Dropdown isOpen={this.state.dropdownOpen} onClick={this.myClick} tag="a" />
    )
  }
}

export default DropdownPage;