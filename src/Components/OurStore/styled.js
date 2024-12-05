import styled from "styled-components";
import { Section, Container, Subtitle, Title, Text } from "../../styled/mixStyle";
import { ButtonReset, ListReset, Img } from "../../styled/reset";
import { TabList, Tabs } from "react-tabs";

export const OurStoreSection = styled(Section)`
`

export const OurStoreContainer = styled(Container)`
display: flex;
flex-direction: column;
gap: 20px;

@media (${({ theme }) => theme.media.tabletLarge}) {
    flex-direction: row;
    justify-content: space-between;
}
`

export const Content = styled.div`
`

export const OurStoreSubtitle = styled.span`
${Subtitle}
`

export const OurStoreTitle = styled.h2`
${Title}
max-width: 285px;
margin-block-end: 50px;
`

export const TabsStyled = styled(Tabs)`
display: flex;
flex-wrap: wrap;
`

export const TabListStyled = styled(TabList)`
${ListReset}
display: flex;
flex-direction: column;
gap: 15px;
margin-inline-end: 20px;
`

export const TabButton = styled.button`
${ButtonReset}
color: #999;
font: 400 1.25rem / 1rem "Karantina";
letter-spacing: 0.375rem;
color: ${({ tabButton, theme }) => tabButton ? theme.colors.blackColor : "#999"};

&::after {
    content: "";
    display: inline-block;
    width: 8px;
    height: 8px;
    opacity: ${({ tabButton }) => tabButton ? "1" : "0"};
    visibility: ${({ tabButton }) => tabButton ? "visible" : "hidden"};
    margin-inline-start: 10px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.primaryColor};
    transition: opacity .3s linear,
    visibility .3s linear;
}
`

export const TabText = styled.p`
${Text}
max-width: 24rem;
color: #666;
font: 400 1.125rem / 2.025rem "zilla-slab";

&:not(:last-child) {
    margin-block-end: 30px;
}
`

export const ImgBox = styled.div`
position: relative;
isolation: isolate;
`

export const OurStoreImg = styled.img`
${Img}
width: 100%;

@media (${({ theme }) => theme.media.tabletLarge}) {
    &:nth-child(1) {
    position: relative;
    transform: translateX(-20%);
}

    &:nth-child(2) {
    position: absolute;
    z-index: -1;
    transform: translate(3%, -90%);
}
}
`

export const Since = styled.span`
position: absolute;
top: 0;
right: 0;
display: block;
color: ${({ theme }) => theme.colors.blackColor};
font: 700 1.875rem / 1.875rem "Karantina";
text-transform: uppercase;
`

export const Year = styled.span`
position: absolute;
top: 20px;
right: 0;
color: ${({ theme }) => theme.colors.primaryColor};
font: 700 5rem / 5rem "Karantina";
text-transform: uppercase;
`