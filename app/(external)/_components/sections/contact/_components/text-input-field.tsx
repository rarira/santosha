'use client';

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@ui/form';
import { Input } from '@ui/input';
import { ComponentProps } from 'react';
import { Path, UseFormReturn } from 'react-hook-form';

export interface TextInputFieldProps<TFieldValues extends Record<string, any>> {
  name: Path<TFieldValues>;
  control: UseFormReturn<TFieldValues>['control'];
  className?: ComponentProps<'div'>['className'];
  label?: string;
  placeholder?: string;
  description?: string;
}

function TextInputField<TFieldValues extends Record<string, any>>({
  name,
  control,
  className,
  label,
  placeholder,
  description,
}: TextInputFieldProps<TFieldValues>): React.JSX.Element | null {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={className}>
          {label && <FormLabel>{label}</FormLabel>}
          <FormControl>
            <Input placeholder={placeholder} {...field} />
          </FormControl>
          {description && <FormDescription>This is your public display name.</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export default TextInputField;
