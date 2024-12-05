import {
    HireCutSection,
    List,
    Item,
    ItemLink,
    Cut,
    CutHireTitle,
    CutHireLink
} from "./styled"
import useSWR from "swr"
import { fetcher } from "../../Helpers/fetcher"
function HireCut() {
    const { data, error } = useSWR(`${import.meta.env.VITE_API_URL}/HireCut`, fetcher)
    if (error) return <div>failed to load</div>

    return (
        <HireCutSection>
            <div>
                <List>
                    {
                        data?.CutStyle?.map((item) => (
                            <Item key={item?.id} style={{ backgroundImage: `url(${item?.background})` }}>
                                <ItemLink to="Services"></ItemLink>
                                <Cut>
                                    {item?.cut}
                                </Cut>
                                <CutHireTitle>
                                    {item?.title}
                                </CutHireTitle>
                                <CutHireLink to="Services">
                                    show more
                                </CutHireLink>
                            </Item>
                        ))
                    }
                </List>
            </div>
        </HireCutSection>
    )
}

export default HireCut