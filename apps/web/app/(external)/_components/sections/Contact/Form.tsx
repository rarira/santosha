'use client';

import { Button, Fieldset, Textarea } from '@headlessui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useActionState, useRef } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import * as z from 'zod';

import ko from '@/i18n/ko';
import { phoneRegex } from '@/libs/constant';

import { onFormPostAction } from './actions';
import TextInputField from './TextInputField';

export const contactFormSchema = z.object({
  name: z.string().min(1, { message: ko.form.required }),
  email: z.string().email(ko.form.emailError).min(1, { message: ko.form.required }),
  phoneNo: z.string().regex(phoneRegex, { message: ko.form.phoneError }).or(z.literal('')),
  content: z.string().min(1, { message: ko.form.required }),
});

function ContactForm(): JSX.Element {
  const [state, submitAction, isPending] = useActionState(onFormPostAction, { message: '' });
  const formRef = useRef<HTMLFormElement>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(contactFormSchema) });

  const onSubmit: SubmitHandler<FieldValues> = (data, e) => {
    e?.preventDefault();
    formRef.current?.submit();
  };
  console.log({ errors, isPending, submitAction });

  return (
    <Fieldset>
      <form
        ref={formRef}
        className="flex flex-col"
        action={submitAction}
        onSubmit={handleSubmit(onSubmit)}
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
