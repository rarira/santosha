interface SectionContainerProps {
  children: React.ReactNode;
  sectionName: string;
}

function SectionContainer({ children, sectionName }: SectionContainerProps): React.JSX.Element {
  return (
    <section
      id={`${sectionName}-section`}
      className="flex-col max-w-[var(--max-width)] md:mx-auto pt-12 md:pt-16 px-4 md:px-0"
    >
      {children}
    </section>
  );
}

export default SectionContainer;
