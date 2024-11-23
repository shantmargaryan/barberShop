import styled from "styled-components";
import { Title, Text } from "../../styled/mixStyle";
import { ButtonReset, ListReset } from "../../styled/reset";
import { Tabs, TabList } from "react-tabs";


export const TabsStyled = styled(Tabs)`
flex-basis: 70%;
`

export const TabListStyled = styled(TabList)`
${ListReset}
display: flex;
flex-wrap: wrap;
gap: 15px;
margin-block-end: 40px;
`

export const TabButton = styled.button`
${ButtonReset}
padding: 15px 20px;
background-color: ${(tabButton) => (tabButton.tabButton ? ({ theme }) => theme.colors.primaryColor : "transparent")};
color: ${({ theme }) => theme.colors.whiteColor};
border: 0.125rem solid #E5E5E5;
font: 400 1rem / 1.563rem "Karantina";
letter-spacing: 0.263rem;
text-transform: uppercase;
`

export const List = styled.ul`
${ListReset}
`

export const Item = styled.li`
display: flex;
align-items: center;
justify-content: space-between;
gap: 15px;
padding-block-end: 15px;
border-bottom: 5px dotted  rgba(255, 255, 255, 0.20);

&:not(:last-child){
    margin-block-end: 15px;
}
`

export const TabTitle = styled.h3`
${Title}
color:  ${({ theme }) => theme.colors.whiteColor};
font: 400 1.5rem / 1.563rem "Karantina";
`

export const TabText = styled.p`
${Text}
color: #999;
font: 400 1.125rem / 2.025rem "Zilla-Slab";
`

export const Price = styled.span`
font: 700 1.875rem / 1.875rem "Karantina";
color:  ${({ theme }) => theme.colors.primaryColor};
`