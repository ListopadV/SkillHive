'use client'
import React from 'react';

interface CheckboxProps {
    size?: 'sm' | 'md' | 'lg';
    round?: boolean;
    className?: string;
    checked?: boolean;
    onChange?: (checked: boolean) => void;
    id?: string;
    name?: string;
    disabled?: boolean;
}

export const Checkbox: React.FC<CheckboxProps> = ({
    size = 'md',
    round = false,
    className = '',
    checked = false,
    onChange,
    id,
    name,
    disabled = false
}) => {
    const getSizeClasses = () => {
        switch (size) {
            case 'sm':
                return 'w-3 h-3';
            case 'md':
                return 'w-4 h-4';
            case 'lg':
                return 'w-5 h-5';
            default:
                return 'w-4 h-4';
        }
    };

    const getShapeClasses = () => {
        return round ? 'rounded-full' : 'rounded';
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (onChange) {
            onChange(e.target.checked);
        }
    };

    return (
        <div className="relative">
            <input
                type="checkbox"
                id={id}
                name={name}
                checked={checked}
                onChange={handleChange}
                disabled={disabled}
                className={`
                    appearance-none
                    ${getSizeClasses()}
                    ${getShapeClasses()}
                    bg-main-5
                    transition-all
                    duration-200
                    cursor-pointer
                    disabled:opacity-50
                    disabled:cursor-not-allowed
                    ${className}
                `}
            />
            {checked && (
                <div className="absolute inset-0 flex items-center mb-1 justify-center pointer-events-none">
                    <svg
                        className="w-3 h-3 text-main"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                    >
                        <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                        />
                    </svg>
                </div>
            )}
        </div>
    );
};
