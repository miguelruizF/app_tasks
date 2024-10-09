// import React from 'react'
import { useEffect, useState } from "react"
import { getAllPagedUsers, getAllUsers, getUsersDetails, login } from "../../services/fetchService"

export const FetchExample = () => {

    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState();
    const [totalUsers, setTotalUsers] = useState(12);
    const [usersPerPage, setUsersPerPage] = useState(6);
    const [pages, setPages] = useState(2);

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
                    setPages(response.total_pages);
                    setUsersPerPage(response.per_page);
                    setTotalUsers(response.total);
            })
            .catch((error) => alert(`Error while retreiving the users: ${error}`))
            .finally(() => {
                console.log('Ended obtaining users');
                console.table(users);
            })
    }

    const obtainPageUsers = (page) => {
        getAllPagedUsers(page)
            .then((response) => {
                console.log('All Page Users', response.data);
                setUsers(response.data);
                setPages(response.total_pages);
                setUsersPerPage(response.per_page);
                setTotalUsers(response.total);
            })
            .catch((error) => alert(`Error while retreiving the users: ${error}`))
            .finally(() => {
                console.log('Ended obtaining users');
                console.table(users);
            })
    }

    const obtainUserDetails = (id) => {
        getUsersDetails(id)
            .then((response) => {
                console.log('All Page Users', response.data);
                setSelectedUser(response.data);
            })
            .catch((error) => alert(`Error while retreiving the user: ${error}`))
            .finally(() => {
                console.log('Ended obtaining user');
                console.table(selectedUser);
            })
    }

    const authUser = () => {
        login('eve.holt@reqres.in', 'cityslicka')
            .then((response) => {
                console.log('Token', response.token);
                sessionStorage.setItem('Token', response.token);
            })
            .catch((error) => alert(`Error while login user: ${error}`))
            .finally(() => {
                console.log('Ended login user. Navigate to home...');
            })
    }
    
    return (
        <>

            {/* Button to simulate login */}
            <button onClick={ authUser }>Auth User</button>

            <h2>Users: </h2>
            { users.map((user, index) =>
                (<p key={ index } onClick={() => obtainUserDetails(user.id)}>
                    { user.first_name } { user.last_name }
                </p>)
            ) }
            <p>Showing {usersPerPage} users of {totalUsers} in total.</p>
            <button onClick={() => obtainPageUsers(1)}>1</button>
            <button onClick={() => obtainPageUsers(2)}>2</button>

            <div>
                {
                    selectedUser != null ? (<div>
                        <h3>User Details</h3>
                        <p>Name: { selectedUser.first_name }</p>
                        <p>Last Name: { selectedUser.last_name }</p>
                        <p>Email: { selectedUser.email }</p>
                        <img src={selectedUser.avatar} style={ {height: '150px', width:'150px'} } alt="Avatar" />
                    </div>) : (<h6>Please click on a User to see its details</h6>)
                }
            </div>
        </>
    )
}
