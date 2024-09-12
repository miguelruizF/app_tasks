// import React from 'react'

import { useLocation, useNavigate } from "react-router-dom";

export const AboutPage = () => {

    const location = useLocation();
    // console.log(location.pathname);
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
            <h1>About | FAQs Page</h1>
            <div>
                {/* Use to useHistory(deprecated) - React Route */}
                <button onClick={ () => navigate('/') }>Go to Home</button>
                <button onClick={ goBack }>Go to Back</button>
                <button onClick={ goForward }>Go Forward</button>
            </div>
        </div>
    )
}
