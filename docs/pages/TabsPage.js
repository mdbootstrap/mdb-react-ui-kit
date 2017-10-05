import React from 'react';
import { Button, Card, CardBody, CardImage, CardTitle, CardText, TabPane, TabContent, Nav, NavItem, NavLink } from 'mdbreact';
import classnames from 'classnames';


class TabsPage extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeItem: '1'
    };
  }

  toggle(tab) {
    if (this.state.activeItem !== tab) {
      this.setState({
        activeItem: tab
      });
    }
  }
  render() {
    return (
      <div>
        <Nav className="nav-tabs nav-justified">
          <NavItem>
            <NavLink 
              className={classnames({ active: this.state.activeItem === '1' })}
              onClick={() => { this.toggle('1'); }}
            >
                    Tab 1
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink 
              className={classnames({ active: this.state.activeItem === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
                    Tab 2
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeItem={this.state.activeItem}>
          <TabPane tabId="1">
            <div className="row">
              <div className="col-sm-12">
                <h4>Tab 1 Contents</h4>
                <Button>Go somewhere</Button>
              </div>
            </div>
          </TabPane>
          <TabPane tabId="2">
            <div className="row">
              <div className="col-sm-6">
                <Card block>
                  <CardTitle>Special Title Treatment</CardTitle>
                  <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                  <Button>Go somewhere</Button>
                </Card>
              </div>
              <div className="col-sm-6">
                <Card block>
                  <CardTitle>Special Title Treatment</CardTitle>
                  <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                  <Button>Go somewhere</Button>
                </Card>
              </div>
            </div>
          </TabPane>
        </TabContent>
      </div>
    );
  }
}

export default TabsPage;