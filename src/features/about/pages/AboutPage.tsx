import { Main} from "@/layout/Main"
import { Footer } from "@/layout/Footer"
import {Header} from "@/layout/Header"
import { MissonSection } from "../components/MissonSection"
import { StorySection } from "../components/StorySection"
import { WhereWeWorkSection } from "../components/WhereWeWorkSection"
import { AboutUsSection } from "../components/AboutUsSection"
import { TeamSection } from "@/shared/ui/sections/TeamSection"
import { TestimonialsSection } from "@/shared/ui/sections/TestimonialsSection"
import { ContactUsSection } from "@/shared/ui/sections/ContactUsSection"

export const AboutPage = () => {

    return (
        <Main>
                <Header />
                <AboutUsSection />
                <StorySection />
                <MissonSection />
                <WhereWeWorkSection />
                <TeamSection />
                <TestimonialsSection />
                <ContactUsSection />
                <Footer />                
            </Main>
    )
}