import UniversalHero from "../Components/UniversalHero"
import OurStore from "../Components/OurStore"
import WhyUs from "../Components/WhyUs"
import Clients from "../Components/Clients"
import useSWR from "swr"
import { fetcher } from "../Helpers/fetcher"
function About() {
    const { data, error } = useSWR("http://localhost:3000/AboutHero", fetcher)
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
        </>
    )
}

export default About