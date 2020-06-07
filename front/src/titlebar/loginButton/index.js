import React from 'react';

import giveStyleReciever from '../../utils/styleReciever';

import './loginButton.css'


class LoginButton extends React.Component {
    



    render() {
        return giveStyleReciever(this.props,
            <form method='get' action='http://localhost:8080/auth'>
                <button className='login-btn'>
                    로그인
                </button>
            </form>
        );
    }
}

export default LoginButton;