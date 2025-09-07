'use client';

import Link from 'next/link';
import React from 'react';
import { Button } from '../shared/ui/atoms/Button';
import Text from '../shared/ui/atoms/Text';
import { navigationItems } from './navigation';

interface DropdownProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Dropdown: React.FC<DropdownProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;
  
    return (
      <div className="bg-base-dark absolute top-full left-0 right-0 z-50 max-md:block md:hidden">
        <div className="bg-transparent-50 backdrop-blur-sm border-b border-gray-200/10 sticky top-0 z-50">
          <div className="px-5 py-2 space-y-4">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-3 text-left hover:text-main transition-colors duration-200"
                onClick={onClose}
              >
                <Text type="span" size="heading1" color="light">
                  {item.name}
                </Text>
              </Link>
            ))}
  
            <div className="flex flex-col gap-2 py-4">
              <Button variant="primary" size="lg" className="w-full">
                Hire Us
              </Button>
            </div>
          </div>
  
          <div className="px-5 py-2">
            <Button variant="secondary" size="lg" className="w-full">
              Explore
            </Button>
          </div>
        </div>
      </div>
    );
  };
  