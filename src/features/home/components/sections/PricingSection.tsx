import pricingBg from '@/assets/PricingBackground.png';
import { PriceCardContent } from '../../types/types';

import { StackIcon, StackSimpleIcon } from '@phosphor-icons/react/dist/ssr';
import { PriceCard } from '../PricingSection/PriceCard';

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
            "Everythung in Starter plan",
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
        <section className="w-full pt-30 max-sm:bg-transparent" style={{
            backgroundImage: `url(${pricingBg.src})`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100%'
        }}>
            <div className="px-14">
                <div className="flex flex-row max-md:flex-col w-full justify-between items-center">
                    
                    <div className="flex-1 max-sm:w-full">
                        <h6 className="mb-5 text-sm max-sm:text-sm max-md:text-sm max-lg:text-md text-main font-thin tracking-widest leading-relaxed">
                            {commentTitle}
                        </h6>

                        <h2 className="text-3xl max-sm:text-2xl max-md:text-3xl max-lg:text-3xl font-thin tracking-wider leading-tight">
                            DISCOVER WHAT CLIENTS SAY ABOUT SKILLHIVE
                        </h2>
                    </div>

                    <div className="flex-1 max-sm:w-full">
                        <p className="text-base max-sm:text-sm max-md:text-base max-lg:text-lg text-grey-5 font-light leading-relaxed tracking-wide">
                            Discover how SkillHive connects businesses with top marketing professionals quickly, efficiently, and reliably.
                        </p>
                    </div>
                </div>


                <div className="mt-30 flex flex-wrap w-full justify-center items-end gap-6 mt-16">
                    {priceCards.map((item, index) => (
                        <PriceCard 
                            key={index} 
                            {...item} 
                            isHighlighted={index === 1}
                            className={`min-w-[340px] min-h-[580px] flex-1 max-w-sm ${index === 1 && 'relative sm:mb-15 -mt-0 z-10'}`} 
                        />
                    ))}
                </div>
            </div>


        </section>
    )
}