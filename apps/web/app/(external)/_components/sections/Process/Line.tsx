import ProcessArrow from './Arrow';

function ProcessLine({ direction }: { direction: 'horizontal' | 'vertical' }): React.JSX.Element {
  if (direction === 'horizontal') {
    return <ProcessArrow direction="right" noPoint />;
  }

  if (direction === 'vertical') {
    return <ProcessArrow direction="up" noPoint />;
  }
  return <></>;
}

export default ProcessLine;
