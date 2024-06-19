// src/pages/login.tsx
import React, { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import Button from '@/app/Components/Button';
import * as S from '@/app/Styles/login';

const Login = () => {
    const { login } = useAuth();
    const [usernameOrEmail, setUsernameOrEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        await login({ usernameOrEmail, password });
    };

    return (
        <div className="container" style={{ justifyContent: 'center' }}>
            <S.LoginDiv onSubmit={handleLogin}>
                <h1>Sign in</h1>
                <S.InputDiv>
                    <label htmlFor="mail">Email or mobile phone number</label>
                    <input id='mail' type="text" value={usernameOrEmail} onChange={(e) => setUsernameOrEmail(e.target.value)} />
                </S.InputDiv>
                <S.InputDiv>
                    <label htmlFor="password">Password</label>
                    <input id='password' type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </S.InputDiv>
                <Button variant='orange' maxwidth='350px'>
                    <span>Log In</span>
                </Button>
                <p>By continuing, you agree to Store's <a>Conditions of Use</a> and <a>Privacy Notice</a>.</p>
                <div>
                    <p>Are you a seller?</p>
                    <a href='/business/login'>Login to the Store Business</a>
                </div>
            </S.LoginDiv>
            <S.Separador>New to Store?</S.Separador>
            <Button variant='light' maxwidth='350px' type='link' href='/register'>
                <span>Create account</span>
            </Button>
        </div>
    );
};

export default Login;
