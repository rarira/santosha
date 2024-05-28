'use server';

import ko from '@/i18n/ko';

import { contactFormSchema } from './formSchema';

export type FormState = {
  message: string;
  fields?: Record<string, string>;
  issues?: { path: string; message: string }[];
};

export async function onFormPostAction(previousState: { message: string }, data: FormData) {
  const formData = Object.fromEntries(data);
  const parsed = contactFormSchema.safeParse(formData);

  if (!parsed.success) {
    const fields: Record<string, string> = {};
    for (const key of Object.keys(formData)) {
      fields[key] = formData[key]!.toString();
    }

    return {
      message: ko.form.serverInvalidate,
      fields,
      issues: parsed.error.issues.map((issue, index) => ({
        path: issue.path[index],
        message: issue.message,
      })),
    };
  }

  return { message: 'Successful' };
}
