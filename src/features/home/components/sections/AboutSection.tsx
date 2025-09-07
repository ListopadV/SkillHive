'use client';

import Sand from "@/assets/Sand.png";
import { Container } from "@/layout/Container";
import { Section } from "@/layout/Section";
import { SectionHeader } from "@/shared/ui/molecules/SectionHeader";
import { CardsContainer } from "@/shared/ui/organisms/CardsContainer";
import { FlowerLotusIcon, MoneyIcon, PresentationChartIcon, StrategyIcon } from '@phosphor-icons/react/dist/ssr';
import { AboutCard } from "../AboutSection/AboutCard/AboutCard";

const cards = [
  {
    icon: StrategyIcon,
    title: "DRIVE BUSINESS GROWTH",
    subtitle: "STRATEGISTS",
    description: "Experts who shape campaigns, identify opportunities, and drive brand growth.",
    professions: ["MANAGER", "PLANNER", "STRATEGIST"]
  },
  {
    icon: FlowerLotusIcon,
    title: "ENGAGE YOUR AUDIENCE",
    subtitle: "CONTENT CREATORS",
    description: "Creators who craft engaging content and grow brand presence online.",
    professions: ["WRITER", "BLOGGER", "CREATOR"]
  },
  {
    icon: MoneyIcon,
    title: "MAXIMIZER CAMPAIGN ROI",
    subtitle: "BUYERS",
    description: "Professionals optimizing paid campaigns to maximize ROI and reach.",
    professions: ["PPC", "CEM", "CPM"]
  },
  {
    icon: PresentationChartIcon,
    title: "MAKE YOUR BRAND SHINE",
    subtitle: "ANALYSTS & DESIGNERS",
    description: "From analyzing metrics to designing impactful visuals.",
    professions: ["3D", "UX/UI", "GRAPHIC"]
  }
];


export const AboutSection = () => {
  const commentTitle = "//\u00A0\u00A0ABOUT US";
  return (
    <Section className="py-30"
    style={{
        backgroundImage: `url(${Sand.src})`,
        backgroundSize: 'contain',
        backgroundPosition: '40% center',
        backgroundRepeat: 'no-repeat'
      }}>
      <Container className="mb-20">
        <SectionHeader 
          mainDirection="row"
          headerDirection="column"
          descriptionDirection="row"
          commentTitle={commentTitle}
          title="CONNECTING BUSINESSES WITH THE MARKETING TALENT"
          description={[
            'Our mission is to simplify recruitment while ensuring every placement fuels business growth and strengthens brand impact.',
            'Our curated network of marketing experts is ready to step in and deliver results tailored to your company\'s unique needs.'
          ]}
          descriptionClassName="sm:max-w-[49%]"
          titleClassName="sm:max-w-[85%]"
      />
      </Container>

      {/* Cards Section */}
      <Container>
        <div className="relative">
          <CardsContainer 
            cards={cards.map((card, index) => (
              <AboutCard key={index} Icon={card.icon} title={card.title} subtitle={card.subtitle} description={card.description} professions={card.professions} />
            ))}
            containerClassName="gap-6"
            arrowsBreakpoint="md"
            scrollStep={324}
          />
        </div>
      </Container>
    </Section>
  );
};

export default AboutSection;