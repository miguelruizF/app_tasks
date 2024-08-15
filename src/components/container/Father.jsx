// import React from 'react'

import { useState } from "react";
import { Child } from "../pure/Child"

export const Father = () => {

    const [name, setName] = useState('Mike');

    function showMessage(text) {
        alert(`Message receive: ${text}`);
    }

    function updateName(newName) {
        setName( newName);
    }

    return (
        <div style={ { background: 'tomato', padding: '20px' } }>
            {/* <Child name={ 'Martin' } send={ showMessage }/> */}
            <Child name={ name } send={ showMessage } update={ updateName }/>
        </div>
    );
}
