import UniversalHero from "../Components/UniversalHero"
import Cuts from "../Components/Cuts"
import Shaves from "../Components/Shaves"
import BeardStyling from "../Components/BeardStyling"
import BarberSpa from "../Components/BarberSpa"
import BookOnline from "../Components/BookOnline"
import useSWR from "swr"
import { fetcher } from "../Helpers/fetcher"
function Services() {

    const { data, error } = useSWR("http://localhost:3000/ServicesHero", fetcher)
    if (error) return <div>Failed to load</div>

    return (
        <>
            <UniversalHero
                background={data?.background}
                title={data?.title} />
                <Cuts/>
                <Shaves/>
                <BeardStyling/>
                <BarberSpa/>
                <BookOnline/>
        </>
    )
}

export default Services