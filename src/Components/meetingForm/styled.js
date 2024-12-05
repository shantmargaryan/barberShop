import styled from "styled-components";
import { InputReset, TextAreaReset, ButtonReset } from "../../styled/reset";
import { Close } from "@mui/icons-material";


export const Form = styled.form`
    position: fixed;
    top: 10em;
    z-index: 11;
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: min(100%, 400px);
    padding-inline: 20px;
    opacity: ${({ show }) => show ? "1" : "0"};
    visibility: ${({ show }) => show ? "visible" : "hidden"};
    transition: opacity .4s ease-in-out,
    visibility .4s ease-in-out;

    & input:nth-child(3) {
        &[type="number"]::-webkit-inner-spin-button, 
        &[type="number"]::-webkit-outer-spin-button {
            -webkit-appearance: none;
        }
    }
`

export const CloseIcon = styled(Close)`
align-self: end;
border: 2px solid ${({ theme }) => theme.colors.whiteColor};
border-radius: 50%;
cursor: pointer;
`

export const Input = styled.input`
    ${InputReset}
    padding: 10px;
    border: 2px solid #E5E5E5;
    border-radius: 10px;
    background-color: #fff;
    font: 400 1.3rem ${({ theme }) => theme.fonts.primary};
    transition: box-shadow .3s linear;

    &:focus {
        box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.primaryColor};
    }
`

export const TextArea = styled.textarea`
    ${TextAreaReset}
    padding: 10px;
    border: 2px solid #E5E5E5;
    border-radius: 10px;
    background-color: #fff;
    font: 400 1.2rem ${({ theme }) => theme.fonts.primary};
    transition: box-shadow .3s linear;

    &:focus {
        box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.primaryColor};
    }
`

export const Button = styled.button`
    ${ButtonReset}
    padding: 10px;
    border-radius: 10px;
    background-color: #fff;
    border: 2px solid #E5E5E5;
    font: 400 1.2rem / 2.025rem ${({ theme }) => theme.fonts.primary};
    transition: background-color .3s linear;

    &:hover {
        background-color: ${({ theme }) => theme.colors.primaryColor};
    }
`