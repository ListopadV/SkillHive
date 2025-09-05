import { Main} from "@/layout/Main"
import { Footer } from "@/layout/Footer"
import {Header} from "@/layout/Header"
import HeroSection from "../components/sections/HeroSection"
import { PartnersSection } from "../components/sections/PartnersSection"
import {AboutSection} from "../components/sections/AboutSection"
import { PricingSection } from "../components/sections/PricingSection"
import { TeamSection } from "@/shared/ui/sections/TeamSection"
import { TestimonialsSection } from "@/shared/ui/sections/TestimonialsSection"
import { ContactUsSection } from "@/shared/ui/sections/ContactUsSection"
import { FAQSection } from "@/shared/ui/sections/FAQSection"

export const HomePage = () => {

    return (
            <Main>
                <Header />
                <HeroSection />
                <PartnersSection />
                <AboutSection />

                {/* <HowWeWorkSection /> */}
                <PricingSection />
                <TeamSection />
                <TestimonialsSection />
                <ContactUsSection />
                <FAQSection />
                <Footer />                
            </Main>
    )
}