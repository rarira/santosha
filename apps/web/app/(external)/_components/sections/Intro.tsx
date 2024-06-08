function Intro(): JSX.Element {
  return (
    <div
      id="intro-section"
      className={`flex-col h-[500px] mx-auto max-w-[var(--max-width) bg-[url('/image/background.jpg')] bg-center bg-cover opacity-50`}
    >
      <div className="opacity-50 bg-gradient-to-b from-teal-500 to-teal-50 w-full h-full">
        <div className="max-w-[var(--max-width)] mx-auto">
          <h1>산토샤 소개</h1>
          <p>잘 가르쳐 드림</p>
        </div>
      </div>
    </div>
  );
}

export default Intro;
