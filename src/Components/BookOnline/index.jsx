import { BookOnlineSection, BookOnlineContainer, BookOnlineSubtitle, BookOnlineTitle, Button } from "./styled"
import useSWR from "swr"
import { fetcher } from "../../Helpers/fetcher"
import MeetingForm from "../meetingForm"
import useMeetingForm from "../../store/useMeetingForm"
import Overlay from "../../Utils/Overlay"
import useOverlay from "../../store/useOverlay"
function BookOnline() {
    const { open, close } = useMeetingForm()
    const { setIsShow } = useOverlay()

    const { data, error } = useSWR("http://localhost:3000/BookOnline", fetcher)
    if (error) return <div>failed to load</div>

    return (
        <BookOnlineSection style={{ backgroundImage: `url(${data?.background})` }}>
            <BookOnlineContainer>
                <BookOnlineSubtitle>
                    {data?.title}
                </BookOnlineSubtitle>
                <BookOnlineTitle>
                    {data?.text}
                </BookOnlineTitle>
                <Button type="button"
                    onClick={() => {
                        open()
                        setIsShow()
                    }}
                >
                    make an appointment
                </Button>
                <Overlay onClickOverlay={() => {
                    close()
                }} />
                <MeetingForm />
            </BookOnlineContainer>
        </BookOnlineSection>
    )
}

export default BookOnline