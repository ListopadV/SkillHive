
import { Button } from "@/shared/ui/atoms/Button";
import { Checkbox } from "@/shared/ui/atoms/Checkbox";
import { Input } from "@/shared/ui/atoms/Input";

export const ContactForm = ({ className }: { className?: string }) => {

    return (
        <div className={`border-2 rounded-2xl border-main-5 p-8 ${className}`}>   
            <form className="flex flex-col gap-4">
                {/* Первый ряд - Full name */}
                <Input 
                    placeholder="Full name"
                    variant="primary"
                />

                {/* Второй ряд - Company name */}
                <Input 
                    placeholder="Company name"
                    variant="primary"
                />

                {/* Третий ряд - Email и Phone с gap-2 */}
                <div className="flex flex-row justify-between w-full gap-1">
                    <Input 
                        type="email"
                        placeholder="Email"
                        variant="primary"
                        className="w-full"                        
                    />
                    <Input 
                        type="tel"
                        placeholder="Phone number"
                        variant="primary"
                        className="w-full"
                    />
                </div>

                {/* Четвертый ряд - Checkbox и кнопка */}
                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-2">
                        <Checkbox 
                            id="terms"
                            size="md"
                            round={false}
                        />
                        <label htmlFor="terms" className="text-sm text-grey-2">
                            I agree with{' '}
                            <a href="#" className="text-grey-2 hover:text-main-30 underline">
                                Terms and Conditions
                            </a>
                        </label>
                    </div>

                    <Button 
                        type="submit"
                        variant="primary"
                        className="w-full"
                    >
                        Get Started
                    </Button>
                </div>
            </form>
        </div>
    )
}