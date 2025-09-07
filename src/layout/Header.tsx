'use client';

import logo from "@/assets/logo.png";
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useDropdown } from '../shared/contexts/DropdownContext';
import { Button } from '../shared/ui/atoms/Button';
import Text from '../shared/ui/atoms/Text';
import { Dropdown } from "./Dropdown";
import { navigationItems } from './navigation';

export const Header: React.FC = () => {
  const { isDropdownOpen, setIsDropdownOpen } = useDropdown();

  const toggleMobileMenu = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="bg-transparent-50 backdrop-blur-sm border-b border-gray-200/10 sticky top-0 z-50">
      <div className="mx-auto px-14">
        <div className="flex items-center justify-between h-18">
          {/* Logo and Brand */}
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src={logo.src}
              alt="SkillHive Logo"
              width={48}
              height={48}
              className="w-12 h-12"
            />
            <Text type="span" size="body1" color="main" className="hidden sm:block font-thin">
              SkillHive
            </Text>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
              >
                <Text type="span" size="body2" color="grey">
                  {item.name}
                </Text>
              </Link>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          {!isDropdownOpen && (
            <div className="hidden md:flex items-center gap-4">
              <Button variant="primary" size="md">
                Hire Us
              </Button>
            </div>
          )}

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="max-md:block md:hidden p-2 rounded-lg hover:bg-main-10 transition-colors duration-200"
            aria-label="Toggle mobile menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <div className="w-full h-1 bg-main-50 rounded"></div>
              <div className="w-full h-1 bg-main-50 rounded"></div>
              <div className="w-full h-1 bg-main-50 rounded"></div>
            </div>
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <Dropdown 
          isOpen={isDropdownOpen} 
          onClose={() => setIsDropdownOpen(false)} 
        />
      </div>
    </header>
  );
};

export default Header;