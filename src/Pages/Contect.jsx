import useSWR from "swr"
import { fetcher } from "../Helpers/fetcher"
import UniversalHero from "../Components/UniversalHero"
import ContactInfo from "../Components/ContactInfo"
import ContactForm from "../Components/ContactForm"
function Contect() {

    const { data, error } = useSWR(`${import.meta.env.VITE_API_URL}/ContactHero`, fetcher)
    if (error) return <div>Failed to load</div>

    return (
        <>
            <UniversalHero
                background={data?.background}
                title={data?.title}
            />
            <ContactInfo />
            <ContactForm />
        </>
    )
}

export default Contect