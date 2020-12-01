import React, { Component } from 'react';
import { MDBBtn, MDBCol, MDBContainer, MDBRow, MDBIcon } from 'mdbreact';
import './index.css';
import logo from './logo.png';

class App extends Component {
  render() {
    return (
      <MDBContainer>
        <MDBRow center style={{ height: '100vh' }}>
          <MDBCol middle={true} md='6' className='text-center'>
            <img src={logo} alt='logo' style={{ width: '10rem' }} />
            <h1 className='text-white'>Welcome to Your MDB React App</h1>
            <p className='mb-2 text-white'>The application is configured and ready to import our components.</p>
            <MDBBtn href='https://mdbootstrap.com/docs/react/' target='blank' color='light-blue'>
              <strong>Check out our docs!</strong>
            </MDBBtn>
          </MDBCol>
          <MDBCol middle={true} md='6' className='text-center'>
            <div className='d-flex mt-5'>
              <div className='text-center'>
                <h2 className='h1 mb-5'>CYBER MONDAY SALE!</h2>
                <MDBIcon icon="calendar-day cyan-text" size="10x" />
                <p className='mt-2 text-white'>
                  Check what we have prepared and start using the richest UI Kit today.
                  <br />
                  Hurry up & don't loose your chance.
                </p>
                <MDBBtn color="cyan" href="https://mdbootstrap.com/sale/" target="_blank">
                  CLAIM OFFER
                </MDBBtn>
              </div>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default App;
