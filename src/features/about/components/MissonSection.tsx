import missionBackground from "@/assets/mission-bg.png"
import { Container } from "@/layout/Container"
import { Section } from "@/layout/Section"
import Button from "@/shared/ui/atoms/Button"
import { Checkbox } from "@/shared/ui/atoms/Checkbox"
import Text from "@/shared/ui/atoms/Text"
import { SectionHeader } from "@/shared/ui/molecules/SectionHeader"

const options = [
    {
        id: 'speed',
        title: 'Speed',
        explanation: 'Find the right talent faster than traditional hiring'
    },
    {
        id: 'quality',
        title: 'Quality',
        explanation: 'Only vetted, high-performing professionals'
    },
    {
        id: 'global-reach',
        title: 'Global Reach',
        explanation: 'Access talent from multiple markets'
    }
]

const statistics = [
        {
            id: '2022',
            metric: '97%',
            text: 'Top marketing professionals matched to the right roles.'
        },
        {
            id: '2023',
            metric: '43H',
            text: 'Average time to fill a marketing position with the candidate.'
        },
        {
            id: '2024',
            metric: '500+',
            text: 'Vetted marketing experts ready to drive your brand.'
        },
]

export const MissonSection = () => {
    const commentTitle = "//\u00A0\u00A0OUR MISSION"

    return (
        <>
            <Section className="py-30" style={{ 
                backgroundImage: `url(${missionBackground.src})`,
                backgroundSize: '50% auto',
                backgroundPosition: 'left center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            
            <Container className="flex flex-row">
                <div className="flex-1" />
                
                <div className="flex-1 max-w-[42.5%]">
                    <SectionHeader 
                        mainDirection="column"
                        headerDirection="column"
                        descriptionDirection="column"
                        commentTitle={commentTitle}
                        title="CONNECTING COMPANIES WITH MARKETING TALENT THAT DRIVES GROWTH"
                        description={[
                            "We exist to simplify and accelerate the way businesses hire top marketing professionals worldwide."
                        ]}
                        
                    />
                    <div className="flex flex-col gap-4 my-4">
                        {options.map((item) => (
                            <div key={item.id} className="flex flex-row gap-2">
                                <Checkbox 
                                    checked={true}
                                    size="md"
                                    round={true}
                                />
                                <Text type="p" size="body2" color="grey" className="font-light leading-relaxed tracking-wide">
                                    <Text type="span" size="body2" color="light" fontWeight="medium">{item.title}</Text> {item.explanation}
                                </Text>
                            </div>

                        ))}
                    </div>

                    <Text type="p" size="body2" color="grey" className="font-light leading-relaxed tracking-wide">
                        At SkillHive, we simplify marketing recruitment by connecting ambitious companies with exceptional marketing professionals worldwide fast, precise, and with a human touch. Our curated network of marketing experts is ready to step in and deliver results tailored to your company&apos;s unique needs.
                    </Text>
                    <Button variant="secondary" size="lg" className="mt-6 pl-0 pr-0">
                        Contact Us
                    </Button>
                </div>
            </Container>
        </Section>

        <Section>
            <Container className="flex flex-row justify-between">
                <Text type="p" size="heading3" color="light" className="max-w-[15%]">
                    SEE HOW FAR WE&apos;VE COME
                </Text>
                <div className="flex flex-row gap-8 max-w-[60%]">
                    {statistics.map((item) => (
                        <div key={item.id} className="flex flex-col gap-2 items-start">
                            <Text type="p" size="heading2" color="light" fontWeight="medium">{item.metric}</Text>
                            <Text type="p" size="body2" color="grey" className="font-light leading-relaxed tracking-wide">{item.text}</Text>
                        </div>
                    ))}
                </div>   
            </Container>
        </Section>
        </>
    )
}