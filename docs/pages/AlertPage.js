import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.min.css';
import './alerts.css';
// import '../docs/pages/alerts.css';

import { Button } from 'mdbreact';


class AlertPage extends Component {

  notify(type){
    return () => {
      switch (type) {
      case 'info':
        toast.info('Info message', {
          autoClose: 3000
        });
        break;
      case 'success':
        toast.success('Success message', {
          position: toast.POSITION.TOP_RIGHT
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

  render(){
    return (
      <div>
        <button className='btn btn-info'
          onClick={this.notify('info')}>Info
        </button>
        <hr/>
        <button className='btn btn-success'
          onClick={this.notify('success')}>Success
        </button>
        <hr/>
        <button className='btn btn-warning'
          onClick={this.notify('warning')}>Warning
        </button>
        <hr/>
        <button className='btn btn-danger'
          onClick={this.notify('error')}>Error
        </button>
        <ToastContainer 
          hideProgressBar={true}
          newestOnTop={true}
          autoClose={5000}
        />
      </div>
    );
  }
}


export default AlertPage;

