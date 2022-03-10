import React from 'react'
import {
    BrowserRouter as Router,
    Routes as Switch,
    Route
} from 'react-router-dom'
import NotFound from '../../Components/NotFound'
import Index from '../../pages/index'
// import RequireAuth from './RequireAuth' // Uncomment if needs authenticated routes

/**
 *
 * @version 0.0.1
 *
 * @author Kayo Oliveira
 *
 * Description: Routes service
 *
 */

const Routes: React.FC = () => {
    return (
        <>
            <Router>
                <Switch>
                    <Route path="/" element={<Index />} />
                    <Route path="*" element={<NotFound />} />
                </Switch>
            </Router>
        </>
    )
}

export default Routes
