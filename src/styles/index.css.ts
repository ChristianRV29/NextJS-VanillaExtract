import { style, styleVariants } from '@vanilla-extract/css';


// Style
export const greetingText = style({
    color: 'white',
    fontFamily: 'Helvetica',
    fontSize: 25,
})

const baseContainer = style({
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    minHeight: '100vh',
})


// Style variants
export const container = styleVariants({
    light: [baseContainer, { // We can use a base for shared properties
        background: '#26A9E6',
    }],
    dark: [baseContainer,{
        background: '#12455D',
    }]
})