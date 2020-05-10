import React from 'react';
import { MDBEdgeHeader, MDBContainer, MDBRow, MDBCol, MDBJumbotron, MDBIcon, MDBAnimation } from 'mdbreact';
import MenuLink from '../components/menuLink';

const TablesNavPage = () => {
  return (
    <>
      <MDBEdgeHeader color='indigo darken-3' className='sectionPage' />
      <MDBAnimation type='zoomIn' duration='500ms'>
        <MDBContainer>
          <MDBRow>
            <MDBCol md='8' className='mt-3 mx-auto'>
              <MDBJumbotron>
                <h1 className='text-center'>
                  <MDBIcon icon='table' className='indigo-text mr-2' />
                  Tables
                </h1>
                <ul className='list-unstyled example-components-list'>
                  <h6 className='mt-3 grey-text'>
                    <strong>FREE</strong>{' '}
                  </h6>
                  <MenuLink to='/tables/datatable' title='Datatable' />
                  <MenuLink to='/tables/datatable-2' title='DatatableV5' />
                  <MenuLink to='/tables/datatable-api' title='Datatable - data from API' />
                  <MenuLink to='/tables/table' title='Table' />
                  <MenuLink to='/tables/table-responsive' title='Table Responsive' />
                  <MenuLink to='/tables/table-scroll' title='Table Scroll' />
                  <MenuLink to='/tables/table-styles' title='Table Styles' />
                  
                </ul>
              </MDBJumbotron>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </MDBAnimation>
    </>
  );
};

export default TablesNavPage;
