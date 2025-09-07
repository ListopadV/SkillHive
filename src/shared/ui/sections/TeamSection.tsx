import Alex from "@/assets/Alex.png";
import David from "@/assets/David.png";
import Ethan from "@/assets/Ethan.png";
import Isabella from "@/assets/Isabella.png";
import Liam from "@/assets/Liam.png";
import Oliwia from "@/assets/Oliwia.png";
import Samantha from "@/assets/Samantha.png";
import Sophia from "@/assets/Sophia.png";
import { Container } from "@/layout/Container";
import { Section } from "@/layout/Section";
import Image from "next/image";
import { SectionHeader } from "../molecules/SectionHeader";
import Text from "../atoms/Text";

const members = [
    {
        avatar: Alex,
        name: 'Alex Johnson',
        position: 'CEO & Founder',
    },
    {
        avatar: Samantha,
        name: 'Samantha Lee',
        position: 'Head of Marketing',
    },
    {
        avatar: David,
        name: 'David Smith',
        position: 'Recruitment Director',
    },
    {
        avatar: Oliwia,
        name: 'Olivia Brown',
        position: 'Senior Marketing Strategist',
    },
    {
        avatar: Ethan,
        name: 'Ethan Wilson',
        position: 'Digital Advertising Manager',
    },
    {
        avatar: Isabella,
        name: 'Isabella Davis',
        position: 'Content & Social Lead',
    },
    {
        avatar: Liam,
        name: 'Liam Martinez',
        position: 'Marketing Analyst',
    },
    {
        avatar: Sophia,
        name: 'Sophia Taylor',
        position: 'UX/UI Designer',
    }
];

export const TeamSection = () => {

    const commentTitle = "//\u00A0\u00A0TEAM";
    return (

        <Section className="pb-30 max-sm:pb-5">

        <Container>
            <SectionHeader 
                mainDirection="row"
                headerDirection="column"
                descriptionDirection="column"
                commentTitle={commentTitle}
                title="MEET THE EXPERTS BEHIND SKILLHIVE"
                description={[
                    'Our diverse team of marketing and recruitment professionals is dedicated to connecting your business with top talent worldwide.'
                ]}
                descriptionClassName="sm:max-w-[32%]"
                titleClassName="sm:max-w-[60%]"
            />



                <div className="mt-18 max-md:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 w-full">
                    {members.map((member, index) => (
                        <div key={index} className="flex gap-3 w-full">
                                <Image
                                    src={member.avatar.src}
                                    alt={member.name}
                                    width={128}      
                                    height={128}
                                    className="w-14 h-14 bg-gray-300 rounded-full flex-shrink-0"
                                />
                            <div className="flex flex-col justify-between">
                                <Text type="h3" size="body1-medium" color="light">{member.name}</Text>
                                <Text type="p" size="body2" color="grey">{member.position}</Text>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>


        </Section>
    )
}