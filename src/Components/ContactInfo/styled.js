import styled from "styled-components";
import { Section, Container, Title, Text } from "../../styled/mixStyle";
import { ListReset, LinkReset } from "../../styled/reset";


export const ContactInfoSection = styled(Section)`
padding-block-end: 70px;
border-bottom: 2px solid #E5E5E5;
`

export const ContactInfoContainer = styled(Container)`
`

export const List = styled.ul`
${ListReset}
display: grid;
justify-items: center;
grid-template-columns: repeat(auto-fit, minmax(min(100%, 250px), 1fr));
gap: 25px;
`

export const Item = styled.li`
text-align: center;
`

export const FirstTitle = styled.h3`
${Title}
margin-block-end: 20px;
color:  ${({ theme }) => theme.colors.primaryColor};
letter-spacing: 8px;
font: 400 1.25rem / 1.563rem "Karantina";
text-transform: uppercase;
`

export const FirstText = styled.p`
${Text}
max-width: 200px;
font: 400 1.2rem / 1.875rem "zilla-slab";
`

export const Link = styled.a`
${LinkReset}
color: ${({ theme }) => theme.colors.blackColor};
font: 400 2.5rem / 1.875rem "karantina";
`

