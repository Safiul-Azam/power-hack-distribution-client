import React from 'react';
import BillingData from './BillingData';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';

const Header = () => {
    const { data: billingList, isLoading, refetch } = useQuery('billList', () => fetch('http://localhost:5000/billing-list').then(res => res.json()))
    // console.log(billingList)
    if(isLoading){
        return <Loading></Loading>
    }
    const amount = billingList?.map(bill => bill.paidAmount)
    const total =amount?.reduce((partialSum,a)=> parseInt(partialSum) + parseInt(a),0)
    refetch()
     
    return (
        <div className='mt-2'>
            <nav className="navbar bg-secondary px-5">
                <div className="container">
                    <p className='fs-5 fw-bold text-white'>Power Hack</p>
                    <p className='fs-5 fw-bold text-white'>Total Bill: {total|| '0'}</p>
                </div>
            </nav>
        <BillingData></BillingData>
        </div>
    );
};

export default Header;