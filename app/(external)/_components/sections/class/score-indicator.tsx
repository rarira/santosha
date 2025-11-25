interface ClassScoreIndicatorProps {
  score: number;
  fullScore: number;
}

function ClassScoreIndicator({ score, fullScore }: ClassScoreIndicatorProps): React.JSX.Element {
  return (
    <div className="flex flex-row gap-1">
      {Array.from({ length: fullScore }, (_, index) => (
        <div
          key={index}
          className={`w-8 h-2 rounded-full transition-all duration-300 ${
            index < score
              ? 'bg-secondary shadow-sm'
              : 'bg-neutral-light/40'
          }`}
        />
      ))}
    </div>
  );
}

export default ClassScoreIndicator;
