import {
    OurStoreSection,
    OurStoreContainer,
    Content,
    OurStoreSubtitle,
    OurStoreTitle,
    TabsStyled,
    TabListStyled,
    TabButton,
    TabText,
    ImgBox,
    OurStoreImg,
    Since,
    Year
} from "./styled"
import { useState } from "react";
import useSWR from "swr"
import { fetcher } from "../../Helpers/fetcher"
import { Tab, TabPanel } from 'react-tabs';
function OurStore() {
    const [activeTab, setActiveTab] = useState(1);

    const { data, error } = useSWR("http://localhost:3000/OurStory", fetcher)
    if (error) return <div>failed to load</div>

    if (!data?.Years || data?.Years.length === 0) return null;


    return (
        <OurStoreSection>
            <OurStoreContainer>
                <Content>
                    <OurStoreSubtitle>
                        {
                            data?.subtitle
                        }
                    </OurStoreSubtitle>
                    <OurStoreTitle>
                        {
                            data?.title
                        }
                    </OurStoreTitle>
                    <TabsStyled>
                        <TabListStyled>
                            {
                                data?.Years?.map((item) => (
                                    <Tab key={item?.id}>
                                        <TabButton type="button"
                                            tabButton={activeTab === item?.id}
                                            onClick={() => setActiveTab(item?.id)}
                                        >
                                            {item?.year}
                                        </TabButton>
                                    </Tab>
                                ))
                            }
                        </TabListStyled>

                        <TabPanel>
                            {
                                data?.Posts?.map((item) => (
                                    <TabText key={item?.id}>
                                        {
                                            item?.text
                                        }
                                    </TabText>
                                ))
                            }
                        </TabPanel>

                        <TabPanel>
                            {
                                data?.Posts?.map((item) => (
                                    <TabText key={item?.id}>
                                        {
                                            item?.text
                                        }
                                    </TabText>
                                ))
                            }
                        </TabPanel>
                    </TabsStyled>
                </Content>
                <ImgBox>
                    {
                        data?.ImgBox.map((item) => (
                            <OurStoreImg key={item?.id}
                                src={item?.img} alt="Our Store" />
                        ))
                    }
                    <Since>
                        {
                            data?.Since
                        }
                    </Since>
                    <Year>
                        {
                            data?.Sinceyear
                        }
                    </Year>
                </ImgBox>
            </OurStoreContainer>
        </OurStoreSection>
    )
}

export default OurStore