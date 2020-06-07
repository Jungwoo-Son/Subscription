import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { useCookies } from 'react-cookie';

import LoginForm from './loginForm';
import TitleBar from './titlebar';
import NavBar from './navbar';
import Contents from './contents';
import {DisplayedVideo} from './video';


import './index.css'



ReactDOM.render(
  <React.StrictMode>
    <DispatchFirstPage/>
  </React.StrictMode>,
  document.getElementById('root')
);

function DispatchFirstPage() {
  const [cookies, setCookie, removeCookie] = useCookies(['token']);
  
  if (cookies.token === undefined) {
    return <LoginPage/>;
  }
  else {
    return <MainPage/>;
  }
}


function LoginPage() {
  return <LoginForm />;
}

function MainPage() {
  return (
    <>
      <NavBar id='navigationbar'/>
      <TitleBar id='titlebar'/>
      <Contents id='contents'/>
    </>
  );
}


serviceWorker.unregister();
