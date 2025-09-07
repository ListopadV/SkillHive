'use client'

import Text from '@/shared/ui/atoms/Text';
import React from 'react';
import { StepContent } from '../../types/types';

interface StepCardProps extends StepContent {
    className?: string;
}

export const StepCardStep = ({ step, isLast }: { step: number; isLast?: boolean }) => {
    return (
      <div className="h-full relative flex flex-row items-start justify-between max-sm:items-end max-sm:justify-start max-sm:flex-col gap-4">
        <Text type="p" size="overline" color="main" className="font-light tracking-wide whitespace-nowrap">STEP {step}</Text>
        <div className="relative flex items-start justify-center h-full mt-0.75">
          <div className="w-3 h-3 bg-main rounded-full z-10" />
          {!isLast && (
            <div className="hidden sm:block absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-grey-8" />
          )}
          <div className="block sm:hidden absolute top-1/2 right-full w-screen h-px bg-grey-8" />
        </div>
      </div>
    );
  };
  

export const StepCard: React.FC<StepCardProps> = ({ Icon, title, description, className }) => {
    return (
        <div className={`relative my-5 rounded-xl flex flex-col px-7 py-9 gap-4 items-start justify-between overflow-hidden ${className}`}>
            <div className="absolute inset-0 bg-gradient-to-br from-base-dark to-main-5 rounded-xl" />
            
            <div className="relative z-10 flex flex-col gap-4 items-start justify-between h-full">
                <Icon size={32} className="text-main"  />       
                <Text type="h4" size="heading3" color="light" className="tracking-wider">
                    {title}
                </Text>
                <Text type="p" size="body2" color="grey" className="font-light tracking-wide">
                    {description}
                </Text>
            </div>
        </div>
    )
}
