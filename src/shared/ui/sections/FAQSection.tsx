import { Container } from "@/layout/Container";
import { Section } from "@/layout/Section";
import Button from "../atoms/Button";
import { SectionHeader } from "../molecules/SectionHeader";
import { Accordion } from "../organisms/Accordion";

export const FAQSection = () => {
    const commentTitle = "//\u00A0\u00A0FAQ";

    const faqItems = [
        {
            id: "hire-speed",
            question: "HOW QUICKLY CAN WE HIRE A MARKETING PROFESSIONAL?",
            answer: "We can typically connect you with qualified marketing professionals within 48-72 hours. Our streamlined process and pre-vetted talent pool ensure rapid placement without compromising quality."
        },
        {
            id: "candidate-vetting",
            question: "DO YOU VET AND SCREEN ALL CANDIDATES?",
            answer: "Yes, every professional in our network is carefully screened for skills, experience, and cultural fit."
        },
        {
            id: "pricing-model",
            question: "WHAT IS YOUR PRICING MODEL?",
            answer: "We operate on a success-based fee structure. You only pay when we successfully place a candidate, with fees typically ranging from 15-25% of the annual salary, depending on the role and requirements."
        },
        {
            id: "guarantee",
            question: "DO YOU OFFER ANY GUARANTEES?",
            answer: "Yes, we offer a 90-day replacement guarantee. If a placed candidate doesn't work out within the first 90 days, we'll find a replacement at no additional cost."
        },
        {
            id: "specializations",
            question: "WHAT MARKETING SPECIALIZATIONS DO YOU COVER?",
            answer: "We cover all major marketing disciplines including digital marketing, content creation, social media management, SEO/SEM, email marketing, marketing automation, brand management, and marketing analytics."
        }
    ];

    return (
        <Section>
            <Container>
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-25">
                    <div className="flex-1">
                        <SectionHeader 
                            className="mb-[15px]"
                            mainDirection="column"
                            headerDirection="column"
                            descriptionDirection="column"
                            commentTitle={commentTitle}
                            title="Your Questions About Hiring Top Marketing Talent"
                            description={[
                                'Everything you need to know about finding and hiring top marketing talent with SkillHive quickly, reliably, and globally.'
                            ]}
                        />
                        <div className="flex flex-row items-center">
                            <p className="text-lg text-grey-5">Still have questions?</p>
                            <Button  variant='secondary' size="md">
                                Contact Us
                            </Button>
                        </div>
                    </div>

                    <Accordion 
                        className="mt-12 flex-1"
                        items={faqItems}
                        allowMultiple={true}
                        defaultOpenItems={["candidate-vetting"]}
                    />
                </div>
            </Container>
        </Section>
    );
};
