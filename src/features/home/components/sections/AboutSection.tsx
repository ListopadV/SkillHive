'use client';

import Sand from "@/assets/Sand.png";
import { SectionHeader } from "@/shared/ui/molecules/SectionHeader";
import { CardsContainer } from "@/shared/ui/organisms/CardsContainer";
import { FlowerLotusIcon, MoneyIcon, PresentationChartIcon, StrategyIcon } from '@phosphor-icons/react/dist/ssr';

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
    <section 
      className="relative w-full my-40 max-md:my-20"
    >
      <div className="px-4 sm:px-14">
        <SectionHeader 
        mainDirection="row"
        headerDirection="column"
        descriptionDirection="column"
        commentTitle={commentTitle}
        title="Connecting Businesses with the Marketing Talent"
        description={[
          'Our mission is to simplify recruitment while ensuring every placement fuels business growth and strengthens brand impact.',
          'Our curated network of marketing experts is ready to step in and deliver results tailored to your company\'s unique needs.'
        ]}
      />
      </div>

      {/* Cards Section */}
      <div className="w-full py-10 px-14"
            style={{
                backgroundImage: `url(${Sand.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}>
        <div className="relative">
          <CardsContainer 
            cards={cards.map((card, index) => (
              <div key={index} className=" glassmorphism rounded-lg flex-1 w-[314px] max-sm:flex-shrink-0 h-[440px] flex flex-col">
                {/* Card Header */}
                <div className="flex justify-between items-center justify-between h-16 px-6 pt-6 gap-24">
                  <card.icon className="w-12 h-12" />
                  <div className="text-right text-grey-6">
                    <div className="text-xs font-light tracking-wider">
                      {card.title}
                    </div>
                  </div>
                </div>

                {/* Card Title */}
                <div className="flex justify-center items-center flex-1 px-6">
                  <h3 className="text-xl text-base-light font-thin tracking-wider text-center leading-[1.5]">
                    {card.subtitle}
                  </h3>
                </div>

              {/* Нижний контейнер - description слева, профессии справа */}
              <div className="flex flex-row justify-between gap-10 px-6 pb-6 items-end">
                <div className="flex-1">
                  <p className="text-sm max-sm:text-xs max-md:text-sm text-grey-6 align-end font-light leading-relaxed tracking-wide">
                    {card.description}
                  </p>
                </div>
                <div className="flex flex-col gap-2 items-end">
                  {card.professions.map((profession, profIndex) => (
                    <div 
                      key={profIndex} 
                      className="bg-main-5 text-base-light text-xs rounded border border-main-10 text-center whitespace-nowrap"
                      style={{
                        paddingLeft: Math.max(8, profession.length),
                        paddingRight: Math.max(8, profession.length),
                        paddingTop: 4,
                        paddingBottom: 4
                      }}
                    >
                      {profession}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            ))}
            containerClassName="gap-10"
            arrowsBreakpoint="sm"
            scrollStep={324}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;