//Ejemplo de uso de hooks
// import React from 'react'

import { useState, useRef, useEffect } from "react";


export const Ejemplo2 = () => {
    /* Crear dos contadores distintos, cada uno en un estado diferente */
    const [contador1, setContador1] = useState(0);
    const [contador2, setContador2] = useState(0);

    /* Crear una referencia con useRef */
    const miRef = useRef();

    function incrementar1() {
        setContador1(contador1 + 1);
    }

    function incrementar2() {
        setContador2(contador2 + 1);
    }

    //Uso del useEffect
    /* Caso1: Ejecutar un snipet de codigo
        Cada que haya un cambio en el estado del componente 
        useEffect(() => {
            console.log("Cambio en el estado del componente");
            console.log("Mostrando referencia del elemento del DOM: ");
            console.log(miRef);
        })   
    */

    /* Caso 2: Ejecutar solo cuando cambie el contador 1 
    useEffect(() => {
        console.log("Cambio en el estado del contador 1");
        console.log("Mostrando referencia del elemento del DOM: ");
        console.log(miRef);
    }, [contador1]); 
*/
    /* Caso 2: Ejecutar solo cuando cambie el contador 1 o contador 2 */
    useEffect(() => {
        console.log("Cambio en el estado del contador 1");
        console.log("Mostrando referencia del elemento del DOM: ");
        console.log(miRef);
    }, [contador1, contador2]); 


    return (
        <>
            <h1>Ejemplo de useState(), useRef() y useEffect()</h1>
            <h2>Contador 1: {contador1}</h2>
            <h2>Contador 2: {contador2}</h2>
            {/* Elemento referenciado */}
            <h4 ref={miRef}>
                Ejemplo de elemento referenciado
            </h4>

            {/* Botones para cambiar los estados */}
            <div>
                <button onClick={incrementar1}>Incrementar contador 1</button>
                <button onClick={incrementar2}>Incrementar contador 2</button>
            </div>
        </>
    )
}
