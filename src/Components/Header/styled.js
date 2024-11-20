import styled from "styled-components";
import { ButtonReset, ListReset } from "../../styled/reset";
import { Container, Link } from "../../styled/mixStyle";


export const WrapperHeader = styled.header`
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    width: 100%;
    padding-block: 20px;
    padding-inline-end: ${({ headerPaddingRight, navIsOpen }) => navIsOpen ? `${headerPaddingRight}px` : "0"};
`

export const HeaderContainer = styled.div`
${Container}
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 15px;
`

export const NavBar = styled.nav`
    position: fixed;
    top: 0;
    left: ${({ navIsOpen }) => navIsOpen ? "0" : "-100%"};
    z-index: 10;
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 280px;
    height: 100%;
    padding: 20px;
    background-color: #fff;
    overflow: auto;
    transition: left .8s;

    @media (${({ theme }) => theme.media.tabletLarge}) {
        position: static;
        flex-direction: row;
        justify-content: center;
        background-color: transparent;
        overflow: visible;
        width: 100%;
        padding: 0;
    }

    & svg {
        padding: 5px;
        border: 2px solid #000;
        border-radius: 50%;
        align-self: end;
        cursor: pointer;
        font-size: 30px;
        fill: #000;
        @media (${({ theme }) => theme.media.tabletLarge}) {
            display: none;
        }
    }
`

export const List = styled.ul`
    ${ListReset}
    display: flex;
    flex-direction: column;
    gap: 15px;

    @media (${({ theme }) => theme.media.tabletLarge}) {
        flex-direction: row;
    }
`

export const Item = styled.li`
padding-block-end: 0.500rem;
border-bottom: 0.05rem solid #E5E5E5;

    @media (${({ theme }) => theme.media.tabletLarge}) {
        border: none;
    }
`

export const HeaderLink = styled(Link)`
    color: ${({ isColor }) => isColor ? "#DCA44E" : "#000"};
    font-family: "zilla-slab";
    transition: color .3s linear;

    &:hover {
        color: #DCA44E;
    }

    @media (${({ theme }) => theme.media.tabletLarge}) {
        font-family: ${({ theme }) => theme.fonts.primary};
        color: ${({ isColor }) => isColor ? "#DCA44E" : "#fff"};
    }
`

export const Burger = styled.button`
    ${ButtonReset}
    position: relative;
    z-index: 10;
    display: inline-flex;
    flex-direction: column;
    gap: 5px;

    :first-child {
    transform-origin: 4px;
    transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
    opacity: ${({ open }) => open ? '0' : '1'};
    transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
    transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }

    @media (${({ theme }) => theme.media.tabletLarge}) {
        display: none;
    }
`

export const BurgerLine = styled.span`
    width: 2rem;
    height: 0.25rem;
    background-color: #fff;
    border-radius: 10px;
    transform-origin: 1px;
    transition: transform .4s linear, opacity .4s linear;
`
