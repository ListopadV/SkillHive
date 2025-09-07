import { Main} from "@/layout/Main"
import { Footer } from "@/layout/Footer"
import {Header} from "@/layout/Header"
import { ContactUsSection } from "@/shared/ui/sections/ContactUsSection"
import { TestimonialsSection } from "@/shared/ui/sections/TestimonialsSection"

export const ContactPage = () => {

    return (
        <Main>
            <Header />
            <ContactUsSection isContactPage={true} />
            <TestimonialsSection />
            <Footer />                
        </Main>
    )
}