import ArrowUpRightIcon from '@heroicons/react/24/outline/ArrowUpRightIcon';
import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  className = '',
  type = 'button',
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none';
  
  const variantClasses = {
    primary: 'bg-main-10 text-base-light hover:bg-main-30 hover:text-base-light active:bg-main-5 active:text-base-light',
    secondary: 'bg-transparent text-base-light hover:text-main-50 active:text-main-30',
  };

  const sizeClasses = {
    sm: 'px-5 py-1.5 text-sm',
    md: 'px-7 py-2 text-base',
    lg: 'px-12 py-3 text-lg',
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  return (
    <button
      type={type}
      onClick={onClick}
      className={classes}
    >
      {children}
      {variant === 'secondary' && <ArrowUpRightIcon className="w-4 h-4 ml-3" />}
    </button>
  );
};

export default Button;
