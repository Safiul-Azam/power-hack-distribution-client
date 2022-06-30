import React from 'react';

const BillingPage = () => {
    return (
        <div className='container'>
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
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr> 
                </tbody>
            </table>
        </div>
    );
};

export default BillingPage;