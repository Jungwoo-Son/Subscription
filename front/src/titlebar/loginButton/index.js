import React from 'react';

import giveStyleReciever from '../../utils/styleReciever';

import './loginButton.css'


class LoginButton extends React.Component {
    render() {
        return giveStyleReciever(this,
                <button className='login-btn'>
                    로그인
                </button>);
    }
}

export default LoginButton;