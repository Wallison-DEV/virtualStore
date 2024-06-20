import React, { useEffect, useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/router';

import Button from '../src/app/Components/Button'
import * as S from '@/app/Styles/login'

const SignUp = () => {
    const { isAuthenticated } = useAuth();
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    useEffect(() => {
        if (isAuthenticated) {
            router.replace('/');
        }
    }, []);
    useEffect(() => {
        if (isAuthenticated) {
            router.replace('/');
        }
    }, [router, isAuthenticated]);

    return (
        <div className="container" style={{ justifyContent: 'center' }}>
            <S.LoginDiv>
                <h1>Sign up</h1>
                <S.InputDiv>
                    <label htmlFor="name">Your name</label>
                    <input id='name' type="text" />
                </S.InputDiv>
                <S.InputDiv>
                    <label htmlFor="number">Mobile number</label>
                    <input id='number' type="number" />
                </S.InputDiv>
                <S.InputDiv>
                    <label htmlFor="mail">E-Mail</label>
                    <input id='mail' type="mail" />
                </S.InputDiv>
                <S.InputDiv>
                    <label htmlFor="password">Password</label>
                    <input id='password' type="password" />
                </S.InputDiv>
                <S.InputDiv>
                    <label htmlFor="re-password">Re-enter password</label>
                    <input id='re-password' type="password" />
                </S.InputDiv>
                <Button variant='orange' maxwidth='350px'>
                    <span>Log In</span>
                </Button>
                <p>By continuing, you agree to Store's <a>Conditions of Use</a> and <a>Privacy Notice</a>.</p>
                <div>
                    <p>Are you a seller?</p>
                    <a href='/business/register'>Create a free business account</a>
                </div>
                <div>
                    <p>Already have an account? <a href='/login'>Sign in</a></p>
                </div>
            </S.LoginDiv>
        </div >
    )
}

export default SignUp