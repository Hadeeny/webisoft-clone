import About from "../components/About"
import Header from "../components/Header"
import Hero from "../components/Hero"
import Projects from "../components/Projects"
import Services from "../components/Services"

const Homepage = () => {
    return (
        <div>
            <Header/>
            <Hero/>
            <About/>
            <Services/>
            <Projects/>
        </div>
    )
}

export default Homepage
