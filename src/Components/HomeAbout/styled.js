import styled from "styled-components";
import { Section, Container, Title, Text, Subtitle } from "../../styled/mixStyle";
import { ListReset, Img } from "../../styled/reset";



export const HomeAboutSection = styled(Section)`
`

export const HomeAboutContainer = styled(Container)`
${Container}
position: relative;
isolation: isolate;
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

export const HomeAboutSubtitle = styled.span`
${Subtitle}

`

export const HomeAboutTitle = styled.h3`
${Title}
max-width: 400px;
margin-block-end: 0.5em;
`

export const HomeAboutText = styled.p`
${Text}
max-width: 530px;
`

export const SmallTitle = styled.h3`
${Title}
margin-block-end: 0.3em;
font-size: 30px;
`

export const SmallText = styled.p`
${Text}
max-width: 345px;
color: #666;
font-size: 18px;
`

export const List = styled.ul`
${ListReset}
`

export const Item = styled.li`
display: flex;
align-items: start;
flex-wrap: wrap;
gap: 30px;

&:not(:last-child) {
    margin-block-end: 2em;
}
`

export const RazorImg = styled.img`
${Img}
max-width: 300px;
position: absolute;
right: 0;
top: -15em;
z-index: -1;
`
