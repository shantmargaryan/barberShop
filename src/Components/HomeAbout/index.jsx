import {
    HomeAboutSection,
    HomeAboutContainer,
    Content,
    HomeAboutSubtitle,
    HomeAboutTitle,
    HomeAboutText,
    SmallTitle,
    SmallText,
    List,
    Item,
    RazorImg
} from "./styled"
import useSWR from "swr"
import { fetcher } from "../../Helpers/fetcher"

function HomeAbout() {
    const { data, error } = useSWR(`${import.meta.env.VITE_API_URL}/HomeAbout`, fetcher)
    if (error) return <div>failed to load</div>

    return (
        <HomeAboutSection>
            <HomeAboutContainer>
                <Content>
                    <HomeAboutSubtitle>
                        {
                            data?.subtitle
                        }
                    </HomeAboutSubtitle>
                    <HomeAboutTitle>
                        {
                            data?.title
                        }
                    </HomeAboutTitle>
                    <HomeAboutText>
                        {
                            data?.text
                        }
                    </HomeAboutText>
                </Content>
                <List>
                    {
                        data?.List?.map((item) => (
                            <Item key={item?.id}>
                                <img src={item?.icon} />
                                <div>
                                    <SmallTitle>
                                        {
                                            item?.title
                                        }
                                    </SmallTitle>
                                    <SmallText>
                                        {
                                            item?.text
                                        }
                                    </SmallText>
                                </div>
                            </Item>
                        ))
                    }
                </List>
                <RazorImg src="img/razor.png" alt="razor" />
            </HomeAboutContainer>
        </HomeAboutSection>
    )
}

export default HomeAbout