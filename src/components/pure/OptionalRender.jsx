// import React from 'react'

import { useState } from "react"
import { Button } from "react-bootstrap";

let red = 0;
let green = 200;
let blue = 150;

//Estilos si el usuario esta loggeado
const loggedStyle = {
    color: 'white',
    backgroundColor: `rgb(${red}, ${green}, ${blue})`
}

//Estilos para usuario no loggeado
const unloggedStyle = {
    backgroundColor: 'tomato',
    color: 'white',
    fontWeight: 'bold'
}

//Login - Logout buttons
const LoginButton = ( { loginAction, propStyle } ) => {
    return (
        <Button style={ propStyle } onClick={ loginAction }> Login </Button>
    )
}

const LogoutButton = ( { logoutAction, propStyle } ) => {
    return (
        <Button style={ propStyle } onClick={ logoutAction }> Logout </Button>
    )
}


// ? (Expresion true) && expresion => se renderiza la expresion
// ? (Expresion false) && expresion => no se renderiza la expresion

export const OptionalRender = () => {

    const [access, setAccess] = useState( false );
    const [message, setMessage] = useState(0);

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
        optionalButton = <LogoutButton propStyle={ unloggedStyle } logoutAction={ logoutAction }></LogoutButton>
    } else {
        optionalButton = <LoginButton propStyle={ loggedStyle } loginAction={ loginAction }></LoginButton>
    }

    //Unread messages
    let addMessages = () => {
        setMessage(message + 1);
    }

    return (
        <div>
            {/* Optional Button */}
            { optionalButton }

            {/* N Messages unread */}
            {/*  { message > 0 && message === 1 && <p>You have one new message...</p> }
            { message > 1 && <p>You have { message } new messages...</p> }
            { message == 0 && <p>There are no new messages</p> } */}
            
            {/* Ternary Operator */}
            {
                access ? ( 
                <div>
                    { message > 0 ? <p>You have { message } new message{ message > 1 ? 's' : null }...</p> : <p>There are no new messages</p> }
                    <Button onClick={ addMessages }> {message === 0 ? 'Add your first message' : 'Add New Message' }</Button>
                </div> ) : null
            }
        </div>
    )
}
