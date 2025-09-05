import React from 'react'; 

interface SectionHeader {
    commentTitle: string;
    title: string;
    description: string[];
    className?: string;
    // Общее направление между заголовочной секцией и описанием
    mainDirection?: 'row' | 'column';
    // Направление для описаний (когда их несколько)
    descriptionDirection?: 'row' | 'column';
    // Направление для заголовочной секции (commentTitle + title)
    headerDirection?: 'row' | 'column';
}

export const SectionHeader = ({ 
    commentTitle, 
    title, 
    description, 
    className, 
    mainDirection = 'row',
    descriptionDirection = 'column',
    headerDirection = 'column'
}: SectionHeader) => {

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

        <div className={`mb-25 w-full flex ${getMainDirectionClasses()} ${className}`}>
            <div className={`flex ${getHeaderDirectionClasses()}`}>
                <h6 className="text-sm max-sm:text-sm max-md:text-sm max-lg:text-md text-main font-thin tracking-widest leading-relaxed">
                    {commentTitle}
                </h6>
                <h2 className="text-3xl max-sm:text-xl max-md:text-2xl max-lg:text-3xl font-thin tracking-wider leading-tight">
                    {title}
                </h2>
            </div>

            <div className={`flex ${getDescriptionDirectionClasses()}`}>
                {description.map((item, index) => (
                    <p key={index} className="text-lg max-sm:text-base max-md:text-lg max-lg:text-xl text-grey-5 font-light leading-relaxed tracking-wide">
                        {item}
                    </p>
                ))}
            </div>
        </div>
    )
}