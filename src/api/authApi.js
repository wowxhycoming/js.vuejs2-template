import fetch from '@/utils/fetch';

export function signIn(username, password) {
    const data = {
        username,
        password
    };

    return fetch({
        url: '/auth/signIn',
        method: 'post',
        data
    });
}