'use client';

import {
  FormLabel,
  FormControl,
  FormField,
  FormItem,
  FormDescription,
  FormMessage,
} from '@repo/ui/components/ui/form';
import { Textarea } from '@repo/ui/components/ui/textarea';

import { TextInputFieldProps } from './TextInputField';

interface TextAreaFieldProps<TFieldValues extends Record<string, any>>
  extends TextInputFieldProps<TFieldValues> {}

function TextAreaField<TFieldValues extends Record<string, any>>({
  name,
  control,
  className,
  label,
  placeholder,
  description,
}: TextAreaFieldProps<TFieldValues>): React.JSX.Element | null {
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
