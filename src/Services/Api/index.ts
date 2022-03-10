import axios from 'axios'

/**
 *
 * @version 0.0.1
 *
 * @author Kayo Oliveira
 *
 * Description: Api connection service functions
 **
 */

const api = axios.create({
    baseURL: import.meta.env.API_BASE_URL?.toString(),
    headers: {
        'Access-Control-Allow-Origin': '*'
    },
    withCredentials: true
})

api.interceptors.request.use(config => {
    const token = localStorage.getItem('user-token')
    if (token) {
        config.headers = {
            Authorization: `Bearer ${JSON.parse(token)}`
        }
    }
})

export default api
