import { css } from 'styled-components';

const sizes = {
    phone: 600,
    tablet: 1024,
}

export const media = {
    phone: args => css`
        @media (max-width: ${sizes.phone}px) {
            ${args.map(arg => arg)}
        }
    `,
    tablet: args => css`
        @media (min-width: ${sizes.phone + 1}px) and (max-width: ${sizes.tablet}px) {
            ${args.map(arg => arg)}
        }
    `,
}