import { createGlobalTheme, createTheme, createThemeContract, style, styleVariants } from '@vanilla-extract/css';


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


// Themes



export const globalTheme = createGlobalTheme('#__next',{
    colors: {
       primary: 'green',
       secondary: 'white', 
    },
})


// Theme Contracts
const themeBase = createThemeContract({
    primary: null,
    background: null,
})

//Create theme
export const lighTheme = createTheme(themeBase, {
    primary: 'white',
    background: 'blue',
})


export const darkTheme = createTheme(themeBase, {
    primary: 'black',
    background: 'red',
})


// Using global theme
export const usingGlobalTheme = style({
    background: globalTheme.colors.primary,
})