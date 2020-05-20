import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import TitleBar from './titlebar'
import NavBar from './navbar';

import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <TitleBar />
    <div className='content'>
      <NavBar />
      <div className='cont'></div>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
