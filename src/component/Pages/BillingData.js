import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import AddBillModal from './AddBillModal';

const BillingData = () => {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true)
    return (
        <div className='mt-5 mb-3 container'>
            <nav class="navbar navbar-light bg-secondary ">
                <div class="container-fluid d-flex">
                    <div>
                        <div class="input-group">
                            <span className='fs-5 fw-bold text-white me-4'>Billing</span>
                            <input type="text" class="form-control px   -5" placeholder="Search" aria-label="Example text with button addon" aria-describedby="button-addon1"></input>
                        </div>
                    </div>
                    <Button variant="success" onClick={handleShow}>
                        Add New Bill
                    </Button>

                </div>
                {
                    show && <AddBillModal
                    show={show}
                    setShow={setShow}
                    ></AddBillModal>
                }
            </nav>
        </div>
    );
};

export default BillingData;