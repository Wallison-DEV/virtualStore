import React, { useEffect, useState } from 'react';
import { useBusinessAuth } from '@/context/BusinessAuthContext';
import { useRouter } from 'next/router';
import { useSignupBusinessMutation } from '@/app/Services/api';

import Button from '@/app/Components/Button';
import * as S from '@/app/Styles/login';

const BusinessSignUp = () => {
    const { isAuthenticated } = useBusinessAuth();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [address, setAddress] = useState('');
    const [registrationNumber, setRegistrationNumber] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');
    const router = useRouter();

    const [signup, { isError, isSuccess }] = useSignupBusinessMutation();

    useEffect(() => {
        if (isAuthenticated) {
            router.replace('/business/login');
        }
    }, [isAuthenticated, router]);

    const handleSignUp = async (e?: React.MouseEvent<HTMLButtonElement>) => {
        if (e) e.preventDefault();

        try {
            if (password !== rePassword) {
                alert('As senhas não coincidem');
                return;
            }

            const userData = {
                username: name,
                email: email,
                phone_number: phoneNumber,
                address: address,
                registration_number: registrationNumber,
                password: password,
            };

            await signup(userData);

            if (isSuccess) {
                router.push('/business/login');
            } else if (isError) {
                console.error('Erro ao cadastrar empresa');
            }
        } catch (error) {
            console.error('Erro ao cadastrar empresa', error);
        }
    };

    return (
        <div className="container" style={{ justifyContent: 'center' }}>
            <S.LoginDiv>
                <h1>Sign up</h1>
                <S.InputDiv>
                    <label htmlFor="name">Company Name</label>
                    <input
                        id='name'
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </S.InputDiv>
                <S.InputDiv>
                    <label htmlFor="email">Company Email</label>
                    <input
                        id='email'
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </S.InputDiv>
                <S.InputDiv>
                    <label htmlFor="phoneNumber">Phone Number</label>
                    <input
                        id='phoneNumber'
                        type="text"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                </S.InputDiv>
                <S.InputDiv>
                    <label htmlFor="address">Address</label>
                    <textarea
                        id='address'
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                </S.InputDiv>
                <S.InputDiv>
                    <label htmlFor="registrationNumber">Registration Number</label>
                    <input
                        id='registrationNumber'
                        type="text"
                        value={registrationNumber}
                        onChange={(e) => setRegistrationNumber(e.target.value)}
                    />
                </S.InputDiv>
                <S.InputDiv>
                    <label htmlFor="password">Password</label>
                    <input
                        id='password'
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </S.InputDiv>
                <S.InputDiv>
                    <label htmlFor="rePassword">Re-enter Password</label>
                    <input
                        id='rePassword'
                        type="password"
                        value={rePassword}
                        onChange={(e) => setRePassword(e.target.value)}
                    />
                </S.InputDiv>
                <Button variant='orange' maxwidth='350px' onClick={handleSignUp}>
                    <span>Register</span>
                </Button>
                <p>By continuing, you agree to Business Store's <a>Conditions of Use</a> and <a>Privacy Notice</a>.</p>
                <div>
                    <p>Are you a client?</p>
                    <a href='/register'>Create a free client account</a>
                </div>
                <div>
                    <p>Already have an account? <a href='/business/login'>Sign in</a></p>
                </div>
            </S.LoginDiv>
        </div>
    );
};

export default BusinessSignUp;
