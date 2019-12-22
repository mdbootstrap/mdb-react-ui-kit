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

const AddonsNavPage = () => {
  return (
    <>
      <MDBEdgeHeader color='indigo darken-3' className='sectionPage' />
      <MDBAnimation type='zoomIn' duration='500ms'>
        <MDBContainer>
          <MDBRow>
            <MDBCol md='8' className='mt-3 mx-auto'>
              <MDBJumbotron>
                <h1 className='text-center'>
                  <MDBIcon icon='window-restore' className='mr-2 indigo-text' />
                  Addons
                </h1>
                <ul className='list-unstyled example-components-list'>
                  <h6 className='mt-3 grey-text'>
                    <strong>FREE</strong>
                  </h6>
                  <MenuLink to='/addons/edge-header' title='Edge Header' />
                  <MenuLink to='/addons/iframe' title='Iframe' />
                  <MenuLink to='/addons/notifications' title='Notifications' />
                  <MenuLink to='/addons/treeview' title='Treeview' />
                  <MenuLink to='/addons/rating' title='Rating' />
                  
                </ul>
              </MDBJumbotron>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </MDBAnimation>
    </>
  );
};

export default AddonsNavPage;
