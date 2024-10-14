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

/* TODO:
- Obtain all users
- Obtain users by id
- Create user
- Update user
- Delete  user
*/