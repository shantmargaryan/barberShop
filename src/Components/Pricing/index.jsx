import {
    PricingSection,
    PricingContainer,
    PricingSubtitle,
    PricingTitle,
    PricingImg,
} from "./styled"
import useSWR from "swr"
import { fetcher } from "../../Helpers/fetcher"
import PricingTabs from "../Tabs"
function Pricing() {
    const { data, error } = useSWR("http://localhost:3000/Pricing", fetcher)
    if (error) return <div>failed to load</div>


    return (
        <PricingSection style={{ backgroundImage: `url(${data?.background})` }}>
            <PricingContainer>
                <div>
                    <PricingSubtitle>
                        {
                            data?.subtitle
                        }
                    </PricingSubtitle>
                    <PricingTitle>
                        {
                            data?.title
                        }
                    </PricingTitle>
                    <PricingImg src={data?.img} alt="" loading="lazy" />
                </div>
                <PricingTabs/>
            </PricingContainer>
        </PricingSection>
    )
}

export default Pricing