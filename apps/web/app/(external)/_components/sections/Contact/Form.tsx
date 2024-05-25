'use client';

import { Button, Field, Input, Textarea } from '@headlessui/react';
import InputError from '@repo/ui/InputError';
import { useActionState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import isEmail from 'validator/lib/isEmail';

import ko from '@/i18n/ko';

import { onFormPostAction } from './actions';

export interface FormValues {
  name: string;
  email: string;
  phoneNo?: string;
  content: string;
}

function ContactForm() {
  const [state, submitAction, isPending] = useActionState(onFormPostAction, { message: '' });
  const formRef = useRef<HTMLFormElement>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  // const onSubmit: SubmitHandler<FormValues> = data => {
  //   console.log('onSubmit', data);
  //   formRef.current?.submit();
  // };

  console.log({ errors, isPending, submitAction });

  return (
    <form
      ref={formRef}
      className="flex flex-col"
      action={submitAction}
      onSubmit={handleSubmit((_data, e) => {
        e?.preventDefault();
        formRef.current?.submit();
      })}
    >
      <Input
        {...register('name', { required: true, maxLength: 20 })}
        placeholder="이름"
        className="input input-bordered w-full max-w-xs my-2 "
      />
      <Field className="form-control w-full max-w-xs">
        <Input
          {...register('email', {
            required: true,
            validate: value => isEmail(value) || ko.form.emailError,
          })}
          placeholder="이메일주소"
          className={`input input-bordered w-full max-w-xs my-2 ${errors.email ? 'input-error' : ''}`}
        />
        <InputError errorMessage={errors.email?.message} />
      </Field>
      <Input
        {...register('phoneNo')}
        placeholder="휴대폰번호"
        className="input input-bordered w-full max-w-xs my-2"
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
  );
}

export default ContactForm;
