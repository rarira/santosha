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
      <Card className="w-full lg:w-1/2 lg:max-w-[600px] border-0 shadow-lg bg-gradient-to-br from-white to-yoga-cream/30 backdrop-blur-sm">
        <CardContent className="pt-6">
          <Form {...form}>
            {state?.issues && (
              <div className="mb-4 p-3 rounded-lg bg-red-50 border border-red-200 text-red-600 text-sm">
                {state.message}
              </div>
            )}
            <form
              ref={formRef}
              className="space-y-6"
              action={submitAction}
              onSubmit={e => {
                e.preventDefault();
                form.handleSubmit(onSubmit)();
              }}
            >
              {formFields.map(({ name, type }) => {
                return type === 'input' ? (
                  <TextInputField
                    key={name}
                    name={name}
                    label={ko.form.field[name]}
                    control={form.control}
                  />
                ) : (
                  <TextAreaField
                    key={name}
                    name={name}
                    label={ko.form.field[name]}
                    control={form.control}
                  />
                );
              })}
              <Button
                disabled={isPending}
                type="submit"
                className="w-full sm:w-auto px-8 bg-gradient-to-r from-yoga-terracotta to-yoga-sage hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                {isPending && <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />}
                {ko.form.submit}
              </Button>
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
