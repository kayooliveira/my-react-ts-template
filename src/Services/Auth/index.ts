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
        if (token) {
            return JSON.parse(token)
        }
        return null
    } catch (error) {
        Notify.error()
    }
}

// Function responsible to clear the user token
export const clearToken = () => {
    try {
        const token = localStorage.getItem('user-token')
        if (token) {
            localStorage.removeItem('user-token')
        }
    } catch (error) {
        Notify.error()
    }
}
