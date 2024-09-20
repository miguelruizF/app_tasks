import { useLocation } from "react-router-dom"


export const PropsPage = () => {

    const location = useLocation();

    const isOnline = location.state?.online ?? false;

    console.log('Location state: ',location.state?.online); //State sent
    console.log('Query params: ', location.search); //Query params sent
    

    return (
        <div>
            <h1>State: { isOnline ? 'The user is online' : 'The user is offline'}</h1>
        </div>
    )
}
