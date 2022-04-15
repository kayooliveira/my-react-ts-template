import { keyframes } from '@stitches/react'
import { styled } from '../../Services/Styled'

export const IndexContainer = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: 'min(100vh, 100vh)',
    width: 'min(100vw, 100vw)'
})

const spin = keyframes({
    '0%': { transform: 'rotate(0deg)' },
    '100%': { transform: 'rotate(360deg)' }
})

export const Img = styled('img', {
    width: '20rem',
    borderRadius: '100%',
    animation: `${spin} infinite 4s linear`,
    filter: 'brightness(0.5)',
    transition: 'filter 0.2s ease',
    '&:hover': {
        filter: 'brightness(0.8)'
    }
})

export const Title = styled('h1', {
    fontSize: '2rem',
    margin: '1rem 0'
})

export const Description = styled('h2', {
    fontSize: '1.2rem',
    margin: '0 0 1rem 0'
})

export const Link = styled('a', {
    textDecoration: 'none'
})
