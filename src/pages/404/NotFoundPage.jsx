import { useNavigate } from "react-router-dom"

// import React from 'react'

export const NotFoundPage = () => {

    const history = useNavigate();

    const navigate = (path) => {
        history(path);
    }

    return (
        <div>
            <h1>404 Page Not Found</h1>
            <div>
            <button onClick={ () => navigate('/') }>Go Home</button>
            </div>
        </div>
    )
}
