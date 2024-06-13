function ProcessArrow({
  direction,
  color = 'primary',
  noPoint,
}: {
  direction: 'left' | 'right' | 'up' | 'down';
  color?: string;
  noPoint?: boolean;
}): React.JSX.Element {
  if (direction === 'right') {
    return (
      <div className="flex w-full h-full justify-center items-center">
        <div className={`my-1 w-full bg-${color} h-2 float-left`} />
        {!noPoint && (
          <div
            className={`w-0 h-0 border-${color} border-y-transparent  border-y-[0.75rem]  border-l-[1rem] float-right `}
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
            className={`w-0 h-0 border-${color} border-y-transparent  border-y-[0.75rem]  border-r-[1rem] float-left `}
          />
        )}
        <div className={`my-1 w-full bg-${color} h-2 float-right`} />
      </div>
    );
  }

  if (direction === 'down') {
    return (
      <div className="relative flex flex-col w-full h-[50px] justify-center items-center">
        <div className={`absolute right-0 my-1 w-1/2 bg-${color} h-2`} />
        <div className={`absolute bottom-1 mx-1  w-2  h-1/2 bg-${color}`} />
        {!noPoint && (
          <div
            className={`absolute w-0 h-0 border-t-[1rem] border-${color} border-x-[0.75rem] border-x-transparent bottom-[-0.25rem]`}
          />
        )}
      </div>
    );
  }

  if (direction === 'up') {
    return (
      <div className="relative flex flex-col w-full h-[50px] justify-center items-center">
        <div className={`absolute left-0 my-1 w-1/2 bg-${color} h-2`} />
        <div className={`absolute top-1 mx-1  w-2  h-1/2 bg-${color}`} />
        {!noPoint && (
          <div
            className={`absolute w-0 h-0 border-b-[1rem] border-${color} border-x-[0.75rem] border-x-transparent top-[-0.25rem]`}
          />
        )}
      </div>
    );
  }

  return <></>;
}

export default ProcessArrow;
