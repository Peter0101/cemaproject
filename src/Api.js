import axios from 'axios'

const uri = 'http://localhost:3000'

function register({credencials}, done) {
    if(!credencials) {
        done(null, {error: 'Missing user data'})
    }

    const data = {
        email: credencials.email,
        password: credencials.password,
        username: credencials.username || null,
        age: credencials.age || null,
        level: credencials.level || null
    }

    axios.post(`${uri}/auth/register`, data).then((response) => {
        done(true, null)
    }).catch((err) => {
        done(null, err)
    })
}

function login({credencials}, done) {
    if(!credentials) {
        done(null, {error: 'Missing user data'})
    }

    const data = {
        email: credencials.email,
        passowrd: credencials.password
    }

    axios.post(`${uri}/auth/login`, data).then((response) => {
        sessionStorage.setItem('jwt', response.token)
        done(true, null)
    }).catch((err) => {
        done(null, err)
    })
}

function get(getUri, done) {
    if(!getUri) {
        done(null, {error: 'Missing URI'})
    }

    const headers = {
        'Authorization': localStorage.getItem('jwt')
    }

    axios.get(`${uri}${getUri}`, {headers}).then((response) => {
        done(response, null)
    }).catch((err) => {
        done(null, err)
    })
}

function post(postUri, data, done) {
    if(!postUri) {
        done(null, {error: 'Missing URI'})
    }

    const headers = {
        'Authorization': localStorage.getItem('jwt')
    }

    axios.post(`${uri}${postUri}`, data, {headers}).then((response) => {
        done(response, null)
    }).catch((err) => {
        done(null, err)
    })
}

export {register, login, get, post}