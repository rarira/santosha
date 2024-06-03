import { Path, useFormContext } from 'react-hook-form';

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

export interface TextInputFieldProps<TFieldValues extends Record<string, any>> {
  name: Path<TFieldValues>;
  label?: string;
  placeholder?: string;
  description?: string;
}

function TextInputField<TFieldValues extends Record<string, any>>({
  name,
  // control,
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
        <FormItem>
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
