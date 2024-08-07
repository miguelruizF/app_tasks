/* 
Ejemplo de uso de WillUnmount para componente clase y ejemplo de uso de hooks para componente funcional
*/

import { Component, useEffect } from 'react';

export class WillUnmount extends Component {
    WillUnmount(){
        console.log('Comportamiento antes de que el componente desaparezca');
    }

    render() {
        return (
            <div>
                <h1>WillUnmount</h1>
            </div>
        );
    }
}

export const WillUnmountHook = () => {

    useEffect(() => {
        return () => {
            console.log('Comportamiento antes de que el componente desaparezca');
        }
    }, [])
    
    return (
        <div>
            <h1>WillUnmount</h1>
        </div>
    )
}


