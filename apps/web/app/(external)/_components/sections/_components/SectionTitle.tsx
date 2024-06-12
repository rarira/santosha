interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

function SectionTitle({ title, subtitle }: SectionTitleProps): React.JSX.Element {
  return (
    <div className="flex-col mb-6 text-center">
      <h2 className="text-3xl font-bold ">{title}</h2>
      <h4>{subtitle}</h4>
    </div>
  );
}

export default SectionTitle;
