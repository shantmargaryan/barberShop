import { Container } from "../../styled/mixStyle"
import { WhyUsSection, Content, WhyUsSubtitle, WhyUsTitle, WhyUsText, List, Item, Image, SmallTitle } from "./styled"
import useSWR from "swr"
import { fetcher } from "../../Helpers/fetcher"
function WhyUs() {

    const { data, error } = useSWR("https://intermediate-dashing-turquoise.glitch.me/WhyUs", fetcher)
    if (error) return <div>failed to load</div>

    return (
        <WhyUsSection style={{ backgroundImage: `url(img/WorkingHoursBg.png)` }}>
            <Container>
                <Content>
                    <WhyUsSubtitle>
                        {data?.subtitle}
                    </WhyUsSubtitle>
                    <WhyUsTitle>{data?.title}</WhyUsTitle>
                    <WhyUsText>
                        {data?.text}
                    </WhyUsText>
                </Content>
                <List>
                    {
                        data?.List?.map((item) => (
                            <Item key={item?.id}>
                                <Image src={item?.icon} alt="icon" />
                                <SmallTitle>{item?.title}</SmallTitle>
                                <WhyUsText>{item?.text}</WhyUsText>
                            </Item>
                        ))
                    }
                </List>
            </Container>
        </WhyUsSection>
    )
}

export default WhyUs