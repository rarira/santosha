import type { JSX } from 'react';
export interface InputErrorProps {
  errorMessage?: string;
}

function InputError({ errorMessage }: InputErrorProps): JSX.Element | null {
  if (!errorMessage) return null;

  return (
    <div className="label">
      <span className="label-text-alt text-error">{errorMessage}</span>
    </div>
  );
}

export default InputError;
