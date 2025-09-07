import Amazon from "@/assets/Amazon.png"
import Dribble from "@/assets/Dribble.png"
import Google from "@/assets/Google.png"
import Hubspot from "@/assets/Hubspot.png"
import Microsoft from "@/assets/Microsoft.png"
import Upwork from "@/assets/Upwork.png"
import Image from "next/image"
import { Section } from "@/layout/Section"

const partners = [Google, Microsoft, Amazon, Dribble, Hubspot, Upwork]

export const PartnersSection = () => {

    return (
        <Section className="overflow-hidden py-24 max-sm:py-5">
            {/* затемнение слева */}
            <div className="pointer-events-none absolute left-0 top-0 h-full w-20 sm:w-60 bg-gradient-to-r from-black to-transparent z-10" />
            {/* затемнение справа */}
            <div className="pointer-events-none absolute right-0 top-0 h-full w-20 sm:w-60 bg-gradient-to-l from-black to-transparent z-10" />

            {/* контейнер с бесконечной прокруткой */}
            <div className="flex flex-row animate-scroll bg-base-dark">
                {[...partners, ...partners].map((logo, i) => (
                <div
                    key={i}
                    className="flex-shrink-0 flex items-center justify-center px-2 sm:px-5"
                    style={{ width: "calc(100%/12)" }}
                >
                    <Image 
                        src={logo.src} 
                        alt="partner" 
                        className="h-12 w-auto object-contain" 
                        width={64} 
                        height={32} 
                    />
                </div>
                ))}
            </div>
        </Section>
    )
}