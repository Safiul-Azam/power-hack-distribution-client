import React from 'react';
import Button from 'react-bootstrap/Button'


const singleBill = ({ singleBill,setShow }) => {
    const { _id, firstName, lastName, email, paidAmount, phone } = singleBill
    return (
        <tr>
            <td>{_id}</td>
            <td>{firstName} {lastName}</td>
            <td>{email}</td>
            <td>{paidAmount}</td>
            <td>{phone}</td>
            <td>
                <Button variant="primary me-3">
                    E
                </Button>
                <Button variant="danger" onClick={()=>setShow(singleBill)}>
                    X
                </Button>
            </td>
        </tr>
    );
};

export default singleBill;