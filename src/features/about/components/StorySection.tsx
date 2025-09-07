import { Container } from "@/layout/Container"
import { Section } from "@/layout/Section"
import Text from "@/shared/ui/atoms/Text"
import { SectionHeader } from "@/shared/ui/molecules/SectionHeader"

export const StorySection = () => {
    
    const commentTitle = "//\u00A0\u00A0OUR STORY"
    return (
        <Section className="py-40">
                
                <div className="border border-bottom-0 border-grey-8 p-10 rounded-xl mx-auto max-w-[48%]">
                <SectionHeader 
                        mainDirection="column"
                        headerDirection="column"
                        descriptionDirection="column"
                        commentTitle={commentTitle}
                        title="DISCOVER OUR JOURNEY"
                        description={[]}
                    />

                    <div className="flex flex-col gap-4">   
                        <Text type="p" size="body1" color="grey" className="font-light leading-relaxed tracking-wide">
                            SkillHive started with a <Text type="span" size="body1" color="light" fontWeight="medium">simple idea in 2022</Text>: connecting businesses with the right marketing professionals shouldn&apos;t be complicated. We noticed how much <Text type="span" size="body1" color="light" fontWeight="medium">time and energy</Text> companies wasted searching for talent, and how many great specialists struggled to find the <Text type="span" size="body1" color="light" fontWeight="medium">right opportunities</Text>.
                        </Text>

                        <Text type="p" size="body1" color="grey" className="font-light leading-relaxed tracking-wide">
                            As we explored deeper, <Text type="span" size="body1" color="light" fontWeight="medium">it became clear</Text> that this gap between companies and professionals was slowing down growth on both sides. We set out to create a platform that makes <Text type="span" size="body1" color="light" fontWeight="medium">finding and hiring</Text> top talent seamless, fast, and <Text type="span" size="body1" color="light" fontWeight="medium">human-centered</Text>.
                        </Text>

                        <Text type="p" size="body1" color="grey" className="font-light leading-relaxed tracking-wide">
                            In 2023, we expanded globally, building a network of marketing experts across <Text type="span" size="body1" color="light" fontWeight="medium">Europe, Asia, and North America</Text>. Today, SkillHive is more than just recruitment it&apos;s a bridge between ambition and opportunity, and we&apos;re excited to keep building it <Text type="span" size="body1" color="light" fontWeight="medium">together</Text>.
                        </Text>
                    </div>
            </div>
            
        </Section>
    )
}   