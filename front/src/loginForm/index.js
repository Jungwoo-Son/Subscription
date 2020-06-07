import React from 'react';


import './loginForm.css'

function LoginForm (props) {


    return (
        <form id='login-form' method='get' action='http://localhost:8080/auth'>
            <div id='login-form-title'>Subscriber</div>
            <input type='submit' id='login-button' value='구글 로그인으로 시작하기'/>
        </form>
    );

}

export default LoginForm;