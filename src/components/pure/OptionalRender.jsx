// import React from 'react'

import { useState } from "react"
import { Button } from "react-bootstrap";


//Login - Logout buttons
const LoginButton = ( { loginAction } ) => {
    return (
        <Button onClick={ loginAction }> Login </Button>
    )
}

const LogoutButton = ( { logoutAction } ) => {
    return (
        <Button onClick={ logoutAction }> Logout </Button>
    )
}

export const OptionalRender = () => {

    const [access, setAccess] = useState( true );

    // const updateAccess = () => {
    //     setAccess(!access); //Se actualiza de true a false y viceversa
    // }

    const loginAction = () => {
        setAccess(true);
    }

    const logoutAction = () => {
        setAccess(false);
    }

    let optionalButton;

    // if(access) {
    //     optionalButton = <button onClick={ updateAccess }> Logout </button>
    // } else {
    //     optionalButton = <button onClick={ updateAccess }> Login </button>
    // }
    if(access) {
        optionalButton = <LogoutButton logoutAction={ logoutAction }></LogoutButton>
    } else {
        optionalButton = <LoginButton loginAction={ loginAction }></LoginButton>
    }

    return (
        <div>
            { optionalButton }
        </div>
    )
}
