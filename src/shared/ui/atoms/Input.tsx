import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    className?: string;
    variant?: 'primary';
}

export const Input: React.FC<InputProps> = ({ 
    label, 
    className = '', 
    variant = 'primary',
    ...props 
}) => {
    const getVariantStyles = () => {
        switch (variant) {
            case 'primary':
                return 'bg-main-5 border-main-30 text-grey-7';
            default:
                return 'bg-main-5 border-main-30 text-grey-7';
        }
    };

    return (
        <div className="flex flex-col gap-2">
            {label && (
                <label className="text-sm font-medium text-grey-6">
                    {label}
                </label>
            )}
            <input
                className={`
                    px-4 py-3 rounded-lg border transition-colors
                    focus:outline-none focus:ring-2 focus:ring-main-30
                    placeholder:text-grey-7
                    ${getVariantStyles()}
                    ${className}
                `}
                {...props}
            />
        </div>
    );
};
