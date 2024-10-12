import { useEffect, useState } from 'react';
import getRandomUser from '../../services/axiosService';

export const AxiosExample = () => {

    const [user, setUser] = useState(null);

    useEffect(() => {
        obtainUser();
    }, []);
    
    const obtainUser = () => {
        getRandomUser()
            .then((response) => {
                if(response.status === 200){
                    setUser(response.data.results[0]);
                }
                // console.log(response.data.results[0])
            })
            .catch((error) => alert(`Something went wrong: ${error}`))
    }

    return (
        <>
            <h1>Axios Example</h1>
            {
                user !== null ? (
                <div>
                    <h2>{ user.name.title } { user.name.first } { user.name.last }</h2>
                    <h3>{ user.email }</h3>
                    <img src={user.picture.large} alt="avatar" />
                </div>) : null
            }
            <div>
                <p>Generate a new user</p>
                <button onClick={ obtainUser }>Random User</button>
            </div>
        </>
    )
}
