import Text, { createTextProps, TextColor, TextSize, LineHeight, FontWeight } from '../atoms/Text';

interface SectionHeader {
    commentTitle: string;
    title: string;
    description: string[];  
    className?: string;
    descriptionClassName?: string;
    titleClassName?: string;
    mainDirection?: 'row' | 'column';
    descriptionDirection?: 'row' | 'column';
    headerDirection?: 'row' | 'column';
    titleSize?: TextSize;
    titleColor?: TextColor;
    titleLineHeight?: LineHeight;
    descriptionSize?: TextSize;
    descriptionColor?: TextColor;
    descriptionLineHeight?: LineHeight;
    descriptionFontWeight?: FontWeight;
}

export const SectionHeader = ({ 
    commentTitle, 
    title, 
    description, 
    className, 
    descriptionClassName,
    mainDirection = 'row',
    descriptionDirection = 'column',
    headerDirection = 'column',
    titleSize = 'heading2',
    titleColor = 'light',
    titleLineHeight = 'high',
    titleClassName,
    descriptionSize = 'body2',
    descriptionColor = 'grey',
    descriptionLineHeight = 'normal',
    descriptionFontWeight = 'light'
}: SectionHeader) => {

    // Конфигурации для разных типов текста
    const commentTitleProps = createTextProps({
        type: 'h6',
        size: 'overline',
        color: 'main',
        lineHeight: 'normal',
        fontWeight: 'thin',
        className: 'font-thin tracking-widest'
    });

    const titleProps = createTextProps({
        type: 'h2',
        size: titleSize,
        color: titleColor,
        lineHeight: titleLineHeight,
        fontWeight: 'thin',
        className: 'font-thin tracking-wider'
    });

    const descriptionProps = createTextProps({
        type: 'p',
        size: descriptionSize,
        color: descriptionColor,
        lineHeight: descriptionLineHeight,
        fontWeight: descriptionFontWeight,
        className: 'tracking-wide'
    });

    const getMainDirectionClasses = () => {
        if (mainDirection === 'column') {
            return 'flex-col gap-6';
        }
        return 'flex-row max-sm:flex-col gap-12 justify-between items-center';
    };

    const getHeaderDirectionClasses = () => {
        if (headerDirection === 'column') {
            return 'flex-col gap-4';
        }
        return 'flex-row gap-4 items-center';
    };

    const getDescriptionDirectionClasses = () => {
        if (descriptionDirection === 'column') {
            return 'flex-col gap-4';
        }
        return 'flex-row gap-4';
    };

    return (

        <div className={`flex ${getMainDirectionClasses()} ${className} w-full`}>
            <div className={`flex ${getHeaderDirectionClasses()}`}>
                <Text {...commentTitleProps}>
                    {commentTitle}
                </Text>
                <Text {...titleProps} className={titleClassName}>
                    {title}
                </Text>
            </div>

            <div className={`flex ${getDescriptionDirectionClasses()} ${descriptionClassName}`}>
                {description.map((item, index) => (
                    <Text key={index} {...descriptionProps}>
                        {item}
                    </Text>
                ))}
            </div>
        </div>
    )
}