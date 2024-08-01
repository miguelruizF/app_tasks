//useState
// import React from 'react'
import { useState } from 'react';

export const Ejempĺo1 = () => {

    //Valor inicial para un contador
    const valorInicial = 0;

    //Valor inicial para una persona
    const personaInicial = {
        name: 'Martin',
        email: 'martin@email.com'
    }

    //valorInicial y personaInicial deberan ser parte del componente y asi poder gestionar su cambio
    const [contador, setContador] = useState(valorInicial);
    const [persona, setPersona] = useState(personaInicial);

    /* Funcion para actualizar el estado de contador */

    function incrementarContador() {
        setContador(contador + 1);
    }

    /* Funcion para actualizar el estado de persona */
    function actualizarPersona() {
        setPersona({
            name: "Juan",
            email: "juan@email.com"
        });
    }

    return (
        <>
        <h1>Ejemplo de useState</h1>
        <h2>Contador: {contador}</h2>
        <h2>Datos de la persona</h2>
        <h3>Nombre: {persona.name}</h3> 
        <h3>Email: {persona.email}</h3> 
        {/* Bloque de botones para actualizar los estados */}
        <div>
            <button onClick={incrementarContador}>Incrementar contador</button>
            <button onClick={actualizarPersona}>Cambiar persona</button>
        </div>
        </>
    )
}
