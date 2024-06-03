'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useActionState, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { Path, SubmitHandler, useForm } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import ko from '@/i18n/ko';

import { onFormPostAction } from './_actions';
import { useDialogProps } from './_hooks';
import { contactFormSchema, ContactFormValues } from './formSchema';
import TextAreaField from './TextAreaField';
import TextInputField from './TextInputField';

const formFields: Array<{ name: keyof ContactFormValues; type: 'input' | 'textarea' }> = [
  { name: 'name', type: 'input' },
  { name: 'email', type: 'input' },
  { name: 'phoneNo', type: 'input' },
  { name: 'content', type: 'textarea' },
];

function ContactForm(): JSX.Element {
  const [state, submitAction, isPending] = useActionState(onFormPostAction, { message: '' });
  const formRef = useRef<HTMLFormElement>(null);
  const [domReady, setDomReady] = useState(false);

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
    setDomReady(true);
  }, []);

  const dialogProps = useDialogProps({
    showDialog: state.message === 'Successful',
    content: {
      title: '문의 완료',
      body: '문의가 성공적으로 전송되었습니다.',
    },
  });

  const onSubmit: SubmitHandler<ContactFormValues> = (data, e) => {
    e?.preventDefault();
    formRef.current?.submit();
  };

  const getErrorMessage = (name: Path<ContactFormValues>) => {
    return (
      form.formState.errors[name]?.message ||
      state?.issues?.find(issue => issue.path === name)?.message
    );
  };

  return (
    <>
      <Form {...form}>
        {state?.issues && <div className="text-red-500">{state.message}</div>}
        <form
          ref={formRef}
          className="space-y-8"
          action={submitAction}
          // onSubmit={handleSubmit(onSubmit)}
        >
          {formFields.map(({ name, type }) => {
            return type === 'input' ? (
              <TextInputField
                key={name}
                name={name}
                label={ko.form.field[name]}
                control={form.control}
                // error={getErrorMessage(name)}
              />
            ) : (
              <TextAreaField
                key={name}
                name={name}
                label={ko.form.field[name]}
                control={form.control}

                // error={getErrorMessage(name)}
              />
            );
          })}
          <Button type="submit">전송</Button>
        </form>
      </Form>
      {domReady &&
        createPortal(
          <p>your inquiry is successfully submitted</p>,
          document.getElementById('contact-section')!,
        )}
      {/* <ContactDialog {...dialogProps} /> */}
    </>
  );
}

export default ContactForm;
