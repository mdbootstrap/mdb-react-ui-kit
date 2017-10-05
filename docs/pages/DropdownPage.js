import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'mdbreact';

class DropdownPage extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggle1 = this.toggle1.bind(this);
    this.toggle2 = this.toggle2.bind(this);
    this.toggle3 = this.toggle3.bind(this);
    this.toggle4 = this.toggle4.bind(this);
    this.toggle5 = this.toggle5.bind(this);
    this.toggle6 = this.toggle6.bind(this);
    this.toggle7 = this.toggle7.bind(this);
    this.toggle8 = this.toggle8.bind(this);
    this.toggle9 = this.toggle9.bind(this);
    this.state = {
      dropdownOpen: false,
      dropdownOpen1: false,
      dropdownOpen2: false,
      dropdownOpen3: false,
      dropdownOpen4: false,
      dropdownOpen5: false,
      dropdownOpen6: false,
      dropdownOpen7: false,
      dropdownOpen8: false,
      dropdownOpen9: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  toggle1() {
    this.setState({
      dropdownOpen1: !this.state.dropdownOpen1
    });
  }
  toggle2() {
    this.setState({
      dropdownOpen2: !this.state.dropdownOpen2
    });
  }
  toggle3() {
    this.setState({
      dropdownOpen3: !this.state.dropdownOpen3
    });
  }
  toggle4() {
    this.setState({
      dropdownOpen4: !this.state.dropdownOpen4
    });
  }
  toggle5() {
    this.setState({
      dropdownOpen5: !this.state.dropdownOpen5
    });
  }
  toggle6() {
    this.setState({
      dropdownOpen6: !this.state.dropdownOpen6
    });
  }
  toggle7() {
    this.setState({
      dropdownOpen7: !this.state.dropdownOpen7
    });
  }
  toggle8() {
    this.setState({
      dropdownOpen8: !this.state.dropdownOpen8
    });
  }
  toggle9() {
    this.setState({
      dropdownOpen9: !this.state.dropdownOpen9
    });
  }

  render() {
    return (
      <div style={{marginTop: '100px'}}>
        <h2>Basic example</h2>
        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          <DropdownToggle caret  color="primary">
            Material dropdown
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem href="#">Action</DropdownItem>
            <DropdownItem href="#">Another Action</DropdownItem>
            <DropdownItem href="#">Something else here</DropdownItem>
            <DropdownItem href="#">Something else here</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <br />
        <h2>Material dropdowns</h2>
        <Dropdown isOpen={this.state.dropdownOpen1} toggle={this.toggle1}>
          <DropdownToggle caret  color="danger">
            Material dropdown
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem>Action</DropdownItem>
            <DropdownItem>Another Action</DropdownItem>
            <DropdownItem>Something else here</DropdownItem>
            <DropdownItem>Something else here</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Dropdown isOpen={this.state.dropdownOpen2} toggle={this.toggle2}>
          <DropdownToggle caret  color="success">
            Material dropdown
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem>Action</DropdownItem>
            <DropdownItem>Another Action</DropdownItem>
            <DropdownItem>Something else here</DropdownItem>
            <DropdownItem>Something else here</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <br />
        <h2>Sizing</h2>
        <Dropdown isOpen={this.state.dropdownOpen3} toggle={this.toggle3} size="lg">
          <DropdownToggle caret>
            Large Button
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem>Action</DropdownItem>
            <DropdownItem>Another Action</DropdownItem>
            <DropdownItem >Something else here</DropdownItem>
            <DropdownItem divider/>
            <DropdownItem>Separated link</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Dropdown isOpen={this.state.dropdownOpen4} toggle={this.toggle4} size="sm">
          <DropdownToggle caret  color="primary">
            Small Button
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem>Action</DropdownItem>
            <DropdownItem>Another Action</DropdownItem>
            <DropdownItem>Something else here</DropdownItem>
            <DropdownItem divider/>
            <DropdownItem>Separated link</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <br />
        <h2>Dropup variation</h2>
        <Dropdown isOpen={this.state.dropdownOpen5} toggle={this.toggle5} dropup>
          <DropdownToggle caret color="primary">
            Dropup
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem>Action</DropdownItem>
            <DropdownItem>Another Action</DropdownItem>
            <DropdownItem>Something else here</DropdownItem>
            <DropdownItem divider/>
            <DropdownItem>Separated link</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <br />
        <h2>Alignment</h2>
        <Dropdown isOpen={this.state.dropdownOpen6} toggle={this.toggle6}>
          <DropdownToggle caret color="primary">
            This dropdown&apos;s menu is right-aligned
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem>Action</DropdownItem>
            <DropdownItem>Another Action</DropdownItem>
            <DropdownItem>Something else here</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <br />
        <h2>Menu headers</h2>
        <Dropdown isOpen={this.state.dropdownOpen7} toggle={this.toggle7}>
          <DropdownToggle caret color="primary">
            Dropdown
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem header>Dropdown header</DropdownItem>
            <DropdownItem>Action</DropdownItem>
            <DropdownItem>Another Action</DropdownItem>
            <DropdownItem>Something else here</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <br />
        <h2>Menu dividers</h2>
        <Dropdown isOpen={this.state.dropdownOpen8} toggle={this.toggle8}>
          <DropdownToggle caret color="primary">
            Dropdown
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem>Action</DropdownItem>
            <DropdownItem>Another Action</DropdownItem>
            <DropdownItem>Something else here</DropdownItem>
            <DropdownItem divider/>
            <DropdownItem>Separated link</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <br />
        <h2>Disabled menu items</h2>
        <Dropdown isOpen={this.state.dropdownOpen9} toggle={this.toggle9}>
          <DropdownToggle caret color="primary">
            Dropdown
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem header>Regular link</DropdownItem>
            <DropdownItem disabled href="#">Disabled link</DropdownItem>
            <DropdownItem href="#">Another link</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    );
  }
}

export default DropdownPage;
