import { Card } from '@ui/card';

import U from '@/libs/util';
import { Tables } from '@/types/supabase';

import ClassScoreIndicator from './score-indicator';
import ClassThumbnailImage from './thumbnail-Image';

interface ClassItemcardProps {
  post: Tables<'posts'>;
}

function ClassItemcard({ post }: ClassItemcardProps): React.JSX.Element {
  return (
    <Card className="group overflow-hidden border-0 bg-gradient-to-br from-yoga-sand/30 to-yoga-cream/50 backdrop-blur-sm shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
      <div className="flex flex-col h-full">
        {/* Image Section with Teaser Overlay */}
        <div className="relative overflow-hidden">
          {!!post.image && (
            <ClassThumbnailImage
              imageFullPath={(post.image as Record<string, unknown>)['fullPath']}
              alt={`${post.title}-thumbnail-image`}
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          )}
          {/* Teaser Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex items-end p-6">
            <p className="text-white text-sm font-medium leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {post.teaser}
            </p>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6 flex flex-col flex-grow">
          <h4 className="text-2xl font-semibold text-yoga-terracotta mb-6 text-center">
            {post.title}
          </h4>

          <div className="space-y-4 mt-auto">
            {Object.entries(post?.extra_info ?? []).map(([key, value]) => {
              return (
                <div
                  key={key}
                  className="flex flex-row items-center justify-between py-2 border-b border-yoga-sand/30 last:border-0"
                >
                  <h6 className="text-sm font-medium text-yoga-sage">
                    {U.getClassScoreCriteriaName(key)}
                  </h6>
                  <ClassScoreIndicator fullScore={3} score={value} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Card>
  );
}

export default ClassItemcard;
