import {
    WrapperHeader,
    HeaderContainer,
    NavBar,
    List,
    Item,
    HeaderLink,
    Burger,
    BurgerLine
} from "./styled"
import { useEffect, useRef } from "react"
import { useLocation } from "react-router-dom"
import Logo from "../Logo"
import { navLinks } from "./array"
import useOverlay from "../../store/useOverlay"
import Overlay from "../../Utils/Overlay"
import useNav from "./useNav"
import CloseIcon from '@mui/icons-material/Close';

//hello world: this comment 

function Header() {
    const { setNavIsOpen, navIsOpen } = useNav()
    const { setIsShow, setIsHide } = useOverlay()
    const linksColor = useLocation().pathname
    const headerRef = useRef(null)

    useEffect(() => {
        if (navIsOpen) {
            document.body.style.paddingRight = `${window.innerWidth - document.body.offsetWidth}px`
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.paddingRight = "0"
            document.body.style.overflow = "visible"
        }
    }, [navIsOpen])

    const paddingRight = window.innerWidth - document.body.offsetWidth
    const header = headerRef?.current
    const headerHeight = header?.offsetHeight
    const activeLink = navLinks.find((obj) => obj.link === linksColor)


    return (
        <WrapperHeader
            ref={headerRef}
            headerPaddingRight={paddingRight}
            navIsOpen={navIsOpen}
        >
            <Overlay/>
            <HeaderContainer>
                <Burger open={navIsOpen}
                    onClick={() => {
                        setNavIsOpen(true)
                        setIsShow()
                    }
                    }>
                    <BurgerLine></BurgerLine>
                    <BurgerLine></BurgerLine>
                    <BurgerLine></BurgerLine>
                </Burger>
                <Logo />
                <NavBar
                    headerHeight={headerHeight}
                    navIsOpen={navIsOpen}>
                    <CloseIcon
                        onClick={() => {
                            setNavIsOpen(false)
                            setIsHide()
                        }}
                    />
                    <List>
                        {
                            navLinks.map((obj) => (
                                <Item key={obj.text}>
                                    <HeaderLink to={obj.link}
                                        isColor={activeLink !== undefined && activeLink.link === obj.link}
                                        onClick={() => {
                                            setNavIsOpen(false)
                                        }}>
                                        {obj.text}
                                    </HeaderLink>
                                </Item>
                            ))}
                    </List>
                </NavBar>
            </HeaderContainer>
        </WrapperHeader>
    )
}

export default Header
