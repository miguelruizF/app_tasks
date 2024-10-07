// import React from 'react'
import { useEffect, useState } from "react"
import { getAllUsers } from "../../services/fetchService"

export const FetchExample = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        obtainUsers();
    }, []);
    
    const obtainUsers = () => {
        getAllUsers()
            .then((response) => {
                /* if(response.status === 200 && response.ok){
                    response.json().then((body) => {
                        console.log('All users', body.data);
                        setUsers(body.data);
                    })
                    .catch((error) => console.log(`Something went wrong: ${error}`))
                } */
                    console.log('All users', response.data);
                    setUsers(response.data);
            })
            .catch((error) => alert(`Error while retreiving the users: ${error}`))
            .finally(() => {
                console.log('Ended obtaining users');
                console.table(users);
            })
    }
    
    return (
        <>
            <h2>Users: </h2>
            { users.map((user, index) =>
                (<p key={ index }>
                    { user.first_name } { user.last_name }
                </p>)
            ) }
        </>
    )
}
