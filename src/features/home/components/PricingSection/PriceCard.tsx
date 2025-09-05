'use client'

import React from 'react';
import Button from "@/shared/ui/atoms/Button";
import { PriceCardContent } from '../../types/types';
import { Checkbox } from '@/shared/ui/atoms/Checkbox';

interface PriceCardProps extends PriceCardContent {
    className?: string;
    isHighlighted?: boolean;
}

export const PriceCard: React.FC<PriceCardProps> = ({ Icon, title, description, price, options, className, isHighlighted = false }) => {

    return (
        <div className={`flex flex-col justify-between items-start px-6 py-8  w-full gap-7 rounded-lg 
            ${isHighlighted ? 'bg-gradient-to-b from-base-light-dark via-main-5 via-170% to-base-light-dark' : 'bg-main-5'}
            ${className}`}>
            <div className="bg-main-10 p-1.5 rounded-sm">
                <Icon size={24} color="main" />
            </div>

            <div>
                <h3 className="text-base-white text-xl font-thin">{title}</h3>
                <p className="text-grey-5 text-sm mt-2">{description}</p>
            </div>

            <div className="text-grey-5 text-lg">
                {typeof price == 'number' ? 
                    <div className="flex flex-row items-end gap-1">
                        <span className="text-base-light text-3xl font-thin tracking-wider">${price} </span>
                        <p className="text-base-white text-sm font-thin tracking-wider"> / placement</p>
                    </div> : 
                    <span className="text-base-white text-2xl font-thin tracking-wider">{price}</span>
                }
            </div>

            <div className="flex flex-col gap-3">
                <p className="text-base-light text-lg">Included:</p>
                <>
                    {options.map((option, index) => (
                        <div key={index} className="flex flex-row items-center gap-2">
                            <Checkbox 
                                checked={true}
                                size="md"
                                round={true}
                            />
                            <p className="text-grey-5 text-sm">{option}</p>
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