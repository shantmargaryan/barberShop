import styled from "styled-components";
import { Section, Container, HeroTitle, Text } from "../../styled/mixStyle";
import { ButtonReset, ListReset, LinkReset } from "../../styled/reset";

export const HeroSection = styled.section`
${Section}
position: relative;
padding-block-end: 35rem;
margin-block-end: 10rem;
`

export const HeroContainer = styled.div`
${Container}
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
height: 100%;
padding-block-start: 15rem;
`

export const Background = styled.div`
position: absolute;
inset: 0;
min-height: 700px;
background-position: clamp(100%, 5vw, 70%);
background-size: cover;
background-repeat: no-repeat;
`

export const Content = styled.div`
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
`

export const Title = styled.h1`
${HeroTitle}
max-width: 8em;
margin-block-end: 0.500em;
`

export const HeroText = styled.p`
${Text}
margin-block-end: 1.5em;
color: #ccc;
font: 400 1.25rem/ 1.5rem "zilla-slab";
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

export const List = styled.ul`
${ListReset}
position: relative;
display: flex;
flex-wrap: wrap;
justify-content: center;
justify-content: space-evenly;
gap: 15px;
width: 100%;
margin-block-end: 2em;
`

export const Item = styled.li`
text-align: center;
`

export const Subtitle = styled.span`
color: ${({ theme }) => theme.colors.primaryColor};
font: 400 1.50rem / 1.875rem "Karantina";
letter-spacing: 0.2rem;
`

export const Link = styled.a`
${LinkReset}
color: ${({ theme }) => theme.colors.whiteColor};
font: 400 1.50rem / 1.875rem "Karantina";
`

export const SmallText = styled.p`
${Text}
color: ${({ theme }) => theme.colors.whiteColor};
font: 400 1.50rem / 1.875rem "Karantina";
`