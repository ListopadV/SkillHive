import Daniel from "@/assets/Daniel.png"
import DanielBackground from "@/assets/DanielBackground.png"
import Emily from "@/assets/Emily.png"
import Michael from "@/assets/Michael.png"
import Nguyen from "@/assets/Nguyen.png"
import testimonialsBackground from "@/assets/testimonialsBackground.png"
import { TestimonialsCard } from "@/features/home/components/TestimonialsSection/TestimonialsCard"
import { Container } from "@/layout/Container"
import { Section } from "@/layout/Section"
import { SectionHeader } from "../molecules/SectionHeader"
import { CardsContainer } from "../organisms/CardsContainer"


const testimonials = [
    {
      "avatar": Emily,
      "description": "SkillHive helped us find top marketing talent faster than we expected.",
      "name": "EMILY ROBERTS",
      "position": "CMO",
    },
    {
      "avatar": Daniel,
      "name": "DANIEL CARTER",
      "position": "CEO",
      "backgroundImage": DanielBackground
    },
    {
      "avatar": Nguyen,
      "description": "We filled a critical marketing role within days thanks to SkillHive.",
      "name": "SOPHIA NGUYEN",
      "position": "Head of Marketing",
    },
    {
      "avatar": Michael,
      "description": "The quality of candidates was outstanding, every match was perfect.",
      "name": "MICHAEL THOMPSON",
      "position": "VP of Marketing",
    },
    {
      "avatar": Daniel,
      "description": "The platform's matching algorithm delivered perfect candidates every time.",
      "name": "JENNIFER LEWIS",
      "position": "HR Director",
    }
  ]

export const TestimonialsSection = () => {

    const commentTitle = "//\u00A0\u00A0TESTIMONIALS"

    return (
        <Section style={{
          backgroundImage: `url(${testimonialsBackground.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
      }}>
            <Container >

                <SectionHeader 
                    mainDirection="row"
                    headerDirection="column"
                    descriptionDirection="column"
                    commentTitle={commentTitle}
                    title="DISCOVER WHAT CLIENTS SAY ABOUT SKILLHIVE"
                    description={[
                        'Discover how SkillHive connects businesses with top marketing professionals quickly, efficiently, and reliably.'
                    ]}
                />
            </Container>

            <div className="relative pl-4 sm:pl-14">
                <CardsContainer 
                    cards={testimonials.map((item, index) => (
                        <TestimonialsCard key={index} 
                            avatar={item.avatar.src} 
                            description={item.description} 
                            name={item.name} 
                            position={item.position} 
                            backgroundImage={item.backgroundImage?.src} 
                        />
                    ))}
                    containerClassName="gap-6"
                    arrowsBreakpoint="sm"
                    arrowContainerClassName="pr-4 sm:pr-14"
                    arrowsPosition="top"
                    scrollStep={314}
                />
            </div>
        </Section>
    )
}