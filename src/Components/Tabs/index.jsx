import {
    TabsStyled,
    TabListStyled,
    TabButton,
    List,
    Item,
    TabTitle,
    TabText,
    Price
} from "./styled"
import { tabText } from "./array"
import { Tab, TabPanel } from "react-tabs"
import { useState } from "react"
import useSWR from "swr"
import { fetcher } from "../../Helpers/fetcher"
function PricingTabs() {
    const [tabButton, setTabButton] = useState(0)
    const { data, error } = useSWR("https://intermediate-dashing-turquoise.glitch.me/Pricing", fetcher)
    if (error) return <div>failed to load</div>


    return (
        <TabsStyled>
            <TabListStyled>
                {
                    tabText?.map((item, index) => (
                        <Tab key={item?.id}>
                            <TabButton
                                type="button"
                                onClick={() => setTabButton(index)}
                                tabButton={tabButton === index}>
                                {
                                    item?.title
                                }
                            </TabButton>
                        </Tab>
                    ))
                }
            </TabListStyled>

            <TabPanel>
                <List>
                    {
                        data?.StylingServices?.map((item, index) => (
                            <Item key={index}>
                                <div>
                                    <TabTitle>
                                        {
                                            item?.title
                                        }
                                    </TabTitle>
                                    <TabText>
                                        {
                                            item?.text
                                        }
                                    </TabText>
                                </div>
                                <Price>
                                    {
                                        item?.price
                                    }
                                </Price>
                            </Item>
                        ))
                    }
                </List>
            </TabPanel>

            <TabPanel>
                <List>
                    {
                        data?.Shaving?.map((item, index) => (
                            <Item key={index}>
                                <div>
                                    <TabTitle>
                                        {
                                            item?.title
                                        }
                                    </TabTitle>
                                    <TabText>
                                        {
                                            item?.text
                                        }
                                    </TabText>
                                </div>
                                <Price>
                                    {
                                        item?.price
                                    }
                                </Price>
                            </Item>
                        ))
                    }
                </List>
            </TabPanel>

            <TabPanel>
                <List>
                    {
                        data?.Wellbeing?.map((item, index) => (
                            <Item key={index}>
                                <div>
                                    <TabTitle>
                                        {
                                            item?.title
                                        }
                                    </TabTitle>
                                    <TabText>
                                        {
                                            item?.text
                                        }
                                    </TabText>
                                </div>
                                <Price>
                                    {
                                        item?.price
                                    }
                                </Price>
                            </Item>
                        ))
                    }
                </List>
            </TabPanel>
        </TabsStyled>
    )
}

export default PricingTabs