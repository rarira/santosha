'use client';

import { Button, Fieldset, Textarea } from '@headlessui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useActionState, useEffect, useRef } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as z from 'zod';

import { onFormPostAction } from './_actions';
import { contactFormSchema } from './formSchema';
import TextInputField from './TextInputField';

type ContactFormValues = z.infer<typeof contactFormSchema>;

function ContactForm(): JSX.Element {
  const [state, submitAction, isPending] = useActionState(onFormPostAction, { message: '' });
  const formRef = useRef<HTMLFormElement>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      phoneNo: '',
      content: '',
    },
  });

  useEffect(() => {
    reset(state?.fields);
  }, [state?.fields, reset]);

  const onSubmit: SubmitHandler<ContactFormValues> = (data, e) => {
    e?.preventDefault();
    formRef.current?.submit();
  };

  console.log({ state, isPending, current: formRef.current });

  return (
    <Fieldset>
      {state?.issues && (
        <div className="text-red-500">
          <ul>
            {state.issues.map(issue => (
              <li key={issue.path} className="flex gap-1">
                {issue.message}
              </li>
            ))}
          </ul>
        </div>
      )}
      <form
        ref={formRef}
        className="flex flex-col"
        action={submitAction}
        // onSubmit={handleSubmit(onSubmit)}
      >
        <TextInputField name={'name'} placeholder="이름" register={register} errors={errors} />
        <TextInputField
          name={'email'}
          placeholder="이메일 주소"
          register={register}
          errors={errors}
        />
        <TextInputField
          name={'phoneNo'}
          placeholder="휴대폰 번호 (선택)"
          register={register}
          errors={errors}
        />
        <Textarea
          {...register('content')}
          placeholder="문의 내용"
          className="textarea textarea-bordered w-full max-w-5xl h-96 my-2 text-base"
        />
        <Button type="submit" className="btn btn-primary my-4 max-w-xl text-2xl">
          전송
        </Button>
      </form>
    </Fieldset>
  );
}

export default ContactForm;
