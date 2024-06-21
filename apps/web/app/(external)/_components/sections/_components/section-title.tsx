interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

function SectionTitle({ title, subtitle }: SectionTitleProps): React.JSX.Element {
  return (
    <div className="flex-col mb-6 text-center">
      <h2 className="text-2xl md:text-3xl font-bold">{title}</h2>
      <h3>{subtitle}</h3>
    </div>
  );
}

export default SectionTitle;
