import { clsx, type ClassValue } from 'clsx';
import merge from 'lodash/merge';
import { twMerge } from 'tailwind-merge';

const getEnv = ((env: Record<string, any>) => {
  return function (key?: string) {
    if (!key) return env;
    return env[key];
  };
})({
  SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
  SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default {
  getEnv,
  merge,
  cn,
};
