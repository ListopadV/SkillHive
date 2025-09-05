'use client';

import heroBg from '@/assets/hero-bg.png';
import { useDropdown } from '@/shared/contexts/DropdownContext';
import { Button } from '@/shared/ui/atoms/Button';
import { SectionHeader } from '@/shared/ui/molecules/SectionHeader';
import React from 'react';

export const HeroSection: React.FC = () => {
  const { isDropdownOpen } = useDropdown();
  const commentTitle = "//\u00A0\u00A0YOUR PARTNER IN MARKETING RECRUITMENT";
  
  return (
    <section 
        className="relative min-h-screen w-full hero-bg-responsive z-10"
      style={{
        backgroundImage: `url(${heroBg.src})`,
      }}
    >
      {/* Content */}
      <div className="flex flex-col items-start w-full relative z-10 px-4 sm:px-14 pt-8">
          <SectionHeader 
            mainDirection="column"
            headerDirection="column"
            descriptionDirection="column"
            commentTitle={commentTitle}
            title="WHERE COMPANIES MEET MARKETING TALENT"
            description={[
              'SkillHive bridges the gap between growing business and the professionals who drive brand success.'
            ]}
            className="mb-8"
          />

          {/* Buttons */}
          {!isDropdownOpen && (
            <div className="flex flex-row max-sm:flex-col gap-2 sm:gap-4 max-sm:w-full relative z-50">
              <Button variant="primary" size="lg" className="w-full max-sm:w-auto">
                Hire Us
              </Button>
              <Button variant="secondary" size="lg" className="w-full max-sm:w-auto">
                Explore
              </Button>
            </div>
          )}
      </div>
    </section>
  );
};

export default HeroSection;
