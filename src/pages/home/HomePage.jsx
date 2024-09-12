import { useLocation, useNavigate } from "react-router-dom"

// import React from 'react'

export const HomePage = () => {

    const location = useLocation();

    /* use useNavigate instead of useHistory (deprecated) */
    const history = useNavigate();

    const navigate = (path) => {
        history(path)
    }

    const goBack = () => {
        history(-1);
    }

    const goForward = () => {
        history(1);
    }

    return (
        <div>
            <h1>Home Page</h1>
            <div>
                <button onClick={ () => navigate('/profile') }>Go to Profile</button>
            </div>
        </div>
    )
}
