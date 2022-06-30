import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import SingleBill from './SingleBill';

const BillingPage = () => {
    const { data: billingList, isLoading, refetch } = useQuery('billList', () => fetch('http://localhost:5000/billingList').then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='container mb-3'>
            <table class="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th scope="col">Billing Id</th>
                        <th scope="col">Full Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Paid Amount</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        billingList.map(singleBill => <SingleBill
                            key={singleBill._id}
                            singleBill={singleBill}
                            refetch={refetch}
                        ></SingleBill>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default BillingPage;