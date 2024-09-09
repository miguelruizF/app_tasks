// import React from 'react'
import { User } from "../../../models/user.class";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { ROLES } from "../../../models/roles.enum";

export const RegisterFormik = () => {
    let user = new User();

    //Initial values: All fields that a user has
    const initialValues = {
        username: '',
        email: '',
        password: '',
        confirm: '',
        role: ROLES.USER
    }

    //Create schema validation
    const registerSchema = Yup.object().shape(
        //Define default fields: Validate object
        {
            username: Yup.string().min(6, 'Name must be to short').max(12, 'Username too long').required('Username is required'),
            email: Yup.string().email('Invalid email format').required('Email is required'),
            role: Yup.string().oneOf([ROLES.USER, ROLES.ADMIN], 'You must select a Role: User / Admin').required('Role is required'),
            password: Yup.string().min(8, 'Password too short').required('Password is required'),
            /* confirm: Yup.string().when('password', {
                is: true,
                then: () => Yup.string().oneOf(
                    [
                        Yup.ref('password'), null
                    ], 'Password must match!'
                ), 
            }).required('You must confirm the password') */
            confirm: Yup.string().required().oneOf([Yup.ref('password'), null], 'Passwords must match'),
        }
    )
    
    const submit = (values) => {
        alert('Register User');
    }

    return (
        <>
            <h4>Register Formik</h4>
            <Formik
                initialValues = { initialValues }
                //Yup validation schema
                validationSchema = { registerSchema }
                /* onSubmit Event */
                onSubmit={async (values) => {
                    await new Promise( (response) => { setTimeout(response, 1000) } );
                    alert(JSON.stringify(values, null, 2));
                }}
            >
                {({ values, errors, touched, isSubmitting, handleChange, handleBlur }) => (
                    <>
                        <Form>
                            <label htmlFor="username">Username</label>
                            <Field id="username" type="text" name="username" placeholder="Your username" />
                            {/* Username errors */}
                            {
                                errors.username && touched.username && (
                                        <ErrorMessage name="username" component={'div'}/>
                                )
                            }

                            <label htmlFor="email">Email</label>
                            <Field id="email" type="email" name="email" placeholder="example@example.com" />
                            {/* Email errors */}
                            {
                                errors.email && touched.email && (
                                        <ErrorMessage name="email" component={'div'}/>
                                )
                            }

                            <label htmlFor="password">Password</label>
                                <Field
                                    id="password"
                                    name="password"
                                    placeholder="Enter your password"
                                    type="password"
                                />
                            {/* password errors */}
                            {
                                errors.password && touched.password && (
                                        <ErrorMessage name="password" component={'div'}/>
                                )
                            }

                            <label htmlFor="confirm">Confirm Password</label>
                                <Field
                                    id="confirm"
                                    name="confirm"
                                    placeholder="Confirm password"
                                    type="password"
                                />
                            {/* Confirm password errors */}
                            {
                                errors.confirm && touched.confirm && (
                                        <ErrorMessage name="confirm" component={'div'}/>
                                )
                            }
                            
                            <button type="submit">Register Account</button>
                            { isSubmitting ? ( <p>Sending your credentials...</p> ) : null }
                        </Form>
                    </>    
                )}
            </Formik>
        </>
    )
}
