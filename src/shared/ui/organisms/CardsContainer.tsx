'use client'

import React, { useId } from "react";

import { ArrowLeftIcon, ArrowRightIcon } from '@phosphor-icons/react/dist/ssr';

interface CardsContainerProps {
    cards: React.ReactNode[];
    containerClassName?: string;
    arrowClassName?: string;
    arrowContainerClassName?: string;
    showArrows?: boolean;
    arrowsBreakpoint?: 'sm' | 'md' | 'lg' | 'xl' | 'always' | 'never';
    scrollStep?: number;
    arrowsPosition?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
    isShown?: boolean;
}

export const CardsContainer = ({ 
    cards, 
    containerClassName, 
    arrowClassName,
    arrowContainerClassName,
    showArrows = true,
    arrowsBreakpoint = 'lg',
    scrollStep = 314,
    arrowsPosition = 'bottom-right',
    isShown = true
}: CardsContainerProps) => {

    const containerId = useId();

    const getArrowsClassName = () => {
        if (!showArrows || !isShown) return 'hidden';
        if (arrowsBreakpoint === 'always') return 'flex';
        if (arrowsBreakpoint === 'never') return 'hidden';
        return `${arrowsBreakpoint}:hidden flex`;
    };

    const getArrowsPosition = () => {
        const position = arrowsPosition || 'bottom-right';
        const [vertical, horizontal] = position.split('-');
        
        const verticalClass = vertical === 'top' ? 'mb-4' : 'mt-4';
        const horizontalClass = horizontal === 'left' ? 'justify-start' : 'justify-end';
        
        return `${verticalClass} ${horizontalClass}`;
    };

    const renderArrows = (position: 'top' | 'bottom') => {
        const currentPosition = arrowsPosition || 'bottom-right';
        const [vertical] = currentPosition.split('-');
        
        if (vertical !== position) return null;
        
        return (
            <div className={`gap-4 ${getArrowsPosition()} ${getArrowsClassName()} ${arrowContainerClassName || ''}`}>
                <button 
                    onClick={() => {
                        const container = document.getElementById(containerId);
                        if (container) {
                            container.scrollBy({ left: -scrollStep, behavior: 'smooth' });
                        }
                    }}
                    className={`w-12 h-12 flex items-center justify-center text-white hover:text-gray-300 transition-colors ${arrowClassName || ''}`}
                >
                    <ArrowLeftIcon className="w-16 h-6" weight="bold" />
                </button>
                <button 
                    onClick={() => {
                        const container = document.getElementById(containerId);
                        if (container) {
                            container.scrollBy({ left: scrollStep, behavior: 'smooth' });
                        }
                    }}
                    className={`w-12 h-12 flex items-center justify-center text-white hover:text-gray-300 transition-colors ${arrowClassName || ''}`}
                >
                    <ArrowRightIcon className="w-16 h-6" weight="bold" />
                </button>
            </div>
        );
    };

    return (
        <>
            {renderArrows('top')}

            <div 
                className={`flex flex-row justify-between overflow-x-auto ${containerClassName || 'gap-6'}`}
                id={containerId}
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {cards.map((card, index) => (
                    <React.Fragment key={index}>
                        {card}
                    </React.Fragment>
                ))}
            </div>

            {renderArrows('bottom')}
        </>
    )
}