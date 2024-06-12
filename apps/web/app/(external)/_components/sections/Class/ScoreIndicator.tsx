interface ScoreIndicatorProps {
  score: number;
  fullScore: number;
}

function ScoreIndicator({ score, fullScore }: ScoreIndicatorProps): JSX.Element {
  return (
    <div className={`flex flex-row`}>
      {Array.from({ length: fullScore }, (_, index) => (
        <div
          key={index}
          className={`w-6 h-6 border-black border-y border-s ${index < score ? 'bg-primary' : 'bg-white'} ${index === fullScore - 1 ? 'border-e rounded-e-sm' : ''} ${index === 0 ? 'rounded-s-sm' : ''}`}
        />
      ))}
    </div>
  );
}

export default ScoreIndicator;
