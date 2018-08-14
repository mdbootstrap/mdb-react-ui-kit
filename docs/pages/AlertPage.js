import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import './alerts.css';
import { Button } from 'mdbreact';

const AlertPage = () =>  {

  const notify = (type) => {
    return () => {
      switch (type) {
        case 'info':
        toast.info('Info message', {
          "closeButton": false,
        });
        break;
        case 'success':
        toast.success('Success message', {
          position: "top-left"

        });
        break;
        case 'warning':
        toast.warn('Warning message');
        break;
        case 'error':
        toast.error('Error message');
        break;
      }
    };
  }

  return (
    <div>
      <button className='btn btn-info'
        onClick={notify('info')}>Info
      </button>
      <hr/>
      <button className='btn btn-success'
        onClick={notify('success')}>Success
      </button>
      <hr/>
      <button className='btn btn-warning'
        onClick={notify('warning')}>Warning
      </button>
      <hr/>
      <button className='btn btn-danger'
        onClick={notify('error')}>Error
      </button>
      <ToastContainer
        hideProgressBar={true}
        newestOnTop={true}
        autoClose={5000}
      />
    </div>
  );
}


export default AlertPage;

