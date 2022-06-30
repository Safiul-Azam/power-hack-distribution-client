import React from 'react';
import { Link } from "react-router-dom";
import BillingData from './BillingData';

const Header = () => {
    return (
        <div className='mt-2'>
            <nav class="navbar bg-secondary px-5">
                <div class="container">
                    <p className='fs-5 fw-bold text-white'>Power Hack</p>
                    <p className='fs-5 fw-bold text-white'>Total Bill: 0</p>
                </div>
            </nav>
        <BillingData></BillingData>
        </div>
    );
};

export default Header;