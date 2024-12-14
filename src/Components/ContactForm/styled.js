import styled from "styled-components";
import { ButtonReset, InputReset } from "../../styled/reset";
import { Section, Container, Title, Text } from "../../styled/mixStyle";

export const ContactFormSection = styled(Section)`
`

export const ContactFormContainer = styled(Container)`
display: flex;
flex-direction: column;
gap: 20px;

@media (${({ theme }) => theme.media.tabletLarge}) {
    flex-direction: row;
    justify-content: space-between;
}
`

export const Iframe = styled.iframe`
flex-basis: 50%;
min-height: 300px;
`

export const ContactFormTitle = styled.h2`
${Title}
`

export const ContactFormText = styled.p`
${Text}
color: #666;
font: 400 1.125rem / 1.875rem "zilla-slab";
`

export const Form = styled.form`
display: flex;
flex-direction: column;
gap: 20px;
flex-basis: 50%;
`

export const Input = styled.input`
${InputReset}
width: 100%;
padding: 15px;
border: 3px solid #E5E5E5;
transition: box-shadow 0.3s linear;

&[type="number"] {
    &[type="number"]::-webkit-inner-spin-button, 
    &[type="number"]::-webkit-outer-spin-button {
        -webkit-appearance: none;
    }
}

&:focus {
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.primaryColor};
}

&::placeholder {
    color: ${({ theme }) => theme.colors.blackColor};
    font: 400 1rem / 1.875rem "zilla-slab";
}
`

export const TextArea = styled.textarea`
${InputReset}
min-height: 200px;
padding: 15px;
border: 3px solid #E5E5E5;
font: 400 1rem / 1.875rem "zilla-slab";
transition: box-shadow 0.3s linear;

&:focus {
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.primaryColor};
}

&::placeholder {
    color: ${({ theme }) => theme.colors.blackColor};
    font: 400 1rem / 1.875rem "zilla-slab";
}
`

export const Button = styled.button`
${ButtonReset}
padding: 15px;
color: ${({ theme }) => theme.colors.whiteColor};
background-color: #dca44e ;
font: 700 1rem / 1.875rem "zilla-slab";
transition: background-color 0.3s linear;

&:hover {
    background-color: #C98000;
}
`