import styled, { css } from "styled-components";
import { ReactLink } from "./reset";

export const Main = styled.main`
min-height: 100%;
`

export const Section = css`
    margin-block-end: 15%;
`

export const Container = css`
max-width: ${({ theme }) => theme.container.width}px;
padding-inline: ${({ theme }) => theme.container.offset}px;
margin-inline: auto;
`

export const Link = styled(ReactLink)`
width: fit-content;
color: ${({ theme }) => theme.colors.primaryColor};
font: 400 1.3rem / 2.025rem ${({ theme }) => theme.fonts.primary};
letter-spacing: 0.1em;
`

export const HeroTitle = css`
margin: 0;
font: 700 clamp(2.5rem, 4.5vw, 5rem) / 1.1em ${({ theme }) => theme.fonts.primary};
text-transform: uppercase;
`

export const Subtitle = css`
display: inline-block;
margin-block-end: 1em;
padding-block-end: 0.5em;
color: ${({ theme }) => theme.colors.blackColor};
font: 400 1.125rem / 0.375rem ${({ theme }) => theme.fonts.primary};
letter-spacing: 0.2em;
border-bottom: 4px solid ${({ theme }) => theme.colors.primaryColor};
text-transform: uppercase;
`

export const Title = css`
margin: 0;
color: ${({ theme }) => theme.colors.blackColor};
font: 700 clamp(2rem, 4.5vw, 3.75rem) / 100% ${({ theme }) => theme.fonts.primary};
text-transform: uppercase;
`

export const Text = css`
margin: 0;
color: ${({ theme }) => theme.colors.blackColor};
font: italic 400 1.875rem / 2rem "zilla-slab";
`

