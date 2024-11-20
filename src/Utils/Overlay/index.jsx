import { OverlayCurrent } from "./styled"
import useOverlay from "../../store/useOverlay"
import useNav from "../../Components/Header/useNav";
import PropTypes from 'prop-types';
Overlay.propTypes = {
    onClickOverlay: PropTypes.func
}
function Overlay({ onClickOverlay = () => { } }) {
    const {setNavIsOpen} = useNav()
    const { isShow, setIsHide } = useOverlay()
    return (
        <OverlayCurrent
            show={isShow}
            onClick={() => {
                setIsHide()
                onClickOverlay()
                setNavIsOpen(false)
            }}
        >
        </OverlayCurrent>
    )
}

export default Overlay