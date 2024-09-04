// import React from 'react'

import { Field, Form, Formik } from "formik"

export const LoginFormik = () => {

    const initialCredentials = {
        email: '',
        password: ''
    }

    return (
        <>
            <h4>Login Formik</h4>
            <Formik
                initialValues = { 
                    initialCredentials
                }
                onSubmit={async (values) => {
                    await new Promise( (response) => { setTimeout(response, 500) } );
                    alert(JSON.stringify(values, null, 2));
                }}
            >

                <Form>
                    <label htmlFor="email">First Name</label>
                    <Field id="email" type="email" name="email" placeholder="example@example.com" />

                    <label htmlFor="email">Email</label>
                    <Field
                        id="password"
                        name="password"
                        placeholder="Enter your password"
                        type="password"
                    />
                    <button type="submit">Login</button>
                </Form>

            </Formik>

        </>
    )
}
