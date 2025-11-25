import { z } from 'zod';

import ko from '@/i18n/ko';
import { phoneRegex } from '@/libs/constant';

// Zod v4 schema with Korean phone number validation
export const contactFormSchema = z.object({
  name: z.string().min(1, ko.form.required),
  email: z.string().min(1, ko.form.required).email(ko.form.emailError),
  phoneNo: z.string().min(1, ko.form.required).regex(phoneRegex, ko.form.phoneError),
  content: z
    .string()
    .min(1, ko.form.required)
    .min(30, ko.form.contentMinError)
    .max(100, ko.form.contentMaxError),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
