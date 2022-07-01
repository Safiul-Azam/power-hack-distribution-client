import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import { Link } from 'react-router-dom';

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
                    <Link className='fs-5 fw-bold text-white text-decoration-none'to='/home'>Power Hack</Link>
                    <Link className='fs-5 fw-bold text-white text-decoration-none' to='/login'>Login</Link>
                    <p className='fs-5 fw-bold text-white'>Total Bill: {total|| '0'}</p>
                </div>
            </nav>
        
        </div>
    );
};

export default Header;