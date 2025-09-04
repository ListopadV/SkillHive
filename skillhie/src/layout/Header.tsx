'use client';

import logo from "@/assets/logo.png";
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useDropdown } from '../shared/contexts/DropdownContext';
import { Button } from '../shared/ui/atoms/Button';

export const Header: React.FC = () => {
  const { isDropdownOpen, setIsDropdownOpen } = useDropdown();

  const toggleMobileMenu = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const navigationItems = [
    { name: 'Home', href: '/home' },
    { name: 'About', href: '/about' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Contact', href: '/contact' },
  ];

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
            <span className="text-main text-xl hidden sm:block font-thin">
              SkillHive
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
              >
                {item.name}
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
  
      </div>

             {isDropdownOpen && (
          <div className="max-md:block md:hidden absolute top-full left-0 right-0 z-50">
            <div className="border-t border-gray-200/10 border-b border-base-light glassmorphism">
              <div className="px-5 py-2 space-y-4">
                {navigationItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block py-3 text-left text-4xl text-base-light hover:text-main transition-colors duration-200"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}

                <div className="flex flex-col gap-2 py-4">
                  <Button variant="primary" size="md" className="w-full">
                    Hire Us
                  </Button>
                </div>
              </div>
              </div>
              <div className="px-5 py-2">
                <Button variant="secondary" size="md" className="w-full">
                  Explore
                </Button>
            </div>
          </div>
        )}
    </header>
  );
};

export default Header;