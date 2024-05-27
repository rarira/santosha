import { z } from 'zod';

import ko from '@/i18n/ko';
import { phoneRegex } from '@/libs/constant';

export const contactFormSchema = z.object({
  name: z.string().min(1, { message: ko.form.required }),
  email: z.string().email(ko.form.emailError).min(1, { message: ko.form.required }),
  phoneNo: z.string().regex(phoneRegex, { message: ko.form.phoneError }).or(z.literal('')),
  content: z.string().min(1, { message: ko.form.required }),
});
