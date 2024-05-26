import { Field, Input } from '@headlessui/react';
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';

import InputError from './InputError';

interface TextInputFieldProps {
  name: string;
  placeholder?: string;
  fieldClassName?: string;
  inputClassName?: string;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
}

function TextInputField({
  name,
  placeholder,
  fieldClassName,
  inputClassName,
  register,
  errors,
}: TextInputFieldProps): JSX.Element {
  return (
    <Field className={`form-control w-full max-w-xs ${fieldClassName || ''}`}>
      <Input
        {...register(name)}
        placeholder={placeholder}
        className={`input input-bordered w-full max-w-xs my-2 ${errors[name] ? 'input-error' : ''} ${inputClassName || ''}`}
      />
      <InputError errorMessage={errors[name]?.message as string} />
    </Field>
  );
}

export default TextInputField;
