import styled from "styled-components"
import { Container, Title } from "../../styled/mixStyle"
import { ButtonReset } from "../../styled/reset"


export const BookOnlineSection = styled.section`
min-height: 500px;
padding-block: 7% ;
background-position: clamp(100%, 5vw, 45%);
background-size: cover;
background-repeat: no-repeat;
`

export const BookOnlineContainer = styled(Container)`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

export const BookOnlineSubtitle = styled.span`
${Title}
margin-block-end: 20px;
color: #E5E5E5;
font: 400 1.125rem / 1.125rem "Karantina";
letter-spacing: 0.375rem;
`

export const BookOnlineTitle = styled.h3`
${Title}
max-width: 340px;
margin-block-end: 40px;
text-align: center;
color: ${({ theme }) => theme.colors.whiteColor};
font: 700 clamp(2.5rem, 4.5vw, 5rem) / 100% "Karantina";
text-transform: uppercase;
`

export const Button = styled.button`
${ButtonReset}
padding: 20px 30px;
background-color: ${({ theme }) => theme.colors.primaryColor};
color: ${({ theme }) => theme.colors.whiteColor};
font: 400 1.700rem / 0.500rem "Karantina";
transition: background-color .3s linear, 
color .3s linear;

&:hover {
    background-color: ${({ theme }) => theme.colors.whiteColor};
    color: ${({ theme }) => theme.colors.blackColor};
}
`
