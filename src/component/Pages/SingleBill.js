import React from 'react';
import AddBillModal from './AddBillModal';

const singleBill = ({ singleBill }) => {
    const {_id, fullName, email, paidAmount, phone } = singleBill
    return (
        <tr>
            <td>{_id}</td>
            <td>{fullName}</td>
            <td>{email}</td>
            <td>{paidAmount}</td>
            <td>{phone}</td>
            <td>
                <button className='btn-secondary btn me-1'>E</button>
                <button className='btn-secondary btn me-1'>X</button>
                <AddBillModal></AddBillModal>
            </td>
        </tr>
    );
};

export default singleBill;