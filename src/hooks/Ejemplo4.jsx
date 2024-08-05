/* 
Ejemplo para entender las props.children
*/

// import React from 'react'

export const Ejemplo4 = (props) => {
    return (
        <>
            <h1>Ejemplo de Children Props</h1>
            <h2>Nombre: { props.nombre }</h2>

            { props.children }
        </>
    );
}
