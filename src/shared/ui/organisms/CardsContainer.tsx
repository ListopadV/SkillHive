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
    arrowsPosition?: 'top' | 'bottom';
}

export const CardsContainer = ({ 
    cards, 
    containerClassName, 
    arrowClassName,
    arrowContainerClassName,
    showArrows = true,
    arrowsBreakpoint = 'lg',
    scrollStep = 314,
    arrowsPosition = 'bottom'
}: CardsContainerProps) => {

    const containerId = useId();

    const getArrowsClassName = () => {
        if (!showArrows) return 'hidden';
        if (arrowsBreakpoint === 'always') return 'flex';
        if (arrowsBreakpoint === 'never') return 'hidden';
        return `${arrowsBreakpoint}:hidden flex`;
    };

    const getArrowsPosition = () => {
        return arrowsPosition === 'top' ? 'mb-4' : 'mt-4';
    };

    return (
        <>
            {arrowsPosition === 'top' && (
                <div className={`gap-4 justify-end ${getArrowsPosition()} ${getArrowsClassName()} ${arrowContainerClassName || ''}`}>
                    <button 
                        onClick={() => {
                            const container = document.getElementById(containerId);
                            if (container) {
                                container.scrollBy({ left: -scrollStep, behavior: 'smooth' });
                            }
                        }}
                        className={`w-16 h-8 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors ${arrowClassName || ''}`}
                    >
                        <ArrowLeftIcon className="w-16 h-4" />
                    </button>
                    <button 
                        onClick={() => {
                            const container = document.getElementById(containerId);
                            if (container) {
                                container.scrollBy({ left: scrollStep, behavior: 'smooth' });
                            }
                        }}
                        className={`w-16 h-8 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors ${arrowClassName || ''}`}
                    >
                        <ArrowRightIcon className="w-16 h-4" />
                    </button>
                </div>
            )}

            <div 
                className={`flex flex-row overflow-x-auto ${containerClassName || 'gap-6'}`}
                id={containerId}
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {cards.map((card, index) => (
                    <React.Fragment key={index}>
                        {card}
                    </React.Fragment>
                ))}
            </div>

            {arrowsPosition === 'bottom' && (
                <div className={`gap-4 justify-end ${getArrowsPosition()} ${getArrowsClassName()} ${arrowContainerClassName || ''}`}>
                    <button 
                        onClick={() => {
                            const container = document.getElementById(containerId);
                            if (container) {
                                container.scrollBy({ left: -scrollStep, behavior: 'smooth' });
                            }
                        }}
                        className={`w-16 h-8 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors ${arrowClassName || ''}`}
                    >
                        <ArrowLeftIcon className="w-16 h-4" />
                    </button>
                    <button 
                        onClick={() => {
                            const container = document.getElementById(containerId);
                            if (container) {
                                container.scrollBy({ left: scrollStep, behavior: 'smooth' });
                            }
                        }}  
                        className={`w-16 h-8 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors ${arrowClassName || ''}`}
                    >
                        <ArrowRightIcon className="w-16 h-4" />
                    </button>
                </div>
            )}
        </>
    )
}