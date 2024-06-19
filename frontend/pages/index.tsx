import React from 'react';
import Header from '@/app/Components/Header';
import CategoryList from '@/app/Components/CategoryList';

const Home = () => {
    return (
        <div className='container'>
            <Header />
            <CategoryList />
        </div>
    );
};

export default Home;
