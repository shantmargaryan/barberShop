import {
    Form,
    Input,
    TextArea,
    Button,
    CloseIcon,
} from "./styled"
import useMeetingForm from "../../store/useMeetingForm"
import useOverlay from "../../store/useOverlay"
function MeetingForm() {
    const { setIsHide } = useOverlay()
    const { show, close } = useMeetingForm()

    return (
        <Form action="#" method="post" show={show}>
            <CloseIcon onClick={() => {
                close()
                setIsHide()
            }} />
            <Input type="text" placeholder="Name" />
            <Input type="number" placeholder="Phone" />
            <TextArea cols="30" rows="10" placeholder="Message"></TextArea>
            <Button>Send</Button>
        </Form>
    )
}

export default MeetingForm