// import React from 'react'
import { ErrorMessage, Field, Form, Formik } from "formik";
import { getAllPagedUsers, getAllUsers, getUsersById, login } from "../../services/axiosCRUDService";
import * as Yup from 'yup';

const loginSchema = Yup.object().shape(
    {
        email: Yup.string().email('Invalid email format').required('Email is required'),
        password: Yup.string().required('Password is required')
    }
);

export const AxiosCRUDExample = () => {

    const initialCredentials = {
        email: '',
        password: ''
    }

    const authUser = (values) => {
        login(values.email, values.password)
            .then((response) => {
                if(response.data.token){
                    alert(JSON.stringify(response.data.token));
                    sessionStorage.setItem('token', response.data.token);
                }else{
                    sessionStorage.removeItem('token');
                    throw new Error('Login failure');
                }   
            })
            .catch((error) => {
                alert(`Something went wrong: ${error}`);
                sessionStorage.removeItem('token');
            }
            )
            .finally(() => console.log('Login done'))
    }

    //CRUD Example
    const obtainAllUsers = () => {
        getAllUsers()
            .then((response) => {
                alert(JSON.stringify(response.data.data));
            })
            .catch((error) => alert(`Something went wrong: ${error}`))
    }

    const obtainAllPagedUsers = (page) => {
        getAllPagedUsers(page)
            .then((response) => {
                alert(JSON.stringify(response.data.data));
            })
            .catch((error) => alert(`Something went wrong: ${error}`))
    }

    const obtainUsersById = (id) => {
        getUsersById(id)
            .then((response) => {
                alert(JSON.stringify(response.data.data));
            })
            .catch((error) => alert(`Something went wrong: ${error}`))
    }

    return (
        <>
            {/* <button onClick={ authUser }>Login</button> */}
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
                    /* await new Promise( (response) => { setTimeout(response, 1000) } );
                    alert(JSON.stringify(values, null, 2));
                    //We save the data in the localStorage
                    await localStorage.setItem('credentials', values);
                    history('/profile'); */
                    authUser(values)
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

            {/* Example buttons to test API responses */}
            <div>   
                <button onClick={obtainAllUsers}>Get All Users with Axios</button>
                <button onClick={ () => obtainAllPagedUsers(1) }>Get All page 1 with Axios</button>
                <button onClick={ () => obtainUsersById(1) }>Get Users By ID with Axios</button>
            </div>
        </>
    )   
}
