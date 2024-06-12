import { PostgrestError, createClient } from '@supabase/supabase-js';

import Util from '@/libs/util';
import { SupabaseTransformOptions } from '@/types/supabase';
import { ContactFormValues } from 'app/(external)/_components/Sections/Contact/formSchema';

export const { SUPABASE_URL, SUPABASE_ANON_KEY } = Util.getEnv();
export const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const DEFAULT_EXPIRES_IN = 60 * 5; // 5 minutes

export function splitBucketFullPath(fullPath: string) {
  const [bucket, ...path] = fullPath.split('/');
  if (!bucket) throw new Error('Invalid fullPath');

  return { bucket, path: path.join('/') };
}

export async function createSignedUrl({
  bucket,
  filePath,
  expiresIn = DEFAULT_EXPIRES_IN,
  options,
}: {
  bucket: string;
  filePath: string;
  expiresIn?: number;
  options?: { download?: string | boolean; transform?: SupabaseTransformOptions };
}) {
  const { data, error } = await supabaseClient.storage
    .from(bucket)
    .createSignedUrl(filePath, expiresIn, options);

  if (error) {
    throw error;
  }

  return data;
}

export async function createContact(formData: ContactFormValues): Promise<PostgrestError | null> {
  const { error } = await supabaseClient.from('contacts').insert({
    ...formData,
    phoneNo: undefined,
    phone_no: formData.phoneNo?.replace(/-/g, ''),
  });

  return error;
}
