import axios from 'axios'
import { getUserToken } from '../Auth'

/**
 *
 *  @version 0.0.1
 *
 *  @author Kayo Oliveira
 *
 *  Description: Api connection service functions
 *
 */

// Axios instance
const api = axios.create({
    baseURL: import.meta.env.API_BASE_URL?.toString(),
    headers: {
        'Access-Control-Allow-Origin': '*'
    },
    withCredentials: true
})

// Interceptor to add token to request
api.interceptors.request.use(config => {
    const token = getUserToken()
    if (token) {
        config.headers = {
            Authorization: `Bearer ${JSON.parse(token)}`
        }
    }
    return config
})

export default api
