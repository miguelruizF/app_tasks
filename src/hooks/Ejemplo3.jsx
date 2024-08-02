/* Ejemplo hooks
- useState()
- useContext()
*/

// import React from 'react'
import React, { useState, useContext } from "react";

const miContexto = React.createContext(null);
/* Componente 1 Dispone de un contexto que va a tener un valor que recibe desde el padre */
const Componente1 = () => {
    /* Inicializamos un estado en null que va a rellenarse con los datos del padre */
    const state = useContext(miContexto);
    return (
        <>
            <h2>El token es: {state.token}</h2>
            {/* Llamamos al componente 2 */}
            <Componente2/>
        </>
    )
}

const Componente2 = () => {

    const state = useContext(miContexto);

    return (
        <>
            <h2>
                La sesion es: {state.sesion}
            </h2>
        </>
    )
}

export const MiComponenteConContexto = () => {

    const estadoInicial = {
        token: 1234567,
        sesion: 1
    }

    //Crear estado del componente
    const [sessionData, setSessionData] = useState(estadoInicial);

    function actualizarSession() {
        setSessionData({
            token: "DSDF123546",
            sesion: sessionData.sesion + 1
        })
    }

    return (
        <>
            <miContexto.Provider value={sessionData}>
                {/* Todo lo que este dentro puede leer los datos de sessionData */}
                <h1>Ejemplo de useState y useContext</h1>
                <Componente1/>
                <button onClick={actualizarSession}>Actualiza el componente 1</button>
            </miContexto.Provider>
        </>
    )
}


