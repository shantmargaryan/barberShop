import UniversalHero from "../Components/UniversalHero"
import Error from "../Components/Error"
import useSWR from "swr"
import { fetcher } from "../Helpers/fetcher"
function Error404() {

    const { data, error } = useSWR(`${import.meta.env.VITE_API_URL}/Error`, fetcher)
    if (error) return <div>failed to load</div>

    return (
        <>
            <UniversalHero
                background={data?.background}
                title={data?.title}
            />
            <Error />
        </>
    )
}

export default Error404