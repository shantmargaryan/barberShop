import styled from "styled-components";
import { Section, Container, Subtitle, Title, Text } from "../../styled/mixStyle";


export const ClientsSection = styled(Section)`
padding-block: 7% ;
background-position: center;
background-size: cover;
background-repeat: no-repeat;
`

export const ClientsContainer = styled(Container)`
text-align: center;

& .swiper-button-prev,
& .swiper-button-next {
    position: static;
    display: inline-flex;
    width: 50px;
    height: 50px;
    padding: 10px;
    margin-block-start: 30px;
    background-color: ${({ theme }) => theme.colors.blackColor};
    transition: background-color 0.3s ease;

    &:hover {
        background-color: ${({ theme }) => theme.colors.primaryColor};
    }

    &::after {
        content: url("img/svg/ArrowLeft.svg");
        width: 20px;
        height: 60px;
    }
}
& .swiper-button-next {
    &::after {
        content: url("img/svg/ArrowRight.svg");
    }
}
`

export const ClientsSubtitle = styled.span`
${Subtitle}
`

export const ClientsTitle = styled.h2`
${Title}
margin-block-end: 40px;
`
export const ClientsText = styled.p`
${Text}
max-width: 750px;
margin-inline: auto;
margin-block-end: 50px;
font-size: clamp(1rem, 3vw, 2rem);
line-height: 150%;
`

export const Name = styled.span`
display: block;
color: ${({ theme }) => theme.colors.blackColor};
font: 400 1.875rem / 1.875rem "Karantina";
text-transform: uppercase;
`

export const Exprience = styled.span`
color: #666;
font: 400 1.125rem / 1.875rem "zilla-slab";
`