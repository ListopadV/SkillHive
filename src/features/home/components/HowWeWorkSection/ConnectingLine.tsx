import React from 'react';

interface ConnectingLineProps {
    className?: string;
    rotation?: 'vertical' | 'horizontal' | 'diagonal';
    showCircle?: boolean;
    circleSize?: 'sm' | 'md' | 'lg';
}

export const ConnectingLine: React.FC<ConnectingLineProps> = ({ 
    className = '', 
    rotation = 'vertical',
    showCircle = true,
    circleSize = 'md'
}) => {
    const getRotationClass = () => {
        switch (rotation) {
            case 'vertical':
                return 'rotate-90';
            case 'horizontal':
                return 'rotate-0';
            case 'diagonal':
                return 'rotate-45';
            default:
                return 'rotate-90';
        }
    };

    const getCircleSizeClass = () => {
        switch (circleSize) {
            case 'sm':
                return 'w-2 h-2';
            case 'md':
                return 'w-3 h-3';
            case 'lg':
                return 'w-4 h-4';
            default:
                return 'w-3 h-3';
        }
    };

    return (
        <div className={`flex items-center w-full ${className}`}>
            {showCircle && (
                <div className={`${getCircleSizeClass()} bg-main rounded-full flex-shrink-0`} />
            )}
            <div className={`flex-1 h-0.5 bg-main ${getRotationClass()}`} />
        </div>
    );
};
