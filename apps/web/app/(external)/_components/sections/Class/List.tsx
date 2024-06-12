'use client';

import { useSuspenseQuery } from '@tanstack/react-query';

import ClassItemcard from './ItemCard';

import { queryFn } from '.';

function ClassList(): JSX.Element | null {
  const { data: posts, error } = useSuspenseQuery({ queryKey: ['posts'], queryFn });

  if (error) return null;

  return (
    <div className="grid grid-cols-2 gap-4">
      {posts.map((post, index) => (
        <ClassItemcard key={index} post={post} />
      ))}
    </div>
  );
}

export default ClassList;
