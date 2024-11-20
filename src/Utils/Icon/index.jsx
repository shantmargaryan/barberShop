import sprite from "../../assets/sprite.svg"
import propTypes from "prop-types"

Icon.propTypes = {
    id: propTypes.string.isRequired,
    className: propTypes.string
}
function Icon({ id, className, }) {

    return (
        <svg className={className}>
            <use xlinkHref={sprite + "#" + id} />
        </svg>
    )
}

export default Icon