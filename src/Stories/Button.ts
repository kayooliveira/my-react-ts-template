import { styled } from '../Services/Styled'

export const Button = styled('button', {
    padding: '0.5rem 1rem',
    borderRadius: '0.25rem',
    cursor: 'pointer',
    variants: {
        primary: {
            true: {
                transition: '0.1s',
                color: 'white',
                backgroundColor: 'transparent',
                border: '0.15rem solid DarkViolet',
                '&:hover,&:active,&:focus': {
                    backgroundColor: 'BlueViolet'
                }
            }
        }
    },
    defaultVariants: {
        primary: true
    }
})
