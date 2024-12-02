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

function UniversalHero({ background = "", title = "" }) {

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
                        About
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