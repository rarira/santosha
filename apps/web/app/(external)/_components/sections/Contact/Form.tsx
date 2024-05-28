'use client';

import { Button, Fieldset, Textarea } from '@headlessui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useActionState, useEffect, useRef } from 'react';
import { Path, SubmitHandler, useForm } from 'react-hook-form';

import { onFormPostAction } from './_actions';
import { contactFormSchema, ContactFormValues } from './formSchema';
import TextInputField from './TextInputField';

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
    if (!state?.fields) return;
    reset(state?.fields);
  }, [state?.fields, reset]);

  const onSubmit: SubmitHandler<ContactFormValues> = (data, e) => {
    e?.preventDefault();
    formRef.current?.submit();
  };

  const getErrorMessage = (name: Path<ContactFormValues>) => {
    return errors[name]?.message || state?.issues?.find(issue => issue.path === name)?.message;
  };

  return (
    <Fieldset>
      {state?.issues && <div className="text-red-500">{state.message}</div>}
      <form
        ref={formRef}
        className="flex flex-col"
        action={submitAction}
        // onSubmit={handleSubmit(onSubmit)}
      >
        <TextInputField
          name={'name'}
          placeholder="이름"
          register={register}
          errorMessage={getErrorMessage('name')}
        />
        <TextInputField
          name={'email'}
          placeholder="이메일 주소"
          register={register}
          errorMessage={getErrorMessage('email')}
        />
        <TextInputField
          name={'phoneNo'}
          placeholder="휴대폰 번호 (선택)"
          register={register}
          errorMessage={getErrorMessage('phoneNo')}
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
