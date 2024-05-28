import { Field, Input } from '@headlessui/react';
import { Path, UseFormRegister } from 'react-hook-form';

import InputError from './InputError';

interface TextInputFieldProps<TFieldValues extends Record<string, any>> {
  name: Path<TFieldValues>;
  placeholder?: string;
  fieldClassName?: string;
  inputClassName?: string;
  register: UseFormRegister<TFieldValues>;
  errorMessage?: string;
}

function TextInputField<TFieldValues extends Record<string, any>>({
  name,
  placeholder,
  fieldClassName,
  inputClassName,
  register,
  errorMessage,
}: TextInputFieldProps<TFieldValues>): JSX.Element {
  console.log({ errorMessage });

  return (
    <Field className={`form-control w-full max-w-xs ${fieldClassName || ''}`}>
      <Input
        {...register(name)}
        placeholder={placeholder}
        className={`input input-bordered w-full max-w-xs my-2 ${errorMessage ? 'input-error' : ''} ${inputClassName || ''}`}
      />
      <InputError errorMessage={errorMessage} />
    </Field>
  );
}

export default TextInputField;
