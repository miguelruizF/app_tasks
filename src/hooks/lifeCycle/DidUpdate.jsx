/* 
Ejemplo de uso de componentDidUpdate en componente de clase y de hook en componente funcional
*/

import { Component, useEffect } from 'react';

export class DidUpdate extends Component {
    componentDidUpdate(){
        console.log('Comportamiento cuando el componente recibe nuevos props o cambio en su estado privado');
    }
    render() {
        return (
            <div>
                <h1>DidUpdate</h1>
            </div>
        );
    }
}

// import React from 'react'

export const DidUpdateHook = () => {
    useEffect(() => {
        console.log('Comportamiento cuando el componente recibe nuevos props o cambio en su estado privado');
    }); //Se ejecutara todas las veces (cada vez que haya un cambio en el estado, cambio en los props)
    

    return (
        <div>
            <h1>DidUpdate</h1>
        </div>
    )
}
