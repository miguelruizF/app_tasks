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
            password: Yup.string().min(8, 'Password too short').required('Password is required'),
            confirm: Yup.string().when('password', {
                is: value => (value && value.lenght > 0 ? true : false),
                then: Yup.string().oneOf(
                    [
                        Yup.ref('password'),
                        'Password must match!'
                    ]
                ) 
            }).required('You must confirm the password')
        }
    )
    
    const submit = (values) => {
        alert('Register User');
    }

    return (
        <>

        </>
    )
}
