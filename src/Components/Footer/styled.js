import styled from "styled-components";
import { Container, Title, Text } from "../../styled/mixStyle";
import { ListReset, ReactLink } from "../../styled/reset";

export const FooterSection = styled.footer`
padding-block-start: 10%;
`

export const FooterContainer = styled(Container)`
display: flex;
align-items: center;
justify-content: center;
flex-wrap:wrap;
gap: 20px;

@media (${({ theme }) => theme.media.tabletLarge}) {
    justify-content: space-between;
    border-bottom: 0.1rem solid rgba(229, 229, 229, 0.13);
}
`

export const FooterTitle = styled.h3`
${Title}
margin-block-end: 20px;
font: 400 1.125rem / 1.125rem "Karantina";
letter-spacing: 0.25rem;
color:  ${({ theme }) => theme.colors.whiteColor};
`

export const List = styled.ul`
${ListReset}
`

export const Item = styled.li`
`

export const LogoBox = styled.div`
text-align: center;

@media (${({ theme }) => theme.media.tabletLarge}) {
    padding: 0 5% 5% 5%;
    border-inline: 0.1rem solid rgba(229, 229, 229, 0.13);
}
`

export const Link = styled(ReactLink)`
width: fit-content;
font: 400 1rem / 1.875rem "zilla-slab";
color: ${({ theme }) => theme.colors.whiteColor};
`

export const SmallText = styled.p`
${Text}
margin-block: 30px;
color:  ${({ theme }) => theme.colors.primaryColor};
font: 400 1.125rem / 1rem "Karantina";
letter-spacing: 0.375rem;
`

export const LargText = styled.p`
${Text}
max-width: 21em;
color: ${({ theme }) => theme.colors.whiteColor};
font: 400 1rem / 1.5rem "zilla-slab";
`

export const Address = styled.p`
${Text}
max-width: 10rem;
margin-block-end: 20px;
color: ${({ theme }) => theme.colors.whiteColor};
font: 400 1rem / 1.5rem "zilla-slab";
`

export const OpenHours = styled.p`
${Text}
max-width: 13rem;
color: ${({ theme }) => theme.colors.whiteColor};
font: 400 1rem / 1.5rem "zilla-slab";
`

export const CopyRight = styled.p`
${Text}
padding-inline: 20px;
padding-block: 5%;
color: ${({ theme }) => theme.colors.whiteColor};
font: 400 1rem / 1.5rem "zilla-slab";
text-align: center;
`

export const BarberText = styled.span`
margin-inline-start: 5px;
color:  ${({ theme }) => theme.colors.primaryColor};
`