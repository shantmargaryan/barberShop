import { Section, Container } from "../../styled/mixStyle"
import { FirstTitle, Item, List, UniversalImg, Content, SmallTitle, Price, UniversalText, ItemContent, ItemTitle, ItemPrice, ItemText } from "./styled"
import useSWR from "swr"
import { fetcher } from "../../Helpers/fetcher"
function Shaves() {

    const { data, error } = useSWR("http://localhost:3000/Services", fetcher)
    if (error) return <div>Failed to load</div>

    return (
        <Section>
            <Container>
                <FirstTitle>
                    {data?.shavesTitle}
                </FirstTitle>
                <List>
                    {
                        data?.Shaves?.map((item) => (
                            <Item key={item?.id}>
                                <UniversalImg src={item?.img} alt="" loading="lazy" />
                                <Content>
                                    <SmallTitle>
                                        {item?.smallTitle}
                                    </SmallTitle>
                                    <Price>
                                        ${
                                            item?.price
                                        }
                                    </Price>
                                </Content>
                                <UniversalText>
                                    {item?.Text}
                                </UniversalText>
                            </Item>
                        ))
                    }
                    <li style={{ backgroundImage: `url(${data?.Item?.background})` }}>
                        <ItemContent>
                            <ItemTitle>
                                {data?.Item?.smallTitle}
                            </ItemTitle>
                            <ItemPrice>
                                ${
                                    data?.Item?.price
                                }
                            </ItemPrice>
                        </ItemContent>
                        <ItemText>
                            {
                                data?.Item?.Text
                            }
                        </ItemText>
                    </li>
                </List>
            </Container>
        </Section>
    )
}

export default Shaves