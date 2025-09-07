import { StepContent } from "../../types/types";
import { StepCard, StepCardStep } from "./StepCard";

interface StepContainerProps extends StepContent {
    step: number;
    isLast?: boolean;
  }

export const StepCardContainer: React.FC<StepContainerProps> = ({ step, isLast, Icon, title, description }) => {

    return (
        <div className="relative flex flex-row gap-10 items-start">
            <StepCardStep step={step} isLast={isLast} />
            <StepCard Icon={Icon} title={title} description={description} />
      </div>
    )
}