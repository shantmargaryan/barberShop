import useSWR from "swr"
import { fetcher } from "../Helpers/fetcher"
import UniversalHero from "../Components/UniversalHero"
function Contect() {

    const { data, error } = useSWR(`${import.meta.env.VITE_API_URL}/ContectHero`, fetcher)
    if (error) return <div>Failed to load</div>

    return (
        <>
            <UniversalHero
                background={data?.background}
                title={data?.title}
            />
        </>
    )
}

export default Contect