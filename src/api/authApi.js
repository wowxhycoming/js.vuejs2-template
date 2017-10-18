import axios from 'axios';

let mock = 'http://localhost:4000';

let domain = mock;

export function signIn(username, password) {
    const data = {
        username,
        password
    };
    console.log('api signIn', data);

    return axios.post(domain + '/auth/signIn', data);
}