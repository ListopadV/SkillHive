'use client';

import Sand from "@/assets/Sand.png";
import { ArrowLeft, ArrowRight, FlowerLotus, Money, PresentationChart, Strategy } from "phosphor-react";

export const AboutSection = () => {
  const commentTitle = "//\u00A0\u00A0ABOUT US";
  
  const cards = [
    {
      icon: Strategy,
      title: "DRIVE BUSINESS GROWTH",
      subtitle: "STRATEGISTS",
      description: "Experts who shape campaigns, identify opportunities, and drive brand growth.",
      professions: ["MANAGER", "PLANNER", "STRATEGIST"]
    },
    {
      icon: FlowerLotus,
      title: "ENGAGE YOUR AUDIENCE",
      subtitle: "CONTENT CREATORS",
      description: "Creators who craft engaging content and grow brand presence online.",
      professions: ["WRITER", "BLOGGER", "CREATOR"]
    },
    {
      icon: Money,
      title: "MAXIMIZER CAMPAIGN ROI",
      subtitle: "BUYERS",
      description: "Professionals optimizing paid campaigns to maximize ROI and reach.",
      professions: ["PPC", "CEM", "CPM"]
    },
    {
      icon: PresentationChart,
      title: "MAKE YOUR BRAND SHINE",
      subtitle: "ANALYSTS & DESIGNERS",
      description: "From analyzing metrics to designing impactful visuals.",
      professions: ["3D", "UX/UI", "GRAPHIC"]
    }
  ];

  return (
    <section 
      className="relative w-full my-40 max-md:my-20"
    >
      <div className="px-14">
        {/* Comment Title */}
      <div className="mx-auto mb-4">
        <h6 className="text-sm max-sm:text-sm max-md:text-sm max-lg:text-md text-main font-thin tracking-widest leading-relaxed">
          {commentTitle}
        </h6>
      </div>

      {/* Main Content */}
      <div className="mx-auto mb-14">
        <div className="flex max-md:flex-col gap-12 max-md:gap-4">
          {/* Left Side */}
          <div className="flex-1">
            <h2 className="text-5xl max-sm:text-3xl max-md:text-4xl max-lg:text-5xl font-thin tracking-wider leading-tight max-w-[90%]">
              Connecting Businesses with the Marketing Talent
            </h2>
          </div>

          {/* Right Side */}
          <div className="flex-1 flex max-md:flex-col gap-8 max-md:gap-2">
            <div className="flex-1">
              <p className="text-lg max-sm:text-base max-md:text-lg max-lg:text-xl text-grey-5 font-light leading-relaxed tracking-wide">
                Our mission is to simplify recruitment while ensuring every placement fuels business growth and strengthens brand impact.
              </p>
            </div>
            <div className="flex-1">
                <p className="text-lg max-sm:text-base max-md:text-lg max-lg:text-xl text-grey-5 font-light leading-relaxed tracking-wide">
                  Our curated network of marketing experts is ready to step in and deliver results tailored to your company&apos;s unique needs.
                </p>
            </div>
          </div>
        </div>
      </div>
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
          <div className="flex flex-row overflow-x-hidden gap-10" id="cards-container" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {cards.map((card, index) => (
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
          </div>
          
          {/* Кастомные стрелки для скролла */}
          <div className="flex gap-4 justify-end mt-4 lg:hidden">
            <button 
              onClick={() => {
                const container = document.getElementById('cards-container');
                if (container) {
                  container.scrollBy({ left: -324, behavior: 'smooth' });
                }
              }}
              className="w-16 h-8 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors"
            >
              <ArrowLeft className="w-16 h-4" />
            </button>
            <button 
              onClick={() => {
                const container = document.getElementById('cards-container');
                if (container) {
                  container.scrollBy({ left: 324, behavior: 'smooth' });
                }
              }}
              className="w-16 h-8 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors"
            >
              <ArrowRight className="w-16 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;