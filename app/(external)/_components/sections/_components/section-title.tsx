interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

function SectionTitle({ title, subtitle }: SectionTitleProps): React.JSX.Element {
  return (
    <div className="flex-col mb-12 text-center space-y-3">
      <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-yoga-terracotta to-yoga-sage bg-clip-text text-transparent">
        {title}
      </h2>
      {subtitle && (
        <h3 className="text-lg md:text-xl text-muted-foreground font-light">{subtitle}</h3>
      )}
      <div className="flex justify-center pt-2">
        <div className="w-16 h-1 rounded-full bg-gradient-to-r from-yoga-terracotta to-yoga-sage" />
      </div>
    </div>
  );
}

export default SectionTitle;
