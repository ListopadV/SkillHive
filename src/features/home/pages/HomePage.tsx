'use client'


import { Footer } from "@/layout/Footer";
import { Header } from "@/layout/Header";
import { Main } from "@/layout/Main";
import { ContactUsSection } from "@/shared/ui/sections/ContactUsSection";
import { FAQSection } from "@/shared/ui/sections/FAQSection";
import { TeamSection } from "@/shared/ui/sections/TeamSection";
import { TestimonialsSection } from "@/shared/ui/sections/TestimonialsSection";
import { AboutSection } from "../components/sections/AboutSection";
import HeroSection from "../components/sections/HeroSection";
import { HowWeWorkSection } from "../components/sections/HowWeWorkSection";
import { PartnersSection } from "../components/sections/PartnersSection";
import { PricingSection } from "../components/sections/PricingSection";

export const HomePage = () => {

    return (
            <Main>
                <Header />
                <HeroSection />
                <PartnersSection />
                <AboutSection />

                <HowWeWorkSection />
                <PricingSection />
                <TeamSection />
                <TestimonialsSection />
                <ContactUsSection />
                <FAQSection />
                <Footer />                
            </Main>
    )
}