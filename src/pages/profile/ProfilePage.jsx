// import React from 'react'

import { useNavigate } from "react-router-dom"


export const ProfilePage = ({ user }) => {

    const navigate = useNavigate();

    const goTo = (path) => {
        navigate(path);
    }

    return (
        <>
            <h1>Your Profile</h1>
            <div>
                <button onClick={ () => goTo('/tasks') }>Your Tasks</button>
                <button onClick={ () => goTo('/') }>Go Home</button>
            </div>
        </>
    )
}
