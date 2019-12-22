import React from 'react';
import {
  MDBEdgeHeader,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBJumbotron,
  MDBIcon,
  MDBAnimation
} from 'mdbreact';
import MenuLink from '../components/menuLink';

const AdvancedNavPage = () => {
  return (
    <>
      <MDBEdgeHeader color='indigo darken-3' className='sectionPage' />
      <MDBAnimation type='zoomIn' duration='500ms'>
        <MDBContainer>
          <MDBRow>
            <MDBCol md='8' className='mt-3 mx-auto'>
              <MDBJumbotron>
                <h1 className='text-center'>
                  <MDBIcon icon='code' className='indigo-text mr-2' />
                  Advanced
                </h1>
                <ul className='list-unstyled example-components-list'>
                  <h6 className='mt-3 grey-text'>
                    <strong>FREE</strong>{' '}
                  </h6>
                  <MenuLink to='/advanced/alerts' title='Alerts' />
                  <MenuLink to='/advanced/carousel' title='Carousel' />
                  <MenuLink to='/advanced/charts' title='Charts' />
                  <MenuLink to='/advanced/collapse' title='Collapse' />
                  <MenuLink to='/advanced/popover' title='Popover' />
                  <MenuLink to='/advanced/scrollbar' title='ScrollBar' />
                  <MenuLink to='/advanced/tooltips' title='Tooltips' />
                  <MenuLink
                    to='/advanced/videocarousel'
                    title='Video Carousel'
                  />
                  
                </ul>
              </MDBJumbotron>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </MDBAnimation>
    </>
  );
};

export default AdvancedNavPage;
