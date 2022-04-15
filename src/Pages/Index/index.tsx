import React from 'react'
import * as C from './styles'
import reactLogo from '../../Assets/img/react-logo.png'
/**
 *
 * @version 0.0.1
 *
 * @author Kayo Oliveira
 *
 * Description: Index page
 *
 */

const Index: React.FC = () => {
    return (
        <C.IndexContainer>
            <C.Img src={reactLogo} alt="React Logo" />
            <C.Title>kayooliveira/my-react-ts-template</C.Title>
            <C.Description as="p">
                edit
                <b style={{ color: '#cfcfcf' }}>src/Pages/Index/index.tsx</b>
                and save to reload
            </C.Description>
            <C.Link target="_blank" href="https://reactjs.org">
                Learn React
            </C.Link>
        </C.IndexContainer>
    )
}

export default Index
