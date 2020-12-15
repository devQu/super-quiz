import axios from 'axios';
import key from '../../config/config';
import { AUTH_LOGOUT, AUTH_SUCCESS } from "./actionTypes"

export function onAuthHandler(userData, ifLog) {
    return async dispatch => {
        const urlSign = ['signInWithPassword','signUp']
        try {
            const response = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:${ifLog === 'Auth' ? urlSign[0] : urlSign[1]}?key=${key}`, userData)
            const data = response.data
            console.log(data)
            const expirationDate = new Date(new Date().getTime() + data.expiresIn * 1000)
            
            localStorage.setItem('token', data.idToken)
            localStorage.setItem('userId', data.localId)
            localStorage.setItem('expirationDate', expirationDate)

            dispatch(authSuccess(data.idToken))
            dispatch(autoLogout(data.expiresIn)) // Leave the session every time (expiresIn * 1000)
        } catch (e) {
            console.error(e)
        }
    }
}
export function autoLogout(time) {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout())
        }, time * 1000) 
    }
}
export function logout() {
    localStorage.removeItem('token')
    localStorage.removeItem('userId')
    localStorage.removeItem('expirationDate')
    return {
        type: AUTH_LOGOUT
    }
}
export function authSuccess(token) {
    return {
        type: AUTH_SUCCESS,
        token
    }
}
export function autoAuth() {
    return dispatch => {
        const token = localStorage.getItem('token')
        if (!token) {
            dispatch(logout())
        } else {
            const expirationDate = new Date(localStorage.getItem('expirationDate'))
            console.log(expirationDate)
            if (expirationDate >= new Date()) {
                dispatch(authSuccess(token))
                dispatch(autoLogout((expirationDate.getTime() - new Date().getTime()) / 1000))
            } else {
                dispatch(logout())
            }
        }
    }
}