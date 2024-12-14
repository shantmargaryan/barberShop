import { ErrorSection, ErrorContainer, ErrorImg, ErrorTitle, ErrorText, ErrorLink } from "./styled"
import useSWR from "swr"
import { fetcher } from "../../Helpers/fetcher"
function Error() {

    const { data, error } = useSWR(`${import.meta.env.VITE_API_URL}/Error`, fetcher)
    if (error) return <div>failed to load</div>

    return (
        <ErrorSection>
            <ErrorContainer>
                <ErrorImg src={data?.img} alt="ErrorPage" />
                <ErrorTitle>
                    {data?.smallTitle}
                </ErrorTitle>
                <ErrorText>
                    {data?.text}
                    <ErrorLink to="/">
                        Home Page
                    </ErrorLink>
                </ErrorText>
            </ErrorContainer>
        </ErrorSection>
    )
}

export default Error