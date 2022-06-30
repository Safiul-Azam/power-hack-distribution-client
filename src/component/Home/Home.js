import React from 'react';
import Header from '../Header/Header'
import BillingPage from '../BillingPage/BillingPage'
import './Home.css'

const Home = () => {
    return (
        <div className='home-container'>
            <Header></Header>
            <BillingPage></BillingPage>
        </div>
    );
};

export default Home;