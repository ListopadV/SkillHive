import { ContactForm } from "@/features/home/components/ContactSection/ContactForm"
import { Container } from "@/layout/Container"
import { Section } from "@/layout/Section"
import { Checkbox } from "../atoms/Checkbox"
import { SectionHeader } from "../molecules/SectionHeader"

export const ContactUsSection = () => {

    const commentTitle = "//\u00A0\u00A0CONTACT US";
    return (
        <Section>
            <Container className="flex flex-col sm:flex-row sm:gap-25 gap-4">
                <div className="flex flex-col gap-4 flex-1">
                    <SectionHeader
                        mainDirection="column"
                        headerDirection="column"
                        descriptionDirection="column"
                        commentTitle={commentTitle}
                        title="GET IN TOUCH WITH SKILLHIVE"
                        description={[
                            "We're here to help your business connect with top marketing talent, quickly and efficiently."
                        ]}
                    />

                    <div className="flex flex-col gap-3">
                        <div className="flex flex-row items-center gap-2">
                            <Checkbox 
                                checked={true}
                                size="md"
                                round={true}
                            />
                            <p className="text-lg text-grey-5">Fast Response:</p>
                        </div>

                        <div className="flex flex-row items-center gap-2">
                            <Checkbox 
                                checked={true}
                                size="md"
                                round={true}
                            />
                            <p className="text-lg text-grey-5">Expert Guidance:</p>
                        </div>

                        <div className="flex flex-row items-center gap-2">
                            <Checkbox 
                                checked={true}
                                size="md"
                                round={true}
                            />
                            <p className="text-lg text-grey-5">Tailored Solutions:</p>
                        </div>
                    </div>
                </div>
                <ContactForm className="flex-1" />

            </Container>
        </Section>
    )
}