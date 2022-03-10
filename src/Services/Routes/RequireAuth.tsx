import * as React from 'react'
import { Navigate } from 'react-router-dom'
import { getUserToken } from '../Auth'

/**
 *
 * @version 0.0.1
 *
 * @author Kayo Oliveira
 *
 * Description: Component responsible to validate if user has token before access a route
 *
 */

interface IRequireAuth {
    children: React.ReactNode
}

const RequireAuth: React.FC<IRequireAuth> = ({ children }) => {
    const token = getUserToken()
    if (token) {
        return <>{children}</>
    }
    return <Navigate to="/login" />
}

export default RequireAuth
