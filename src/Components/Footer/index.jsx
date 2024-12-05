import { FooterSection, FooterContainer, FooterTitle, List, Item, LogoBox, Link, SmallText, LargText, Address, OpenHours, CopyRight, BarberText } from "./styled"
import useSWR from "swr"
import { fetcher } from "../../Helpers/fetcher"
import Logo from "../Logo"
function Footer() {
    const { data, error } = useSWR(`${import.meta.env.VITE_API_URL}/Footer`, fetcher)
    if (error) return <div>failed to load</div>

    return (
        <FooterSection style={{ backgroundImage: `url(img/FooterBg.jpg)` }}>
            <FooterContainer>
                <div>
                    <FooterTitle>
                        {
                            data?.title
                        }
                    </FooterTitle>
                    <List>
                        {
                            data?.List?.map((item) => (
                                <Item key={item?.id}>
                                    <Link to={"Services"}>
                                        {
                                            item?.text
                                        }
                                    </Link>
                                </Item>
                            ))
                        }
                    </List>
                </div>
                <LogoBox>
                    <Logo />
                    <SmallText>
                        {
                            data?.Content?.title
                        }
                    </SmallText>
                    <LargText>
                        {
                            data?.Content?.text
                        }
                    </LargText>
                </LogoBox>
                <div>
                    <FooterTitle>
                        {
                            data?.VisitUs?.title
                        }
                    </FooterTitle>
                    <Address>
                        {
                            data?.VisitUs?.address
                        }
                    </Address>
                    <OpenHours>
                        {
                            data?.VisitUs?.openHours
                        }
                    </OpenHours>
                </div>
            </FooterContainer>
            <CopyRight>
                Copyright © 2021
                <BarberText>
                    Barbero
                </BarberText> . All rights reserved
            </CopyRight>
        </FooterSection>
    )
}

export default Footer