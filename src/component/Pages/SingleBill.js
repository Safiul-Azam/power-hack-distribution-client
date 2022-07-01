import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
                <Button variant="warning me-3 p-1" onClick={()=>setEditBillingInfo(singleBill)}>
                <FontAwesomeIcon icon={faPenToSquare} />
                </Button>
                <Button variant="danger p-1" onClick={()=>setDeleteBillInfo(singleBill)}>
                <FontAwesomeIcon icon={faTrash} />
                </Button>
            </td>
        </tr>
    );
};

export default singleBill;