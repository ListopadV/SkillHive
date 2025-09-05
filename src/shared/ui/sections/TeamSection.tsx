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

        <Section>

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
            />



                <div className="mt-18 max-md:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 w-full">
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
                                <h3 className="text-xl font-medium text-base-light">{member.name}</h3>
                                <p className="text-lg text-grey-5">{member.position}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>


        </Section>
    )
}