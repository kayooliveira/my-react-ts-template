import { createStitches } from '@stitches/react'

/**
 *
 * @version 0.0.1
 *
 * @author Kayo Oliveira
 *
 * Description: Styled stitches theme
 *
 */

export const { styled, css } = createStitches({
    media: {
        esm: '(max-width: 575.98px)', // Extra small
        sm: '(min-width: 576px) and (max-width: 767.98px)', // Small
        md: '(min-width: 768px) and (max-width: 991.98px)', // Medium
        lg: '(min-width: 992px) and (max-width: 1199.98px)', // Large
        elg: '(min-width: 1200px)' // Extra large
    },
    theme: {
        colors: {
            primary: '',
            secondary: ''
        },
        space: {
            1: '0.25rem', // 4px
            2: '0.5rem', // 8px
            3: '0.75rem', // 12px
            4: '1rem', // 16px
            5: '1.25rem', // 20px
            6: '1.5rem', // 24px
            7: '1.75rem', // 28px
            8: '2rem' // 32px
        },
        fontSizes: {},
        fonts: {},
        fontWeights: {},
        lineHeights: {},
        letterSpacings: {},
        sizes: {},
        borderWidths: {},
        borderStyles: {},
        radii: {
            1: '0.25rem', // 4px
            2: '0.5rem', // 8px
            3: '0.75rem', // 12px
            4: '1rem', // 16px
            5: '1.25rem', // 20px
            6: '1.5rem', // 24px
            7: '1.75rem', // 28px
            8: '2rem' // 32px
        },
        shadows: {},
        zIndices: {},
        transitions: {
            fast: '0.1s',
            medium: '0.2s',
            slow: '0.3s',
            verySlow: '0.4s',
            ultraSlow: '1s'
        }
    },
    prefix: 'class',
    utils: {}
})
