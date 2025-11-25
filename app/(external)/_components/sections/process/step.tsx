import { Separator } from '@ui/separator';

interface ProcessStepProps {
  stepNo: number;
  title: string;
  description: string;
}

function ProcessStep({ stepNo, title, description }: ProcessStepProps): React.JSX.Element {
  return (
    <div className="group relative p-6 text-center">
      {/* Step Number Badge */}
      <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-secondary font-bold text-xl shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300">
        <span className="text-white drop-shadow-md">{stepNo}</span>
      </div>

      <Separator className="my-4 bg-neutral-light/40" />

      <h4 className="text-xl font-semibold mb-3 text-primary group-hover:text-secondary transition-colors duration-300">
        {title}
      </h4>
      <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
}

export default ProcessStep;
