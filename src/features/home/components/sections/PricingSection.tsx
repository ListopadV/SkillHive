'use client'

import { Container } from "@/layout/Container";
import { Section } from "@/layout/Section";
import { SectionHeader } from "@/shared/ui/molecules/SectionHeader";
import { StackIcon, StackSimpleIcon } from '@phosphor-icons/react/dist/ssr';
import { PriceCardContent } from '../../types/types';
import { PriceCard } from '../PricingSection/PriceCard';
import pricingBg from '@/assets/pricing-bg.png';

const priceCards: PriceCardContent[] = [
    {
        Icon: StackSimpleIcon,
        title: "BASIC",
        description: "Perfect for small businesses looking to hire their first marketing professional quickly",
        price: 499,
        options: [
            "Access to curated marketing talent",
            "Screening and vetting of candidates",
            "Shortlist of top 3 candidates",
            "Email support"
        ]
    },
    {
        Icon: StackIcon,
        title: "PROFESSIONAL",
        description: "Ideal for growing teams needing multiple hires with specialized skills",
        price: 999,
        options: [
            "Everything in Starter plan",
            "Priority candidate matching", 
            "Interview scheduling support",
            "Up to 5 candidate shortlists"
        ]
    },
    {
        Icon: StackIcon,
        title: "ENTERPRICE",
        description: "Tailored solution for large companies with ongoing marketing recruitment needs.",
        price: "CUSTOM PRICING",
        options: [
            "Dedicated account manager",
            "Unlimited candidate sourcing",
            "Custom recruitment strategy",
            "Team onboarding support"
        ]
    }
]

export const PricingSection = () => {

    const commentTitle = "//\u00A0\u00A0PRICING";

    return (
        <Section className="max-sm:bg-transparent py-30 max-sm:py-5">
            <Container>
                <SectionHeader 
                    mainDirection="row"
                    headerDirection="column"
                    descriptionDirection="column"
                    commentTitle={commentTitle}
                    title="DISCOVER WHAT CLIENTS SAY ABOUT SKILLHIVE"
                    description={[
                        'Discover how SkillHive connects businesses with top marketing professionals quickly, efficiently, and reliably.'
                    ]}
                    descriptionClassName="sm:max-w-[32%]"
                    titleClassName="sm:max-w-[75%]"
                />

                <div 
                style={{
                    backgroundImage: `url(${pricingBg.src})`,
                }}
                className="pt-20 pb-50 max-sm:pb-20 flex flex-wrap w-full gap-6 mt-16 max-sm:mt-4 max-sm:pt-10 price-section">
                    {priceCards.map((item, index) => (
                        <PriceCard 
                            key={index} 
                            {...item} 
                            isHighlighted={index === 1}
                            className={`flex-1 min-w-[340px] h-[580px] ${index === 1 && 'relative lg:-mt-8 z-10'}`} 
                        />
                    ))}
                </div>
            </Container>


        </Section>
    )
}