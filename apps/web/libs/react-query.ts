import { CategoryId } from '@/types/supabase';

import { getPosts } from './supabase';

export async function getPostsQuery({
  categoryId,
  columns,
}: {
  categoryId?: CategoryId;
  columns?: string[];
}) {
  const posts = await getPosts({ categoryId, columns });
  return posts;
}
