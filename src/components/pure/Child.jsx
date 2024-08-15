// import React from 'react'

import { useRef } from "react";
import { Button, Form, FormControl, FormGroup, FormText } from "react-bootstrap";

export const Child = ( { name, send, update } ) => {

    function pressButton(){
        const text = messageRef.current.value //Acceder al valor del elemento
        alert( `Text in input: ${text}` );
    }

    function pressButtonParams(text) {
        alert( `Text: ${text}` );
    }

    //El useRef permite acceder a las referencias de un elemento
    const messageRef = useRef('');
    const nameRef = useRef('');

    function submitName(e) {
        e.preventDefault(); //Evitar la recarga
        update( nameRef.current.value );
    }

    return (
        <div style={ { background: 'green' } }>
            <p onMouseOver={ () => console.log('On Mouse Over') }> Hello { name } </p>
            <button onClick={ () => console.log('Boton 1 pulsado') }>
                Boton 1
            </button>
            <button onClick={ pressButton }>
                Boton 2
            </button>
            <button onClick={ () => pressButtonParams('Hello') }>
                Boton 3
            </button>
            <input type="text" 
            placeholder="Send a text to your father" 
            onFocus={ () => console.log('Input Focused') } 
            onChange={ (e) => console.log('Input Change:' , e.target.value) }
            onCopy={ () => console.log('Copied text from input') }
            ref={ messageRef } //Accedemos a la referencia del input
            />
            <button onClick={ () => send( messageRef.current.value ) }>Send Message</button>

            <div style={ { margin: '20px', padding: "10px" } }>
                {/* <form action="">
                    <input type="text" placeholder="New Name" />
                    <button type="submit">Update Name</button>
                </form> */}
                <Form onSubmit={ submitName }>
                    <FormGroup>
                        <FormControl type="text" placeholder="New Name" ref={ nameRef }></FormControl>
                        <Button type="submit" style={ { marginTop: '10px' } }>Update Name</Button>
                    </FormGroup>
                </Form>
            </div>
        </div>
    )
}
