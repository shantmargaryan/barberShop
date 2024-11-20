import styled from "styled-components";


export const OverlayCurrent = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(5px);
    opacity: ${({ show }) => show ? "1" : "0"};
    visibility: ${({ show }) => show ? "visible" : "hidden"};
    z-index: 9;
    transition: opacity .4s ease-in-out,
    visibility .4s ease-in-out,
    backdrop-filter .4s ease-in-out;
`