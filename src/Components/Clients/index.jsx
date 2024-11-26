import {
    ClientsSection,
    ClientsContainer,
    ClientsSubtitle,
    ClientsTitle,
    ClientsText,
    Name,
    Exprience,
} from "./styled"
import Haircuts from "../Haircuts";
import useSWR from "swr"
import { fetcher } from "../../Helpers/fetcher"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

function Clients() {
    const { data, error } = useSWR("http://localhost:3000/ClientsSay", fetcher)
    if (error) return <div>failed to load</div>

    return (
        <>
            <ClientsSection style={{ backgroundImage: `url(img/ContentBg.png)` }}>
                <ClientsContainer>
                    <Swiper
                        navigation={true}
                        modules={[Navigation]}
                    >
                        {
                            data?.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <ClientsSubtitle>
                                        {
                                            item?.subtitle
                                        }
                                    </ClientsSubtitle>
                                    <ClientsTitle>
                                        {
                                            item?.title
                                        }
                                    </ClientsTitle>
                                    <ClientsText>
                                        {
                                            item?.text
                                        }
                                    </ClientsText>
                                    <Name>
                                        {
                                            item?.name
                                        }
                                    </Name>
                                    <Exprience>
                                        {
                                            item?.experience
                                        }
                                    </Exprience>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </ClientsContainer>
            </ClientsSection>
            <Haircuts/>
        </>
    )
}

export default Clients