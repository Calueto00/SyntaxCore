import NavBar from "../components/NavBar"
import HeroSection from "../components/HeroSection"
import AboutSection from "../components/AboutSection"
import ServiceSection from "../components/ServiceSections"
import Footer from "../components/Footer"
import Escolha from "../components/Escolha"
import ContactoSection from "../components/ContactoSection"
import Trabalho from "../components/Trabalho"

export default function HomePage(){

    return (
        <main className="relative">
            <NavBar></NavBar>
            <HeroSection></HeroSection>
            <AboutSection></AboutSection>
            <Escolha></Escolha>
            <Trabalho></Trabalho>
            <ServiceSection></ServiceSection>
            <ContactoSection></ContactoSection>
            <Footer></Footer>
        </main>
    )
}