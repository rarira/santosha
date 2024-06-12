function IntroSection(): React.JSX.Element {
  return (
    <div
      id="intro-section"
      className={`flex-col h-[500px] mx-auto max-w-[var(--max-width)] bg-center bg-cover opacity-50`}
    >
      <div className="max-w-[var(--max-width)] mx-auto">
        <h1>산토샤 소개</h1>
        <p>잘 가르쳐 드림</p>
      </div>
    </div>
  );
}

export default IntroSection;
