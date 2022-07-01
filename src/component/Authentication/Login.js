import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const onSubmit = (data) => {
       
    }


    return (
        <div className='w-50 mx-auto border my-5 p-5'>
            <h2 className=''>Login</h2>
            <Form onSubmit={handleSubmit(onSubmit)} >
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
                New to Power Hack? <Link className='text-primary text-decoration-none' to='/signup'>Create new account</Link>
                </Form.Text>
            </Form>
        </div>
    );
};

export default Login;