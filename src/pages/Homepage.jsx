import About from "../components/About"
import Companies from "../components/Companies"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
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
            <Companies/>
            <Contact/>
            <Footer/>
        </div>
    )
}

export default Homepage
