import UniversalHero from "../Components/UniversalHero"
import OurStore from "../Components/OurStore"
import WhyUs from "../Components/WhyUs"
import Clients from "../Components/Clients"
import BookOnline from "../Components/BookOnline";
import useSWR from "swr"
import { fetcher } from "../Helpers/fetcher"
function About() {
    const { data, error } = useSWR(`${import.meta.env.VITE_API_URL}/AboutHero`, fetcher)
    if (error) return <div>Failed to load</div>
    return (
        <>
            <UniversalHero
                title={data?.title}
                background={data?.background}
            />
            <OurStore />
            <WhyUs/>
            <Clients/>
            <BookOnline/>
        </>
    )
}

export default About