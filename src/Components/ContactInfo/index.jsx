import {
    ContactInfoSection,
    ContactInfoContainer,
    List,
    Item,
    FirstTitle,
    FirstText,
    Link
} from "./styled"
import useSWR from "swr"
import { fetcher } from "../../Helpers/fetcher"
function ContactInfo() {

    const { data, error } = useSWR(`${import.meta.env.VITE_API_URL}/ContactInfo`, fetcher)
    if (error) return <div>Failed to load</div>

    return (
        <ContactInfoSection>
            <ContactInfoContainer>
                <List>
                    {
                        data?.map((item) => (
                            <Item key={item?.id}>
                                <FirstTitle>
                                    {item?.title}
                                </FirstTitle>
                                <FirstText>
                                    {item?.text}
                                </FirstText>
                                <Link href={`tel:${item?.phoneNumber}`}>
                                    {item?.phoneNumber}
                                </Link>
                                <FirstText>
                                    {item?.openHours}
                                </FirstText>
                            </Item>
                        ))
                    }
                </List>
            </ContactInfoContainer>
        </ContactInfoSection>
    )
}

export default ContactInfo