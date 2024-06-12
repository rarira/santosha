import util from '@/libs/util';
import { PostResult } from '@/types/supabase';

import ScoreIndicator from './ScoreIndicator';
import ThumbnailImage from './ThumbnailImage';

interface ClassItemcardProps {
  post: PostResult;
}

function ClassItemcard({ post }: ClassItemcardProps): React.JSX.Element {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full bg-white">
      <h4 className="text-xl font-semibold text-center">{post.title}</h4>
      <div className="flex flex-row items-center justify-center w-full h-full p-4 space-y-4 bg-white">
        <div className="w-1/2 relative ">
          <ThumbnailImage
            imageFullPath={post.image.fullPath}
            alt={`${post.title}-thumbnail-image`}
            className="rounded-lg"
          />
          <div className="flex absolute bottom-0 left-0 right-0 w-full h-full bg-white bg-opacity-75 p-4 items-center justify-center">
            <p className="text-sm font-semibold">{post.teaser}</p>
          </div>
        </div>
        <div className="w-1/2 px-4">
          {Object.entries(post.extra_info).map(([key, value]) => {
            return (
              <div key={key} className="flex flex-row justify-between m-1">
                <h6>{util.getClassScoreCriteriaName(key)}</h6>
                <ScoreIndicator fullScore={3} score={value} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ClassItemcard;
