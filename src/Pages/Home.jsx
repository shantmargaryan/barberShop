import Hero from "../Components/Hero"
import HireCut from "../Components/HireCut"
import HomeAbout from "../Components/HomeAbout"
import WorkingHours from "../Components/WorkingHours"
import Pricing from "../Components/Pricing"
import Clients from "../Components/Clients"
function Home() {
    return (
        <>
            <Hero />
            <HireCut />
            <HomeAbout />
            <WorkingHours/>
            <Pricing/>
            <Clients/>
        </>
    )
}

export default Home