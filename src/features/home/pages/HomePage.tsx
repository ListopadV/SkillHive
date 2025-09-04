import { Main} from "@/layout/Main"
import { Footer } from "@/layout/Footer"
import {Header} from "@/layout/Header"
import HeroSection from "../components/sections/HeroSection"
import { PartnersSection } from "../components/sections/PartnersSection"
import {AboutSection} from "../components/sections/AboutSection"
import { PricingSection } from "../components/sections/PricingSection"

export const HomePage = () => {

    return (
            <Main>
                <Header />
                <HeroSection />
                <PartnersSection />
                <AboutSection />

                {/* <HowWeWorkSection /> */}
                <PricingSection />
                <Footer />                
            </Main>
    )
}