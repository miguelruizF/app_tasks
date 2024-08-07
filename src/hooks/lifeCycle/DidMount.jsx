/* 
Ejemplo del uso del metodo de ciclo de vida en componente clase y el hook de ciclo de vida en componente funcional
*/
import { Component, useEffect } from 'react'

export class DidMount extends Component {
    componentDidMount(){
        console.log('Comportamiento antes de que el componente sea añadido al DOM (renderice)');
    }
    render() {
        return (
        <div>
            <h1>DidMount</h1>
        </div>
        )
    }
}

// import React from 'react'

export const DidMountHook = () => {
useEffect(() => {
        console.log('Comportamiento antes de que el componente sea añadido al DOM (renderice)');
    }, []) //Cuando se ponen los corchetes significa que se ejecutar una vez, si se elimina, se ejecutar todas las veces


    return (
        <div>
            <h1>DidMount</h1>
        </div>
    )
}
