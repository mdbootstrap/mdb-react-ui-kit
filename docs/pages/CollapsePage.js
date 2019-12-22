import React, { Component } from 'react';
import { MDBBtn, MDBCollapse, MDBContainer } from 'mdbreact';
import DocsLink from '../components/docsLink';
import SectionContainer from '../components/sectionContainer';

class CollapsePage extends Component {
  state = {
    collapseID: ''
  };

  toggleCollapse = collapseID => () => {
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ''
    }));
  };

  render() {
    const { collapseID } = this.state;
    return (
      <MDBContainer>
        <DocsLink
          title='Collapse'
          href='https://mdbootstrap.com/docs/react/advanced/collapse/'
        />

        <SectionContainer header='Basic examples'>
          <MDBBtn
            color='primary'
            onClick={this.toggleCollapse('basicCollapse')}
            style={{ marginBottom: '1rem' }}
          >
            Toggle1
          </MDBBtn>
          <MDBBtn
            color='info'
            onClick={this.toggleCollapse('basicCollapse')}
            style={{ marginBottom: '1rem' }}
          >
            Toggle2
          </MDBBtn>
          <MDBCollapse id='basicCollapse' isOpen={collapseID}>
            <p>
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. Nihil anim keffiyeh
              helvetica, craft beer labore wes anderson cred nesciunt sapiente
              ea proident.
            </p>
          </MDBCollapse>
        </SectionContainer>

        <SectionContainer header='Accordion without icon'>
          <div>
            <div>
              <MDBBtn
                color='primary'
                onClick={this.toggleCollapse('accordion1')}
                style={{ marginBottom: '1rem' }}
              >
                Collapsible Group Item #1
              </MDBBtn>
            </div>
            <MDBCollapse id='accordion1' isOpen={collapseID}>
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
                color='primary'
                onClick={this.toggleCollapse('accordion2')}
                style={{ marginBottom: '1rem' }}
              >
                Collapsible Group Item #2
              </MDBBtn>
            </div>
            <MDBCollapse id='accordion2' isOpen={collapseID}>
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
                color='primary'
                onClick={this.toggleCollapse('accordion3')}
                style={{ marginBottom: '1rem' }}
              >
                Collapsible Group Item #2
              </MDBBtn>
            </div>
            <MDBCollapse id='accordion3' isOpen={collapseID}>
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
        </SectionContainer>
      </MDBContainer>
    );
  }
}

export default CollapsePage;
