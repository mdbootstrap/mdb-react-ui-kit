import React from 'react';
import { Container, Row, Col,Button, Card, CardBody, CardImage, CardTitle, CardText, TabPane, TabContent, Nav, NavItem, NavLink } from 'mdbreact';
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
      <Container className="mt-4">
        <Row>
          <Col md="12">
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
            <TabContent className="card" activeItem={this.state.activeItem}>
              <TabPane tabId="1">
                <Row>
                  <Col md="12">
                    <h4>Tab 1 Contents</h4>
                    <Button>Go somewhere</Button>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId="2">
                <Row>
                  <Col md="6">
                    <CardBody>
                      <CardTitle>Special Title Treatment</CardTitle>
                      <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                      <Button>Go somewhere</Button>
                    </CardBody>
                  </Col>
                  <Col md="6">
                    <CardBody>
                      <CardTitle>Special Title Treatment</CardTitle>
                      <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                      <Button>Go somewhere</Button>
                    </CardBody>
                  </Col>
                </Row>
              </TabPane>
            </TabContent>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default TabsPage;
