import Text from "@/shared/ui/atoms/Text";
import { Icon } from "@phosphor-icons/react";
import React from "react";

interface AboutCardProps {
    Icon: React.ComponentType<React.ComponentProps<Icon>>;
    title: string;
    subtitle: string;
    description: string;
    professions: string[];
}

export const AboutCard = ({ Icon, title, subtitle, description, professions }: AboutCardProps) => {

    return (
        <div className="bg-main-5 backdrop-blur-sm rounded-lg flex-1 w-[314px] max-sm:flex-shrink-0 h-[440px] flex flex-col">
                {/* Card Header */}
                <div className="flex justify-between items-center justify-between h-16 px-6 pt-6 gap-24">
                  <Icon className="w-12 h-12" />
                  <div className="text-right">
                    <Text type="span" size="overline" color="grey" className="font-light tracking-wider">
                      {title}
                    </Text>
                  </div>
                </div>

                {/* Card Title */}
                <div className="flex justify-center items-center flex-1 px-[3.5]">
                  <Text type="h3" size="heading3" color="light" className="text-center">
                    {subtitle}
                  </Text>
                </div>

              {/* Нижний контейнер - description слева, профессии справа */}
              <div className="flex flex-row justify-between gap-8 px-6 pb-6 items-end">
                <div className="flex-1">
                  <Text type="p" size="caption" color="grey" className="align-end font-light tracking-wide">
                    {description}
                  </Text>
                </div>
                <div className="flex flex-col gap-2 items-end">
                  {professions.map((profession, profIndex) => (
                    <div 
                      key={profIndex} 
                      className="bg-main-5 rounded border border-main-10 text-center whitespace-nowrap"
                      style={{
                        paddingLeft: Math.max(8, profession.length),
                        paddingRight: Math.max(8, profession.length),
                        paddingTop: 4,
                        paddingBottom: 4
                      }}
                    >
                      <Text type="span" size="caption" color="grey">
                        {profession}
                      </Text>
                    </div>
                  ))}
                </div>
              </div>
            </div>
    )
}