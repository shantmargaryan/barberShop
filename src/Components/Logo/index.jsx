import {
    LogoLink
} from "./styled"
import { Link } from "react-router-dom"
function Logo() {
    return (
        <Link to="/">
            <LogoLink id="logo" />
        </Link>
    )
}

export default Logo