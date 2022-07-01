import React from 'react';
import Button from 'react-bootstrap/Button'


const singleBill = ({ singleBill, setDeleteBillInfo,setEditBillingInfo }) => {
    const { _id, firstName, lastName, email, paidAmount, phone } = singleBill
    return (
        <tr>
            <td>{_id}</td>
            <td>{firstName} {lastName}</td>
            <td>{email}</td>
            <td>{paidAmount}</td>
            <td>{phone}</td>
            <td>
                <Button variant="primary me-3" onClick={()=>setEditBillingInfo(singleBill)}>
                    E
                </Button>
                <Button variant="danger" onClick={()=>setDeleteBillInfo(singleBill)}>
                    X
                </Button>
            </td>
        </tr>
    );
};

export default singleBill;