import { useNavigate } from "react-router-dom"

// import React from 'react'

export const HomePage = () => {

    // const location = useLocation();

    /* use useNavigate instead of useHistory (deprecated) */
    const history = useNavigate();

    const handleNavigate = (path, params= {}, state = null) => {
        const searchParams = new URLSearchParams(params).toString();
        history(path, {
            search: searchParams ?  `?${searchParams}` : '',
            state: state
        })
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
                <button onClick={ () => handleNavigate('/profile') }>Go to Profile</button>
                <button onClick={ () => handleNavigate('/online-state', { online: 'true' }, { online: true }) }>Go to Page with State / Query Params</button>
            </div>
        </div>
    )
}
