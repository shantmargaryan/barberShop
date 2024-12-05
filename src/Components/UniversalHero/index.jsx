import PropTypes from 'prop-types';
import {
    HeroSection,
    HeroContainer,
    Title,
    Linksbox,
    Link,
    Dotted,
    Subtitle
} from "./styled"
import { useLocation } from 'react-router-dom';
function UniversalHero({ background = "", title = "" }) {

    const { pathname } = useLocation();
    const location = pathname.split("/")[1];

    return (
        <HeroSection style={{ backgroundImage: `url(${background})` }}>
            <HeroContainer>
                <Title>
                    {title}
                </Title>
                <Linksbox>
                    <Link to="/">
                        Home Page
                    </Link>
                    <Dotted></Dotted>
                    <Subtitle>
                        {location}
                    </Subtitle>
                </Linksbox>
            </HeroContainer>
        </HeroSection>
    )
}

UniversalHero.propTypes = {
    background: PropTypes.string,
    title: PropTypes.string,
};

export default UniversalHero