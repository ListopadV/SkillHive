'use client';

import heroBg from '@/assets/hero-bg.png';
import { useDropdown } from '@/shared/contexts/DropdownContext';
import { Button } from '@/shared/ui/atoms/Button';
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
          {/* Subtitle */}
          <h6 className="w-full text-sm max-sm:text-sm max-md:text-sm max-lg:text-md text-primary-500 font-thin mb-4 tracking-widest text-main leading-relaxed max-md:w-full md:max-w-[65%]">
            {commentTitle}
          </h6>

          {/* Main Title */}
          <h1 className="w-full text-5xl max-sm:text-3xl max-md:text-4xl max-lg:text-4xl text-base-light font-thin mb-6 tracking-wider leading-tight max-md:w-full md:max-w-[65%]">
            WHERE COMPANIES MEET MARKETING TALENT
          </h1>

          {/* Description */}
          <h5 className="w-full text-xl max-sm:text-base max-md:text-lg max-lg:text-xl text-grey font-light mb-8 leading-relaxed tracking-wide max-md:w-full md:max-w-[36%]">
            SkillHive bridges the gap between growing business and the professionals who drive brand success.
          </h5>

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
