import styled from "styled-components";
import { Img, ListReset } from "../../styled/reset";
import { Title, Text } from "../../styled/mixStyle";

export const FirstTitle = styled.h2`
${Title}
margin-block-end: 40px;
`

export const List = styled.ul`
${ListReset}
display: grid;
grid-template-columns: repeat(auto-fill, minmax(min(100%, 300px), 1fr));
gap: 15px;
`

export const Item = styled.li`
padding-block-end: 20px;
border-bottom: 4px dotted #E5E5E5;`   

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
margin-block-end: 20px;
`

export const SmallTitle = styled.h3`
${Title}
display: flex;
gap: 20px;
font-size: 30px;
`

export const Price = styled.span`
color: ${({ theme }) => theme.colors.primaryColor};
font: 400 1.875rem / 2rem "karantina";
`

export const UniversalText = styled.p`
${Text}
max-width: 18.75rem;
color: #666;
font: 1rem / 1.5rem "zilla-slab";
`