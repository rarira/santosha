import { getPosts } from './supabase';

export async function getPostsQuery({
  categoryId,
  columns,
}: {
  categoryId?: number;
  columns?: string[];
}) {
  const posts = await getPosts({ categoryId, columns });

  return posts;
}
