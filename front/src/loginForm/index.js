import React from 'react';


import './loginForm.css'

function LoginForm (props) {


    return (
        <form id='login-form'>
            <div id='login-form-title'>Subscriber</div>
            <button id='login-button'>구글 로그인으로 시작하기</button>
        </form>
    );

}

export default LoginForm;