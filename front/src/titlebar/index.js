import React from 'react';

import giveStyleReciever from '../utils/styleReciever';

import LoginButton from './loginButton'

import './titlebar.css';


class TitleBar extends React.Component {
    
    render() {
        return giveStyleReciever(this,
            <div className='title-bar'>
                <h1 className='title'>Subscriber</h1>
                <LoginButton id='login-btn'/>
            </div>
        );
    }
}

export default TitleBar;