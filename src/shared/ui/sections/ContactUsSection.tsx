import { ContactForm } from "@/features/home/components/ContactSection/ContactForm"
import { Container } from "@/layout/Container"
import { Section } from "@/layout/Section"
import { EnvelopeIcon, PhoneIcon, TelegramLogoIcon } from "@phosphor-icons/react/dist/ssr"
import { Checkbox } from "../atoms/Checkbox"
import Text from "../atoms/Text"
import { SectionHeader } from "../molecules/SectionHeader"

const options = [
    {
        id: 1,
        Icon: EnvelopeIcon,
        title: 'Email',
        contact: 'contact@skillhive.com'
    },
    {
        id: 2,
        Icon: PhoneIcon,
        title: 'Email',
        contact: 'contact@skillhive.com'
    },
    {
        id: 3,
        Icon: TelegramLogoIcon,
        title: 'Email',
        contact: 'contact@skillhive.com'
    }
]

export const ContactUsSection = ({ isContactPage = false }: { isContactPage?: boolean }) => {

    const commentTitle = "//\u00A0\u00A0CONTACT US";
    return (        
        <Section className="py-30 max-sm:py-5">
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
                        className="sm:max-w-[75%]"
                    />

                    <div className="flex flex-col gap-3 mt-6">
                        <div className="flex flex-row items-center gap-2">
                            <Checkbox 
                                checked={true}
                                size="md"
                                round={true}
                            />
                            <Text type="p" size="body2" color="grey">Fast Response:</Text>
                        </div>

                        <div className="flex flex-row items-center gap-2">
                            <Checkbox 
                                checked={true}
                                size="md"
                                round={true}
                            />
                            <Text type="p" size="body2" color="grey">Expert Guidance:</Text>
                        </div>

                        <div className="flex flex-row items-center gap-2">
                            <Checkbox 
                                checked={true}
                                size="md"
                                round={true}
                            />
                            <Text type="p" size="body2" color="grey">Tailored Solutions:</Text>
                        </div>
                    </div>
                </div>
                <ContactForm className="flex-1 sm:w-[49%]" />
            </Container>

            {isContactPage && 
                <Container className="pt-10 flex flex-row gap-6 justify-between w-full">
                    {options.map((item) => (
                        <div key={item.id} className="w-full border border-grey-9 gap-4 rounded-lg flex flex-col gap-2 px-5 py-7">
                            <item.Icon size={48} className="p-2 text-main bg-main-10 rounded-sm" />
                            <Text type="p" size="body1" color="light" fontWeight="medium">{item.title}</Text>
                            <Text type="p" size="body2" color="grey">{item.contact}</Text>
                        </div>
                    ))}
                </Container>            
            }
        </Section>
    )
}