import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@repo/ui/components/ui/form';
import { Input } from '@repo/ui/components/ui/input';
import { ComponentProps, type JSX } from 'react';
import { Path, useFormContext } from 'react-hook-form';

export interface TextInputFieldProps<TFieldValues extends Record<string, any>> {
  name: Path<TFieldValues>;
  className?: ComponentProps<'div'>['className'];
  label?: string;
  placeholder?: string;
  description?: string;
}

function TextInputField<TFieldValues extends Record<string, any>>({
  name,
  className,
  label,
  placeholder,
  description,
}: TextInputFieldProps<TFieldValues>): JSX.Element {
  const { control } = useFormContext();

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
