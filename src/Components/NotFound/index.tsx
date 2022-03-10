import React from 'react'
import * as C from './styles'

/**
 *
 * @version 0.0.1
 *
 * @author Kayo Oliveira
 *
 * Description: Component responsible to show 404 page - Free to customize
 *
 */

const NotFound: React.FC = () => {
    return (
        <C.NotFoundDiv>
            <C.NotFoundContent>
                <C.NotFoundTitle>404 </C.NotFoundTitle>
                <C.NotFoundDescription>Page not found </C.NotFoundDescription>
            </C.NotFoundContent>
        </C.NotFoundDiv>
    )
}

export default NotFound
