import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Registration = () => {
    const [user, setUser] = useState([])
    const navigate = useNavigate()
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const onSubmit = (data) => {
        fetch('https://kinder-donair-83694.herokuapp.com/registration',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => {
            if(result.insertedId){
                toast.success('Registration is completed')
                reset()
                navigate('/home')
            }
            
        })
        console.log(data)

    }
    useEffect(()=>{
        fetch('https://kinder-donair-83694.herokuapp.com/user')
        .then(res => res.json())
        .then(data => setUser(data))
    },[])
    

    return (
        <div className='w-50 mx-auto border my-5 p-5'>
            <h3>Registration {user.length}</h3>
            <Form onSubmit={handleSubmit(onSubmit)} >
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control
                        {...register('name', {
                            required: {
                                value:true,
                                message: 'Name is required'
                            }
                        })}
                        type="text"
                        placeholder="Your Name"
                    />
                    {errors?.name?.type === 'required' && <Form.Label className='text-danger'>{errors?.name?.message}</Form.Label>}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
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
                        placeholder="Enter email" />
                    {errors?.email?.type === 'required' && <Form.Label className='text-danger'>{errors?.email?.message}</Form.Label>}
                    {errors?.email?.type === 'pattern' && <Form.Label className='text-danger'>{errors?.email?.message}</Form.Label>}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        {...register('password', {
                            required: {
                                value: true,
                                message: 'Password is required'
                            },
                            minLength: {
                                value: 6,
                                message: 'the password must be at least 6 characters long'
                            }
                        })}
                        type="password"
                        placeholder="Password" />
                    {errors?.password?.type === 'required' && <Form.Label className='text-danger'>{errors?.password?.message}</Form.Label>}
                    {errors?.password?.type === 'minLength' && <Form.Label className='text-danger'>{errors?.password?.message}</Form.Label>}
                </Form.Group>
                <Button variant="primary w-100 mb-1" type="submit">
                    Submit
                </Button>
                <Form.Text className="text-muted fs-6">
                Already have an account? <Link className='text-primary text-decoration-none' to='/login'>please Login</Link>
                </Form.Text>
            </Form>
        </div>
    );
};

export default Registration;