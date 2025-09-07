'use client'

import Button from "@/shared/ui/atoms/Button";
import { Checkbox } from '@/shared/ui/atoms/Checkbox';
import Text from '@/shared/ui/atoms/Text';
import React from 'react';
import { PriceCardContent } from '../../types/types';

interface PriceCardProps extends PriceCardContent {
    className?: string;
    isHighlighted?: boolean;
}

export const PriceCard: React.FC<PriceCardProps> = ({ Icon, title, description, price, options, className, isHighlighted = false }) => {

    return (
        <div className={`w-full flex flex-col justify-between items-start px-6 py-8  w-full gap-7 rounded-lg 
            ${isHighlighted ? 'bg-gradient-to-b from-base-light-dark via-main-5 via-170% to-base-light-dark' : 'bg-main-5'}
            ${className}`}>
            <div className="bg-main-10 p-1.5 rounded-sm">
                <Icon size={24} className="text-main" />
            </div>

            <div>
                <Text type="h3" size="heading3" color="light">{title}</Text>
                <Text type="p" size="body2" color="grey" className="mt-2">{description}</Text>
            </div>

            <div>
                {typeof price == 'number' ? 
                    <div className="flex flex-row items-end  gap-1">
                        <Text type="span" size="heading2" color="light" className="tracking-wider">${price} </Text>
                        <Text type="p" size="body2" color="grey" className="tracking-wider"> / placement</Text>
                    </div> : 
                    <Text type="span" size="heading2" color="light" className="tracking-wider">{price}</Text>
                }
            </div>

            <div className="flex flex-col gap-3">
                <Text type="p" size="body1-medium" color="light">Included:</Text>
                <>
                    {options.map((option, index) => (
                        <div key={index} className="flex flex-row items-center gap-2">
                            <Checkbox 
                                checked={true}
                                size="md"
                                round={true}
                            />
                            <Text type="p" fontWeight="thin" size="body2" color="grey">{option}</Text>
                        </div>
                    ))}
                </>
            </div>

            <Button variant="primary" size="lg" className="w-full">
                Get Started
            </Button>

        </div>
    )
}