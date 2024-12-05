import styled from "styled-components";
import { Title, Text, Section, Subtitle } from "../../styled/mixStyle";
import { ListReset, Img } from "../../styled/reset";


export const WhyUsSection = styled(Section)`
padding-block: 7%;
`

export const Content = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-block-end: 60px;
text-align: center;
`

export const WhyUsSubtitle = styled.span`
${Subtitle}
`

export const WhyUsTitle = styled.h2`
${Title}
max-width: 300px;
margin-block-end: 40px;
`

export const WhyUsText = styled.p`
${Text}
max-width: 600px;
color: #666;
font : 400 1.125rem / 2rem "zilla-slab";
`

export const List = styled.ul`
${ListReset}
display: grid;
grid-template-columns: repeat(auto-fit, minmax(min(100%, 250px), 1fr));
align-items: baseline;
gap: 20px;
`

export const Item = styled.li`
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
`

export const Image = styled.img`
${Img}
max-width: 60px;
margin-block-end: 40px;
`

export const SmallTitle = styled.h3`
${Title}
margin-block-end: 15px;
font-size: 1.875rem;
`

