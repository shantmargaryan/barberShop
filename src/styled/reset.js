import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const LinkReset = css`
    display: block;
    color: inherit;
    font-family: inherit;
    font-size: inherit;
    text-decoration: none;
`

export const ReactLink = styled(Link)`
    display: block;
    color: inherit;
    font-family: inherit;
    font-size: inherit;
    text-decoration: none;
`

export const ListReset = css`
    margin: 0;
    padding: 0;
    list-style: none;
`

export const ButtonReset = css`
    padding: 0;
    border: none;
    background: transparent;
    cursor: pointer;
`

export const Img = css`
    display: block;
    max-width: 100%;
    height: auto;
    object-fit: cover;
    font-family: inherit;
    font-size: inherit;
`

export const InputReset = css`
    padding: 0;
    border: none;
    outline: none;
    background: transparent;
`

export const TextAreaReset = css`
    padding: 0;
    border: none;
    outline: none;
    background: transparent;
    resize: none;
`