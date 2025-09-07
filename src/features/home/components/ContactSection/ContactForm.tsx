
import { Button } from "@/shared/ui/atoms/Button";
import { Checkbox } from "@/shared/ui/atoms/Checkbox";
import { Input } from "@/shared/ui/atoms/Input";
import Text from "@/shared/ui/atoms/Text";

export const ContactForm = ({ className }: { className?: string }) => {

    return (
        <div className={`w-full border-2 rounded-2xl border-main-5 bg-main-5 p-8 ${className}`}>   
            <form className="flex flex-col gap-5">
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
                <div className="flex flex-row align-center justify-between gap-[15px]">
                    <div className="flex-1 min-w-0"> {/* Добавьте этот div */}
                        <Input 
                            type="email"
                            placeholder="Email"
                            variant="primary"
                        />
                    </div>
                    <div className="flex-1 min-w-0"> {/* Добавьте этот div */}
                        <Input 
                            type="tel"
                            placeholder="Phone number"
                            variant="primary"
                        />
                    </div>
                </div>

                {/* Четвертый ряд - Checkbox и кнопка */}
                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-2">
                        <Checkbox 
                            id="terms"
                            size="lg"
                            round={false}
                        />
                        <Text type="label" size="caption" color="grey" className="text-sm" htmlFor="terms">
                            I agree with{' '}
                            <Text type="a" size="caption" color="grey" className="hover:text-main-30 underline" href="#">
                                Terms and Conditions
                            </Text>
                        </Text>
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