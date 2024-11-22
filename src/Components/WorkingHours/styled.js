import styled from "styled-components";
import { Section, Container, Title, Subtitle } from "../../styled/mixStyle";
import { ListReset, Img, LinkReset } from "../../styled/reset";


export const WorkingHoursSection = styled.section`
${Section}
position: relative;
padding-block-start: 15%;
`

export const WorkingHoursContainer = styled.div`
${Container}
display: flex;
flex-direction: column;
gap: 20px;

@media (${({ theme }) => theme.media.tabletLarge}) {
    flex-direction: row;
    align-items: end;
}
`

export const WorkingHoursImg = styled.img`
${Img}
`

export const Content = styled.div`
background: url(img/ContentBg.png) no-repeat center / cover;
flex-grow: 1;
padding: 3% 5%;
text-align: center;

@media (${({ theme }) => theme.media.tabletLarge}) {
    position: absolute;
    right: 10%;
    width: 45%;
}
`

export const BeforeTitle = styled.span`
${Subtitle}
`

export const WorkingHoursTitle = styled.h3`
${Title}
margin-block-end: 25px;
`

export const List = styled.ul`
${ListReset}
margin-block-end: 50px;
`

export const Item = styled.li`
position: relative;
display: flex;
justify-content: space-between;
flex-wrap: wrap;
gap: 15px;
padding-block-end: 15px;
border-bottom:  4px dotted #E5E5E5;

&:not(:last-child) {
margin-block-end: 15px;
}
`

export const OpenDays = styled.span`
color: ${({ theme }) => theme.colors.blackColor};
font: 400 1.875rem / 2rem "Karantina";
text-transform: uppercase;
`

export const OpenHours = styled.span`
color: ${({ theme }) => theme.colors.primaryColor};
font: 400 1.5rem / 1.563rem "Karantina";
text-transform: uppercase;
`

export const BookingNumber = styled.span`
display: block;
margin-block-end: 15px;
color: ${({ theme }) => theme.colors.primaryColor};
font: 400 1.125rem / 1.125rem "Karantina";
letter-spacing: 0.375rem;
text-transform: uppercase;
`

export const PhoneNumber = styled.a`
${LinkReset}
color: ${({ theme }) => theme.colors.blackColor};
font: 400 1.875rem / 1.125rem "Karantina";
text-transform: uppercase;
`

