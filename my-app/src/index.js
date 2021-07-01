import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/header'
import Main from './components/main'
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <Header/>
    <Main />
  </React.StrictMode>,
  document.getElementById('root')
);

