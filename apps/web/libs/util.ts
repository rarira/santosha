import { clsx, type ClassValue } from 'clsx';
import merge from 'lodash/merge';
import { twMerge } from 'tailwind-merge';

export default {
  getEnv: ((env: Record<string, any>) => {
    return function (key?: string) {
      if (!key) return env;
      return env[key];
    };
  })({
    SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
    SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  }),

  cn: (...inputs: ClassValue[]) => {
    return twMerge(clsx(inputs));
  },
  merge,
};
export const getEnv = ((env: Record<string, any>) => {
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

// Helper function to get scrollbar width
function getScrollbarWidth() {
  // Create a temporary div container
  const container = document.createElement('div');
  // Append the container to the body
  document.body.appendChild(container);
  // Force scrollbar to appear
  container.style.overflow = 'scroll';
  // Add an inner div
  const inner = document.createElement('div');
  container.appendChild(inner);
  // Calculate the width difference between container and inner div
  const scrollbarWidth = container.offsetWidth - inner.offsetWidth;
  console.log({ scrollbarWidth });
  // Remove the container from the body
  document.body.removeChild(container);
  return scrollbarWidth;
}

// Function to lock the body scroll and apply padding
export function lockBodyScroll() {
  const scrollbarWidth = getScrollbarWidth();
  console.log({ scrollbarWidth });
  document.body.style.overflow = 'hidden';
  document.body.style.paddingRight = `${scrollbarWidth}px`;
}

// Function to unlock the body scroll and remove padding
export function unlockBodyScroll() {
  document.body.style.overflow = '';
  document.body.style.paddingRight = '';
}
