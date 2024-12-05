import {
    WorkingHoursSection,
    WorkingHoursContainer,
    WorkingHoursImg,
    Content,
    BeforeTitle,
    WorkingHoursTitle,
    List,
    Item,
    OpenDays,
    OpenHours,
    BookingNumber,
    PhoneNumber
} from "./styled"
import useSWR from "swr"
import { fetcher } from "../../Helpers/fetcher"
function WorkingHours() {

    const { data, error } = useSWR(`${import.meta.env.VITE_API_URL}/WorkingHours`, fetcher)
    if (error) return <div>failed to load</div>

    return (
        <WorkingHoursSection style={{ backgroundImage: `url(${data?.background})` }}>
            <WorkingHoursContainer>
                <WorkingHoursImg src={data?.img} alt="salon" loading="lazy" />
                <Content>
                    <BeforeTitle>{data?.subtitle}</BeforeTitle>
                    <WorkingHoursTitle>
                        {data?.title}
                    </WorkingHoursTitle>
                    <List>
                        {data?.OpenDays?.map((item) => (
                            <Item key={item?.id}>
                                <OpenDays>{item?.daysOfTheWeek}</OpenDays>
                                <OpenHours>{item?.hours}</OpenHours>
                            </Item>
                        ))}
                    </List>
                    <BookingNumber>{data?.number}</BookingNumber>
                    <PhoneNumber href={`tel:${data?.phoneNumber}`}>
                        {data?.phoneNumber}
                    </PhoneNumber>
                </Content>
            </WorkingHoursContainer>
        </WorkingHoursSection>
    )
}

export default WorkingHours