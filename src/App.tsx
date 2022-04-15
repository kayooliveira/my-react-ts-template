import React from 'react'
import Routes from './Services/Routes'
import { cssGlobal } from './Services/Styled'
/**
 *
 * @version 0.0.1
 *
 * @author Kayo Oliveira
 *
 * Description: App component
 *
 */

const App: React.FC = () => {
    return (
        <>
            {cssGlobal()}
            <Routes />
        </>
    )
}

export default App
