import React, { Component } from 'react';
  import { ToastContainer, toast } from 'react-toastify';
  // import 'react-toastify/dist/ReactToastify.min.css';
import './alerts.css';

import { Button } from 'mdbreact';


  class AlertPage extends Component {
    notify() {
      toast("Wow so easy !");
    }

    notify(type){
    return () => {
      switch (type) {
        case 'info':
          toast.info('Info message', {
            className: 'dark-toast',
            autoClose: 3000
          });
          break;
        case 'success':
          toast.success('Success message', {
            position: toast.POSITION.BOTTOM_RIGHT,
            className: 'dark-toast',
            progressClassName: 'transparent-progress'
          });
          break;
        case 'warning':
          toast.warn('Warning message', 'Close after 3000ms');
          break;
        case 'error':
          toast.error('Error message', 'Click me!', 5000, () => {
            alert('callback');
          });
          break;
      }
    };
  };

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
        {/* One container to rule them all! */}
        <ToastContainer 
          hideProgressBar={true}
          newestOnTop={true}
          closeOnClick
          autoClose={5000}
        />
        {/*Can be written <ToastContainer />. Props defined are the same as the default one. */}
        </div>
      );
    }
  }


export default AlertPage;

