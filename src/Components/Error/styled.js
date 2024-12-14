import styled from "styled-components";
import { Section, Container, Title, Text } from "../../styled/mixStyle";
import { ReactLink, Img } from "../../styled/reset";

export const ErrorSection = styled(Section)`
`

export const ErrorContainer = styled(Container)`
display: flex;
flex-direction: column;
align-items: center;
`

export const ErrorImg = styled.img`
${Img}
`

export const ErrorTitle = styled.h2`
${Title}
margin-block-end: 20px;
`

export const ErrorText = styled.p`
${Text}
color: #666;
font: 400 1rem / 1.875rem "zilla-slab";
`

export const ErrorLink = styled(ReactLink)`
display: inline-block;
margin-inline-start: 10px;
color:  ${({ theme }) => theme.colors.blackColor};
`