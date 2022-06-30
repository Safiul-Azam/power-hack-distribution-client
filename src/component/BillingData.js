import React from 'react';
import { Link } from "react-router-dom";

const BillingData = () => {
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

                    <form >
                        <button class="btn btn-success" type="submit">Add new Bill</button>
                    </form>
                </div>
            </nav>
        </div>
    );
};

export default BillingData;