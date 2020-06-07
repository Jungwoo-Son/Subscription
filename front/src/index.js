import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import LoginForm from './loginForm';
import TitleBar from './titlebar';
import NavBar from './navbar';
import Contents from './contents';
import {DisplayedVideo} from './video';


import './index.css'




// ReactDOM.render(
//     <React.StrictMode>
//         <LoginForm />
//     </React.StrictMode>,
//     document.getElementById('root')
// );

ReactDOM.render(
  <React.StrictMode>
    <NavBar id='navigationbar'/>
    <TitleBar id='titlebar'/>
    <Contents id='contents'/>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
