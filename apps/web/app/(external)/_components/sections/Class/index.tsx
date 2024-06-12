import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';

import { getPostsQuery } from '@/libs/react-query';
import { CategoryId } from '@/types/supabase';

import ClassList from './List';
import SectionContainer from '../_components/SectionContainer';
import SectionTitle from '../_components/SectionTitle';

export const queryFn = () =>
  getPostsQuery({
    categoryId: CategoryId.Yoga,
    columns: ['id', 'title', 'teaser', 'image', 'extra_info'],
  });

async function ClassSection(): Promise<JSX.Element> {
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
