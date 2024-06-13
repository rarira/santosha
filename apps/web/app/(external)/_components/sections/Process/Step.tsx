import { Separator } from '@repo/ui/components/ui/separator';

interface ProcessStepProps {
  stepNo: number;
  title: string;
  description: string;
}

function ProcessStep({ stepNo, title, description }: ProcessStepProps): React.JSX.Element {
  return (
    <div className="p-4 text-center">
      <h3 className="text-2xl font-bold text-green-400">{stepNo}</h3>
      <Separator className="my-4" />
      <h4 className="text-xl font-bold mb-2">{title}</h4>
      <p>{description}</p>
    </div>
  );
}

export default ProcessStep;
