import { Enums } from '@/types/supabase';

//NOTE: CategoryExtraInfo가 추가될 때마다 작업해 줘야 함
const CategoryExtraInfo: Enums<'CategoryExtraInfo'>[] = ['ClassScore'] as const;

export const categoryExtraInfo = CategoryExtraInfo.map((value, index) => ({
  id: index,
  name: value,
}));
