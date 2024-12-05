import { ImgBox, HireCutImg } from "./styled"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import useSwr from "swr"
import { fetcher } from "../../Helpers/fetcher"
function Haircuts() {
    const { data, error } = useSWR(`${import.meta.env.VITE_API_URL}/HireCutsImg`, fetcher)
    if (error) return <div>failed to load</div>

    return (
        <ImgBox>
            <Swiper
                spaceBetween={20}
            >
                {data?.map((item, index) => (
                    <SwiperSlide key={index}>
                        <HireCutImg src={item?.img} alt="" loading="lazy" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </ImgBox>
    )
}

export default Haircuts