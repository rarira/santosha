import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';

import { getPostsQuery } from '@/libs/react-query';
import { getCategory } from '@/libs/supabase';

import ClassList from './List';
import SectionContainer from '../_components/section-container';
import SectionTitle from '../_components/section-title';

export const queryFn = async () => {
  const { id: categoryId } = await getCategory('요가');
  return await getPostsQuery({
    categoryId,
    columns: ['id', 'title', 'teaser', 'image', 'extra_info'],
  });
};
async function ClassSection(): Promise<React.JSX.Element> {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['posts'],
    queryFn,
  });

  return (
    <SectionContainer sectionName="class">
      <SectionTitle title="요가 수업 종류" subtitle="다양한 종류의 요가를 함께 할 수 있어요" />
      <HydrationBoundary state={dehydrate(queryClient)}>
        <ClassList />
      </HydrationBoundary>
    </SectionContainer>
  );
}

export default ClassSection;
