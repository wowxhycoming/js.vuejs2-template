import axios from 'axios';

let mock = 'http://localhost:4000';

let domain = mock;

export function signin(username, password) {
    const data = {
        username,
        password
    };
    console.log('api signin', data);

    return axios.post(domain + '/auth/signin', data);
}

export function getMenuList(token) {
    const data = {token};
    console.log('api getMenu', data);

    return axios.post(domain + '/auth/getMenuList', data);
}

export function signOut(token) {
    const data = {token};
    console.log('api signOut', data);

    return axios.post(domain + '/auth/signOut', data);
}