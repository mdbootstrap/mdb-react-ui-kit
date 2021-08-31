import React from 'react';
import {
  MDBBadge,
  MDBBtn,
  MDBCol,
  MDBRow,
  MDBContainer,
  MDBCard,
  MDBCardBody,
} from 'mdb-react-ui-kit';

function App() {
  return (
    <MDBContainer fluid>
      <div
        className='d-flex justify-content-center align-items-center'
        style={{ height: '100vh' }}
      >
        <MDBCard style={{ padding: 20 }}>
          <MDBCardBody>
            <div className='text-center'>
              <img
                className='mb-4 img-fluid'
                src='https://mdbootstrap.com/img/logo/mdb-transparent-250px.png'
              />
              <h5 className='mb-3'>
                Thank you for using our product. We're glad you're with us.
              </h5>
              <p className='mb-3'>
                <MDBBadge className='ms-2'>MDB TEAM</MDBBadge>
              </p>

              <MDBRow className='justify-content-center'>
                <MDBCol md='5' style={{ padding: 5 }}>
                  <MDBBtn
                    tag='a'
                    href='https://mdbootstrap.com/docs/standard/getting-started/'
                    target='_blank'
                    size='sm'
                    outline
                  >
                    Start MDB tutorial
                  </MDBBtn>
                </MDBCol>
                <MDBCol md='5' style={{ padding: 5 }}>
                  <MDBBtn
                    tag='a'
                    href='https://mdbootstrap.com/docs/b5/react/'
                    target='_blank'
                    size='sm'
                    outline
                    color='secondary'
                  >
                    mdb-react-ui-kit docs
                  </MDBBtn>
                </MDBCol>
              </MDBRow>
            </div>
          </MDBCardBody>
        </MDBCard>
      </div>
    </MDBContainer>
  );
}

export default App;
