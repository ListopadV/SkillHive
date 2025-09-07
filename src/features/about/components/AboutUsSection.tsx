import { Section } from "@/layout/Section"
import Button from "@/shared/ui/atoms/Button"
import { SectionHeader } from "@/shared/ui/molecules/SectionHeader"
import { Container } from "@/layout/Container"

export const AboutUsSection = () => {

    const commentTitle = "//\u00A0\u00A0ABOUT US"
    return (
        <Section className="py-30">
            <Container className="text-center max-w-[50%] mx-auto">
                <SectionHeader 
                    mainDirection="column"
                    headerDirection="column"
                    descriptionDirection="column"
                    commentTitle={commentTitle}
                    title="BUILDING BRIDGES BETWEEN TALENT AND OPPORTUNITY"
                    description={[
                        "At SkillHive, we connect ambitious companies with exceptional marketing professionals worldwide fast, precise, and with a human touch."
                    ]}
                    titleSize="heading1"
                    descriptionSize="body1"
                    descriptionClassName="w-[70%] self-center"
                    titleClassName="self-center"
                    className="mb-10"
                />
                <Button variant="primary" size="lg">
                    Hire Us
                </Button>
            </Container>
        </Section>
    )
}