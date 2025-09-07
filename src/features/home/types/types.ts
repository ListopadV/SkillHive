import React from 'react'
import type{ Icon } from '@phosphor-icons/react';

export interface PriceCardContent {
    Icon: React.ComponentType<React.ComponentProps<Icon>>;
    title: string;
    description: string;
    price: string | number;
    options: string[];
    className?: string
}

export interface StepContent {
    Icon: React.ComponentType<React.ComponentProps<Icon>>;
    title: string;
    description: string;
}