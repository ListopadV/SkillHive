'use client';
import React from 'react';
import { useDropdown } from '@/shared/contexts/DropdownContext';
import { Button } from '@/shared/ui/atoms/Button';
import { SectionHeader } from '@/shared/ui/molecules/SectionHeader';
import { Section } from '@/layout/Section';
import { Container } from '@/layout/Container';
import heroBg from '@/assets/hero-bg.png';

export const HeroSection: React.FC = () => {
  const { isDropdownOpen } = useDropdown();
  const commentTitle = "//\u00A0\u00A0YOUR PARTNER IN MARKETING RECRUITMENT";
  
  return (
    <Section  
        className="py-20 min-h-screen hero-bg-responsive z-10 sm:pb-[600px] max-sm:py-10"
      style={{
        backgroundImage: `url(${heroBg.src})`,
      }}
    >
      {/* Content */}
      <Container className="flex flex-col items-start z-10">
          <SectionHeader 
            mainDirection="column"
            headerDirection="column"
            descriptionDirection="column"
            commentTitle={commentTitle}
            title="WHERE COMPANIES MEET MARKETING TALENT"
            titleSize="heading1"
            description={[
              'SkillHive bridges the gap between growing business and the professionals who drive brand success.'
            ]}
            descriptionClassName="sm:max-w-[55%]"
            className="mb-8 lg:max-w-[60%]"
            descriptionSize='body1'
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
      </Container>
    </Section>
  );
};

export default HeroSection;
