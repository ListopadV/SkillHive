import Image from "next/image";

interface TestimonialsCardProps {
    avatar: string;
    description?: string;
    name: string;
    position: string;
    backgroundImage?: string;
}   

export const TestimonialsCard: React.FC<TestimonialsCardProps> = ({ avatar, description, name, position, backgroundImage }) => {

    return (
        <div 
            style={{ 
                backgroundImage: `url(${backgroundImage})`,
            }}
            className={`w-[314px] h-[380px] flex-shrink-0 flex flex-col justify-between items-start px-5 py-8 rounded-lg
            border border-grey-10
            ${backgroundImage ? 'bg-cover bg-center bg-no-repeat' 
                : 'glassmorphism'}`}
            >
            <div className="flex flex-col justify-between items-start gap-4">
                <Image 
                    src={avatar}
                    alt={name}
                    width={128}      
                    height={128}
                    className="w-12 h-12 bg-gray-300 rounded-full flex-shrink-0" 
                />
                {description && <p className="text-grey-5 text-lg max-w-[90%]">&ldquo;{description}&rdquo;</p>}
            </div>

            <div className="flex flex-col justify-between items-start gap-2">
                <h3 className="text-base-light text-xl font-thin">{name}</h3>
                <p className="text-grey-5 text-sm">{position}</p>
            </div>  

        </div>
    )
}