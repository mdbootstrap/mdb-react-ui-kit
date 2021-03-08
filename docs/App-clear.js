import React, { Component } from 'react';
import { MDBBtn, MDBCol, MDBContainer, MDBRow, MDBIcon } from 'mdbreact';
import './index.css';
import logo from './logo.png';

class App extends Component {
  render() {
    function Clipboard_CopyTo(value) {
      var tempInput = document.createElement('input');
      tempInput.value = value;
      document.body.appendChild(tempInput);
      tempInput.select();
      document.execCommand('copy');
      document.body.removeChild(tempInput);
    }
  
    const handleClick = () => {
      Clipboard_CopyTo('T9TTVSQB');
      var div = document.getElementById('code-success');
        div.style.display = 'block';
      setTimeout(function () {
        document.getElementById('code-success').style.display = 'none';
      }, 900);
    };

    return (
      <MDBContainer fluid>
      <div
        className='d-flex justify-content-center align-items-center'
        style={{ height: '100vh' }}
      >
        <div className='text-center'>
          <h2>Release surprise!</h2>
          <p className='h4 fw-bold'>50% OFF MDB PRO</p>
          <div className='row justify-content-center'>
            <div className='col-md-6'>
              <img
                src='https://mdbootstrap.com/img/Marketing/campaigns/50off-SJARV.png'
                className='img-fluid'
                alt=''
              />
            </div>
          </div>

          <h5 className='mb-3'>
            Use this coupon code before it expires and claim the reward
          </h5>
          <p className='mb-3'>
            The coupon code will be valid until the end of the week
          </p>

          <div className='mt-2'>
            <code className='h2 border rounded py-1 px-5 flex-item me-2'>
              T9TTVSQB
            </code>
            <br />

            <MDBBtn
              className='mr-2 mt-3'
              id='disc-50'
              href='#'
              size='lg'
              color='info'
              style={{ backgroundColor: '#009fe7' }}
              onClick={handleClick}
            >
              COPY TO CLIPBOARD <MDBIcon far icon='copy' />
            </MDBBtn>
            <MDBBtn
              outline
              className='mt-3'
              href='https://mdbootstrap.com/docs/standard/getting-started/'
              size='lg'
              target='_blank'
              style={{ borderColor: '#009fe7', color: '#009fe7' }}
            >
              MDB tutorial
            </MDBBtn>
          </div>
          <p>
            See <a href='https://mdbootstrap.com/pro/'>prices</a>
          </p>
          <div
            className='my-2 me-2 alert alert-success'
            id='code-success'
            style={{ display: 'none', position: 'fixed', width: '300px', top: '0', right: '0' }}
          >
            Copied
          </div>
        </div>
      </div>
    </MDBContainer>
    );
  }
}

export default App;
