'use client';

import { useForm } from 'react-hook-form';

export interface FormValues {
  name: string;
  email: string;
  phoneNo?: string;
  content: string;
}
function ContactForm() {
  const { register } = useForm<FormValues>();
  return (
    <form className="flex flex-col">
      <input {...register('name')} placeholder="이름" />
      <input {...register('email')} placeholder="이메일주소" />
      <input {...register('phoneNo')} placeholder="휴대폰번호" />
      <textarea {...register('content')} placeholder="문의 내용" />
      <button type="submit">전송</button>
    </form>
  );
}

export default ContactForm;
