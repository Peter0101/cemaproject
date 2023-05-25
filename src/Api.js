import axios from 'axios'

const uri = 'http://192.168.0.18:3000'

/**
 * Cadastra um novo usuário
 * @param credentials Credenciais do usuário
 * @param done Função de callback
 */
function register(credentials, done) {
    if(!credentials) {
        done(null, {error: 'Missing user data'})
    }

    const data = {
        email: credentials.email,
        password: credentials.password,
        details: {
            name: credentials.name || null,
            age: credentials.age || null,
            level: credentials.level || null
        }
    }

    axios.post(`${uri}/auth/register`, data).then((response) => {
        done(true, null)
    }).catch((err) => {
        done(null, err)
    })
}

/**
 * Conecta ao servidor e verifica o token JWT
 * @param {Function} done Função de callback
 * @returns {Boolean} true se o token é válido
 * @returns {Boolean} false se o token é inválido 
 */
function connect(done) {
    if(!localStorage.getItem('jwt')) {
        done(false, null)
    }

    const headers = {
        'Authorization': `Bearer ${localStorage.getItem('jwt')}`
    }

    axios.get(`${uri}/protected`, {headers}).then((response) => {
        if(response.status === 401) {
            return done(false, null)
        }

        if(response.status === 200) {
            localStorage.setItem('user', JSON.stringify(response.data))
            return done(true, null)
        }
    }).catch((err) => {
        console.log(err)
        return done(false, err)
    })
}

/**
 * Realiza o login do usuário
 * @param {{email: String, password: String}} credentials Credenciais do usuário 
 * @param {Function} done Função de callback
 * @returns {Boolean} true se o login foi bem sucedido
 * @returns {Boolean} false se o login foi mal-sucedido
 */
function login(credentials, done) {
    if(!credentials) {
        done(null, {error: 'Missing user data'})
    }

    const data = {
        email: credentials.email,
        password: credentials.password
    }

    axios.post(`${uri}/auth/login`, data).then((response) => {
        localStorage.setItem('jwt', response.data.token)
        connect()
        done(true, null)
    }).catch((err) => {
        done(null, err)
    })
}

/**
 * Realiza uma solicitação GET na API
 * @param {String} getUri URI da solicitação
 * @param {Function} done Função de callback
 * @returns {Object} Resposta da solicitação
 */
function get(getUri, done) {
    if(!getUri) {
        done(null, {error: 'Missing URI'})
    }

    const headers = {
        'Authorization': `Bearer ${localStorage.getItem('jwt')}`
    }

    axios.get(`${uri}${getUri}`, {headers}).then((response) => {
        done(response, null)
    }).catch((err) => {
        done(null, err)
    })
}

/**
 * Realiza uma solicitação POST na API
 * @param {String} postUri URI da solicitação
 * @param {Object} data Corpo da solicitação
 * @param {Function} done Função de callback
 * @returns {Object} Resposta da solicitação
 */
function post(postUri, data, done) {
    if(!postUri) {
        done(null, {error: 'Missing URI'})
    }

    const headers = {
        'Authorization': `Bearer ${localStorage.getItem('jwt')}`
    }
    console.log(data)
    axios.post(`${uri}${postUri}`, data, {headers}).then((response) => {
        done(response, null)
    }).catch((err) => {
        done(null, err)
    })
}

export {register, connect, login, get, post}