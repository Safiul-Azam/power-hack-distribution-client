import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import DeleteModal from './DeleteModal';
import SingleBill from './SingleBill';

const BillingPage = () => {
    const [show, setShow] = useState(null);
    const { data: billingList, isLoading, refetch } = useQuery('billList', () => fetch('http://localhost:5000/billing-list').then(res => res.json()))

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
                            setShow={setShow}
                        ></SingleBill>)
                    }
                </tbody>
            </table>
            {
                show && <DeleteModal
                show={show}
                billingList={billingList}
                setShow={setShow}
                refetch={refetch}
                ></DeleteModal>
            }
        </div>
    );
};

export default BillingPage;