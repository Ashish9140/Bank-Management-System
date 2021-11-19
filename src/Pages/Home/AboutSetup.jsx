import { About } from './About'
import { Footer } from './Footer'
import HomeHeader from './Header'
import { Nav } from './Nav'

export const AboutSetup = () => {
    return (
        <div>
            <Nav />
            <HomeHeader />
            <About />
            <Footer />
        </div>
    )
}
