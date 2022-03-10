import { Notify } from './../Notify/index'

/**
 *
 * @version 0.0.1
 *
 * @author Kayo Oliveira
 *
 * Description: Auth service functions
 *
 */

// Function responsible to set the user token
export const setUserToken = (token: string) => {
    try {
        localStorage.setItem('user-token', JSON.stringify(token))
    } catch (error) {
        Notify.error()
    }
}

// Function responsible to get the user token
export const getUserToken = () => {
    try {
        const token = localStorage.getItem('user-token')
        return token && JSON.parse(token)
    } catch (error) {
        Notify.error()
    }
}

// Function responsible to auth the users
export const AuthUser = () => {
    return false
}

// Function responsible to register the user
export const RegisterUser = () => {
    return false
}

// Function responsible to logout the user
export const Logout = () => {
    try {
        const token = localStorage.getItem('user-token')
        token && localStorage.removeItem('user-token')
    } catch (error) {
        Notify.error()
    }
}
