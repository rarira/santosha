import { getPosts } from '@/libs/supabase';

import ClassItemcard from './item-card';

async function ClassList(): Promise<React.JSX.Element> {
  const posts = await getPosts();

  return (
    <div className="grid grid-cols-2 gap-4">
      {posts.map((post, index) => (
        <ClassItemcard key={index} post={post} />
      ))}
    </div>
  );
}

export default ClassList;
