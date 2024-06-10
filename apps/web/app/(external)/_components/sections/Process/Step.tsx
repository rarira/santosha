import { Card } from '@/components/ui/card';

interface ProcessStepProps {
  stepNo: number;
  title: string;
  description: string;
}

function ProcessStep({ stepNo, title, description }): JSX.Element {
  return (
    <Card className="p-4">
      <h4 className="text-xl font-bold">{title}</h4>
      <p>description</p>
    </Card>
  );
}

export default ProcessStep;
