// import React from 'react'

import { ErrorMessage, Field, Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from 'yup';

const loginSchema = Yup.object().shape(
    {
        email: Yup.string().email('Invalid email format').required('Email is required'),
        password: Yup.string().required('Password is required')
    }
);

export const LoginFormik = () => {

    const initialCredentials = {
        email: '',
        password: ''
    }

    const history = useNavigate();

    return (
        <>
            <h4>Login Formik</h4>
            <Formik
                /* Initial values that the form will take */
                initialValues = { 
                    initialCredentials
                }
                /* Yup validation schema */
                validationSchema={ loginSchema }
                /* onSubmit Event */
                onSubmit={async (values) => {
                    await new Promise( (response) => { setTimeout(response, 1000) } );
                    alert(JSON.stringify(values, null, 2));
                    //We save the data in the localStorage
                    localStorage.setItem('credentials', values)
                }}
            >
                {/* We obtain props from Formik */}
                {({ errors, touched, isSubmitting, handleChange, handleBlur }) => (
                    <>
                        <Form>
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
                            {/* Password errors */}
                            {                                   
                                errors.password && touched.password && (
                                        <ErrorMessage name="password" component={'div'}/>
                                )
                            }

                            <button type="submit">Login</button>
                            { isSubmitting ? ( <p>Login your credentials...</p> ) : null }
                        </Form>
                    </>
                )}
            </Formik>
        </>
    )
}
