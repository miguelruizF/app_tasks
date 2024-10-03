// import React from 'react'

import { Button } from "react-bootstrap";

export const AsyncExamples = () => {

    async function generateNumber() {
        return 1;
    }

    async function generatePromiseNumber() {
        return Promise.resolve(2)//Devuelve un valor
    }
    
    function obtainNumber() {
        generateNumber()
            .then((response) => alert(`Response: ${response}`))
            .catch((error) => alert(`Something went wrong: ${error}`));
    }
        
    function obtainPromiseNumber() {
        generatePromiseNumber()
            .then((response) => alert(`Response: ${response}`))
            .catch((error) => alert(`Something went wrong: ${error}`));
    }

    async function saveSessionStorage(key, value) { //Guarda y devuelve el dato de la sesion
        sessionStorage.setItem(key, value); //Await: permite el control de las funciones

        return Promise.resolve(sessionStorage.getItem(key));
    }

    function showStorage() {
        saveSessionStorage('name', 'Miguel')
            .then((response) => {
                let value = response;
                alert(`Saved name: ${value}`);
            })
            .catch((error) => alert(`Something went wrong: ${error}`))
            .finally(() => console.log('SUCCESS: Name saved and retreived'))
    }

    async function obtainMessage() {
        let promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('Hello World');
            }, 2000);
        });

        let message = await promise;

        await alert(`Message receive: ${message}`);
    }

    const returnError = async () => {
        await Promise.reject(new Error('Ooops!!!'));
    }

    const consumeError = () => {
        returnError()
            .then((response) => alert(`Everything is OK: ${response}`))
            .catch((error) => alert(`Something went wrong: ${error}`))
            .finally(() => alert('Finally executed'))
    }

    const urlNotFound = async () => {
        try {
            let response = await fetch('https://invalidURL'); //FETCH: Sirve para hacer peticiones HTTP
            alert(`Response: ${JSON.stringify(response)}`)
        } catch (error) {
            alert(`Something went wrong with your URL: ${error} check your console`)
        }
    }

    const multiplePromise = async () => {
        let result = await Promise.all(
            [
                fetch('https://reqres.in/api/users'),
                fetch('https://reqres.in/api/users?page=2'),
            ]
        ).catch((error) => alert(`Something went wrong with your URL: ${error} check your console`))
    }

    return (
        <>
            <h1>Async, Promise Examples</h1>
            <Button onClick={obtainNumber}>Obtain Number</Button>
            <Button onClick={obtainPromiseNumber}>Obtain Promise Number</Button>
            <Button onClick={showStorage}>Save name and show</Button>
            <Button onClick={obtainMessage}>Receive message in 2 seconds</Button>
            <Button onClick={consumeError}>Obtain Error</Button>
            <Button onClick={urlNotFound}>Request to Unknown URL</Button>
            <Button onClick={multiplePromise}>Multiple Promises</Button>
        </>
    )
}
