import type { JSX } from 'react';

import { useFormContext } from 'react-hook-form';

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';

import { TextInputFieldProps } from './TextInputField';

interface TextAreaFieldProps<TFieldValues extends Record<string, any>>
  extends TextInputFieldProps<TFieldValues> {}

function TextAreaField<TFieldValues extends Record<string, any>>({
  name,
  className,
  label,
  placeholder,
  description,
}: TextAreaFieldProps<TFieldValues>): JSX.Element {
  const { control } = useFormContext();
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={className}>
          {label && <FormLabel>{label}</FormLabel>}
          <FormControl>
            <Textarea placeholder={placeholder} className="resize-none" {...field} />
          </FormControl>
          {description && (
            <FormDescription>
              You can <span>@mention</span> other users and organizations.
            </FormDescription>
          )}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export default TextAreaField;
