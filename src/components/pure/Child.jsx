// import React from 'react'

export const Child = ( {name} ) => {

    function pressButton(){
        alert( `Default Text` );
    }

    function pressButtonParams(text) {
        alert( `Text: ${text}` );
    }

    return (
        <div>
            <p onMouseOver={ () => console.log('On Mouse Over') }> Child Component </p>
            <button onClick={ () => console.log('Boton 1 pulsado') }>
                Boton 1
            </button>
            <button onClick={ pressButton }>
                Boton 2
            </button>
            <button onClick={ () => pressButtonParams('Hello') }>
                Boton 3
            </button>
        </div>
    )
}
