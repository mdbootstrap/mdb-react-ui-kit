import React from 'react';
import ReactDOM from 'react-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import '../dist/css/mdb.css';
import './index.css';
// import App from './App';
import AppClear from './App-clear';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <React.StrictMode>
    <AppClear />
  </React.StrictMode>,
  document.getElementById('root')
);

registerServiceWorker();
