import styled from "styled-components";
import { Section, Container, Subtitle, Title } from "../../styled/mixStyle";
import { Img } from "../../styled/reset";

export const PricingSection = styled.section`
${Section}
position: relative;
isolation: isolate;
padding-block: 20%;

&::after {
    content: "";
    position: absolute;
    inset: 0;
    z-index: -1;
    background-color: rgba(0, 0, 0, 0.5);
}
`

export const PricingContainer = styled.div`
${Container}
display: flex;
flex-direction: column;
gap: 20px;

@media (${({ theme }) => theme.media.tabletLarge}) {
    flex-direction: row;
    justify-content: space-between;
}
`

export const PricingSubtitle = styled.span`
${Subtitle}
color:  ${({ theme }) => theme.colors.whiteColor};
`

export const PricingTitle = styled.h3`
${Title}
color:  ${({ theme }) => theme.colors.whiteColor};
`


export const PricingImg = styled.img`
${Img}
`


