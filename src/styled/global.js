import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
/*===NULL CSS===========================================*/
*,
*:before,
*:after {
box-sizing: inherit;
}
html {
box-sizing: border-box;
}
html,
body{
width: 100%;
height: 100%;
scroll-behavior: smooth;
}
body
{
margin: 0;
color: ${({ theme }) => theme.colors.whiteColor};
font-family: ${({ theme }) => theme.fonts.primary};
font-size: 16px;
}

::selection {
color: ${({ theme }) => theme.colors.primaryColor};
}


#root {
    height: 100%;
}
/*===/NULL CSS===========================================*/
`

export default GlobalStyle