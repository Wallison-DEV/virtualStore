import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from "next/image";
import React, { useEffect, useState } from 'react';

import StoreLogo from '@/app/assets/img/store_logo.png';

import * as S from './styles';
const BusinessNav = () => {
    const router = useRouter();

    const [activeItem, setActiveItem] = useState('dashboard');

    useEffect(() => {
        const pathname = router.pathname;
        if (pathname === '/business/') {
            setActiveItem('dashboard');
        } else if (pathname === '/business/profile') {
            setActiveItem('profile');
        } else if (pathname === '/business/orders') {
            setActiveItem('orders');
        } else if (pathname === '/business/products') {
            setActiveItem('products');
        }
    }, [router.pathname]);

    return (
        <S.NavBar>
            <S.NavBrand>
                <Image src={StoreLogo} alt="Virtual Store Logo" />
                <h1>Virtual Store</h1>
            </S.NavBrand>
            <S.NavLinks>
                <Link href="/business">
                    <S.NavBarItem active={activeItem === 'dashboard'} onClick={() => setActiveItem('dashboard')}>
                        <S.NavBarText>Dashboard</S.NavBarText>
                    </S.NavBarItem>
                </Link>

                <Link href="/business/profile">
                    <S.NavBarItem active={activeItem === 'profile'} onClick={() => setActiveItem('profile')}>
                        <S.NavBarText>Perfil</S.NavBarText>
                    </S.NavBarItem>
                </Link>

                <Link href="/business/products">
                    <S.NavBarItem active={activeItem === 'products'} onClick={() => setActiveItem('products')}>
                        <S.NavBarText>Products</S.NavBarText>
                    </S.NavBarItem>
                </Link>

                <Link href="/business/orders">
                    <S.NavBarItem active={activeItem === 'orders'} onClick={() => setActiveItem('orders')}>
                        <S.NavBarText>Ordens</S.NavBarText>
                    </S.NavBarItem>
                </Link>
            </S.NavLinks>
        </S.NavBar>
    );
};

export default BusinessNav;