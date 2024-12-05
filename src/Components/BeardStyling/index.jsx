import { Section, Container } from "../../styled/mixStyle"
import { FirstTitle, Item, List, UniversalImg, Content, SmallTitle, Price, UniversalText, ItemContent, ItemTitle, ItemPrice, ItemText } from "./styled"
import useSWR from "swr"
import { fetcher } from "../../Helpers/fetcher"
function BeardStyling() {

    const { data, error } = useSWR("http://localhost:3000/Services", fetcher)
    if (error) return <div>Failed to load</div>

    return (
        <Section>
            <Container>
                <FirstTitle>
                    {
                        data?.BeardStylingTitle
                    }
                </FirstTitle>
                <List>
                    <li style={{ backgroundImage: `url(${data?.BeardStylingItem?.background})` }}>
                        <ItemContent>
                            <ItemTitle>
                                {
                                    data?.BeardStylingItem?.smallTitle
                                }
                            </ItemTitle>
                            <ItemPrice>
                                ${
                                    data?.BeardStylingItem?.price
                                }
                            </ItemPrice>
                        </ItemContent>
                        <ItemText>
                            {
                                data?.BeardStylingItem?.Text
                            }
                        </ItemText>
                    </li>
                    {
                        data?.BeardStyling?.map((item) => (
                            <Item key={item?.id}>
                                <UniversalImg src={item?.img} alt="BeardStyling" loading="lazy" />
                                <Content>
                                    <SmallTitle>
                                        {
                                            item?.smallTitle
                                        }
                                    </SmallTitle>
                                    <Price>
                                        ${
                                            item?.price
                                        }
                                    </Price>
                                </Content>
                                <UniversalText>
                                    {
                                        item?.Text
                                    }
                                </UniversalText>
                            </Item>
                        ))
                    }
                </List>
            </Container>
        </Section>
    )
}

export default BeardStyling