import styled from "styled-components";
import { Section, Title } from "../../styled/mixStyle";
import { ListReset, ReactLink } from "../../styled/reset";


export const HireCutSection = styled.section`
${Section}
`

export const List = styled.ul`
${ListReset}
display: grid;
gap: 20px;
`

export const Item = styled.li`
position: relative;
isolation: isolate;
display: grid;
place-content: center;
min-height: 500px;
background-position: clamp(100%, 5vw, 70%);
background-size: cover;
background-repeat: no-repeat;
text-align: center;

@media (${({ theme }) => theme.media.tabletLarge}) {

    & {
        min-height: 400px;
    }

    &:nth-child(1) {
    grid-column: 1 / 3;
    grid-row: 1 / 3;
}

&:nth-child(2) {
    grid-column: 3 / 4;
}

&:nth-child(3) {
    grid-column: 4 / 5;
}

&:nth-child(4) {
    grid-column: 3 / 5;
}
}
`

export const ItemLink = styled(ReactLink)`
position: absolute;
inset: 0;
z-index: -1;
background-color: rgba(0, 0, 0, 0.4);
transition: background-color .3s linear;

&:hover {
    background-color: rgba(0, 0, 0, 0.6);
}
`

export const Cut = styled.span`
color: ${({ theme }) => theme.colors.primaryColor};
font: 400 1.25rem / 1.875rem "Karantina";
letter-spacing: 0.313rem;
`

export const CutHireTitle = styled.h3`
${Title}
margin-block-end: 30px;
font: 400 3rem / 3.75rem "Karantina";
color: ${({ theme }) => theme.colors.whiteColor};
`

export const CutHireLink = styled(ReactLink)`
border:  0.125rem solid ${({ theme }) => theme.colors.whiteColor};
font: 400 1rem / 3rem "Karantina";
letter-spacing: 0.25rem;
background-color: transparent;
transition: background-color .3s linear,
color .3s linear;

&:hover {
    background-color: ${({ theme }) => theme.colors.whiteColor};
    color: ${({ theme }) => theme.colors.primaryColor};
}
`