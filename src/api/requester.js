import { BASE_URL } from './../api/constants';

function getToken() {
    return 'Bearer ' + sessionStorage.token;
}

function get(endpoint) {
    return fetch(BASE_URL + endpoint, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': getToken()
        }
    })
        .then(res => res.json())
        .catch(err => console.log(err));
}

function post(endpoint, data) {
    return fetch(BASE_URL + endpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': getToken()
        },
        body: JSON.stringify(data)
    })
        .then(res => res.json())
        .catch(err => console.log(err));
}
function put(endpoint, data) {
    return fetch(BASE_URL + endpoint, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': getToken()
        },
        body: JSON.stringify(data)
    })
        .then(res => res.json())
        .catch(err => console.log(err));
}

function remove (endpoint) {
    return fetch(BASE_URL + endpoint, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': getToken()
        }
    })
        .then(res => res.json())
        .catch(err => console.log(err));
}

let requester = {
    get,
    post,
    put,
    remove
};

export default requester;