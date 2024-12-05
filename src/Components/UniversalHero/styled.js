import styled from "styled-components";
import { Section, Container, HeroTitle } from "../../styled/mixStyle";
import { ReactLink } from "../../styled/reset";


export const HeroSection = styled(Section)`
position: relative;
margin-block-end: 10rem;
background-position: clamp(100%, 5vw, 50%);
background-size: cover;
background-repeat: no-repeat;
`

export const HeroContainer = styled(Container)`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
min-height: 400px;
padding-block-start: 10rem;
`

export const Title = styled.h1`
${HeroTitle}
`

export const Linksbox = styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: 10px;
width: 100%;
margin-block-end: 15px;
padding-block-start: 15px;
border-top: 1px solid ${({ theme }) => theme.colors.whiteColor};
`

export const Link = styled(ReactLink)`
letter-spacing: 0.1em;
transition: color 0.4s;

&:hover {
    color: ${({ theme }) => theme.colors.primaryColor};
}
`

export const Dotted = styled.span`
width: 8px;
height: 8px;
background-color: ${({ theme }) => theme.colors.primaryColor};
clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
`

export const Subtitle = styled.span`
letter-spacing: 0.1em;
color: ${({ theme }) => theme.colors.primaryColor};
`