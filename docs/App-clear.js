import React, { Component } from 'react';
import { MDBBtn, MDBCol, MDBContainer, MDBRow } from 'mdbreact';
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
                <h2 className='h1 text-poppy-red'>BLACK NOVEMBER SURPRISE!</h2>
                <i className='fas fa-shopping-basket text-white fa-10x'></i>
                <p className='mt-2 text-white'>
                  Check what we have prepared and start using the richest UI Kit today.
                  <br />
                  Hurry up & don't loose your chance.
                </p>
                <p>
                  <a
                    rel='noopener noreferrer'
                    target='_blank'
                    type='button'
                    className='btn btn-danger btn-rounded btn-lg text-white bg-poppy-red'
                    href='https://mdbootstrap.com/sale/'
                  >
                    <i className='fas fa-cart-arrow-down'></i> CLAIM OFFER
                  </a>
                </p>
              </div>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default App;
