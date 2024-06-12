interface SectionContainerProps {
  children: React.ReactNode;
  sectionName: string;
}

function SectionContainer({ children, sectionName }: SectionContainerProps): React.JSX.Element {
  return (
    <section
      id={`${sectionName}-section`}
      className="flex-col max-w-[var(--max-width)] mx-auto mb-12"
    >
      {children}
    </section>
  );
}

export default SectionContainer;
