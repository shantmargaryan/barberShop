import { Section, Container } from "../../styled/mixStyle"
import { FirstTitle, Item, List, UniversalImg, Content, SmallTitle, Price, UniversalText } from "../Cuts/styled"
import useSWR from "swr"
import { fetcher } from "../../Helpers/fetcher"
function Cuts() {

    const { data, error } = useSWR("http://localhost:3000/Services", fetcher)
    if (error) return <div>Failed to load</div>

    return (
        <Section>
            <Container>
                <FirstTitle>
                    {
                        data?.BarberSpaTitle
                    }
                </FirstTitle>
                <List>
                    {data?.BarberSpa?.map((item) => (
                        <Item key={item?.id}>
                            <UniversalImg src={item?.img} alt="cuts" />
                            <Content>
                                <SmallTitle>
                                    {
                                        item?.smallTitle
                                    }
                                </SmallTitle>
                                <Price>
                                    ${item?.price}
                                </Price>
                            </Content>
                            <UniversalText>
                                {
                                    item?.Text
                                }
                            </UniversalText>
                        </Item>
                    ))}
                </List>
            </Container>
        </Section>
    )
}

export default Cuts