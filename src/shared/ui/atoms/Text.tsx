import React from 'react';
import { cn } from '../../../lib/utils';

export type FontWeight = 'thin' | 'light' | 'normal' | 'medium' | 'semibold' | 'bold'
export type TextSize = 'overline' | 'heading1' | 'heading2' | 'heading3' | 'body1' | 'body1-medium' | 'body2' | 'body2-medium' | 'caption';
export type TextColor = 'light' | 'grey' | 'main';
export type LineHeight = 'normal' | 'medium' | 'high';
export type TextType = 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' | 'a' | 'label';


export interface TextProps {
  children: React.ReactNode;
  className?: string;
  type?: TextType;
  size?: TextSize;
  color?: TextColor;
  lineHeight?: LineHeight;
  fontWeight?: FontWeight;
  href?: string;
  htmlFor?: string;
  [key: string]: unknown;
}

const Text: React.FC<TextProps> = ({
  children,
  className,
  type = 'p',
  size = 'body1',
  color = 'light',
  lineHeight = 'normal',
  fontWeight = 'thin',
  href,
  htmlFor,
  ...props
}) => {
  const sizeClasses = {
    overline: 'text-[12px]', // 12px для всех устройств
    heading1: 'text-[36px] sm:text-[54px]', // 54px десктоп, 36px мобильный
    heading2: 'text-[28px] sm:text-[36px]', // 36px десктоп, 28px мобильный
    heading3: 'text-[22px] sm:text-[24px]', // 24px десктоп, 22px мобильный
    'body1': 'text-[16px] sm:text-[18px]', // 18px десктоп, 16px мобильный
    'body1-medium': 'text-[16px]', // 16px для всех устройств
    'body2': 'text-[14px] sm:text-[16px]', // 16px десктоп, 14px мобильный
    'body2-medium': 'text-[16px]', // 16px для всех устройств
    caption: 'text-[14px]', // 14px для всех устройств
  };

  // Определяем цвета
  const colorClasses = {
    'light': 'text-base-light',
    'grey': 'text-grey-5',
    'main': 'text-main',
  };

  // Определяем font weight
  const fontWeightClasses = {
    thin: 'font-100', // 100
    light: 'font-light', // 300
    normal: 'font-normal', // 400
    medium: 'font-medium', // 500
    semibold: 'font-semibold', // 600
    bold: 'font-bold', // 700
  };

  // Определяем высоту строки
  const lineHeightClasses = {
    normal: 'leading-[120%]',
    medium: 'leading-[140%]',
    high: 'leading-[150%]',
  };

  // Определяем семантический тег
  const Tag = type || 'p';

  const classes = cn(
    sizeClasses[size],
    colorClasses[color],
    lineHeightClasses[lineHeight],
    fontWeightClasses[fontWeight],
    className
  );

  const elementProps: Record<string, unknown> = {
    className: classes,
    ...props
  };

  // Добавляем специфичные атрибуты для разных типов
  if (type === 'a' && href) {
    elementProps.href = href;
  }
  if (type === 'label' && htmlFor) {
    elementProps.htmlFor = htmlFor;
  }

  return React.createElement(Tag, elementProps, children);
};

// Утилита для создания пропсов Text компонента
export const createTextProps = (overrides: Partial<Omit<TextProps, 'children'>> = {}): Omit<TextProps, 'children'> => ({
  type: 'p',
  size: 'body1',
  color: 'light',
  lineHeight: 'normal',
  fontWeight: 'thin',
  ...overrides
});

export default Text;
