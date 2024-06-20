import { Card } from '@repo/ui/components/ui/card';

import util from '@/libs/util';
import { Tables } from '@/types/supabase';

import ScoreIndicator from './ScoreIndicator';
import ThumbnailImage from './ThumbnailImage';

interface ClassItemcardProps {
  post: Tables<'posts'>;
}

function ClassItemcard({ post }: ClassItemcardProps): React.JSX.Element {
  return (
    <Card className="flex flex-col p-4 items-center justify-center w-full h-full">
      <h4 className="text-xl font-semibold text-center mb-3">{post.title}</h4>
      <div className="flex flex-col md:flex-row items-center justify-center w-full h-full space-y-4">
        <div className="w-full md:w-1/2 relative ">
          {!!post.image && (
            <ThumbnailImage
              imageFullPath={(post.image as Record<string, unknown>)['fullPath']}
              alt={`${post.title}-thumbnail-image`}
              className="rounded-lg"
            />
          )}
          <p className="flex absolute bottom-0 left-0 right-0 w-full h-full bg-opacity-75 p-4 items-center justify-center text-sm font-semibold">
            {post.teaser}
          </p>
        </div>
        <div className="w-full md:w-1/2 px-4">
          {Object.entries(post?.extra_info ?? []).map(([key, value]) => {
            return (
              <div key={key} className="flex flex-row justify-between m-1">
                <h6>{util.getClassScoreCriteriaName(key)}</h6>
                <ScoreIndicator fullScore={3} score={value} />
              </div>
            );
          })}
        </div>
      </div>
    </Card>
  );
}

export default ClassItemcard;
