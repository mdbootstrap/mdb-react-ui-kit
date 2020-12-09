import React, { Component } from 'react';
import { MDBBtn, MDBCol, MDBContainer, MDBRow } from 'mdbreact';
import './index.css';
import logo from './logo.png';
import image from './christmas.png';

// remove body styles in index.css too

class App extends Component {
  render() {
    return (
      <MDBContainer>
        <MDBRow center style={{ height: '100vh' }}>
          <MDBCol middle={true} md='6' className='text-center'>
            <img src={logo} alt='logo' style={{ width: '10rem' }} />
            <h1 style={{ color: '#6a8255' }}>Welcome to Your MDB React App</h1>
            <p className='mb-2' style={{ color: '#6a8255' }}>
              The application is configured and ready to import our components.
            </p>
            <MDBBtn href='https://mdbootstrap.com/docs/react/' target='blank' color='light-blue'>
              <strong>Check out our docs!</strong>
            </MDBBtn>
          </MDBCol>
          <MDBCol middle={true} md='6' className='text-center '>
            <div className='d-flex mt-5'>
              <div className='text-center w-100'>
                <h1 className='text-one' style={{ color: '#6a8255' }}>
                  CHRISTMAS SALE!
                </h1>

                <img src={image} alt='christmas' />

                <p className='mt-4 text-two'>
                  Get Templates & Plugins as a gift!
                  <br />
                  Hurry up & don't lose your chance.
                </p>
                <a
                  type='button'
                  className='btn btn-danger text-white btn-rounded btn-lg'
                  rel='noreferrer'
                  target='_blank'
                  href='https://mdbootstrap.com/sale/'
                >
                  <i className='fas fa-gifts'></i> GET Your gift
                </a>
              </div>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default App;
