function ProcessArrow({
  direction,
  color = 'yoga-sage',
  noPoint,
}: {
  direction: 'left' | 'right' | 'up' | 'down';
  color?: string;
  noPoint?: boolean;
}): React.JSX.Element {
  const bgColorClass = `bg-${color}`;
  const borderColorClass = `border-${color}`;

  if (direction === 'right') {
    return (
      <div className="flex w-full h-full justify-center items-center">
        <div className={`my-1 w-full ${bgColorClass} h-1 rounded-full float-left opacity-60`} />
        {!noPoint && (
          <div
            className={`w-0 h-0 ${borderColorClass} border-y-transparent border-y-[0.6rem] border-l-[0.8rem] float-right opacity-60`}
          />
        )}
      </div>
    );
  }

  if (direction === 'left') {
    return (
      <div className="flex w-full h-full justify-center items-center">
        {!noPoint && (
          <div
            className={`w-0 h-0 ${borderColorClass} border-y-transparent border-y-[0.6rem] border-r-[0.8rem] float-left opacity-60`}
          />
        )}
        <div className={`my-1 w-full ${bgColorClass} h-1 rounded-full float-right opacity-60`} />
      </div>
    );
  }

  if (direction === 'down') {
    return (
      <div className="relative flex flex-col w-full h-[50px] justify-center items-center">
        <div
          className={`absolute right-0 my-1 w-[calc(50%-0.25rem)] ${bgColorClass} h-1 rounded-full opacity-60`}
        />
        <div
          className={`absolute bottom-1 mx-1 w-1 h-1/2 ${bgColorClass} rounded-tl-lg opacity-60`}
        />
        {!noPoint && (
          <div
            className={`absolute w-0 h-0 border-t-[0.8rem] ${borderColorClass} border-x-[0.6rem] border-x-transparent bottom-[-0.2rem] opacity-60`}
          />
        )}
      </div>
    );
  }

  if (direction === 'up') {
    return (
      <div className="relative flex flex-col w-full h-[50px] justify-center items-center">
        <div
          className={`absolute left-0 my-1 w-[calc(50%-0.25rem)] ${bgColorClass} h-1 rounded-full opacity-60`}
        />
        <div className={`absolute top-1 mx-1 w-1 h-1/2 ${bgColorClass} rounded-br-lg opacity-60`} />
        {!noPoint && (
          <div
            className={`absolute w-0 h-0 border-b-[0.8rem] ${borderColorClass} border-x-[0.6rem] border-x-transparent top-[-0.2rem] opacity-60`}
          />
        )}
      </div>
    );
  }

  return <></>;
}

export default ProcessArrow;
