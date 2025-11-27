'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { ReloadIcon } from '@radix-ui/react-icons';
import { Button } from '@ui/button';
import { Card, CardContent } from '@ui/card';
import { Form } from '@ui/form';
import { useActionState, useEffect, useRef, useState } from 'react';
import { Path, SubmitHandler, useForm } from 'react-hook-form';

import ko from '@/i18n/ko';

import { onFormPostAction } from './_actions';
import ContactDialog from './_components/dialog';
import TextAreaField from './_components/text-area-field';
import TextInputField from './_components/text-input-field';
import { ContactFormValues, contactFormSchema } from './formSchema';

const formFields: Array<{ name: keyof ContactFormValues; type: 'input' | 'textarea' }> = [
  { name: 'name', type: 'input' },
  { name: 'email', type: 'input' },
  { name: 'phoneNo', type: 'input' },
  { name: 'content', type: 'textarea' },
];

function ContactForm(): React.JSX.Element {
  const [state, submitAction, isPending] = useActionState(onFormPostAction, { message: '' });
  const formRef = useRef<HTMLFormElement>(null);

  const [showDialog, setShowDialog] = useState(false);

  const form = useForm({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      phoneNo: '',
      content: '',
    },
  });

  useEffect(() => {
    if (!state?.fields) return;
    form.reset(state?.fields);
  }, [state?.fields, form.reset, form]);

  useEffect(() => {
    if (state?.issues?.length) {
      state.issues.forEach(issue => {
        form.setError(issue.path as Path<ContactFormValues>, {
          type: 'manual',
          message: issue.message,
        });
      });
    }
  }, [form, state?.issues]);

  useEffect(() => {
    if (state.message === 'Successful') {
      setShowDialog(true);
      form.reset();
    }
  }, [form, state.message]);

  const onSubmit: SubmitHandler<ContactFormValues> = () => {
    formRef.current?.submit();
  };

  return (
    <>
      <Card className="relative w-full lg:w-1/2 lg:max-w-[600px] border-0 shadow-xl bg-white/95 backdrop-blur-sm overflow-hidden group hover:shadow-2xl transition-all duration-500">
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Border glow effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute inset-0 rounded-lg border-2 border-primary/20 blur-sm" />
        </div>

        <CardContent className="p-8 lg:p-10 relative z-10">
          <Form {...form}>
            {state?.issues && (
              <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm font-medium animate-[slideInDown_0.5s_ease-out]">
                {state.message}
              </div>
            )}
            <form
              ref={formRef}
              className="space-y-5"
              action={submitAction}
              onSubmit={e => {
                e.preventDefault();
                form.handleSubmit(onSubmit)();
              }}
            >
              {formFields.map(({ name, type }, index) => {
                return type === 'input' ? (
                  <div
                    key={name}
                    className="animate-[slideInUp_0.6s_ease-out]"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <TextInputField
                      name={name}
                      label={ko.form.field[name]}
                      placeholder={ko.form.placeholder[name]}
                      control={form.control}
                    />
                  </div>
                ) : (
                  <div
                    key={name}
                    className="animate-[slideInUp_0.6s_ease-out]"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <TextAreaField
                      name={name}
                      label={ko.form.field[name]}
                      placeholder={ko.form.placeholder[name]}
                      maxLength={100}
                      control={form.control}
                    />
                  </div>
                );
              })}
              <div className="pt-2">
                <Button
                  disabled={isPending}
                  type="submit"
                  className="relative w-full h-12 text-base font-semibold bg-linear-to-r from-yoga-terracotta to-yoga-sage hover:shadow-xl transition-all duration-300 hover:scale-[1.02] overflow-hidden group/button"
                >
                  {/* Shine effect on button */}
                  <div className="absolute inset-0 opacity-0 group-hover/button:opacity-100 transition-opacity duration-700">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover/button:translate-x-full transition-transform duration-1000" />
                  </div>
                  
                  <span className="relative z-10 flex items-center justify-center">
                    {isPending && <ReloadIcon className="mr-2 h-5 w-5 animate-spin" />}
                    {ko.form.submit}
                  </span>
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
      <ContactDialog
        open={showDialog}
        onOpenChange={setShowDialog}
        title={ko.form.dialog.title}
        description={ko.form.dialog.description}
      />
    </>
  );
}

export default ContactForm;
