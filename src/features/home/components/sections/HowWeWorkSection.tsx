import { Container } from "@/layout/Container";
import { Section } from "@/layout/Section";
import { SectionHeader } from "@/shared/ui/molecules/SectionHeader";
import { StepCardContainer } from "../HowWeWorkSection/StepCardContainer";
import { FileIcon, HandCoinsIcon, HeadsetIcon, ListMagnifyingGlassIcon, UserCheckIcon, UserListIcon, } from "@phosphor-icons/react";
import { StepContent } from "../../types/types";


const steps: StepContent[] = [
    {
        Icon: FileIcon,
        title: "DISCOVERY & BRIEF",
        description: "We start by understanding your company, team needs, and the specific marketing roles you’re looking to fill. This step ensures we match you with the right talent."
    },
    {
        Icon: ListMagnifyingGlassIcon,
        title: "TALENT SOURCING",
        description: "Our team taps into the SkillHive network to identify top-tier marketing professionals, carefully screening candidates based on skills, experience, and cultural fit."
    },
    {
        Icon: UserListIcon,
        title: "CANDIDATE SHORTLIST",
        description: "We provide you with a curated shortlist of qualified candidates, complete with profiles, portfolios, and key achievements, so you can make informed decisions."
    },
    {
        Icon: UserCheckIcon,
        title: "INTERVIEW & SELECTION",
        description: "You conduct interviews (onsite or remote), while we assist with scheduling and feedback collection, ensuring a smooth selection process."
    },
    {
        Icon: HandCoinsIcon,
        title: "OFFER & ONBOARDING",
        description: "Once a candidate is selected, we support the offer process and facilitate onboarding to make the transition seamless for both the company and the new hire."
    },
    {
        Icon: HeadsetIcon,
        title: "FOLLOW-UP & SUPPORT",
        description: "After placement, we check in with both the company and the employee to ensure satisfaction, performance alignment, and long-term success."
    },
]

export const HowWeWorkSection = () => {

    const commentTitle = "//\u00A0\u00A0HOW WE WORK";

    return (
        <Section className="py-30 max-sm:py-5">
            <Container>
                <div className="flex gap-8 min-h-screen max-sm:flex-col">
                    <div className="sm:sticky top-25 h-fit sm:w-[75%] w-full">
                        <SectionHeader 
                            mainDirection="column"
                            headerDirection="column"
                            descriptionDirection="column"
                            commentTitle={commentTitle}
                            title="STEP BY STEP: FINDING YOUR MARKETING EXPERTS"
                            description={[
                                "We take the complexity out of marketing recruitment with a structured approach that saves time, reduces risk, and connects you only with the right-fit candidates."
                            ]}
                            
                            descriptionClassName="sm:max-w-[81.25%]"
                        />
                    </div>

                    <div className="flex flex-col relative sm:w-[49%]">
                        <div className="flex flex-col gap-0 pl-8 relative">
                        {steps.map((step, index) => (
                                        <StepCardContainer
                                        key={step.title}
                                            step={index + 1}
                                            isLast={index > steps.length -2}
                                            Icon={step.Icon}
                                            title={step.title}
                                            description={step.description}
                                        />
                                ))}
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    )
}