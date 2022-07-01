import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddBillModal = ({ show, setShow }) => {
    const handleClose = () => setShow(false);
    //React Form, onSubmit
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const onSubmit = (data) => {
        fetch('http://localhost:5000/add-billing',{
            method:"POST",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => {
            if(result.insertedId){
                toast.success('Add a new bill successfully.')
            }
            reset()
        })
        console.log(data)
    };
    return (
        <>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                className='p-5'
            >
                <Modal.Header closeButton>
                    <Modal.Title>Add New Bill</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control
                                {...register('firstName', {
                                    required: {
                                        value: true,
                                        message: 'first name is required'
                                    }
                                })}
                                type="text"
                                placeholder="First Name"
                            />
                            {errors?.firstName?.type === 'required' && <Form.Label className='text-danger'>{errors?.firstName?.message}</Form.Label>}
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control
                                {...register('lastName', {
                                    required: {
                                        value: true,
                                        message: 'Last name is required'
                                    }
                                })}
                                type="text"
                                placeholder="Last Name"
                            />
                            {errors?.lastName?.type === 'required' && <Form.Label className='text-danger'>{errors?.lastName?.message}</Form.Label>}
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                {...register('email', {
                                    required: {
                                        value: true,
                                        message: 'A valid email is required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Provide a valid email'
                                    }
                                })}
                                type="email"
                                placeholder="Your Email"
                            />
                            {errors?.email?.type === 'required' && <Form.Label className='text-danger'>{errors?.email?.message}</Form.Label>}
                            {errors?.email?.type === 'pattern' && <Form.Label className='text-danger'>{errors?.email?.message}</Form.Label>}
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control {...register('phone', {
                                required: {
                                    value: true,
                                    message: 'Phone number is required'
                                },
                                minLength: {
                                    value: 11,
                                    message:'please! provide a valid phone number'
                                },
                                maxLength: {
                                    value: 11,
                                    message:'please! provide a valid phone number'
                                }
                            })}
                                type="number"
                                placeholder="Your Phone number" />
                            {errors?.phone?.type === 'required' && <Form.Label className='text-danger'>{errors?.phone?.message}</Form.Label>}
                            {errors?.phone?.type === 'minLength' && <Form.Label className='text-danger'>{errors?.phone?.message}</Form.Label>}
                            {errors?.phone?.type === 'maxLength' && <Form.Label className='text-danger'>{errors?.phone?.message}</Form.Label>}
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                            <Form.Label>Paid Amount</Form.Label>
                            <Form.Control {...register('paidAmount', {
                                required: {
                                    value: true,
                                    message: 'please provide your amount'
                                }
                            })}
                                type="number"
                                placeholder="Your Amount" />
                                {errors?.amount?.type === 'required' && <Form.Label className='text-danger'>{errors?.amount?.message}</Form.Label>}
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>

                </Modal.Body>
            </Modal>
        </>
    );
};

export default AddBillModal;