import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import DeleteModal from './DeleteModal';
import EditBillingInfo from './EditBillingInfo';
import SingleBill from './SingleBill';

const BillingPage = () => {
    const [deleteBillInfo, setDeleteBillInfo] = useState(null);
    const [editBillingInfo, setEditBillingInfo] = useState(null);
    const [pageCount, setPageCount] = useState(0)
    const [clickPage, setClickPage] = useState(0)
    const [perPageData, setParPageData] = useState(10)
    useEffect(() => {
        fetch(`http://localhost:5000/billing-count?clickPage=${clickPage}&perPageData${perPageData}`)
            .then(res => res.json())
            .then(data => {
                const count = data.cursor
                const pages = Math.ceil(count / 3)
                setPageCount(pages)
            })
    }, [clickPage, perPageData])
    const { data: billingList, isLoading, refetch } = useQuery('billList', () => fetch('http://localhost:5000/billing-list').then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='container mb-3'>
            <table className="table table-bordered table-striped">
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
                            setDeleteBillInfo={setDeleteBillInfo}
                            setEditBillingInfo={setEditBillingInfo}
                        ></SingleBill>)
                    }
                </tbody>
            </table>
            {
                deleteBillInfo && <DeleteModal
                    deleteBillInfo={deleteBillInfo}
                    setDeleteBillInfo={setDeleteBillInfo}
                    refetch={refetch}
                ></DeleteModal>
            }
            {editBillingInfo && <EditBillingInfo
                editBillingInfo={editBillingInfo}
                setEditBillingInfo={setEditBillingInfo}
                refetch={refetch}
            ></EditBillingInfo>}

            {
                [...Array(pageCount).keys()]?.map(num => <button
                    className={clickPage === num ? 'btn me-2 btn-danger' : 'btn me-2 btn-primary'}
                    onClick={() => setClickPage(num)}
                >{num + 1}</button>)
            }
            {pageCount > 5 && <select onClick={e => setParPageData(e.target.value)} className='btn btn-outline-primary'>
                <option value="5">5</option>
                <option value="10" selected>10</option>
                <option value="15">15</option>
            </select>}
        </div>
    );
};

export default BillingPage;