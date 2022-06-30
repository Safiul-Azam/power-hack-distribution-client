import React from 'react';
import Header from './Header'
import BillingPage from './BillingPage'

const Home = () => {
    return (
        <div className='border container mt-3 mb-5'>
            <Header></Header>
            <BillingPage></BillingPage>

        </div>
    );
};

export default Home;