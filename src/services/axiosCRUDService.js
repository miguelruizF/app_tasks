import Axios from "axios";

/**
 * Login method to reqRes endpoint
 * @param {string} email 
 * @param {string} password 
 */

export const login = (email, password) => {

    let body = {
        email: email,
        password: password
    }


    //returns the response with a Promise
    return Axios.post('https://reqres.in/api/login', body);
}

//TODO: Obtain all users
export const getAllUsers = () => {
    return Axios.get('https://reqres.in/api/users');
}

//TODO: Obtain all paged users
export const getAllPagedUsers = (page) => {
    return Axios.get(`https://reqres.in/api/users?page=${page}`);
}

//TODO: Obtain users by id
export const getUsersById = (id) => {
    return Axios.get(`https://reqres.in/api/users/${id}`);
}
//TODO: Create user
//TODO: Update user
//TODO: Delete  user
