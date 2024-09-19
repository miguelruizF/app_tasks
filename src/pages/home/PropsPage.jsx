import { useLocation } from "react-router-dom"


export const PropsPage = () => {

    const location = useLocation();

    console.log(location.state.online); //State sent
    console.log(location.search); //Query params sent
    

    return (
        <div>
            <h1>State: { location.state.online ? 'The user is online' : 'The user is offline'}</h1>
        </div>
    )
}
