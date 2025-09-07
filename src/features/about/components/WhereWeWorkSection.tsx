import whereWeWorkBackground from "@/assets/whereWeWork-bg.png"
import { Container } from "@/layout/Container"
import { Section } from "@/layout/Section"
import { SectionHeader } from "@/shared/ui/molecules/SectionHeader"

export const WhereWeWorkSection = () => {

    const commentTitle = "//\u00A0\u00A0WHERE WE WORK"
    return (

        <Section className="py-40">
            
            <Container>
            <SectionHeader 
                    mainDirection="row"
                    headerDirection="column"
                    descriptionDirection="column"
                    commentTitle={commentTitle}
                    title="GLOBAL REACH WITH LOCAL MARKETING EXPERTISE"
                    description={[
                        "SkillHive connects businesses with top marketing professionals worldwide — from strategists in Europe to creative specialists across Asia and North America."
                    ]}
                    descriptionClassName="sm:max-w-[32%]"
                    titleClassName="sm:max-w-[75%]"
                />
            <div className="w-full my-30 h-[700px] md:h-[700px] h-[400px] md:bg-[length:100%_700px] bg-cover" style={{
                backgroundImage: `url(${whereWeWorkBackground.src})`,
                backgroundPosition: 'center',   
                backgroundRepeat: 'no-repeat',
            }} />
            </Container>
            
            


        </Section>
    )
}