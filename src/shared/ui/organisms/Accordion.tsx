'use client';

import { CaretDown } from '@phosphor-icons/react';
import React, { useEffect, useRef, useState } from 'react';
import Text from '../atoms/Text';

interface AccordionItem {
    id: string;
    question: string;
    answer: string;
}

interface AccordionProps {
    items: AccordionItem[];
    className?: string;
    allowMultiple?: boolean;
    defaultOpenItems?: string[];
}

export const Accordion: React.FC<AccordionProps> = ({
    items,
    className = '',
    allowMultiple = false,
    defaultOpenItems = []
}) => {
    const [openItems, setOpenItems] = useState<string[]>(defaultOpenItems);
    const [heights, setHeights] = useState<{ [key: string]: number }>({});
    const contentRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

    useEffect(() => {
        // Измеряем высоту каждого контента при монтировании
        const newHeights: { [key: string]: number } = {};
        items.forEach(item => {
            const ref = contentRefs.current[item.id];
            if (ref) {
                newHeights[item.id] = ref.scrollHeight;
            }
        });
        setHeights(newHeights);
    }, [items]);

    const toggleItem = (itemId: string) => {
        setOpenItems(prev => {
            if (allowMultiple) {
                return prev.includes(itemId)
                    ? prev.filter(id => id !== itemId)
                    : [...prev, itemId];
            } else {
                return prev.includes(itemId) ? [] : [itemId];
            }
        });
    };

    return (
        <div className={`flex flex-col gap-4 ${className}`}>
            {items.map((item) => {
                const isOpen = openItems.includes(item.id);
                
                return (
                    <div
                        key={item.id}
                        className="bg-main-5 rounded-lg overflow-hidden transition-all duration-200"
                    >
                        <button
                            onClick={() => toggleItem(item.id)}
                            className="w-full px-6 py-4 flex text-start items-center justify-start hover:bg-main-5 transition-colors duration-200"
                        >
                            <div className={`transition-transform duration-300 ease-in-out ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
                                <CaretDown className="w-5 h-5 text-base-light flex-shrink-0" />
                            </div>
                            <Text type="span" size="heading3" color="light" className="pl-4">
                                {item.question}
                            </Text>
                            
                        </button>
                        
                        <div 
                            className="overflow-hidden transition-all duration-300 ease-in-out"
                            style={{
                                maxHeight: isOpen ? `${heights[item.id] || 0}px` : '0px',
                                opacity: isOpen ? 1 : 0
                            }}
                        >
                            <div 
                                ref={(el) => { contentRefs.current[item.id] = el; }}
                                className="px-6 py-3 pb-4 sm:pb-4 pb-6"
                            >
                                <Text type="p" size="body2" color="grey" className="break-words">
                                    {item.answer}
                                </Text>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};
