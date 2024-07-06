// src/pages/business/login.tsx
import React, { useEffect, useState } from 'react';
import { useBusinessAuth } from '@/context/BusinessAuthContext';
import { useRouter } from 'next/router';

import Button from '@/app/Components/Button';
import * as S from '@/app/Styles/login';

const BusinessLogin = () => {
    const { login, isAuthenticated } = useBusinessAuth();
    const [usernameOrEmail, setUsernameOrEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    useEffect(() => {
        if (isAuthenticated) {
            router.replace('/business/');
        }
    }, [isAuthenticated, router]);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        await login({ usernameOrEmail, password });
    };

    return (
        <div className="container" style={{ justifyContent: 'center' }}>
            <S.LoginDiv onSubmit={handleLogin}>
                <h1>Business Sign in</h1>
                <S.InputDiv>
                    <label htmlFor="mail">Email or registration number</label>
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
                    <p>Not a seller?</p>
                    <a href='/login'>Login as a User</a>
                </div>
            </S.LoginDiv>
            <S.Separador>New to Store Business?</S.Separador>
            <Button variant='light' maxwidth='350px' type='link' href='/business/register'>
                <span>Create Business Account</span>
            </Button>
        </div>
    );
};

export default BusinessLogin;
