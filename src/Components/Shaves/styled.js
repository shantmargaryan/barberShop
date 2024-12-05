import styled from "styled-components";
import { Title, Text } from "../../styled/mixStyle";
import { Img, ListReset } from "../../styled/reset";


export const FirstTitle = styled.h3`
${Title}
margin-block-end: 40px;
`

export const List = styled.ul`
${ListReset}
display: grid;
grid-template-columns: repeat(auto-fit, minmax(min(100%, 250px), 1fr));
gap: 25px;

& li:last-child {
    grid-column: span 2;
    display: flex;
    flex-direction: column;
    justify-content: end;
    min-height: 500px;
    padding: 20px;
    background-position: clamp(100%, 5vw, 70%);
    background-size: cover;
    background-repeat: no-repeat;
}
`

export const Item = styled.li`
grid-column: auto / span 2;
border-bottom: 4px dotted #E5E5E5;

@media (${({ theme }) => theme.media.tabletLarge}) {
    grid-column: auto;
}
`

export const UniversalImg = styled.img`
${Img}
width: 100%;
margin-block-end: 30px;
`

export const Content = styled.div`
display: flex;
justify-content: space-between;
flex-wrap: wrap;
gap: 15px;
`

export const SmallTitle = styled.h3`
${Title}
margin-block-end: 20px;
font-size: 30px;
`

export const Price = styled.span`
color: ${({ theme }) => theme.colors.primaryColor};
font: 400 1.50rem / 1.875rem "Karantina";
`


export const UniversalText = styled.p`
${Text}
color: #666;
font: 400 1.50rem / 1.875rem "Karantina";
`

export const ItemContent = styled.div`
display: flex;
justify-content: space-between;
gap: 15px;
max-width: 300px;
margin-block-end: 20px;
`

export const ItemTitle = styled.h3`
${Title}
font-size: 30px;
color: ${({ theme }) => theme.colors.whiteColor};
`

export const ItemPrice = styled.span`
color:  ${({ theme }) => theme.colors.primaryColor};
font: 400 1.70rem / 1rem "Karantina";
`

export const ItemText = styled.p`
${Text}
color: #E5E5E5;
font: 400 1rem / 1.875rem "zilla-slab";
`