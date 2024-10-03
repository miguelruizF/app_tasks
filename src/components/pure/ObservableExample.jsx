import { useState } from "react";
import { getNumbers } from "../../services/observableService.js"

// import React from 'react'
export const ObservableExample = () => {

    const [number, setNumber] = useState(0);

    const obtainNumbers = () => {
        console.log('Subscription to Observable');
        getNumbers.subscribe(
            {
                next(newNumber){
                    console.log('New Number: ', newNumber);
                    setNumber(newNumber);
                }, 
                error(error){
                    alert(`Something went wrong : ${error}`);
                    console.log('Error in observable');
                },
                complete(){
                    alert(`Finished with: ${number}`);
                    console.log('Done with the observable');
                }
            }
        );
        // console.log('Finished receiving numbers');
    }

    return (
        <div>
            <h2>Number: {number}</h2>
            <button onClick={obtainNumbers}>Obtain new numbers</button>
        </div>
    )
}
