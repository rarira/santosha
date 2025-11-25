interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

function SectionTitle({ title, subtitle }: SectionTitleProps): React.JSX.Element {
  return (
    <div className="flex-col mb-16 text-center space-y-4">
      <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-base md:text-lg text-neutral max-w-2xl mx-auto font-normal leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className="flex justify-center pt-2">
        <div className="w-20 h-1 rounded-full bg-secondary" />
      </div>
    </div>
  );
}

export default SectionTitle;
