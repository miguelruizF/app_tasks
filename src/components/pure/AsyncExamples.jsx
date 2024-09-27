// import React from 'react'

import { Button } from "react-bootstrap";

export const AsyncExamples = () => {

    async function generateNumber() {
        return 1;
    }
    
    function obtainNumber() {
        generateNumber()
            .then((response) => alert(`Response: ${response}`));
    }

    async function saveSessionStorage(key, value) {
        await sessionStorage.setItem(key, value); //Await: permite el control de las funciones
    }

    return (
        <>
            <Button onClick={obtainNumber}>Obtain Number</Button>
        </>
    )
}
