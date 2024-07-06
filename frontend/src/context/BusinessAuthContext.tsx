import React, { createContext, useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useDoLoginMutation } from '@/app/Services/api';
import { authenticationFailed, authenticationSuccess } from '@/app/Store/reducers/authentication';
import { useDispatch, useSelector } from 'react-redux';
import { verifyAuthenticated } from '@/Utils';
import { RootReducer } from '@/app/Store';

interface BusinessAuthContextType {
    isAuthenticated: boolean;
    login: (credentials: { usernameOrEmail: string; password: string }) => Promise<void>;
    logout: () => Promise<void>;
}

const BusinessAuthContext = createContext<BusinessAuthContextType | undefined>(undefined);

export const BusinessAuthProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
    const dispatch = useDispatch();
    const { isAuthenticated: isAuthenticatedRedux, checkAuth } = useSelector((state: RootReducer) => state.auth);
    const router = useRouter();
    const [purchase] = useDoLoginMutation();

    const [isAuthenticated, setIsAuthenticated] = useState(isAuthenticatedRedux);

    const checkAuthentication = async () => {
        const accessToken = localStorage.getItem('accessToken');
        const accessTokenExp = localStorage.getItem('accessTokenExp');
        try {
            const response = await verifyAuthenticated(accessToken, accessTokenExp);
            if (response) {
                dispatch(authenticationSuccess());
                setIsAuthenticated(true);
            } else {
                dispatch(authenticationFailed());
                setIsAuthenticated(false);
            }
        } catch (error) {
            console.error('Erro ao verificar autenticação:', error);
            dispatch(authenticationFailed());
            setIsAuthenticated(false);
        }
    };

    useEffect(() => {
        checkAuthentication();
    }, [checkAuth]);

    useEffect(() => {
        checkAuthentication();
    }, []);

    const login = async ({ usernameOrEmail, password }: { usernameOrEmail: string; password: string }) => {
        try {
            const requestBody = { username_or_email_or_registration: usernameOrEmail, password };
            const response = await purchase(requestBody).unwrap();
            if (response.status === 400) {
                console.error('Error logging in:', response.error);
                return;
            }
            const { access: accessToken, exp: tokenExp, refresh: refreshToken, user } = response;
            console.log('resposta:', response)
            localStorage.setItem('accessToken', accessToken);
            localStorage.setItem('accessTokenExp', tokenExp.toString());
            localStorage.setItem('refreshToken', refreshToken);
            localStorage.setItem('user', JSON.stringify(user));
            setIsAuthenticated(true);
            router.push('/business/');
        } catch (error: any) {
            console.error('Error logging in:', error);
        }
    };

    const logout = async () => {
        try {
            const refreshToken = localStorage.getItem('refreshToken');
            if (refreshToken) {
                const responseLogout = await fetch('http://localhost:8000/api/logout/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        refresh: refreshToken,
                    }),
                });
                if (responseLogout.status === 200) {
                    localStorage.removeItem('accessToken');
                    localStorage.removeItem('refreshToken');
                    localStorage.removeItem('accessTokenExp');
                    localStorage.removeItem('user');
                    setIsAuthenticated(false);
                    router.push('/business/login/');
                }
            }
        } catch (error: any) {
            console.error('Error logging out:', error.message);
        }
    };

    return (
        <BusinessAuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </BusinessAuthContext.Provider>
    );
};

export const useBusinessAuth = () => {
    const context = useContext(BusinessAuthContext);
    if (!context) {
        throw new Error('useBusinessAuth must be used within a BusinessAuthProvider');
    }
    return context;
};
