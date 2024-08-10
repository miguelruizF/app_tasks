//Definiendo estilos en constantes

import { useState } from "react"

//Estilos si el usuario esta loggeado
const loggedStyle = {
    color: 'white'
}

//Estilos para usuario no loggeado
const unloggedStyle = {
    color: 'tomato',
    fontWeight: 'bold'
}

// const greetingUser = (<p>Hola, {props.name}</p>);
// const pleaseLogin = (<p>Please Login</p>);

export const GreetingStyled = ( props ) => {

    //Generamos un estado para el componente y asi controlar si el usuario esto o no loggeado
    const [logged, setLogged] = useState(false);

    return (
        <div style={ logged ? loggedStyle : unloggedStyle }>
            {/* { logged ? greetingUser : pleaseLogin } */}
            { logged ? (<p>Hola, {props.name}</p>) : (<p>Please Login</p>) }
            
            <button onClick={() => {
                console.log('Boton pulsado');
                setLogged(!logged);
            }}>
                { logged ? 'Logout' : 'Login' }
            </button>
        </div>
    )
}
