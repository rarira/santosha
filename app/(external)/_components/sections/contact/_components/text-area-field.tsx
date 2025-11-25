'use client';

import {
  FormLabel,
  FormControl,
  FormField,
  FormItem,
  FormDescription,
  FormMessage,
} from '@ui/form';
import { Textarea } from '@ui/textarea';

import { TextInputFieldProps } from './text-input-field';

interface TextAreaFieldProps<TFieldValues extends Record<string, any>>
  extends TextInputFieldProps<TFieldValues> {
  maxLength?: number;
}

function TextAreaField<TFieldValues extends Record<string, any>>({
  name,
  control,
  className,
  label,
  placeholder,
  description,
  maxLength = 1000,
}: TextAreaFieldProps<TFieldValues>): React.JSX.Element | null {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={className}>
          {label && <FormLabel className="text-sm font-semibold text-yoga-sage">{label}</FormLabel>}
          <FormControl>
            <div className="relative group">
              <Textarea
                placeholder={placeholder}
                className="resize-none min-h-32 border-yoga-sand/30 focus:border-yoga-terracotta focus:ring-yoga-terracotta/20 pr-16"
                maxLength={maxLength}
                {...field}
              />
              <div className="absolute bottom-3 right-3 text-xs text-muted-foreground opacity-0 group-focus-within:opacity-100 transition-opacity duration-200">
                <span className={field.value?.length >= maxLength ? 'text-red-500 font-medium' : ''}>
                  {field.value?.length || 0}
                </span>
                <span className="text-muted-foreground/60"> / {maxLength}</span>
              </div>
            </div>
          </FormControl>
          {description && (
            <FormDescription>
              You can <span>@mention</span> other users and organizations.
            </FormDescription>
          )}
          <FormMessage className="text-xs" />
        </FormItem>
      )}
    />
  );
}

export default TextAreaField;
