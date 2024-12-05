import {
    HeroSection,
    HeroContainer,
    Background,
    Content,
    Title,
    HeroText,
    Button,
    List,
    Item,
    Subtitle,
    Link,
    SmallText
} from "./styled"
import useSWR from "swr"
import { fetcher } from "../../Helpers/fetcher"
import MeetingForm from "../meetingForm"
import useMeetingForm from "../../store/useMeetingForm"
import Overlay from "../../Utils/Overlay"
import useOverlay from "../../store/useOverlay"
function Hero() {
    const { open, close } = useMeetingForm()
    const { setIsShow } = useOverlay()
    const { data, error } = useSWR(`${import.meta.env.VITE_API_URL}/Hero`, fetcher)
    if (error) return <div>failed to load</div>

    return (
        <HeroSection>
            <Background style={{ backgroundImage: `url(${data?.background})` }}>
                <HeroContainer>
                    <Content>
                        <Title>
                            {data?.title}
                        </Title>
                        <HeroText>
                            {data?.text}
                        </HeroText>
                        <Button type="button"
                            onClick={() => {
                                open()
                                setIsShow()
                            }}
                        >
                            make a
                            n appointment
                        </Button>
                    </Content>
                    <Overlay onClickOverlay={() => {
                        close()
                    }} />
                    <MeetingForm />
                    <List>
                        {
                            data?.Contact?.map((item) => (
                                <Item key={item.id}>
                                    <Subtitle>
                                        {item?.title}
                                    </Subtitle>
                                    <SmallText>
                                        {item?.openDay}
                                    </SmallText>
                                    <Link href={`tel:${item?.phoneNumber}`}>
                                        {item?.phoneNumber}
                                    </Link>
                                    <SmallText>
                                        {item?.address}
                                    </SmallText>
                                </Item>
                            ))
                        }
                    </List>
                </HeroContainer>
            </Background>
        </HeroSection>
    )
}

export default Hero