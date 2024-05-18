import { CategoryExtraInfo } from '@/types/supabase';

export const categoryExtraInfo = Object.entries(CategoryExtraInfo);

export const getCategoryExtraInfoChoices = () => {
  return Object.entries(CategoryExtraInfo).map(([key, value]) => ({ id: key, name: value }));
};
